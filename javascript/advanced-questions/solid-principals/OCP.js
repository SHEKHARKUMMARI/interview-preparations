// Imagine we have a DiscountCalculator class that applies discounts based on the customer type.

class DiscountCalulatore {
  getDiscount(userType, amount) {
    if (userType === "gold") {
      return amount * 0.3;
    } else if (userType === "silver") {
      return amount * 0.2;
    } else {
      return amount;
    }
  }
}

// ❌ Why is this bad?
// Every time a new customer type is introduced (e.g., "VIP"), we must modify the existing class.
// Modifying existing code increases the risk of introducing bugs in working code.
// Not scalable—if we add multiple new customer types, the function will become cluttered.

// ✅ Applying OCP (Good Code)
// Solution: Use Strategy Pattern
// Instead of modifying the class, we should extend it by creating separate strategies for each discount type.

class DescountStrategy {
  applyDiscount(amount) {
    return amount;
  }
}
class GoldMember extends DescountStrategy {
  applyDiscount(amount) {
    return amount * 0.3;
  }
}
class SilverMember extends DescountStrategy {
  applyDiscount(amount) {
    return amount * 0.3;
  }
}

class DiscountCalculator {
  constructor(strategyType) {
    this.strategyType = strategyType;
  }
  calculateDiscount(amount) {
    return strategyType.applyDiscount(amount);
  }
}

const silverCustomer = new DiscountCalculator(new SilverMember());
console.log(silverCustomer.calculate(100)); // 80

const goldCustomer = new DiscountCalculator(new GoldMember());
console.log(goldCustomer.calculate(100)); // 70

// ✅ Why is this better?
// 🚀 Open for extension:
// We can add a new discount type (e.g., VIPDiscount) without modifying existing classes.
// 🔒 Closed for modification:
// The DiscountCalculator class does not change when we add a new discount type.
// 🔥 More scalable & maintainable:
// We separate logic for each customer type, making debugging easier.
