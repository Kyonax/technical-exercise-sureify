import { calculateCoffeePrice } from "@/utils/calculate-coffee-price.util";
import { formatPrice } from "@/utils/format-price.util";

describe("Calculate Coffee price - Suite", () => {
  it("Small Coffee with no Creamer and no Sweetener", () => {
    expect(
      calculateCoffeePrice({
        SIZE: "Small",
        CREAMER: "None",
        SWEETENER: "None",
      }).formatted,
    ).toBe("$1.00");
  });

  it("Large Coffee with no Creamer and no Sweetener", () => {
    expect(
      calculateCoffeePrice({
        SIZE: "Large",
        CREAMER: "None",
        SWEETENER: "None",
      }).formatted,
    ).toBe("$2.00");
  });

  it("Large Coffee with Non-Dairy Creamer and Sugar Alternative as Sweetener", () => {
    expect(
      calculateCoffeePrice({
        SIZE: "Large",
        CREAMER: "Non-Dairy",
        SWEETENER: "Sugar Alternative",
      }).formatted,
    ).toBe("$3.00");
  });
});

describe("Format Coffee Price Total based on the Locale - Suite", () => {
  it("en-US", () => {
    expect(formatPrice(1, "en-US")).toBe("$1.00");
  });
});
