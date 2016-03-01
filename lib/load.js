module.exports = function(data, duration) {
  const interviewees = getByNowMonth(data.interviewees),
    doneSet = toSet(data.interviewers, data.doneList, duration)

  return [data.interviewers, interviewees, doneSet]
}

// Get interviewees at current month
function getByNowMonth(interviewees) {
  return interviewees[(new Date().getMonth()) % interviewees.length]
}

function toSet(interviewers, doneList, duration) {
  return doneList
    .slice(0, duration) // limitter to match at least one
    .reduce((doneSet, interviewed) => {
        interviewers
          .forEach((interviewer, index) => {
            doneSet.add(`${interviewer} ${interviewed[index]}`)
          })
        return doneSet
      },
      new Set())
}
