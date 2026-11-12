import { Component } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import imagesData from "../imagesData";

class Store extends Component {
  state = {
    viewState: "view_list",
  };

  handleToggle = () => {
    this.setState({
      viewState:
        this.state.viewState === "view_module" ? "view_list" : "view_module",
    });
  };

  render() {
    const { viewState } = this.state;

    return (
      <div className="store">
        <IconSwitch icon={viewState} onSwitch={this.handleToggle} />
        {viewState === "view_list" ? (
          <CardsView cards={imagesData} />
        ) : (
          <ListView items={imagesData} />
        )}
      </div>
    );
  }
}

export default Store;
