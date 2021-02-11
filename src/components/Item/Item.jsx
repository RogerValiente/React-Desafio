import ItemCount from "../ItemCount/index";
import "./styles.css";

const Item = ({ producto, clickOnItem }) => {
  const onAdd = () => alert("Se agrego el producto al carrito");
  return (
    <div className="card mb-4 cardProducto" style={{ width: "18rem" }}>
      <div className="align-items-center card-body">
        <img
          className="card-img-top"
          style={{ borderRadius: "7px" }}
          src={producto.imagen}
          width="240"
          height="200"
          alt="Pasteleria"
        />
        <h3 className="card-title text-center">{producto.nombre}</h3>
        <p className="card-text">{producto.descripcion}</p>
        <div></div>
        <p className="font-weight-bold texto">Precio: {producto.precio}</p>
        <button
          className="botonProd btn btn-dark"
          onClick={() => clickOnItem(producto.id)}
          key={producto.id}
        >
          Ver mas
        </button>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Item;
