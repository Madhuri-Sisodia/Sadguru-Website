import React from "react";
import Header from "../Header";
import Footer from "../Footer";
const Contact=()=>{
    return(
        <div>
            <Header/>
           
            
  <section class="section page-section" id="contact">
            <div class="container">
                
                <h1 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Us</h1>
             
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
              
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                       
                         <form >
                           
                          <div class="form-floating mb-3">
                                 <input class="form-control" id="name" type="text" placeholder="Enter your name..." />
                                <label for="name">Full name</label>
                        
                        </div>
                           
                            <div class="form-floating mb-3">
                        <input class="form-control" id="email" type="email" placeholder="name@example.com"  />
                        <label for="email">Email address</label>
                               
                            </div>
                           
                            <div class="form-floating mb-3">
                        <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890"  />
                                <label for="phone">Phone number</label>
                       
                            </div>
                         
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}}></textarea>
                                 <label for="message">Message</label>
                                
                            </div>
                           
                             <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                   To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                             </div>
                         
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            
                            <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                         </form>
                    </div>
                </div>
            </div>
        </section> 
       <Footer/>
        </div>
    )
}
export default Contact;