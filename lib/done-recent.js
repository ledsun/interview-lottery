module.exports = function(interviewer, interviewee, doneSet) {
  return doneSet.has(`${interviewer} ${interviewee}`)
}
