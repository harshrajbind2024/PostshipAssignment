import React from "react";
import '../All.css';
function Welcome() {
    return (
        <>
         
<h2>Welcome, John Mathew!!</h2>
         <section className="welcome">



<div className="order-sync">
  <p>Order Sync Successfull</p>
  <p>Your order details from the last 30 days have been successfully synced. Check them out now!</p>
  <button>Explore Your Orders</button>
</div>

<div id="customer-notification">
  <p>Customize Customer Notification</p>
  <p>Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
  <button>Configure Notifications</button>
</div>
<div id="tracking-link">
  <p>Your Tracking Link has been generated</p>
  <p>Include the Link to Your Store's Navigation Menu</p>
  <button>Copy Link</button><span> </span>
  <button>Go To Navigation Menu</button>
</div>
</section>
        </>
      );
}

export default Welcome;