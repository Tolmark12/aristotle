require "time-require"

autoprefixer = require 'gulp-autoprefixer'
bower        = require 'gulp-bower'
bump         = require 'gulp-bump'
coffee       = require 'gulp-coffee'
coffeeify    = require 'gulp-coffeeify'
concat       = require 'gulp-concat'
connect      = require 'connect'
foreach      = require 'gulp-foreach'
fs           = require 'fs'
git          = require 'gulp-git'
gulp         = require 'gulp'
gutil        = require 'gulp-util'
http         = require 'http'
jade         = require 'gulp-jade'
livereload   = require 'gulp-livereload'
minifyCss    = require 'gulp-minify-css'
minifyHtml   = require 'gulp-minify-html'
nock         = require 'nock'
open         = require "gulp-open"
plumber      = require 'gulp-plumber'
rimraf       = require 'rimraf'
sass         = require 'gulp-sass'
shadow       = require 'gulp-shadow-library'
uglify       = require 'gulp-uglify'
usemin       = require 'gulp-usemin'
watch        = require 'gulp-watch'
wrap         = require 'gulp-wrap'

yaml         = require('gulp-yaml')
yamlinc      = require('gulp-yaml-include')
argv         = require('yargs').argv

# Paths to source files

jadeStagePath     = 'stage/*.jade'
jadePath          = 'app/jade/**/*.jade'
mainJsFile        = './app/coffee/aristotle.coffee'
mainStageJsFile   = './stage/coffee/master.coffee'
cssPath           = 'app/scss/**/*.scss'
cssStagePath      = 'stage/stage.scss'
coffeePath        = 'app/coffee/**/*.coffee'
coffeeStagePath   = 'stage/**/*.coffee'
assetPath         = 'app/images/**/*'
svgPath           = 'app/assets/compiled/*.svg'
fontPath          = 'app/fonts/**/*.@(ttf|svg|eot|ttf|woff|woff2)'
episodeScriptPath = ['episodes/**/*.yml','episodes/**/*.yaml']
episodeAssetPath  = ['episodes/**/*.!(yml|yaml)','!**/*/sounds/**/*.mp3' ]
localAssetPath    = 'local/**/*'
randomJs          = 'stage/*.coffee'
htaccessPath      = 'stage/.htaccess'

# If run with --dev, use less files to speeeed it up :-)
if argv.dev
  # coffeeStagePath   = 'stage/**/*.koffee'
  episodeScriptPath = ['episodes-dev/**/*.yml','episodes-dev/**/*.yaml']
  episodeAssetPath  = 'episodes-dev/**/*.!(yml|yaml)'
  localAssetPath    = 'local-dev/**/*'

parseSVG = (cb)->
  gulp.src svgPath
    .pipe shadow {
      cssDest:'./css/'
      jsDest:'./js/'
      cssNamespace:''
      cssRegex:[
        { pattern:/Lato-Regular/g, replace:"Lato" }
        { pattern:/font-family:'Lato-Italic';/g, replace:"font-family:'Lato'; font-style:italic;" }
      ]
    }
    .pipe gulp.dest('./server/')
    .on('end', cb)

htmlStage = (cb)->
  gulp.src jadeStagePath
    .pipe jade()
    .pipe gulp.dest('./server/')
    .on('end', cb)

html = (cb)->
  gulp.src( jadePath )
    .pipe jade(client: true)
    .pipe wrap(   "jadeTemplate['<%= file.relative.split('.')[0] %>'] = <%= file.contents %>;\n" )
    .pipe concat( 'jade-templates.js')
    .pipe wrap(   "jadeTemplate = {};\n<%= file.contents %>" )
    .pipe gulp.dest('./server/js')
    .on('end', cb)

css = (cb)->
  gulp.src( cssPath )
    .pipe sass({errLogToConsole: true})
    .pipe autoprefixer( {browsers: ['last 1 version'], cascade: false} )
    .pipe gulp.dest('./server/css')
    .on('end', cb)

cssStage = (cb)->
  gulp.src( cssStagePath )
    .pipe sass({errLogToConsole: true})
    .pipe autoprefixer( {browsers: ['last 1 version'], cascade: false} )
    .pipe gulp.dest('./server/stage/css')
    .on('end', cb)

js = (cb)->
  gulp.src( mainJsFile )
    .pipe plumber()
    .pipe coffeeify({options: { debug: true, paths: [__dirname + '/node_modules', __dirname + '/app/coffee/'] } })
    .pipe gulp.dest('server/js/')
    .on('end', cb)

jsStage = (cb)->
  gulp.src mainStageJsFile
    .pipe plumber()
    .pipe coffeeify({options: { debug: true, paths: [__dirname + '/node_modules', __dirname + '/stage/coffee/'] } })
    # .pipe coffee( bare: true ).on('error', gutil.log).on( 'error', gutil.beep )
    .pipe gulp.dest('server/stage/js')
    .on('end', cb)

if argv.load
  jsStage = (cb)->
    gulp.src './stage/*.coffee'
      .pipe plumber()
      .pipe coffee( bare: true ).on('error', gutil.log).on( 'error', gutil.beep )
      .pipe gulp.dest('server/stage/js')
      .on('end', cb)

##############################
# TODO: I should move all the copy assets methods into on
# method that passes in the src variable...
copyAssets = (destination, cb) ->
  gulp.src assetPath
    .pipe gulp.dest(destination)
    .on('end', cb)

fonts = (destination, cb) ->
  gulp.src fontPath
    .pipe gulp.dest(destination)
    .on('end', cb)

episodeAssets = (destination, cb)->
  gulp.src episodeAssetPath
    .pipe gulp.dest(destination)
    .on('end', cb)

