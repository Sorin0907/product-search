import React, { useState } from "react";
import { Grid, Box, Alert, Container } from "@mui/material";
import { Pagination } from "@mui/material";
import { t } from "ttag";
import { geoOptions } from "./ProductSearch/constants/geoOptions";
import { ProductCard } from "./ProductSearch/components/ProductCard";
import { GeoOption, Product } from "../types/types";
import { ProductSkeletonCard } from "./ProductSearch/components/ProductSkeletonCard";
import { SearchHeader } from "./ProductSearch/components/Header";

/**
 * 
 * @returns A search page that allows users to search for products based on a search term and geographical context.
 */
export const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedGeo, setSelectedGeo] = useState<GeoOption>(geoOptions[0]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  const itemsPerPageOptions = [12, 24, 36];

  const handleSearch = async () => {
    if (!searchTerm) return;
    setLoading(true);
    setError(null);
    setPage(1);

    const offset = 0;
    const apiUrl = `https://global.atdtravel.com/api/products?geo=${selectedGeo.value}&title=${searchTerm}&offset=${offset}&limit=${itemsPerPage}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.meta.total_count > 0) {
        setProducts(data.data);
        setTotalPages(Math.ceil(data.meta.total_count / itemsPerPage));
      } else {
        setError(t`No products found`);
      }
    } catch {
      setError(t`Failed to fetch products`);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    setLoading(true);

    const offset = (value - 1) * itemsPerPage;
    const apiUrl = `https://global.atdtravel.com/api/products?geo=${selectedGeo.value}&title=${searchTerm}&offset=${offset}&limit=${itemsPerPage}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.meta.total_count > 0) {
        setProducts(data.data);
        setTotalPages(Math.ceil(data.meta.total_count / itemsPerPage));
      }
    } catch {
      setError(t`Nothing to return this time`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container
    sx={{
      bgcolor: "#FAFAFA", 
      minHeight: "100vh",
      py: 6,
      px: { xs: 2, sm: 4, md: 6 },
      mx: "auto",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
    >
      <SearchHeader
        searchTerm={searchTerm}
        selectedGeo={selectedGeo}
        loading={loading}
        onSearchChange={setSearchTerm}
        onGeoChange={setSelectedGeo}
        onSearch={handleSearch}
        geoOptions={geoOptions}
        itemsPerPage={itemsPerPage}
        itemsPerPageOptions={itemsPerPageOptions}
        onItemsPerPageChange={(e) => setItemsPerPage(Number(e.target.value))}
      />

      {error && (
        <Alert
          severity="error"
          sx={{
            mb: 4,
            borderRadius: 2,
          }}
        >
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {loading
          ? Array.from(new Array(itemsPerPage)).map((_, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <ProductSkeletonCard />
              </Grid>
            ))
          : products.map((product) => (
              <Grid item xs={12} sm={6} lg={4} key={product.id}>
                <ProductCard product={product} selectedGeo={selectedGeo} />
              </Grid>
            ))}
      </Grid>

      {totalPages > 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 8,
            mb: 4,
          }}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                borderRadius: 1.5,
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
};
