import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class EditCustomer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      businessName:"",
      contactName:"",
      Phone:"",
      Email:"",
      deliveryAddress:"",
      keyedEntry:false,
      earliestArrival:"",
      latestArrival:"",
      deliveryContactName:"",
      deliveryContactPhone:"",
      deliveryNotes:""
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/customers/'+this.props.match.params.id)
    .then(res=>{
      this.setState({
        businessName:res.data.businessName,
        contactName:res.data.contactName,
        Phone:res.data.Phone,
        Email:res.data.Email,
        deliveryAddress:res.data.deliveryAddress,
        keyedEntry:res.data.keyedEntry,
        earliestArrival:res.data.earliestArrival,
        latestArrival:res.data.latestArrival,
        deliveryContactName:res.data.deliveryContactName,
        deliveryContactPhone:res.data.deliveryContactPhone,
        deliveryNotes:res.data.deliveryNotes
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

    render(){
        return(
            <div>
          <div className="ui items">
            <div className="item">
              <div className="middle aligned content">
                <div className="ui left floated">
                  <NavLink to="/customers">Back</NavLink>
                  <h1>
                    <b>
                      <i />
                        Edit a customer
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

export default EditCustomer;