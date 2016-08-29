const {Transform} = require('stream');
const transformer = Transform()

let counter = 1;

transformer._transform = (buffer, encoding, cb) => {
  // console.log('transform:', buffer.toString());
  if (counter < 11) {
    cb(null, buffer)
    counter++
  } else if (counter === 11) {
    console.log('more...');
    counter++
  } else {
    cb()
  }
}

module.exports = { transformer }