localAssets = (destination, cb)->
  gulp.src localAssetPath
    .pipe gulp.dest(destination)
    .on('end', cb)

copyHtaccess = (destination, cb)->
  gulp.src htaccessPath
    .pipe gulp.dest(destination)
    .on('end', cb)

##############################

episodeScript = (destination, cb) ->
  gulp.src episodeScriptPath
    .pipe yamlinc()
    .pipe yaml()
    .pipe gulp.dest(destination)
    .on('end', cb)


copyBowerLibs = ()->
  bower().pipe gulp.dest('./server/bower-libs/')

copyFilesToBuild = ->
  gulp.src( './server/js/*' ).pipe gulp.dest('./rel/')
  gulp.src( './server/css/main.css' ).pipe gulp.dest('./rel/')

pushViaGit = ->
  # Start out by reading the version number for commit msg, then git push, etc..
  fs.readFile './bower.json', 'utf8', (err, data) =>
    regex   = /version"\s*:\s*"(.+)"/
    version = data.match(regex)[1]
    gulp.src('./')
      .pipe git.add()
      .pipe git.commit("BUILD - #{version}")
      .pipe git.push 'origin', 'master', (err)=> console.log( err)

bumpBowerVersion = ->
  gulp.src('./bower.json')
    .pipe bump( {type:'patch'} )
    .pipe(gulp.dest('./'));

minifyAndJoin = () ->
  gulp.src('./server/*.html').pipe foreach((stream, file) ->
    stream.pipe(
      usemin
        css : [ minifyCss(), 'concat']
        html: [ minifyHtml({empty: true})]
        js  : [ uglify()]
        # js  : [ ]
    ).pipe gulp.dest('rel/')
  )



# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

# Livereload Server
server = ->
  port      = 5654
  hostname  = null # allow to connect from anywhere
  base      = 'server'
  directory = 'server'
  app = connect()
    .use( connect.static(base) )
    .use( connect.directory(directory) )

  http.createServer(app).listen port, hostname
  console.log "SERVER LISTENING -> localhost:#{port}"

# Open in the browser
launch = ->
  gulp.src("./stage/index.jade") # An actual file must be specified or gulp will overlook the task.
    .pipe(open("",
      url: "http://localhost:5654/index.html?local=true&dev=true&sudo=true&episode=1",
      app: "google chrome"
    ))

compileFiles = (doWatch=false, cb) ->
  count       = 0
  onComplete = ()=> if ++count == ar.length then cb()
  ar         = [
    {meth:js,            glob:coffeePath}
    {meth:css,           glob:cssPath}
    {meth:html,          glob:jadePath}
    {meth:jsStage,       glob:coffeeStagePath}
    {meth:cssStage,      glob:cssStagePath}
    {meth:htmlStage,     glob:jadeStagePath}
    {meth:parseSVG,      glob:svgPath}
    {meth:localAssets,   glob:localAssetPath,     params:['server/local', onComplete]}
    {meth:episodeAssets, glob:episodeAssetPath,   params:['server/episodes', onComplete]}
    {meth:episodeScript, glob:episodeScriptPath,  params:['server/episodes', onComplete] }
    {meth:fonts,         glob:fontPath,           params:['server/assets/fonts', onComplete], dontWatch:true }
    {meth:copyAssets,    glob:assetPath,          params:['server/assets/', onComplete]}
    {meth:copyHtaccess,  glob:htaccessPath,       params:['server/', onComplete]}
  ]

  createWatcher = (item, params)-> watch( { glob:item.glob }, => item.meth.apply(null, params).pipe( livereload() ) )

  for item in ar
    params = if item.params? then item.params else [onComplete]
    if doWatch && !item.dontWatch
      createWatcher(item, params)
    else
      item.meth.apply null, params

launchAPIsimulator = -> require('./APISimulator.coffee')

# ----------- MAIN ----------- #

gulp.task 'nock',                   ()   -> #launchAPIsimulator()
gulp.task 'clean',  ['nock'],       (cb) -> rimraf './server', cb
gulp.task 'bowerLibs', ['clean'],   ()   -> copyBowerLibs()
gulp.task 'compile', ['bowerLibs'], (cb) -> compileFiles(true, cb)
gulp.task 'server', ['compile'],    (cb) -> server(); launch();
gulp.task 'default', ['server']

# ----------- BUILD (rel) ----------- #

gulp.task 'rel:clean',                                  (cb)  -> rimraf './rel', cb
gulp.task 'bumpVersion',                                ()    -> bumpBowerVersion()
gulp.task 'copyFonts', ['bowerLibs'],                   ()    -> fonts('rel/assets/fonts', ->)
gulp.task 'copyEpisodeScripts', ['copyFonts'],          ()    -> episodeScript('rel/episodes', ->)
gulp.task 'copyEpisodeAssets', ['copyEpisodeScripts'],  ()    -> episodeAssets('rel/episodes', ->)
gulp.task 'copyLocalAssets', ['copyEpisodeAssets'],     ()    -> localAssets('rel/local', ->)
gulp.task 'copyHtaccess', ['copyLocalAssets'],          ()    -> copyHtaccess('rel/', ->)
gulp.task 'copyStatics', ['copyHtaccess'],              ()    -> copyAssets('rel/assets', ->)
gulp.task 'releaseCompile', ['copyStatics'],            (cb)  -> compileFiles(false, cb)
gulp.task 'minify',['releaseCompile'],                  ()    -> minifyAndJoin()
gulp.task 'rel', ['rel:clean', 'bumpVersion', 'minify'],      -> #pushViaGit()

# ----------- Only Build JS ----------- #

gulp.task 'js', -> minifyAndJoin()
