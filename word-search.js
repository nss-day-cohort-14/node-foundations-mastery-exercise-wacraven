#!/usr/bin/env node

const { createReadStream } = require('fs')
const { transformer } = require('./limit-ten.js')
const readStream = createReadStream('/usr/share/dict/words')
const { Writable } = require('stream')
const writeStream = Writable()

const [ , , searchTerm ] = process.argv;

readStream.pipe(transformer)
          .pipe(writeStream)


writeStream._write = (buffer, encoding, cb) => {
  console.log('_write', buffer.toString())
  cb()
}


// var es = require('event-stream')
// module.exports = function() {
//   process.stdin                      //connect streams together with `pipe`
//   .pipe(es.split())                  //split stream to break on newlines
//   .pipe(es.map(function (data, cb) { //turn this async function into a stream
//
//   }))
// }
