module.exports = function(data, duration) {
  const interviewees = getByNowMonth(data.interviewees)
  const doneSet = toSet(data.doneList, duration)

  return [data.interviewers, interviewees, doneSet]
}

// Get interviewees at current month
function getByNowMonth(interviewees) {
  return interviewees[(new Date()
    .getMonth()) % interviewees.length]
}

function toSet(doneList, duration) {
  return doneList
    .slice(0, duration) // limitter to match at least one
    .reduce((doneSet, interviewed) => {
      for (const [key, values] of Object.entries(interviewed)) {
        values.forEach((value) => doneSet.add(`${key} ${value}`))
      }
      return doneSet
    }, new Set())
}
