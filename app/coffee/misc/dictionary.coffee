module.exports = class Dictionary

  constructor: () ->
    aristotle.dictionary = @
    @terms =
      "cadet"             :   'Cadet'
      "cadet-first-class" :   'Cadet First Class'
      "technical-cadet"   :   "Technical Cadet"
      "cyber-cadet"       :   "Cyber Cadet"
      background_probe    :   'The Background Probe'
      risk_detector       :   'The Risk Detector'
      voight_kampff       :   'Voight-Kampff Assessor'
      double_deuce        :   'Double Deuce Pulverizer'
      mr_fusion           :   'Mr. Fusion'
      dematerializer      :   'The De-Materializer'
      burninator          :   'The Burninator'
      great_wall          :   'The Great Wall'
      gated               :   'Gated Community'
      "generation-plant"  :   'Generation Plant'
      substation          :   'Substation'
      "control-center"    :   'Control Center'
      brit_beacon         :   'Brit Beacon, Scholar. Gentleman. Bot Hunter.'
      speeder             :   'Speeder With Tow Cables'
      orbital_strike      :   'Orbital Kinetic Strike'
      "card-scanner"      :   'Card Guard XT'
      "hal-scanner"       :   'HAL 9000 Eye Scanner'
      "kraken-scanner"    :   'Watery Grave Kraken Sensor'
      "duct-tape"         :   'Port Duct Tape'
      "kragle"            :   'The Kragle'
      "umpire"            :   'Port Umpire'
      log_book            :   'Guest Log Book'
      escort_leash        :   '"PSP Buddy", Escort Leash'
      tractor_beam        :   'Visitor Tractor Beam'

  get : (term) ->
    if @terms[term]? then return @terms[term]
    aristotle.throw "Tried to use an unknown term: `#{term}`"

