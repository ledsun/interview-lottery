'use strict'

const shuffle = require('shuffle-array'),
  isNg = require('./is-ng')

module.exports = function(interviewers, interviewees, doneSet) {
  let count = 1

  while (count < 10000) {
    let interviewersOrder = shuffle(interviewers, {
        'copy': true
      }),
      intervieweesOrder = shuffle(interviewees, {
        'copy': true
      })

    if (isNg(interviewersOrder, intervieweesOrder, doneSet)) {
      count++
      continue
    }

    return {
      interviewers,
      interviewees,
      count,
      order: {
        interviewers: interviewersOrder,
        interviewees: intervieweesOrder
      }
    }
  }

  throw new Error(`${count} times tried. The combination was not found`)
}
