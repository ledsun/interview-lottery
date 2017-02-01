const oldData = require('./data.example')
const converted = oldData.doneList.map((done) => done.reduce((map, d, index) => {
  map[data2.interviewers[index]] = d
  return map
}, {}))

console.log(JSON.stringify(converted,null,2));
