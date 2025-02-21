import { t } from "ttag";
import { GeoOption } from "../../../types/types";

/**
 * Geo options for the product search
 */
export const geoOptions: GeoOption[] = [
  { label: t`English United Kingdom £ GBP`, value: "en", currency: "£" },
  { label: t`English Ireland € EUR`, value: "en-ie", currency: "€" },
  { label: t`Deutsch Deutschland € EUR`, value: "de-de", currency: "€" },
];
