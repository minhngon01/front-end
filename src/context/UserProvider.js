import {React,Component} from 'react';

const UserContext = React.createContext();

class UserProvider extends Component {
  constructor(props){
    super(props)
    this.state={
      isLogin : false,
      user_firstname : "",
      user_lastname  : "",
      user_phone     : "",
      user_email     : "",
      user_address   : "",
      is_female      : "",
      order: 0,
      dispatchLogin = (JsonWebToken) => {

      },

      dispatchLogout = () => {

      },

      dispatchRegister = () => {

      },

      addToCart = ( product_id ) => {

      },

      addToWishList = (product_id) => {

      },

      deleteFromWishList = (product_id) => {

      },

      deleteFromCart = (product_id) => {

      },

      processPayment = () => {

      },
    }
  }

  componentDidMount(){

  }



  render(){
    return (
      <UserContext.Provider value = {this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
export default UserContext;
