## "user strict" examples

See [official docs](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode) and the great [article of John Resig](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/).


```js
// SyntaxError: Delete of an unqualified identifier in strict mode.

// case 1;
var a = 'Hello';
delete a;

// case 2
var a = 'Hello';
(function deleteA() {
  var a = 'world';
  console.log(a); // --> world
  var wasDeleted = delete a;
  console.log('wasDeleted',wasDeleted);
  console.log(a); // --> world
}());

/**
 * Rationale
 * Case 1 shows the most basic example of this error, however doesn't
 * tell much about the why we may want to prevent it. Let's look at case 2.
 * Case 2 shows a bit more of why we may not want for this action to work.
 * If was possible to delete `var a = "world"` it means we are able to change
 * dynamically the local scope of a function.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
 * http://blog.caplin.com/2012/01/31/javascript-is-hard-part-3-you-cant-delete-with-delete/
 * http://perfectionkills.com/understanding-delete/#deleting_variables_via_eval
 */
```

The above means that it is not possible to do something like this (which is a pity):

```js
var a = 'hello';
var b = {
  c:a
};

var aa = b.c;

delete aa;
```

## Declaration and expressions

Consider the following code:

```js

```