import logo from './logo.svg';
import './App.css';
import ProductForm from './components/ProductForm'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AllProducts from './components/AllProducts'
import ViewProduct from './components/ViewProduct'
import EditProduct from './components/EditProduct'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ProductForm />
          </Route>
          <Route exact path="/:id">
            <ViewProduct />
          </Route>
          <Route path="/:id/edit">
            <EditProduct />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
