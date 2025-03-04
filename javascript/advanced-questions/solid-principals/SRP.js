// Imagine we are building a user management system. We create a User class that:
// Stores user details
// Handles database operations
// Sends emails

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saveToDB() {
    console.log(`${this.name} is saved to DB`);
  }
  sendEmail() {
    console.log(`${this.name} is notified`);
  }
}

// Why is this bad?
// The User class is responsible for storing user data, database operations, and sending emails.
// If we change how emails are sent, we modify this class.
// If we change the database structure, we also modify this class.
// This violates SRP because there are multiple reasons to change this class

// Applying SRP (Good Code)
// To follow SRP, we separate concerns into different classes.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

class UserDB {
  saveToDB(user) {
    console.log(`Saving ${user.name} to the database...`);
  }
}
class EmailService {
  sendEmail(user) {
    console.log(`Sending welcome email to ${user.email}...`);
  }
}

// Usage
const user = new User("Shekhar", 26, "shekhar@example.com");

const userRepo = new UserRepository();
userRepo.save(user);

const emailService = new EmailService();
emailService.sendWelcomeEmail(user);

// Why is this better?
// ✅ Each class has a single responsibility:

// User → Only stores user information.
// UserRepository → Handles database operations.
// EmailService → Handles email sending.
// ✅ Code is easier to maintain:

// If we switch to MongoDB, we modify UserRepository without affecting other parts.
// If we change the email provider, we update EmailService without touching User.
// ✅ Code is more reusable and testable:

// We can test EmailService separately from UserRepository.
// User class remains simple and only holds user data.
