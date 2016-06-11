'use strict';

// ReferenceError: foo is not defined
foo = 'foo';

var bar = 'test';
function test(){}

// SyntaxError: Delete of an unqualified identifier in strict mode.
delete bar;
delete test;

function test2(arg) {
  // SyntaxError: Delete of an unqualified identifier in strict mode.
  delete arg;
}

// BUG - this is no longer the case in ECMAScript 6
var no = {
  foo:true,
  foo:false
};

// SyntaxError: Duplicate parameter name not allowed in this context
function sum(a, a, c) {
  return a + a + c;
}

sum(1,2,3); // ???
