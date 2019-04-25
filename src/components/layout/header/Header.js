import React,{Component} from 'react';
import Search from './search/Search';
import MenuNav from './menu-nav/MenuNav';
import Authentication from './authentication/Authentication';

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      triggerScrollBar: false,
      triggerPrevious : -1,
    }
  }

  componentDidMount(){
    let h1 = parseInt(this.refs.header.offsetHeight);
    console.log(h1);
    window.addEventListener('scroll', this._calcScroll.bind(this,h1));
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this._calcScroll)
  }
  _calcScroll = (h1) => {
    let _window = window;
    let heightDiff = parseInt(h1);
    let scrollPos = _window.scrollY;
    if (scrollPos > heightDiff ) {
        // here this means user has scrolled past your header,
        // you may rerender by setting State or do whatever
        !this.state.triggerScrollBar && this.setState({
            triggerScrollBar : !this.state.triggerScrollBar,
            triggerPrevious  : scrollPos,
        });
    } else  {
        // here the user has scrolled back to header's territory,
        // it's optional here for you to remove the element on navbar as stated in the question or not
        this.state.triggerScrollBar && this.setState({
          triggerScrollBar : !this.state.triggerScrollBar,
          triggerPrevious  : scrollPos,
        });
    }
}
  render(){
    let setStyle = this.state.triggerScrollBar ? {position : "fixed"} : {position : "relative",height: "200px", display: "flex", flexDirection: "column", justifyContent: "space-around"} ;
    return(
      <div className= "c-navBar__nonFloating">
       <div className="c-navBar mb-2" ref="header" style={setStyle}>
        <Authentication/>
        <Search/>
       </div>
      </div>
    )
  }
}
export default Header;
