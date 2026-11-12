import Button from "./Button";

const ShopItem = (props) => {
  const { className, product } = props;

  return (
    <li className={`${className}__item`}>
      <img
        className={`${className}__img`}
        src={product.img}
        alt={`sneakers ${product.color}`}
      />

      <h3 className={`${className}__title`}>{product.name}</h3>
      <h5 className={`${className}__color`}>{product.color}</h5>
      <span className={`${className}__price`}>${product.price}</span>
      <Button  className={className} />
    </li>
  );
};

export default ShopItem;
