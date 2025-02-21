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
- Material-UI (MUI) v6

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