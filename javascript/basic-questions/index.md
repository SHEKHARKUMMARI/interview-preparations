# 1. what is execution context ?

JavaScript Execution Context is the environment in which JavaScript code is executed

Two main components of an execution context in JavaScript are

- #### Memory Component (variable environment)

place where all the variables and functions are stored as key value pairs

- #### Code Component (thread of execution)

place where all the code is executed line by line.

Execution context goes though two phase in JavaScript

- #### Creation phase

All the variables and functions are stored as key value pairs

- #### Code execution phase

  All the code is executed line by line and if it comes through function , it will create one more execution context

##### [reference](https://dev.to/jahid6597/javascript-execution-context-a-deep-dive-4kno#:~:text=JavaScript%20Execution%20Context%20is%20the,creation%20phase)

# 2.what is callstack / execution context stack / programming stack / machine stack / Run time stack ?

Call stack is a data structure which maintains the order of execution of execution contexts.

##### [Reference](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)

# 3. what is hoisting in javascript ?

Hoisting is process of moving the declaration of variables,functions,classes and import on to the top the current scope before code execution.

##### [Reference](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)

# 4. what is lexical environmnet?

Every execution context has reference to it's outer environment.
This outer environment is called Lexical Environmemt.

# 5. What is Scope chain?

The scope chain in JavaScript refers to the hierarchy of scopes that the JavaScript engine traverses to resolve variable references. When a variable is referenced within a function or block of code, the JavaScript engine searches for that variable starting from the innermost scope (the current execution context) and then moves outward through the enclosing scopes until it finds the variable or reaches the global scope.

# 6. what is Block?

Block is defined by curly braces.
Block groups multiple statements and can be used at places where it needs sigle statement.
