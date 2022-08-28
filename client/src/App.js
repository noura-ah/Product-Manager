import logo from './logo.svg';
import './App.css';
import ProductForm from './components/ProductForm'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AllProducts from './components/AllProducts'
import ViewProduct from './components/ViewProduct'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Route exact path="/">
            <ProductForm/>
            
          </Route>
          
          <Route path="/:id">
            <ViewProduct/>
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
