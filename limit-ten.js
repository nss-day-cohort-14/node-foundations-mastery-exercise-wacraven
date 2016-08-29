const {Transform} = require('stream');
const transformer = Transform()

let counter = 1;

transformer._transform = (buffer, encoding, cb) => {
  let output = `${buffer}\n`
  if (counter <= 10) {
    cb(null, output)
    counter++
  } else if (counter === 11) {
    console.log('more...');
    counter++
  } else {
    cb()
  }
}

module.exports = { transformer }
