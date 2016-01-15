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

    @categories =
      "Generation Plant"                             : "Facility Type"
      "Substation"                                   : "Facility Type"
      "Control Center"                               : "Facility Type"
      'The Background Probe'                         : 'Access Control System'
      'The Risk Detector'                            : 'Access Control System'
      'Voight-Kampff Assessor'                       : 'Access Control System'
      'Double Deuce Pulverizer'                      : 'Asset Change Tool'
      'Mr. Fusion'                                   : 'Asset Change Tool'
      'The De-Materializer'                          : 'Asset Change Tool'
      'The Burninator'                               : 'Electronic Access Control System'
      'The Great Wall'                               : 'Electronic Access Control System'
      'Gated Community'                              : 'Electronic Access Control System'
      'Brit Beacon, Scholar. Gentleman. Bot Hunter.' : 'NERC Defense'
      'Speeder With Tow Cables'                      : 'NERC Defense'
      'Orbital Kinetic Strike'                       : 'NERC Defense'
      'Card Guard XT'                                : 'Physical Access Control System'
      'HAL 9000 Eye Scanner'                         : 'Physical Access Control System'
      'Watery Grave Kraken Sensor'                   : 'Physical Access Control System'
      'Port Duct Tape'                               : 'Physical Port Security'
      'The Kragle'                                   : 'Physical Port Security'
      'Port Umpire'                                  : 'Physical Port Security'
      'Guest Log Book'                               : 'Visitor Escort Procedure'
      '"PSP Buddy", Escort Leash'                    : 'Visitor Escort Procedure'
      'Visitor Tractor Beam'                         : 'Visitor Escort Procedure'




  getCategory : (term) ->
    if @categories[term]? then return @categories[term]
    aristotle.throw "Tried to use an unknown category: `#{term}`"



  get : (term) ->
    if @terms[term]? then return @terms[term]
    aristotle.throw "Tried to use an unknown term: `#{term}`"

