export type Product = {
  id: string;
  title: string;
  dest: string;
  img_sml: string;
  price_from_adult: number;
  price_from_child: number;
};

export type GeoOption = {
  label: string;
  value: string;
  currency: string;
};
