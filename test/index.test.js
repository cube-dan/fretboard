'use strict';

const assert = require('chai').assert;
const should = require('chai').should;
const expect = require('chai').expect;
const mlog = require('mocha-logger');
const _ = require('lodash');

const Immutil = require('../src/index.js').default;

before(() => {
  // make sure that the debugger stops here if it's been enabled with "mocha --inspect-brk"
  // debugger;
});

after(() => {
  // nothing yet
});

// const test = {
//   string: 'This is a string. I hope you like thé dîacritical mårks and emoji’s (🤘) in it.',
//   object: {this:'is',an:{object:['an','array','inside']}},
//   array: ['this','is','an','array'],
//   folder: null, // TODO: Figure out how to zip up a folder
//   file: null, // TODO: Figure out how to zip up a file
// }

describe('Immutil Tests', function(){

  describe('@some test here', function(){
    it('can put the lotion on it’s skin and puts it in the basket or it gets the hose again.', () => {
      
      // const data = test.string;
      // const engine = Zipt.showInfo('lzs');
      // const types = _.get(engine,'lzs.opts.options.type',null);
      // // create a human readable list of the types that we're goging to test
      // const names = _.values(types);
      // const list = names.join(', ');
      // mlog.success(`Testing all compression types: ${list}`);
      // _.each(types,(type)=>{
      //   mlog.log(`Trying lz-string @${type}`);
      //   // mlog.log(`testing type: ${type}`);
      //   // mlog.pending('This is .pending()');
      //   // mlog.success('This is .success()');
      //   // mlog.error('This is .error()');
      //   const compressed = Zipt.up(data,{
      //     use:'lzs',
      //     opts:{type:type}
      //   });
      //   const decompressed = Zipt.un(compressed);
      //   assert.equal(data,decompressed);  
      // });
    });
  
  });

});
