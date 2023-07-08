const BasketItem = (props) => {
  const { name, id, price, quantity, incrementQuantity, decrementQuantity } =
    props;
  return (
    <li className="collection-item">
      {name} x {quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <i
          className="material-icons basket-icon"
          onClick={() => incrementQuantity(id)}
        >
          add_circle
        </i>
        <i
          className="material-icons basket-icon"
          onClick={() => decrementQuantity(id)}
        >
          do_not_disturb_on
        </i>
        <i
          className="material-icons basket-icon"
          onClick={() => props.removeFromBasket(id)}
        >
          delete_forever
        </i>
      </span>
    </li>
  );
};

export default BasketItem;
