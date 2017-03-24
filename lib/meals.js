'use strict';

const user = {
  name: 'Jon Cohen',
  bornOn: '1985-04-26',
  calorieTarget: 2000,
  meals: [
    {
      title: 'Breakfast',
      date: '2017-03-22',
      description: 'Cereal',
      calories: 500.3
    },
    {
      title: 'Lunch',
      date: '2017-03-22',
      description: 'Shepherd\'s Pie',
      calories: 1000.2
    },
    {
      title: 'Dinner',
      date: '2017-03-22',
      description: 'Sushi',
      calories: 995.9
    },
    {
      title: 'Breakfast',
      date: '2017-03-21',
      description: 'Cereal',
      calories: 500.2
    },
    {
      title: 'Lunch',
      date: '2017-03-21',
      descrition: 'Sandwich',
      calories: 800
    },
    {
      title: 'Dinner',
      date: '2017-03-21',
      description: 'Steak',
      calories: 1100
    }
  ],

  caloriesEatenOn: function(date) {
    const meals = this.meals
    let calories = 0

    for(let i = 0; i < meals.length; i++) {
      if(meals[i].date === date) {
        calories += meals[i].calories
      }
    }

    return Math.floor(calories)
  },

  avgDailyCalories: function() {
    const meals = this.meals
    let days = 1
    let totalCalories = 0
    let firstDay = meals[0].date

    for(let i = 0; i < meals.length; i++) {
      if(meals[i].date !== firstDay) {
        firstDay = meals[i].date
        days += 1
      } else {
        totalCalories += meals[i].calories
      }
    }

    return Math.floor(totalCalories / days)
  },

  onTrack: function() {
    if(this.avgDailyCalories() <= this.calorieTarget) {
      return true
    } else {
      return false
    }
  }
};

module.exports = user;
