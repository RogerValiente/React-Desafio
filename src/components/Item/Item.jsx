import ItemCount from "../ItemCount/index";
import "./styles.css";

const Item = ({ producto, clickOnItem }) => {
  const onAdd = () => alert("Se agrego el producto al carrito");
  return (
    <div
      className="card cardProducto"
      style={{ width: "18rem" }}
      onClick={() => clickOnItem(producto.id)}
      key={producto.id}
    >
      <div className="card-body">
        <a href="../../App.jsx">
          <img
            style={{ borderRadius: "7px" }}
            src={producto.imagen}
            width="240"
            height="200"
            alt="Pasteleria"
          />
        </a>
        <h3 className="card-title text-center">{producto.nombre}</h3>
        <p className="card-text">{producto.descripcion}</p>
        <p className="font-weight-bold">Precio: {producto.precio}</p>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Item;
