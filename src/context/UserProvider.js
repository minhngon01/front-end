import React from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';
export const UserContext = React.createContext();

export default class UserProvider extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isLogin : false,
      user_id        : "",
      user_firstname : "",
      user_lastname  : "",
      user_phone     : "",
      user_email     : "",
      user_address   : "",
      is_female      : "",
      token          : "",
      carts: [],
      dispatchLogin : (JsonWebToken) => {
        var decoded = jwt.decode(JsonWebToken);
        var {user_id,user_email, user_phone, is_female, user_firstname, user_lastname, user_address} = decoded;
        this.setState({
          isLogin : true,
          user_id        : user_id,
          user_firstname : user_firstname,
          user_lastname  : user_lastname,
          user_phone     : user_phone,
          user_email     : user_email,
          user_address   : user_address,
          is_female      : is_female,
          token          : JsonWebToken,
          /*
            set order here
          */
        })
        this.state.getListCart(user_id,JsonWebToken);
        localStorage.setItem("token", JsonWebToken);
      },
      dispatchLogout : () => {
        this.setState({
          isLogin : false,
          user_id        : "",
          user_firstname : "",
          user_lastname  : "",
          user_phone     : "",
          user_email     : "",
          user_address   : "",
          is_female      : "",
          token          : "",
          carts: [],
        })
        localStorage.removeItem("token");
      },
      getListCart : (user_id,token) => {
        console.log("@@@@@@@")
        axios({
          method : "get",
          url    : "http://localhost:3003/carts/",
          params   : {
            user_id : user_id,
          },
          headers: {'Authorization': "Bearer " + token}
        })
        .then( res => {
          console.log(res);
          const {data} = res
          data.success && this.setState({carts : data.carts})
        })
      },
      addToCart : ( product_id ) => _ =>{
        axios({
          method : "post",
          url    : "http://localhost:3003/carts/",
          data   : {
            product_id : product_id,
            user_id : this.state.user_id,
          },
          headers: {'Authorization': "Bearer " + this.state.token}
        })
        .then( res => {
          console.log(res);
          const {data} = res
          data.success && this.setState({carts : [...this.state.carts,data.cart_product]})
        })
        // this.setState({order : [...this.state.order,product]})
      },
      deleteFromCart : (product_id) => _ => {
        axios({
          method : "delete",
          url    : "http://localhost:3003/carts/",
          data   : {
            product_id : product_id,
            user_id : this.state.user_id,
          },
          headers: {'Authorization': "Bearer " + this.state.token}

        })
        .then( res => {
          const {data} = res
          console.log("@@",data)
          data.success && this.setState({carts : data.carts})
        })
      },
      addToOrder : (product_id) => _ => {

      }
      //
      // addToWishList = (product_id) => {
      //
      // },
      //
      // deleteFromWishList = (product_id) => {
      //
      // },
      //

      //
      // processPayment = () => {
      //
      // },
    }
  }

  componentDidMount(){
    if(localStorage.token){
      var decoded = jwt.decode(localStorage.token);
      var {user_id,user_email, user_phone, is_female, user_firstname, user_lastname, user_address} = decoded;
      this.setState({
        isLogin : true,
        user_id        : user_id,
        user_firstname : user_firstname,
        user_lastname  : user_lastname,
        user_phone     : user_phone,
        user_email     : user_email,
        user_address   : user_address,
        is_female      : is_female,
        token          : localStorage.token,
      })
      this.state.getListCart(user_id,localStorage.token);
    }
  }



  render(){
    return (
      <UserContext.Provider value = {this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
