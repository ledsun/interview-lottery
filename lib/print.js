'use strict'

module.exports = function print(result) {
  console.log(`${result.count} times tried.`)

  const combination = result.order.interviewers
    .map((i, index) => toCombination(result.order, i, index))

  // Order results according to interviewers
  combination.sort((a, b) => {
    const indexOfA = result.interviewers.indexOf(a[0])
    const indexOfB = result.interviewers.indexOf(b[0])

    return indexOfA - indexOfB
  })

  combination.forEach(i => console.log(`${i[0]} ${i[1]}`))
}

function toCombination(order, i, index) {
  return [i, order.interviewees[index]]
}
