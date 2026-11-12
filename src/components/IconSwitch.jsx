const IconSwitch = (props) => {
  const { icon, onSwitch } = props;

  return (
    <div className="iconSwitch">
      <button className="iconSwitch__button" onClick={onSwitch}>
        <span className="material-icons">{icon}</span>
      </button>
    </div>
  );
};

export default IconSwitch;
