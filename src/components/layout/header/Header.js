import React,{Component} from 'react';
import Search from './search/Search';
import MenuNav from './menu-nav/MenuNav';
import Authentication from './authentication/Authentication';

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      triggerScrollBar: {position : "relative", display: "flex", flexDirection: "column", justifyContent: "space-around"},
      triggerPrevious : -1,
      paddingTop : {marginTop : "0px"},
    }
  }

  componentDidMount(){
    let sticky  = this.instance.getBoundingClientRect().bottom -8;
    console.log(sticky);
    window.addEventListener('scroll', this._calcScroll.bind(this,sticky));
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this._calcScroll)
  }
  _calcScroll = (sticky) => {


    if (window.pageYOffset >= sticky) {
          !this.state.triggerScroolBar && this.setState({
              triggerScrollBar : {position : "fixed", top:"0"},
              paddingTop : {marginTop : "180px"}
          });
    } else {
          this.state.triggerScrollBar && this.setState({
          triggerScrollBar : {position : "relative", display: "flex", flexDirection: "column", justifyContent: "space-around"},
          paddingTop : {marginTop : "0px"}
      });
    }

    // if (scrollPos > heightDiff ) {
    //     // here this means user has scrolled past your header,
    //     // you may rerender by setting State or do whatever
    //     !this.state.triggerScrollBar && this.setState({
    //         triggerScrollBar : !this.state.triggerScrollBar,
    //         triggerPrevious  : scrollPos,
    //     });x
    // } else  {
    //     // here the user has scrolled back to header's territory,
    //     // it's optional here for you to remove the element on navbar as stated in the question or not
    //     this.state.triggerScrollBar && this.setState({
    //       triggerScrollBar : !this.state.triggerScrollBar,
    //       triggerPrevious  : scrollPos,
    //     });
    // }
}
  render(){
    return(
      <div className= "c-navBar__nonFloating" ref={(el) => this.instance = el} style={this.state.paddingTop}>
       <div className="c-navBar" ref="header" style={this.state.triggerScrollBar}>
        <Authentication/>
        <Search/>
       </div>
      </div>
    )
  }
}
export default Header;
