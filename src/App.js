import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import Today from './components/Today';
import Production from './components/Production';
import AddProduct from './components/Products/AddProducts';
import AddOrder from './components/Orders/AddOrder';
import Navbar from './components/Navbar';
import './App.css';
import SearchOrder from './components/Orders/SearchOrder';

class App extends React.Component{
    render(){
        return(
            <div className="App">
            <Router>
            <div className="row" id="appHeader">
                <div className="col-auto py-3 px-3">
                    <Navbar />
                </div>
                <div className="col px-5 py-3" id="displaySide">
                <Route path="/products" exact component = {Products}></Route>
                <Route path="/orders" exact component = {Orders}></Route>
                <Route path="/today" exact component = {Today}></Route>
                <Route path="/production" exact component = {Production}></Route>
                <Route path="/product/new" exact component = {AddProduct}></Route>
                <Route path="/order/add" exact component = {AddOrder}></Route>
                <Route path="/order/search" exact component = {SearchOrder}></Route>
                </div>
            </div>
            </Router>
            </div>
        )
    }
}

export default App;