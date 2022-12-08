import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Menu from './components/menu'
import Fotter from './components/fotter'


function App() {
  return (
    <BrowserRouter>

      <Menu />

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

      <Fotter />

    </BrowserRouter>
  );
}

export default App;