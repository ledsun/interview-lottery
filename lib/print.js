'use strict'

module.exports = function print(result) {
  console.log(`${result.count} times tried.`)

  result.interviewers
    .map(i => orderByInterviwer(result.order, i))
    .forEach(i => console.log(`${i[0]} ${i[1]}`))
}

// Order results according to interviewers
function orderByInterviwer (order, i){
  return [i, order.interviewees[order.interviewers.indexOf(i)]]
}
