import React from "react";
const Footer=()=>{
    return(
        <div className="section">
          <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 mb-5 mb-lg-0">
                        <h3 className="h3">contact</h3>
                         
                    500 Terry Francois Street  
                    San Fracisco, CA 94158  
                    info@mysite.  
                    123-456-7890
                     
                    <button>Get a Quote</button>
                    </div>
                    <div class="col-lg-5 mb-5 mb-lg-0">
                        <h3 className="h3">Be in the know</h3>
                         
                    I'm a paragraph. Click here to add your own text 
                      and edit me. Let your users get to know you.  
                           
                         Email  <input style={{borderRadius:"10px"}}type="text"/>
                        <button>Submit</button> 
                    </div>
                    <div class="col-lg-2 mb-5 mb-lg-0">
                        <h3 className="h3">Menu</h3>
                         
                    Home  
                    Services  
                    About  
                    Materials  
                    Resources  
                    Contact 
                     
                    FAQ 
                    </div>
                    <div class="col-lg-2 mb-5 mb-lg-0">
                        <h3 className="h3">Follow us on</h3>
                         
                    Facebook  
                    LinkedIn  
                    Twitter 
                    </div>
                    <p>&nbsp;</p>
                </div>
                <div class="row" >
                    <div class="col-lg-8">
                        © 2022 WeSendit Media AG - All rights reserved.
                    </div>
                    <div class="col-lg-2">
                        <a href="">Legal Notice</a>
                    </div>
                    <div class="col-lg-2">
                        <a href="">Privacy Policy</a>                                                
                    </div>
                </div>
            </div>            
        </footer>
        </div>
    )
}
export default Footer;