import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          {/* Column 1: About */}

          <div className="col-12 col-lg-12 mb-4 footer-text-title">
            <h1> <span className='footer-main-text'>HAVE A QUESTION?</span> <br />WE ANSWER YOU!</h1>
          </div>

          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark">Home</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Features</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Pricing</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <div>
              <a href="#!" className="text-dark me-4">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href="#!" className="text-dark me-4">
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a href="#!" className="text-dark me-4">
                <i className="bi bi-google"></i> Google
              </a>
              <a href="#!" className="text-dark">
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-dark text-white">
         Your Company. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer