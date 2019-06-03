const path = require('path')
const app = require(path.resolve(__dirname, '../server/server'))
const ds = app.datasources.db
ds.automigrate('machines', function (err) {
  if (err) throw err
  var machines = [
    {
      number: 22,
      position: 86,
      closingTime: "109.44",
      active: true
    },
    {
      number: 31,
      position: 64,
      closingTime: "54.7",
      active: true
    },
    {
      number: 40,
      position: 2,
      closingTime: "29.59",
      active: true
    },
    {
      number: 43,
      position: 89,
      closingTime: "22.88",
      active: true
    },
    {
      number: 53,
      position: 19,
      closingTime: "1.34",
      active: false
    },
    {
      number: 56,
      position: 48,
      closingTime: "91.34",
      active: true
    },
    {
      number: 63,
      position: 55,
      closingTime: "30.77",
      active: false
    },
    {
      number: 67,
      position: 40,
      closingTime: "32.34",
      active: false
    },
    {
      number: 72,
      position: 23,
      closingTime: "66.5",
      active: true
    },
    {
      number: 74,
      position: 99,
      closingTime: "69.11",
      active: false
    },
    {
      number: 80,
      position: 14,
      closingTime: "71.13",
      active: true
    },
    {
      number: 88,
      position: 19,
      closingTime: "89.24",
      active: true
    },
    {
      number: 98,
      position: 62,
      closingTime: "108.49",
      active: true
    },
    {
      number: 103,
      position: 11,
      closingTime: "43.57",
      active: true
    },
    {
      number: 108,
      position: 45,
      closingTime: "4.65",
      active: false
    },
    {
      number: 114,
      position: 44,
      closingTime: "102.66",
      active: false
    },
    {
      number: 122,
      position: 74,
      closingTime: "50.93",
      active: false
    },
    {
      number: 124,
      position: 15,
      closingTime: "11.57",
      active: false
    },
    {
      number: 125,
      position: 62,
      closingTime: "56.16",
      active: true
    }
  ]

  let count = machines.length

  machines.forEach(function (machine) {
    app.models.machines.create(machine, function (err, model) {
      if (err) throw err;
      console.log('Created model')
      count --
      if (count === 0)
        ds.disconnect();
    });
  });
});