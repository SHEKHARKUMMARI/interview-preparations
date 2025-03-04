# 1. What is Event Delegation ?

It is methodology in js which let's you write single event handler for parent element that can trigger to similar children instead of writing to each every child.

# 2. what is function curring ?

It is technique of breaking a function with multiple arguments into sequence of functions with single argument.

#### Advantages:

1. Reusability: Currying breaks down a complex function into smaller, reusable units. Each curried function focuses on a single argument, making it easier to understand and maintain. These smaller functions can be reused across different parts of your codebase.
2. Partial Function Application: Currying allows you to create partially applied functions, where you fix some of the arguments in advance and leave the rest to be supplied later. This is useful when you have a function that requires some parameters to be the same across multiple calls.
3. Code Composition: Currying encourages the creation of new functions by composing existing ones. The currying function in JavaScript is a higher-order function. Higher-order functions are those that either take another function as an argument or return a function. It uses functional programming which results in cleaner, more expressive code.
