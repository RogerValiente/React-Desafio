import React, { useState, useEffect } from "react";
import listaProductos from "../../data/dataProductos";
import ItemList from "../../components/itemList/index";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const filtrarProductosPorId = (id) => {
    if (id === "todos") {
      setProductos(listaProductos);
      return;
    }
    return setProductos(productos.filter((p) => p.id === id));
  };

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(listaProductos), 2000);
    });

    myPromise.then((resultado) => setProductos(resultado));
  }, []);

  return (
    <div className="container card-columns">
      <ItemList productos={productos} clickOnCard={filtrarProductosPorId} />
    </div>
  );
};

export default ItemListContainer;
