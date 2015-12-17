module.exports = class Dictionary

  constructor: () ->
    aristotle.dictionary = @
    @terms =
      "cadet"             : 'Cadet'
      "cadet-first-class" : 'Cadet First Class'
      "technical-cadet"   : "Technical Cadet"
      "cyber-cadet"       : "Cyber Cadet"

  get : (term) ->
    if @terms[term]? then return @terms[term]
    aristotle.throw "Tried to use an unknown term: `#{term}`"

