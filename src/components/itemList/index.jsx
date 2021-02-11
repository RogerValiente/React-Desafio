import Item from "../Item/Item";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemList = ({ productos, clickOnCard }) => {
  return (
    <div>
      <div>
        {productos && productos.length < 2 && (
          <button
            className="boton btn btn-dark"
            onClick={() => clickOnCard("todos")}
          >
            Volver
          </button>
        )}
      </div>

      {productos &&
        productos.length > 1 &&
        productos.map((producto, index) => {
          return (
            <Item
              key={producto.id}
              producto={producto}
              clickOnItem={clickOnCard}
            />
          );
        })}

      {productos &&
        productos.length < 2 &&
        productos.map((producto, index) => {
          return (
            <ItemDetail
              key={producto.id}
              producto={producto}
              clickOnItem={clickOnCard}
            />
          );
        })}
    </div>
  );
};

export default ItemList;
