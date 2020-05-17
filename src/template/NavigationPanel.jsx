import React, { Component } from 'react' 

class NavigationPanel extends Component {
  constructor(props) {
    super(props);


  }
   
  
  
  render() {
    

    return (

      <React.Fragment>
         <nav role="navigation">
        <ul className="mainmenu">
          <li><a href>Home</a></li>
          <li><a href>About</a></li>
          <li><a href>Products</a>
            <ul className="submenu">
              <li> <a href> &nbsp;Tops</a></li>
              <li> <a href> &nbsp;Bottoms</a></li>
              <li> <a href> &nbsp;Footwear</a></li>
            </ul>
          </li>
          <li><a href>Contact us</a></li>
        </ul>
      </nav>


      </React.Fragment>

 
    )
  }
} 
export default NavigationPanel;