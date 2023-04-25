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
-   Followed MVP to create e-commerce store. Took inspiration from online clothing store design/layout.

## Known issues

-   Carousel items may be duplicate as random nums generator does not check for duplicate nums.

## Future Goals

-   Add a favourites page where user can access all favourited items.
-   Add auto rotating feature to carousel.
-   Add footer section with form for email subscription.

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

-   Initialise firestore in app
-   Create functions to fetch data from database
-   Create option component for sizes, colours

### 20/04/23

-   Add onclick function to 'like' and 'add to cart' buttons in product page to update database

### 21/04/23

-   Add carousel feature to homepage.
-   Add NavLink to carousel images.
-   Add colour and size option values to product page.
-   Sync colour selection with image displayed in product page.

### 23/04/23

-   Add default values to select elements in product page.
-   Track item quantity through state and disable btn if no items available.
-   Track cart items state between page refreshes by adding session storage.
-   Add function to remove item button to remove item from session storage and from page.

### 24/04/23

-   In product page, 'item unavaiable' function/message was being triggered after trying to immediately add the same item to cart even though items were available. Fixed by removing quantity state from useEffect parameter.
-   Cart not displaying correct total (lagging behind by 1 item removal), as state of cart items was not updating after removing item. Fixed by moving setCartItem function from App to cart page.
-   Add increment and decrement function to quantity btns in cart card and linked available quantity to firestore.
-   Add Navlink to cart images.

### 25/04/23

-   Fix bug that allowed adding duplicate items to cart by creating if check to onclick function in product page.
-   Add styling components.

## What did you struggle with?

-   What? Why? How?
-   usestate, useeffect, usecontext
-   carousel - accessing items passed down as props but async, created useeffect to store value of promise so could access it.
-   Storing cart item state between page refreshes. Explored local storage method and implemented this to track state of cart items.
-   Try to add same product twice -> error
-   sometimes btn will disable after add item.
