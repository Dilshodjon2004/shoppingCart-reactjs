import GoodItem from "./GoodItem";

const GoodList = (props) => {
  const { goods = [], addToBasket } = props;

  if (!goods.length) {
    return <h3>Nothing found</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

export default GoodList;
