import {
  DEFAULT_FORMAT_LOCALE,
  DEFAULT_FORMAT_CURRENCY,
} from "@/constants/data";

export function formatPrice(
  total: number,
  locale: string = DEFAULT_FORMAT_LOCALE,
  currency: string = DEFAULT_FORMAT_CURRENCY,
): string {
  const FORMATTER = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return FORMATTER.format(total);
}
