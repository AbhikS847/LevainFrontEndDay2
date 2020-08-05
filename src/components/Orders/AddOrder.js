import React from 'react';
import {NavLink} from 'react-router-dom';

class AddOrder extends React.Component{
    render(){
        return(
            <div>
          <div className="ui items">
            <div className="item">
              <div className="middle aligned content">
                <div className="ui left floated">
                  <NavLink to="/orders">Back</NavLink>
                  <h1>
                    <b>
                      <i />
                        Add an order
                    </b>
                  </h1>
                </div>
              </div>
            </div>
          </div>
            </div>
        );
    }
}

export default AddOrder;