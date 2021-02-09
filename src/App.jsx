import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavBar/index";
import ItemListContainer from "./containers/ItemListContainer/index";

function App() {
  return (
    <div>
      <NavbarComponent />
      <ItemListContainer />
    </div>
  );
}

export default App;
