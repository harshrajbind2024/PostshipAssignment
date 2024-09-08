
import React from "react";
import Chart from "./Chart";
function Performance() {
    return ( <>
     <h2>Instant Dive into Your Performance Metrics</h2>
     <div className="metrics-tabs">
            <ul>
              <li>Lifetime</li>
              <li>Last Week</li>
              <li>Last Month</li>
              <li>Last Year</li>
            </ul>
            <input type="text" placeholder="Customize Time Line" />
          </div>


           <section className="performance-metrics">
         
            <Chart/>

          {/* <div className="shipment-updates">
            <h3>Shipment Updates</h3>
            <p>Total Orders: 394</p>
     
            <div className="pie-chart">
              <div className="circle" >
                <div className="slice" style={{ backgroundColor: '#FF9898' }}></div>
                <div className="slice" style={{ backgroundColor: '#571010' }}></div>
                <div className="slice" style={{ backgroundColor: '#FFEAEA' }}></div>
                <div className="slice" style={{ backgroundColor: '#FFB88C' }}></div>
              </div>

  
            </div>
            <div className="total-orders">
             
              <p>Pending E</p>
            </div>
          </div> */}
          
          <div className="star-facts">
            <h3>Star Facts about your orders!!!</h3>
            <p>There are a shipments that have been in out for delivery for more than 3 days</p>
            <p>There are 5 shipments in exception right now</p>
            <p>The maximum chargebacks are from Miami.</p>
            <button>Check Orders Page</button>
          </div>
         
          <div className="tracking-page-views">
            <h3>Tracking Page Views Vs Orders</h3>
            <p>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
            
            <div className="orders" id="orders4">
              <p>Onders</p>
              <h3>80</h3>
            </div>

            <div className="tracking-page-views" id="bg44">
              <p>Tracking Page Views</p>
              <h3>44</h3>
            </div>

          </div>


        </section>
    </> );
}

export default Performance;