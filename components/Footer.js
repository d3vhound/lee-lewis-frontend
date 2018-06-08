import Link from "next/link";

const Footer = () => (
  <footer className="footer Site-footer">
    <div className="container">
      
        <nav className="level footer-level has-text-centered">
        <p className="level-item has-text-centered">
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info">Home</a>
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info">Services</a>
        </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Portfolio</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">History</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Contact us</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Subcontractors</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Leed</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">News</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Careers</a>
          </p>
          </nav>
      
      <div className="columns" style={{marginTop: '3rem'}}>
        <div className="column is-6">
          <img src="https://res.cloudinary.com/devhound/image/upload/v1528454307/lee-lewis-logo_urbjri.png" style={{ height: '30px' }} />
          <div class="separator"></div>
        </div>
        <div className="column is-3">
          <p className="footer-link-title">
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
          <div class="separator"></div>
          <p>
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
          <p>
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
          <p>
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
          <p>
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
        </div>
        <div className="column is-3">
          <p className="footer-link-title">
            <Link href="/">
              <a>Contact</a>
            </Link>
          </p>
          <div class="separator"></div>
          <p>LUBBOCK: 806.797.8400</p>
          <p>DALLAS: 972.818.0700</p>
          <p>AUSTIN: 512.369.3921</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
