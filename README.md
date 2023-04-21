# eCommerce-App

{add test badges here, all projects you build from here on out will have tests, therefore you should have github workflow badges at the top of your repositories: [Github Workflow Badges](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)}

## Demo & Snippets

-   You can view the live version here: "insert link"

## Requirements / Purpose

-   MVP - create e-shop website with list of products, linking to dedicated product page with add product to cart functionality and cart page showing items in cart and add delete functionality.
-   purpose of project - to reinforce learnings of React
-   stack used and why - react, part of mvp, to reinforce learning of React.

## Build Steps

-   how to build / run project
-   use proper code snippets if there are any commands to run
-   npm install
-   npm install sass?
-   npm install react-router-dom?
-   npm run dev?
-   npm install firebase

```
npm install
```

## Design Goals / Approach

-   Design goals
-   why did you implement this the way you did?

## Known issues

-   Remaining bugs, things that have been left unfixed
-   Features that are buggy / flimsy

## Future Goals

-   What are the immediate features you'd add given more time

## Change logs

-   Write a paragraph labelled with the date every day you work on the project to discuss what you've done for the say. Be specific about the changes that have happened for that day.

### 17/04/23

-   Initialised repo, created vite react app, installed major dependencies.
-   Created container and component folders and files (+ corresponding styling file)
-   Add nav bar with routes to home, cart, test product page
-   Add elements for each component and container to create page layouts

### 18/04/23

-   Create Firestore database and add items

### 19/04/23

-   Initialise firestore
-   Create functions to fetch data from database
-   Create option component for sizes, colours

### 20/04/23

-   Add onclick function to 'like' and 'add to cart'buttons in product page to update database
-

### 21/04/23

-   Add carousel feature to homepage.
-   Add NavLink to feature images.
-   Add option values.

## What did you struggle with?

-   What? Why? How?
-   usestate, useeffect, usecontext
-   carousel - accessing items passed down as props but async, created useeffect to store value of promise so could access it.
