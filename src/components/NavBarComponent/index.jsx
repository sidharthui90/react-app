import React from "react";
import "./index.css";

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bglight fixed-top">
      <div className="container">
        <span>
          <a href="/#" className="navbar-brand"  >Shopping</a>
          <a href="/transactions" className="navbar-brand" >All Transactions</a>
          <a href="/rewards" className="navbar-brand" >Rewards</a></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}