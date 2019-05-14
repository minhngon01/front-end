import React from 'react';
import jwt from 'jsonwebtoken';
export const UserContext = React.createContext();

export default class UserProvider extends React.Component {
  
  constructor(props){
    super(props);
   
    localStorage.setItem("checkLogin",false);
    this.state={
      isLogin : false,
      user_firstname : "",
      user_lastname  : "",
      user_phone     : "",
      user_email     : "",
      user_address   : "",
      is_female      : "",
      order: [],
      dispatchLogin : (JsonWebToken) => {
        var decoded = jwt.decode(JsonWebToken);
        var {user_email, user_phone, is_female, user_firstname, user_lastname, user_address} = decoded;
        this.setState({
          isLogin : true,
          user_firstname : user_firstname,
          user_lastname  : user_lastname,
          user_phone     : user_phone,
          user_email     : user_email,
          user_address   : user_address,
          is_female      : is_female,

          /*
            set order here
          */
        })
        var x = localStorage.getItem("checkLogin");
        localStorage.setItem("checkLogin",true);
        localStorage.setItem("token", JsonWebToken);
      },
      dispatchLogout : () => {
        this.setState({
          isLogin : false,
          user_firstname : "",
          user_lastname  : "",
          user_phone     : "",
          user_email     : "",
          user_address   : "",
          is_female      : "",
          order: [],
        })
        var x = localStorage.getItem("checkLogin");
        localStorage.setItem("checkLogin",false);
        localStorage.removeItem("token");
      },
      //
      //
      // addToCart = ( product_id ) => {
      //
      // },
      //
      // addToWishList = (product_id) => {
      //
      // },
      //
      // deleteFromWishList = (product_id) => {
      //
      // },
      //
      // deleteFromCart = (product_id) => {
      //
      // },
      //
      // processPayment = () => {
      //
      // },
    }
  }

  componentDidMount(){
    if(localStorage.token){
      var decoded = jwt.decode(localStorage.token);
      var {user_email, user_phone, is_female, user_firstname, user_lastname, user_address} = decoded;
      this.setState({
        isLogin : true,
        user_firstname : user_firstname,
        user_lastname  : user_lastname,
        user_phone     : user_phone,
        user_email     : user_email,
        user_address   : user_address,
        is_female      : is_female,
      })
    }
  }
  

  render(){
    
    return (
      <div>    
      <UserContext.Provider value = {this.state} >      
        {this.props.children}  
      </UserContext.Provider>
      
      </div>
     
      
    )
  }
}




