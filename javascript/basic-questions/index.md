# 1. what is execution context ?

JavaScript Execution Context is the environment in which JavaScript code is executed

Two main components of an execution context in JavaScript are

- #### Memory Component (variable environment)

place where all the variables and functions are stored as key value pairs

- #### Code Component (thread of execution)

place where all the code is executed line by line and if it comes through function , it will create one more execution context

Execution context goes though two phase in JavaScript

- #### Creation phase

the variables and functions are stored as key value pairs

- #### Code execution phase

  All the code is executed line by line

##### [reference](https://dev.to/jahid6597/javascript-execution-context-a-deep-dive-4kno#:~:text=JavaScript%20Execution%20Context%20is%20the,creation%20phase)

# 2.what is callstack / execution context stack / programming stack / machine stack / Run time stack ?

Call stack is a data structure which maintains the order of execution of execution contexts.

##### [Reference](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
