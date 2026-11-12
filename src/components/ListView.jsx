import ShopItem from "./ShopItem";

const ListView = (props) => {
  const { items } = props;

  return (
    <ul className="listView">
      {items.map((item, index) => (
        <ShopItem className="listView" product={item} key={index} />
      ))}
    </ul>
  );
};

export default ListView;
