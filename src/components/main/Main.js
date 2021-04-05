//main page, global header, routes between pages, sends the name of the pokemon to the pokeinfo page
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
        <Route path="/pokemon/:name">
          <PokeInfo />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
