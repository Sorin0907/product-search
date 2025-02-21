import { Card, CardContent, Box, Skeleton } from "@mui/material";

/**
 * Skeleton for product card
 * @returns styled skeleton card component
 */
export const ProductSkeletonCard = () => (
  <Card
    sx={{
      height: "100%",
      minHeight: "360px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Skeleton
      variant="rectangular"
      sx={{
        height: 0,
        paddingTop: "56.25%",
        width: "100%",
      }}
    />
    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Skeleton
        variant="text"
        sx={{ fontSize: "1.5rem", mb: 2, width: "80%" }}
      />
      <Skeleton variant="text" sx={{ fontSize: "1rem", width: "60%", mb: 3 }} />
      <Box
        sx={{
          mt: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1.5rem", width: "100px" }}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.875rem", width: "60px" }}
          />
        </Box>
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "80px" }} />
      </Box>
    </CardContent>
  </Card>
);
