import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from './container/Blog/Blog';
import ProductDetails from './container/Latest/ProductDetails';
import ProductList from './container/Latest/ProductList';
import Login from './container/Pages/Login';
import Cart from './container/Pages/Cart';
import Conformation from './container/Pages/Conformation';
import ProductCheckout from './container/Pages/ProductCheckout';
import Element from './container/Pages/Element';
import BlogDetails from './container/Blog/BlogDetails';
import Contact from './container/Contact/Contact';
import Home from './container/Home/Home';
import Shop from './container/Shop/Shop'
import About from './container/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch> 
        <Route path={"/"} exact component={Home} />
        <Route path={"/Shop"} exact component={Shop} />
        <Route path={"/About"} exact component={About} />
        <Route path={"/ProductList"} exact component={ProductList} />
        <Route path={"/ProductDetails"} exact component={ProductDetails} />
        <Route path={"/Blog"} exact component={Blog} />
        <Route path={"/BlogDetails"} component={BlogDetails} />
        <Route path={"/Login"} exact component={Login} />
        <Route path={"/Cart"} exact component={Cart} />
        <Route path={"/Element"} exact component={Element} />
        <Route path={"/Conformation"} exact component={Conformation} />
        <Route path={"/ProductCheckout"} exact component={ProductCheckout} />
        <Route path={"/Contact"} exact component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
