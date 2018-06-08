import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";

const linkStyle = {
    marginRight: 15
};

class Menu extends Component {
  constructor() {
      super();
  }

  handleClick = () => {
    const menu = document.querySelector('.navbar-burger');
    let target = menu.dataset.target;
    let $target = document.getElementById(target)

    menu.classList.toggle('is-active')
    $target.classList.toggle('is-active')
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
      const menuItems = this.props.menu.items.map((item, index) => {
        if (item.object === "custom") {
            return (
              
                <Link href={item.url} key={item.id}>
                  <a className="navbar-item mobile-title">{item.title}</a>
                </Link>
              
            );
        }
        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "post";
        return (
          
            <Link
                as={`/${item.object}/${slug}`}
                href={`/${actualPage}?slug=${slug}&apiRoute=${item.object + 's'}`}
                key={item.id}
            >
              <a className="navbar-item mobile-title">{item.title}</a>
            </Link>
          
        );
    });


    return(
      <React.Fragment>
        
          <nav className="navbar placeholder-navbar is-spaced">
          </nav>
          <nav className="navbar is-fixed-top has-shadow is-spaced">
            <div className="container">
              <div className="navbar-brand">
                <Link href="/">
                  <a className="navbar-item">
                  <img src="https://res.cloudinary.com/devhound/image/upload/v1528454307/lee-lewis-logo_urbjri.png" />
                  </a>
                </Link>
                <div className="navbar-burger burger" onClick={this.handleClick} data-target="mobile-menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div id="mobile-menu" className="navbar-menu">

                <div className="navbar-start">
                  <Link href="/">
                    <a className="navbar-item mobile-title">Home</a>
                  </Link>
                  {menuItems}
                </div>

  
              </div>
            </div>
          </nav>

             
      </React.Fragment>
    )
  }


}

export default Menu;
