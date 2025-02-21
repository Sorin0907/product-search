import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { GeoOption } from "../../../types/types";
import { t } from "ttag";

type SearchHeaderProps = {
  /**
   * The search term that the user is typing.
   */
  searchTerm: string;
  /**
   * The currently selected geo option, representing the geographical context for the search.
   */
  selectedGeo: GeoOption;
  /**
   * Boolean value representing whether the search is in progress (loading state).
   * @default false
   */
  loading: boolean;
  /**
   * The number of items to display per page in the search results.
   */
  itemsPerPage: number;
  /**
   * The list of available options for the number of items to display per page
   */
  itemsPerPageOptions: number[];
  /**
   * Callback function triggered when the search term changes.
   * @param value The new search term.
   */
  onSearchChange: (value: string) => void;
  /**
   * Callback function triggered when the geo option changes.
   * @param geo The new selected geo option.
   */
  onGeoChange: (geo: GeoOption) => void;
  /**
   * Callback function triggered when the user initiates a search.
   */
  onSearch: () => void;
  /**
   * Callback function triggered when the user changes the number of items to display per page.
   */
  onItemsPerPageChange: (event: SelectChangeEvent<number>) => void;
  /**
   * List of geo options for the user to select from.
   */
  geoOptions: GeoOption[];
};

/**
 * The SearchHeader component is the UI component where users can input their search term,
 * select a geographical region (geo), and initiate the search.
 * It also displays a loading indicator while the search is in progress.
 *
 * @param searchTerm The current search term input by the user.
 * @param selectedGeo The geo option selected by the user.
 * @param loading A boolean indicating whether the search is in progress.
 * @param onSearchChange Callback for handling search term changes.
 * @param onGeoChange Callback for handling geo option changes.
 * @param onSearch Callback for initiating the search.
 * @param geoOptions List of available geo options for selection.
 *
 * @returns The SearchHeader component, including input fields, geo selector, and search button.
 *
 * @example
 * <SearchHeader
 *   searchTerm="London"
 *   selectedGeo={geoOptions[0]}
 *   loading={false}
 *   onSearchChange={console.log}
 *   onGeoChange={console.log}
 *   onSearch={console.log}
 *   geoOptions={geoOptions}
 * />
 */
export const SearchHeader = ({
  searchTerm,
  selectedGeo,
  loading,
  onSearchChange,
  onGeoChange,
  onSearch,
  geoOptions,
  itemsPerPage,
  itemsPerPageOptions,
  onItemsPerPageChange,
}: SearchHeaderProps) => (
  <Box sx={{ display: "flex", gap: 2, mb: 4 ,flexDirection: { xs: "column", md: "row" } }}>
    <TextField
      label="Search experiences"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
    <Select
      value={selectedGeo.value}
      onChange={(e) => {
        // Finds the geo option by its value
        const geo = geoOptions.find((g) => g.value === e.target.value);

        // Check if a valid geo option is found before calling onGeoChange
        if (geo) {
          onGeoChange(geo);
        }
      }}
    >
      {geoOptions.map((geo) => (
        <MenuItem key={geo.value} value={geo.value}>
          {geo.label}
        </MenuItem>
      ))}
    </Select>
    <Select
      value={itemsPerPage}
      onChange={onItemsPerPageChange}
      sx={{ minWidth: 120 }}
    >
      {itemsPerPageOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {t`${option} items per page`}
        </MenuItem>
      ))}
    </Select>
    <Button variant="contained" onClick={onSearch} disabled={loading}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={24} />
        </Box>
      ) : (
        t`Search`
      )}
    </Button>
  </Box>
);
