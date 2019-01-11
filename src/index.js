import React from "react";
import ReactDOM from "react-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sideDrawerOpen: false, greeting: "Midan Resturant" };
  }
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {backdrop}
        <SideDrawer show={this.state.sideDrawerOpen} />;
        <main className="main">
          <p>{this.state.greeting}</p>
        </main>
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
