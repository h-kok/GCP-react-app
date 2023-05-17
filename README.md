# eCommerce-App

## Demo & Snippets

-   You can view the live version here: https://h-kok.github.io/eCommerce-App/

## Requirements / Purpose

-   The MVP was to create an e-commerce website with a minimum of 2 pages, a home page and product page. The bonus activity was to create a cart page, where item quantities could be updated and items could be removed. The requirement was to use Firestore as a database to host product details and to fetch and update data from the react application only.
-   The purpose of the project was to reinforce learnings of the React framework and Firestore document database, as well as fetching data from within a React app. It is my first project integrating both front end and backend web development.
-   Tech stack used: React framework, JavaScript, Scss, Firebase/Firestore

## Build Steps

-   To install node modules:

```
npm install
```

-   To run application:

```
npm run build
```

## Design Goals / Approach

-   As this was my first React project, and I was not confident with the basic React concepts, such as useState, the approach I took was to first create the features required to meet the MVP and then add styling last. I took inspiration from online clothing stores to design the layout of my website.

## Known issues

-   Carousel items may be duplicate as random nums generator does not check for duplicate nums.

## Future Goals

-   Add a favourites page where user can access all favourited items.
-   Add auto rotating feature to carousel.
-   Add footer section with form for email subscription.
-   Some bits of state are being passed down through multiple levels. I'd like to replace these with useContext to further solidify my understanding of useState.

---

## Change logs

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

-   Fix bug that allowed adding duplicate items to cart by including if check to onclick function in product page.
-   Add function to update total price on change of item quantities in cart.
-   Add styling to all components.

### 29/04/23

-   Fix bug favourited item doesn't save on page refresh.
-   Create one error message state in product page to replace all separate error messages, to reduce amount of state being tracked.
-   Refactored product card and cart product card props to just pass down item prop.

### 17/5/23

-   Update landing page styling.
-   Add auto move carousel feature.
-   Update build steps.

---

## What did you struggle with?

-   Prior to commencing this project, I was unsure whether I would be able to meet the MVP as I was not confident in my knowledge of useState (what state was, how to use it, how it was related to user interaction and therefore, how I could use it as a parameter in useEffect). During the process of completing this project, I now have a much better understanding of identifying when I need to track and store a value and therefore when I need to use useState and how it works.
-   When creating the carousel feature, I tried to use the item data passed down as props from the homepage, however this did not work as it was static. To solve this, I implemented an async function inside useEffect to refetch my item data upon change in item state.
-   When implementing the cart page, I struggled to store items I had added to the cart. I was able to store cart items in state, however upon page refresh, I would loose this value as it would revert to initial state. To solve this, I explored and implemeted local storage to my project to allow me to save cart items between page refreshes.
