import React,{Component} from 'react';
import Advertise from "./advertise/Advertise"
import Benefit from "./benefits/Benefit"
import BestSeller from "./best-seller/BestSeller"
import BigProduct from "./big-product/BigProduct"
import DealOfTheDay from "./deal-of-the-day/DealOfTheDay"
import Subcribe from "./subcribe/Subcribe";
import RecentProduct from "./recent-product/RecentProduct"
import NewProduct from "./new-product/NewProduct";
import PopularNew from "./popular-new/PopularNew";
class Home extends Component{
  render(){
    return(
      <div className="container-fluid">
        <Advertise/>
        <Benefit/>
        <NewProduct/>
        <BigProduct/>
        <RecentProduct/>
        <DealOfTheDay/>
        <BestSeller/>
        <PopularNew/>
        <Subcribe/>
      </div>
    )
  }
}
export default Home;
