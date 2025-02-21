# Product Search Component

React-based A React-based product search interface that allows users to search for travel products, set the geo and the number of items per page

## Features

- Dynamic product search with pagination
- Geographical region selection with currency support
- Configurable items per page display
- Responsive grid layout
- Loading state with skeleton placeholders
- Error handling and feedback

## Tech Stack

- React 19
- TypeScript
- Material-UI

# Description

## Component Structure

The `PruductSearch.tsx` component will be the main conatiner for the search page This component will handle all the funtionalities such as handling user input, API calls and displaying the results.  the overall structure will consist:

- `<Header />` containing the input fieald and options
- `<ProductCard />` the individual card for each result
- `<Pagination />` to handle multiple pages

## Satate management 

I used `useState` React's hook to handle all the states

- `searchTerm` : term that the user types into the search bar.
- `selectedGeo`: selected geographical option from the dropdown.
- `products`:  array of fetched product data.
- `loading`:indicate when data is being fetched, used to show loading skeletons.
- `error`: stores error messages, if any, during the data-fetching process.
- `page`: current page for pagination.
- `totalPages`: total number of pages based on the API response.
- `itemsPerPage`: Specifies how many products should be displayed per page.

## Pagination Handling 

For pagination, the `handlePageChange` function handles the logic for changing pages. It calculates the new `offset` based on the current page and makes another API call with the updated parameters. The new products are fetched and displayed, and the loading state is updated accordingly. The `<Pagination />` component from Material UI is used to display the pagination.

# Drupal integration

Based on the size and nature of this component I think the easiest way to integrate it within an existing Drupal website would be via a custom block:

- build the react app
- create a custom module
- create a custom block
- add the react assets
- load the react assets
- place the block in a Block Layout

# Testing

- Jest for unit testing 
- could potentially use Cypress for automated testing and also for Integration testing
