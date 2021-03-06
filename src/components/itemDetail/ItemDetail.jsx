import ItemCount from "../ItemCount/index";
import "./styles.css";

const ItemDetail = ({ producto }) => {
  const onAdd = () => alert("Se agrego el producto al carrito");
  return (
    <div style={{ width: "60rem" }}>
      <div className="card  bg-danger">
        <div className="card-body">
          <img
            class="card-img-top"
            style={{ borderRadius: "7px" }}
            src={producto.imagen}
            width="320"
            height="400"
            alt="Pasteleria"
          />
          <h3 className="card-title text-center text-white">
            {producto.nombre}
          </h3>
          <p className="card-text text-white font-weight-bold">
            {producto.descripcion}
          </p>
          <p className="card-text text-white">
            Ingredientes: {producto.ingredientes}
          </p>
          <h3 className="card-title text-center text-white">
            {producto.receta}
          </h3>
          <p className="font-weight-bold text-white">
            Precio: {producto.precio}
          </p>
          <p className="font-weight-bold text-white">Stock: {producto.stock}</p>
          <div>
            <h3 className="card-title text-center text-white">
              CAJA MAS DETALLE
            </h3>
            <img
              class="card-img-top"
              style={{ borderRadius: "7px" }}
              src={producto.detalle}
              width="320"
              height="400"
              alt="Pasteleria"
            />
          </div>
          <div className="card-body">
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
