export type CoffeeSize = "Small" | "Medium" | "Large";
export type CreamerType = "None" | "Dairy" | "Non-Dairy";
export type SweetenerType = "None" | "Sugar" | "Sugar Alternative";

export interface CoffeePricing {
  size: Record<CoffeSize, number>;
  creamer: Record<CreamerType, number>;
  sweetener: Record<SweetenerType, number>;
}

export interface CoffeeOptions {
  SIZE: CoffeeSize;
  CREAMER: CreamerType;
  SWEETENER: SweetenerType;
}

export interface CoffeePriceResult {
  formatted: string;
  TOTAL: number;
}
