# SOLID principles

solid principals are set of best practices that help in writing scalable, maintainable, and robust software by organizing code into small, independent, and testable units.

# S -: Single Responsibility Principle (SRP)

A class or function should have only one reason to change, meaning it should only have one job.

# O -: Open/Closed Principle (OCP):

👉 "Software entities (classes, modules, functions) should be open for extension but closed for modification."

This means:

You should be able to extend a class or function’s behavior without modifying its existing code.
This is important to avoid breaking existing functionality when adding new features.

# Liskov Substitution Principle (LSP)

The Liskov Substitution Principle (LSP) states that:
👉 "Objects of a subclass should be replaceable with objects of the superclass without breaking the behavior of the application."

This means that:

A subclass must extend the functionality of the parent class without altering its behavior.
A derived class must be substitutable for its base class.

# Interface Segregation Principle (ISP)

The Interface Segregation Principle (ISP) states that a class should not be forced to implement interfaces it does not use.

✔️ ISP means breaking large interfaces into smaller, specific ones.
✔️ A class should only implement methods it actually needs.
✔️ This reduces unnecessary code, making systems easier to maintain and extend. 🚀

# Dependency Inversion Principle (DIP)

The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces).
