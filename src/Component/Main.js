import React from "react";
import '../All.css';
function Main() {
    return ( 
        <>
                 <main className="main">

       
                 <h2>Discover the Heart of Our Functionality</h2>
        <section className="functionality">
         
          <div className="card">
            <h3>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h3>
            <p>Immerse your customers in a branded experience by personalizing the colors on your tracking page.</p>
            <div className="color-picker">
          
              <label htmlFor="accent-color">Accent Color</label>
              <input type=" text" placeholder="#FF9898" />
              <input type="color" id="accent-color" value="#FF9898" />

              <label htmlFor="text-color">Text Color</label>
              <input type=" text" placeholder="#571010" />
              <input type="color" id="text-color" value="#571010" />

              <label htmlFor="background-color">Background Color</label>
              <input type=" text" placeholder="#FFEAEA" />
              <input type="color" id="background-color" value="#FFEAEA" />
            </div>

            <button>Preview</button> <span> </span>
            <button>Apply Colors</button>
          </div>

           <div>
           <div className="card">
            <h3>Exclusive Onboarding Support for High-Volume Brands</h3>
            <p>Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.</p>
            <button>Schedule A Call</button>
          </div>
          <div className="card">
            <h3>Explore Our Integrated Ecosystem</h3>
            <p>Discover a variety of popular integrations tailored for your convenience.</p>
            <div className="integrations">
              <img src="https://www.paypal.com/favicon.ico" alt="Paypal Logo" />
              <img src="https://www.star.com/favicon.ico" alt="Star Logo" />
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook Logo" />
              <img src="https://www.google.com/favicon.ico" alt="Google Logo" />
              <img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn Logo" />
            </div>
            <button>Explore Integrations</button>
          </div>
           </div>

        

          <div className="card">
            <h3>Seamlessly Integrate Custom HTML Elements</h3>
            <p>Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
            <label htmlFor="html-link">HTML Link</label>
             <br/>
            <textarea  style={{ height: 200,  }} id="html-link" placeholder="Value  "> </textarea>
             <br/>
            <button>Preview</button> <span> </span>
            <button>Apply changes</button>
          </div>


       

        </section>
      </main>
        </>
     );
}

export default Main;