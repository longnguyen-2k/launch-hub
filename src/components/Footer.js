export default function Footer() {
    return (
      <footer>
        <div className="row">
          <div className="col-3">
            <div className="footer__highlight">
              <h2>Contact Us</h2>
              <p>Email: info@example.com</p>
              <p>Phone: 555-555-5555</p>
            </div>
          </div>
          <div className="col-3">
            <div className="footer__highlight">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="footer__subscribe">
              <h2>Subscribe</h2>
              <p>Stay up-to-date with our latest news and offers.</p>
              <form>
                <input type="email" placeholder="Enter your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  