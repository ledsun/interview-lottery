'use strict'

const print = require('./lib/print'),
  lottery = require('./lib/lottery'),
  load = require('./lib/load'),
  data = require('./data')

let duration = data.doneList.length

while (duration) {
  try {
    print(lottery(...load(data, duration)))
    console.log(`No duplicated combination during last ${duration} months`);
    return
  } catch (e) {
    // try next in loop
  }
  duration--
}
