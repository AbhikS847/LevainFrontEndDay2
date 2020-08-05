import React from 'react';
import {NavLink} from 'react-router-dom';

class Orders extends React.Component {
  render() {
    return (
      <div>
      <nav class="navbar justify-content-between">
  <NavLink to="/orders" className="nav-link" activeClassName="nav-link-active"><h1>Orders</h1></NavLink>
  <form class="form-inline">
    <NavLink to="/order/search"><input class="form-control mr-sm-2 input-lg" type="search" placeholder="Search" aria-label="Search" /></NavLink>
    <NavLink to="/order/add" className="nav-link mr-sm-2" activeClassName="nav-link-active"><h1><i className="icon plus small"></i></h1></NavLink>
  </form>
</nav>
      </div>
    );
  }
}

export default Orders;
