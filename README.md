# Tasawar Saraf Creatorverse 

This project is the prework for Advanced Web Development (WEB103)

# Step 0: Setting Up Your Project 
- [x] Use Vite to set up Creatorverse project
- [x] Set up React Router


# Step 1: Setting Up Your Creators

## Step 1a: Signing up for Supabase
- [x] Sign Up for Supabase Account
- [x] Create new project called `creatorverse`

## Step 1b: Create the Database
- [x] Create a `creators` table
- [x] Add columns for `name`, `url`, `description`, and `imageURL`

## Step 1c: Connect project to database
- [x] Install Superbase library using `npm install @supabase/supabase-js`
- [x] Import `createClient` from Superbase
- [x] Create `URL`, `API_KEY`, and `export const supabase`

## Step 2: Create Pages and Components
- [x] Created `components` folder with files `Card.jsx` and `Hero.jsx`
- [x] Created `pages` folder with files `AddCreator.jsx`, `EditCreator.jsx`, `ShowCreators.jsx`, and `ViewCreator.jsx`

## Step 3: Set Up Routes
- [x] Imported `useRoutes` from `react-router-dom`
- [x] Imported pages for showing all creators, viewing a creator, editing a creator, adding a creator
- [x] Defined the paths and elements for the main page, edit page, new page, and view page
- [x] Inserted the element into the App container

## Step 4: Creating a Component for a Content Creator
- [x] Displayed the content creator's name, URL, description, and image

## Step 5: Viewing All Content Creators
- [x] Edited `Hero.jsx` to have the button "View Creators" and import `Hero.jsx` into `App.jsx`
- [x] Edited `ShowCreators.jsx` by importing `supabase` from `client.js`
- [x] Inside a call to the `useEffect()` function, wrote an asynchronous function to fetch the data from your database.
- [x] Imported the component that displays a content creator's information
- [x] Created content creator components for each one in the database

## Step 6: Viewing a Single Content Creator
- [x] Edited `ViewCreator.jsx` by importing `supabase` from `client.js`
- [x] Got the content creator's information from the database
- [x] Displayed the content creator's name, URL, description, and image

## Step 7: Adding a Content Creator
- [x] Edited `Hero.jsx` to have a button "Add Creator" that will `navigate` to the `AddCreator.jsx` page
- [x] Created an `AddCreator.jsx` by importing `supabase` from `client.js` 
- [x] Added a form for the user to enter details about the new content creator (`name`, `url`, `description`, and `imageURL`)
- [x] Wrote an asynchronous function to add the new content creator to the database. 

## Step 8: Updating a Content Creator
- [x] Created an `EditCreator.jsx` by importing `supabase` from `client.js`
- [x] Added a form for the user to modify the name, url, description, and imageURL (optional) for a content creator
- [x] Get the content creator's information from the database
- [x] Load the content creator's information into the form
- [x] Wrote an asynchronous function to update the content creator in the database
- [x] Called the function on a submit button

## Step 8a: Add an Edit Button 
- [x] On the component for the content creator, add a button or link to edit their information
- [x] On the page to view a content creator, add a button or link to edit their information

## Step 9: Deleting a Content Creator 
- [x] Added a delete button
- [x] Wrote asynchronous function to delete a content creator from the database
- [x] Called the function on the delete button