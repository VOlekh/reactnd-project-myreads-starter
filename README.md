# MyReads Project

I was given with the starter template for the final assessment project for Udacity's React Fundamentals course. The template provids a static example of the CSS and HTML markup that was used, but without any of the React code that is needed to complete the project.

I've made following to compleat the progect:
- Draw All of the Views of the App
- Break Each View Into a Hierarchy of Components
- Create components and new JS files accordingly for each component and use import/require statements to include them where they are needed.
- Pass data from components that have it to components that need it
-  Add navigation
- Add html and css for new page
- Test


To compare my work with the template you can find starter template in  [start repository](https://github.com/udacity/reactnd-project-myreads-starter).

Please find A Book Lending App specification in [PROJECT SPECIFICATION](https://review.udacity.com/#!/rubrics/918/view)

## Design
![image](img/MyReads.gif)

## START

To get started right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`




## Backend Server

To simplify development process, Udacity provided a backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
