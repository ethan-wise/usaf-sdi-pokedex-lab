//main page, global header, routes between pages
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import PokeInfo from "./pages/PokeInfo";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/pokeInfo">
          <PokeInfo />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
