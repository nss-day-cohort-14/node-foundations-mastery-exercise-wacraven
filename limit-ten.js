const {Transform} = require('stream');
const transformer = Transform()

transformer._transform = (buffer, encoding, cb) => {
  cb(null, buffer)
}

module.exports = { transformer }
