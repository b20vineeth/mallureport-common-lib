import React, { Component } from 'react' 

class HeaderPanel extends Component {
  constructor(props) {
    super(props);


  }
   
  
  
  render() {
    

    return (

      <React.Fragment>
         <header className="top-bar js-top-bar top-bar__network _fixed">
        <div className="wmx12 mx-auto grid ai-center h100" role="menubar">
          <div className="-main grid--cell">
            <a href="#tags#" className="left-sidebar-toggle p0 ai-center jc-center js-left-sidebar-toggle" role="menuitem" aria-haspopup="true" aria-controls="left-sidebar" aria-expanded="false"><span className="ps-relative" /></a>
            <div className="topbar-dialog leftnav-dialog js-leftnav-dialog dno">
              <div className="left-sidebar js-unpinned-left-sidebar" data-is-here-when="sm" data-can-be="left-sidebar" />
            </div>
            <a href="#" className="-logo js-gps-track" data-gps-track="top_nav.click({is_current:false, location:24, destination:8})">
              Purple Admin
            </a>
          </div>
          <ol className="list-reset grid gs4" role="presentation">
            <li className="grid--cell">
              <a href="#tags#" className="-marketing-link js-gps-track js-products-menu" aria-controls="products-popover" data-controller="s-popover" data-action="s-popover#toggle" data-s-popover-placement="bottom" data-s-popover-toggle-class="is-selected" data-gps-track="top_nav.products.click({location:24, destination:1})" data-ga="[&quot;top navigation&quot;,&quot;products menu click&quot;,null,null,null]">
                Products
              </a>
            </li>
            <li className="grid--cell md:d-none">
              <a href="#teams/customers" className="-marketing-link js-gps-track" data-gps-track="top_nav.products.click({location:24, destination:7})" data-ga="[&quot;top navigation&quot;,&quot;customers menu click&quot;,null,null,null]">Customers</a>
            </li>
            <li className="grid--cell md:d-none">
              <a href="#teams/use-cases" className="-marketing-link js-gps-track" data-gps-track="top_nav.products.click({location:24, destination:8})" data-ga="[&quot;top navigation&quot;,&quot;use cases menu click&quot;,null,null,null]">Use cases</a>
            </li>
          </ol>
          <div className="s-popover ws2 p6" id="products-popover" role="menu" aria-hidden="true">
            <div className="s-popover--arrow" />
            <ol className="list-reset s-anchors s-anchors__inherit">
              <li>
                <a href="#questions" className="d-block py6 px6 bar-sm h:bg-black-100 js-gps-track" data-gps-track="top_nav.products.click({location:24, destination:2})" data-ga="[&quot;top navigation&quot;,&quot;public qa submenu click&quot;,null,null,null]">
                  <span className="fs-body1 d-block">Stack Overflow</span>
                  <span className="fs-caption d-block fc-light">Public questions and answers</span>
                </a>
              </li>
              <li>
                <a href="#teams" className="d-block py6 px6 bar-sm h:bg-black-100 js-gps-track" data-gps-track="top_nav.products.click({location:24, destination:3})" data-ga="[&quot;top navigation&quot;,&quot;teams submenu click&quot;,null,null,null]">
                  <span className="fs-body1 d-block">Teams</span>
                  <span className="fs-caption d-block fc-light">Private questions and answers for your team</span>
                </a>
              </li>
              <li>
                <a href="#enterprise" className="d-block py6 px6 bar-sm h:bg-black-100 js-gps-track" data-gps-track="top_nav.products.click({location:24, destination:4})" data-ga="[&quot;top navigation&quot;,&quot;enterprise submenu click&quot;,null,null,null]">
                  <span className="fs-body1 d-block">Enterprise</span>
                  <span className="fs-caption d-block fc-light">Private self-hosted questions and answers for your
                    enterprise</span>
                </a>
              </li>
              <li className="bt bc-black-3 mln6 mrn6 mt6 pt6 px6">
                <a href="#talent" className="d-block py6 px6 bar-sm h:bg-black-100 js-gps-track" data-gps-track="top_nav.products.click({location:24, destination:5})" data-ga="[&quot;top navigation&quot;,&quot;talent submenu click&quot;,null,null,null]">
                  <span className="fs-body1 d-block">Talent</span>
                  <span className="fs-caption d-block fc-light">Hire technical talent</span>
                </a>
              </li>
              <li>
                <a href="#advertising" className="d-block py6 px6 bar-sm h:bg-black-100 js-gps-track" data-gps-track="top_nav.products.click({location:24, destination:6})" data-ga="[&quot;top navigation&quot;,&quot;advertising submenu click&quot;,null,null,null]">
                  <span className="fs-body1 d-block">Advertising</span>
                  <span className="fs-caption d-block fc-light">Reach developers worldwide</span>
                </a>
              </li>
            </ol>
          </div>
          <ol className="overflow-x-auto ml-auto -secondary grid ai-center list-reset h100 user-logged-out" role="presentation">
            <li className="-ctas">
              <a href="/logout"> <i className="fas fa-power-off" /></a>
            </li>
          </ol>
        </div>
      </header>

      </React.Fragment>

 
    )
  }
} 
export default HeaderPanel;