# Can of Books

**Authors**: Maximo Vincente Mejia, Dustin Apodaca
**Version**: 1.0.1

## Overview

An application  to track what books have impacted you, and what's recommended to read next.

## Getting Started

***Steps to get started with the application:***

- Set up repositories for the front and back end to be able to pair program
- In the backend, we added Mongoose to the server, and ensure the Mongo is running locally.
  - Build a Mongoose Book Schema with the valid keys
  - Use the schema to craft a Book Model
  - Create a books route
  - be able to return books collection as JSON to client
- In the Frontend create a BestBooks component, make a GET request to the server /books route, in the componentDIDMount function
  - Store the data returned from the server in the application state
  - Render all books returned in a carousel.
  - Use react Router to navigate between Home and About pages
  - Add an About page at path /about

## Architecture

JavaScript, React, Node.js, Express, MongoDB, Mongoose

## Change Log

10-03-2022 - Application can successfully recieve all books requested from server as JSON and render it in a carousel component

## Time Estimate

- ***Name of Feature:*** Backend - Return Books Collection as JSON to Client
- ***Estimate of time needed to complete:*** 1.5 hour
- ***Start Time:*** 4:00pm EST
- ***Finish Time:*** 5:03pm EST
- ***Actual time needed:*** 1hr 3min

- ***Name of Feature:*** Render requested book collection in a Carousel component
- ***Estimate of time needed to complete:*** 2 hours
- ***Start Time:*** 4:00pm EST
- ***Finish Time:*** 5:42pm EST
- ***Actual time needed:*** 1hr 42min
