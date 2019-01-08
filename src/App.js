import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main } from "./app/main/Main";
import { Header } from "./app/main/Header";
import { Body } from "./app/main/Body";
import { Footer } from "./app/main/Footer";
import { Packages } from "./app/packages/Packages";
import { Customers } from "./app/customers/Customers";
import { Hosting } from "./app/hosting/Hosting";
// import { Practice1 } from './practice/Main';
import "./app/main/Main.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-page">
          <Header />
          <Route exact path="/packages" component={Packages} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/hosting" component={Hosting} />
          <Route exact path="/" component={Body} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
