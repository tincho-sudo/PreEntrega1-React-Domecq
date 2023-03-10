import "../styles/itemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div className="greeting">
      <h1 className="text-center">{props.greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
