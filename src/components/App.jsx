import React, { Component } from "react";
import Counters from "./Counters";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="col-lg-8 mx-auto p-4 py-md-5">
        <Navbar />
        <main>
          <h1 className="text-body-emphasis">Get started with React</h1>
          <Counters />
        </main>
      </div>
    );
  }
}

export default App;
