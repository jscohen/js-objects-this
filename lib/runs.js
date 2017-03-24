'use strict';

const mcFaceRuns = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs: [
    {
      date: '2015-05-25 15:00',
      distance: 1200,
      timeTaken: 600,
    },
    {
      date: '2015-05-25 15:00',
      distance: 1400,
      timeTaken: 800,
    },
  ],
  totalDistance: function () {
    // Define auxiliary variable for values
    const runs = this.runs
    let sum = 0

    // Loop through runs array and set time taken to sum
    for (let i = 0; i < runs.length; i++) {
      sum += runs[i]['distance']
    }

    return sum
  },
  longestRun: function () {
    const runs = this.runs
    let longest = 0

    for(let i = 0; i < runs.length; i++) {
      if(runs[i]['distance'] > longest) {
        longest = runs[i]['distance']
      }
    }

    return longest
  },
  averageSpeed: function () {
    let totalTime = 0
    const runs = this.runs

    for (let i = 0; i < runs.length; i++){
      totalTime += runs[i]['timeTaken']
    }
    return this.totalDistance() / totalTime
  },
};

module.exports = mcFaceRuns;

console.log(mcFaceRuns.totalDistance())
console.log(mcFaceRuns.longestRun())
console.log(mcFaceRuns.averageSpeed())
