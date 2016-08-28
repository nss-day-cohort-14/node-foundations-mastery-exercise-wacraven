#!/usr/bin/env node

const {createReadStream} = require('fs')
const {Writable} = require('stream')
const readStream = createReadStream('/usr/share/dict/words')
const transformer = require('./limit-ten.js')
const writeStream = Writable()

readStream//.pipe(transformer)
readStream.pipe(writeStream)


writeStream._write = (buffer, encoding, cb) => {
  console.log('_write', buffer.toString())
  cb()
}
