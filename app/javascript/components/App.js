import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HelloWorld from "./HelloWorld";
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
          <Router>
            <Routes>
            <Route exact path="/" element={ ("Home!")} />
            <Route exact path="/hello" element={ <HelloWorld greeting="Friend" />} />
            </Routes>
          </Router>
      </React.Fragment>
    );
  }
}

export default App
