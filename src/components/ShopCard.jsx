import Button from "./Button";

const ShopCard = (props) => {
  const { className, product } = props;

  return (
    <>
      <li className={`${className}__item`}>
        <h3 className={`${className}__title`}>{product.name}</h3>
        <h5 className={`${className}__color`}>{product.color}</h5>
        <img
          className={`${className}__img`}
          src={product.img}
          alt={`sneakers ${product.color}`}
        />
        <div className={`${className}__footer`}>
          <span className={`${className}__price`}>${product.price}</span>
          <Button className={className} />
        </div>
      </li>
    </>
  );
};

export default ShopCard;
