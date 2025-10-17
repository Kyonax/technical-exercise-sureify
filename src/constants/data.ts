import type {
  CoffeeSize,
  CreamerType,
  SweetenerType,
  CoffeePricing,
} from "@/types/coffee";

export const DEFAULT_FORMAT_LOCALE = "en-US";
export const DEFAULT_FORMAT_CURRENCY = "USD";

export const SIZE_PRICES: Record<CoffeeSize, number> = {
  Small: 1.0,
  Medium: 1.5,
  Large: 2.0,
};

export const CREAMER_PRICES: Record<CreamerType, number> = {
  None: 0.0,
  Dairy: 0.25,
  "Non-Dairy": 0.5,
};

export const SWEETENER_PRICES: Record<SweetenerType, number> = {
  None: 0.0,
  Sugar: 0.2,
  "Sugar Alternative": 0.5,
};

export const COFFEE_PRICING_TABLE: CoffeePricing = {
  size: SIZE_PRICES,
  creamer: CREAMER_PRICES,
  sweetener: SWEETENER_PRICES,
};
