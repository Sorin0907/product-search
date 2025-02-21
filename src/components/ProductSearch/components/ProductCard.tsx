import { Box, Card, CardContent, Typography } from "@mui/material";
import { GeoOption, Product } from "../../../types/types";

type ProductCardProps = {
  /**
   * The product to be displayed in the card.
   */
  product: Product;

  /**
   * The selected geographical option that includes the currency.
   */
  selectedGeo: GeoOption;
};

/**
 * ProductCard is a presentational component that displays detailed information about a product.
 * It shows the product's image, title, destination, and price in a card layout.
 * @param product The product to display, which includes details such as the title, image, and pricing.
 * @param selectedGeo The selected geo option, which includes the currency symbol to format the price correctly.
 * @returns A styled card that showcases the product details.
 *
 * @example
 * <ProductCard product={sampleProduct} selectedGeo={geoOptions[0]} />
 */
export const ProductCard = ({ product, selectedGeo }: ProductCardProps) => {
  // Ensure that currency is available and provide a fallback default value ('$')
  // in case selectedGeo.currency is undefined or null.
  const currency = selectedGeo?.currency ?? "$";

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%",
        }}
      >
        <img
          src={product.img_sml}
          alt={product.title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h6" component="h2" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.dest}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Box>
            <Typography variant="caption">Adult from</Typography>
            <Typography variant="h6" color="primary.main">
              {currency}
              {product.price_from_adult.toString()}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption">Child from</Typography>
            <Typography variant="h6" color="primary.main">
              {currency}
              {product.price_from_child.toString()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
