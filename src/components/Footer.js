import React from "react";
const Footer = () => {
  return (
    <div className="section footer-div">
      <footer className="footer text-center">
        
          <div className="row">
            <div className="col-lg-4">
              <h3 className="h3">contact</h3>
              500 Terry Francois Street, <br/>San Fracisco, CA 94158 <br/> info@mysite.<br/>
              123-456-7890<br/>
              <button className="style-button-1">Get a Quote</button>
            </div>
            <div className="col-lg-4">
              <h3 className="h3">Be in the know</h3>
              Message:<br/> <textarea>I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.</textarea>  Email: <br/>
              <input style={{ borderRadius: "10px" }} type="text" /><br/>
              <button className="style-button-1">Send Message</button>
            </div>
            <div style={{"display": "inline-grid", "width":"12%"}}>&nbsp;</div>
            <div className="col-lg-2">
              <h3 className="h3">Menu</h3>
              AboutUs <br/> 
              Resources <br/> 
              Contact <br/> 
              More <br/>
            </div>
            <div className="col-lg-3" >
              <h3>Follow us on:</h3>
              Facebook <br/>
              LinkedIn <br/>
              Twitter <br/>
            </div>
          </div>
          <p>&nbsp;</p>
          <div className="row" style={{"borderTop":"1px solid #444", "marginTop":"1rem"}}>
            <div className="col-lg-6">
              © 2022 WeSendit Media AG - All rights reserved.
            </div>
            <div className="col-lg-3">
              <a href="">Legal Notice</a>
            </div>
            <div className="col-lg-3">
              <a href="">Privacy Policy</a>
            </div>
          </div>
        
      </footer>
    </div>
  );
};
export default Footer;
