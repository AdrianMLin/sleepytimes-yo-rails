'use strict'

angular.module('angular')
  .service('sleepisodes', function sleepisodes(){
    var self = this;

    self.dataArray = [
      {
        'created_at': "2015-02-24 16:35:18",
        'start_sleepiness': 1100, //will need to fix this
        'end_sleepiness': 1300,
        'hours_slept_last_night': 8,
        'location': 'library',
        'reason_sleepiness': 'studying',
        'reason_waking': 'drink'
      },
      {
        'created_at': "2015-02-27 12:35:18",
        'start_sleepiness': 1400,
        'end_sleepiness': 1700,
        'hours_slept_last_night': 5,
        'location': 'dorm',
        'reason_sleepiness': 'watching tv',
        'reason_waking': 'none'
      },
      {
        'created_at': "2015-02-28 11:35:18",
        'start_sleepiness': 1400,
        'end_sleepiness': 1700,
        'hours_slept_last_night': 5,
        'location': 'dorm',
        'reason_sleepiness': 'watching tv',
        'reason_waking': 'none'
      }
    ];

  })

  //Entry Controller + Directive

  .directive('entry', function(){
    return {
      templateUrl: 'app/new-entry/entry.html',
      restrict: 'E',
      controller: 'EntryController',
      controllerAs: 'e',
      bindToController: true,
      scope: {
        entryObject: '='
      }
    }
  })
	.controller('EntryController', function(){
    // probably need some ui interaction stuff
	})


  //New Entry Controller
  .controller('NewEntryController', function(sleepisodes, $http){
    var self = this;

    // takes data from service, will populate screen
    self.todaysEntries = sleepisodes.dataArray;

    // creates new entry object
    self.newEntry = {
      'start_sleepiness': 0,
      'end_sleepiness': 0,
      'hours_slept_last_night': 0,
      'location': '',
      'reason_sleepiness': '',
      'reason_waking': ''
    };
    //pushes it to service
    self.submitNewEntry = function(){
      sleepisodes.dataArray.push( self.newEntry ); 
      $http(
        {
          method:'POST', 
          url:'/sleepisodes', 
          params: {
            start_sleepiness: self.newEntry.start_sleepiness,
            end_sleepiness: self.newEntry.end_sleepiness,
            hours_slept_last_night: self.newEntry.hours_slept_last_night,
            location: self.newEntry.location,
            reason_sleepiness: self.newEntry.reason_sleepiness,
            reason_waking: self.newEntry.reason_waking
          }
        })
      ; 

    }
  });