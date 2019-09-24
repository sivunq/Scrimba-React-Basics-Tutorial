/*
import React from "react"
import ReactDOM from "react-dom"

// JSX
ReactDOM.render(<div><h1>Hello world!</h1><p>This is a paragraph</p></div>, document.getElementById("root"))

ReactDOM.render(
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
)
*/

//Rendering a function
import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
      <h1>Bob Ziroll</h1>
      <p>This is a paragraph about me...</p>
      <ul>
        <li>Thailand</li>
        <li>Japan</li>
        <li>Nordic Countries</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))




//Component in other file MyInfo.js
import React from "react"
import ReactDOM from "react-dom"

import MyInfo from "./components/MyInfo"

ReactDOM.render(<MyInfo />, document.getElementById("root"))



//Parent & Child Components
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

