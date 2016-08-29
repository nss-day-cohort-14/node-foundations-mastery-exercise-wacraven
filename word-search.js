#!/usr/bin/env node

const { createReadStream } = require('fs')
const { transformer } = require('./limit-ten.js')
const readStream = createReadStream('/usr/share/dict/words')
const es = require('event-stream')
const [ , , searchTerm ] = process.argv;

readStream.pipe(es.split())                  //split stream to break on newlines
          .pipe(es.map(function (data, cb) { //turn this async function into a stream
            if (searchTerm === undefined) {
              console.log('Usage: word-search.js [searchterm]');
              process.exit();
            } else {
              let testerData = data.toString()
              if (testerData.toUpperCase().startsWith(searchTerm.toUpperCase())) {
                // console.log(testerData);
                cb(null, testerData)
              } else {
                cb()
              }
            }
          }))
          .pipe(transformer)
          .pipe(process.stdout)
