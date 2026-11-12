import ShopCard from "./ShopCard";

const CardsView = (props) => {
  const { cards } = props;

  return (
    <ul className="shopCard">
      {cards.map((item, index) => (
        <ShopCard className="shopCard" product={item} key={index} />
      ))}
    </ul>
  );
};

export default CardsView;
