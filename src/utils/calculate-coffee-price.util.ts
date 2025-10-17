import { COFFEE_PRICING_TABLE } from "@/constants/data";
import {
  CoffeePricing,
  CoffeeOptions,
  CoffeePriceResult,
  CoffeeSize,
  CreamerType,
  SweetenerType,
} from "@/types/coffee";
import { formatPrice } from "@/utils/format-price.util";

export function calculateCoffeePrice(
  options: CoffeeOptions,
  pricing_table: CoffeePricing = COFFEE_PRICING_TABLE,
): CoffeePriceResult {
  const { SIZE, CREAMER, SWEETENER } = options;

  const SIZE_PRICE = pricing_table.size[SIZE as CoffeeSize];
  const CREAMER_PRICE = pricing_table.creamer[CREAMER as CreamerType];
  const SWEETENER_PRICE = pricing_table.sweetener[SWEETENER as SweetenerType];

  const TOTAL = SIZE_PRICE + CREAMER_PRICE + SWEETENER_PRICE;

  return {
    TOTAL,
    formatted: formatPrice(TOTAL),
  };
}
