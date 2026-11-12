const Button = (props) => {
  const { className } = props;

  return <button className={`${className}__button button`}>Add to Cart</button>;
};

export default Button;
