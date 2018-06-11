import React, { Component } from "react";
import Link from "next/link";
import classNames from 'classnames'
import { Config } from "../config.js";

const linkStyle = {
    marginRight: 15
};

class Menu extends Component {
  constructor() {
      super();
      this.state = {
        navTop: true,
        navMiddle: false,
        smallImage: false,
        scrollPadding: false
      }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({
        navTop: false,
        navMiddle: true,
        smallImage: true,
        scrollPadding: true,
      })
    }
    else {
      this.setState({
        navTop: true,
        navMiddle: false,
        smallImage: false,
        scrollPadding: false
      })
    }
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
    let navStyles = classNames({
      'navbar': true,
      'has-shadow': true,
      'is-spaced': true,
      'slideUp': true,
      'nav-middle': this.state.navMiddle,
      'nav-top': this.state.navTop,
    })

    let brandImageStyles = classNames({
      'small-image': this.state.smallImage
    })

    let scrollPadding = classNames({
      'scroll-padding': this.state.scrollPadding
    })

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
        <nav id="banner">
            <div className="banner-demo">
              <div className="container">
              <nav className="level desktop-level" style={{ height: '100%'}}>
                  <div className="level-left">
                  <p className="level-item"><a><i className="fas fa-phone fa-flip-horizontal"></i> +1 (806) 888-8888</a></p>
                  <p className="level-item"><a><i className="fas fa-envelope"></i> mail@leelewisco.com</a></p>
                  </div>
                  <div className="level-right">
                  <p className="level-item"><a><i className="fab fa-lg fa-google-plus-square"></i></a></p>
                  <p className="level-item"><a><i className="fab fa-lg fa-facebook-square"></i></a></p>
                  <p className="level-item"><a><i className="fab fa-lg fa-twitter-square"></i></a></p>
                  </div>
                </nav>
                <nav className="level is-mobile mobile-level" style={{ height: '100%'}}>
                  <div className="level-left">
                  <p className="level-item"><a><i className="fas fa-phone fa-flip-horizontal"></i> +1 (806) 888-8888</a></p>
                  </div>
                  <div className="level-right">
                  <p className="level-item"><a><i className="fas fa-envelope"></i> mail@leelewisco.com</a></p>
                  </div>
                </nav>
              </div>
            </div>
          </nav>
          <div className="Navwrapper">
          <nav className={navStyles}>
            
            <div className="container">
            
              <div className="navbar-brand">
                <Link href="/">
                  <a className="navbar-item">
                  <img className={brandImageStyles}src="https://res.cloudinary.com/devhound/image/upload/v1528454307/lee-lewis-logo_urbjri.png" />
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
          </div>

             
      </React.Fragment>
    )
  }


}

export default Menu;
