# Brief

## Exercise 1:

### 1. Create a test file: `exercise-1.test.js`

### 2. Create a describe block and single `it` block for **each** of the following functions:

`addNumbers`: Adds two numbers

`subtractNumbers`: Subtracts a number from another number

`multiplyNumbers`: Multiplies two numbers

`divideNumbers`: Divides one number from another

### 3. Create a JS file `exercise-1.js` and populate it with functions:

Create a JS file `exercise-1.js` and add the following functions to the file:

`addNumbers`, `subtractNumbers`, `multiplyNumbers` and `divideNumbers`.

Make each of these functions return `0`.

Add `module.exports = {}` and add each of those functions to the curly braces.

**Note:** See the `example.js` example file for an example on how to export the functions.

### 4. Import these functions into your test file:

Import the functions into your `exercise-1.test.js` file using `require`. See the `example.test.js` example if you need help with importing the functions.

### 5. Write the tests using the functions:

Write three tests for each of the functions where you are testing that the result of the function is correct e.g. `addNumbers` using `10` and `10` as arguments should have a result of `20`.

### 6. Run the test watcher (They should all fail):

Run the test watcher. All of the tests should fail because we haven't actually written our code yet. That's where the TDD part comes in.

All of your tests should fail successfully i.e. you shouldn't have syntax errors or other errors, it should just be failing tests.

### 7. Write the code to pass the tests:

You can now start writing the code to pass the test. You should consider playing around with the test watcher filtering so it only gets the tests you are working on.

### 8. All tests passed:

You are done when all of your tests are passing.

### Extra work:

If you'd like some extra work, consider doing the following:

1. Write tests to check edge cases, such as dividing by 0, or only passing one parameter
2. Write the code so that the tests pass
