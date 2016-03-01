const doneRecent = require('./done-recent')

module.exports = function(interviewers, interviewees, doneSet) {
  return interviewers
    .filter((interviewer, index) => doneRecent(interviewer, interviewees[index], doneSet))
    .length > 0
}
