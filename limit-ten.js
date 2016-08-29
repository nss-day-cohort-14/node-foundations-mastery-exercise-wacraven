const {Transform} = require('stream');
const transformer = Transform()

transformer._transform = (buffer, encoding, cb) => {
  // console.log('transform:', buffer.toString());
  cb(null, buffer)
}

module.exports = { transformer }
