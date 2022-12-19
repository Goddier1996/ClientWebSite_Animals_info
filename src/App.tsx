import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./components/menu";
import Fotter from "./components/fotter";
import { NotFoundPage } from "./components/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={NotFoundPage} />
      </Switch>

      <Fotter />
    </BrowserRouter>
  );
}

export default App;
