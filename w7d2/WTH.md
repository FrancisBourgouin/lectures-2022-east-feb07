# What was hard

- Why cannot put hooks inside conditional / functions / etc
- JSX vs JavaScript or HTML
- Passing Props
- Parent / Children relationship
- Difference between index.js and App.js

# JSX

JSX

```jsx
  <h1>Hello!</h1>

  <h1 onClick={() => console.log("yo")}>Hello {name}</h1>

  // Javascript extended markup language

  ReactDOM.createElement('h1', {content:"Hello!"})

  <Component onClick={() => console.log("yo")}>

  Component({
    onClick:() => console.log("yo")
  })


  export default function Component(props){

    return(
      <h1>Hello!</h1>
    )
  }



  $.ajax(url, method, callback, data, responseType)
  $.ajax(url, method, null, data, responseType)

  $.ajax(options)

  options = {
    url:"",
    method:"",
    responseType:""
  }

```
