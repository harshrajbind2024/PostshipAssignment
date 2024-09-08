import React from "react";
import './Chart.css';
function Chart() {
    return ( 
        <>
             <div className="container">
      <h1>Shipment Updates</h1>
      <span className="total-orders">Total Orders : 394</span>
      <div className="order-status">
        <button className="status-button">Delivered</button>
        <button className="status-button">Out for delivery</button>
        <button className="status-button">Intransit</button>
        <button className="status-button">Pending</button>
        <button className="status-button">Exception</button>
      </div>
      <div className="pie-chart">
        <div className="pie-chart-container">
          <div className="pie-slice" style={{ backgroundColor: '#FFC107' }} />
          <div className="pie-slice" style={{ backgroundColor: '#FFB300' }} />
          <div className="pie-slice" style={{ backgroundColor: '#FDD835' }} />
          <div className="pie-slice" style={{ backgroundColor: '#F5F5F5' }} />
          <div className="pie-slice" style={{ backgroundColor: '#795548' }} />
          <div className="pie-chart-center">
            <span className="pie-chart-value">40</span>
            <span className="pie-chart-fill">Fill x 36</span>
          </div>
        </div>

        
        <div className="legend">

          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#795548' }} />
            <span className="legend-label">Exception</span>
          </div>

          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#FFB300' }} />
            <span className="legend-label">Intransit</span>
          </div>

          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#FFC107' }} />
            <span className="legend-label">Pending</span>
          </div>

          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#FDD835' }} />
            <span className="legend-label">Delivered</span>
          </div>

          {/* <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#F5F5F5' }} />
            <span className="legend-label">Out for delivery</span>
          </div> */}

        </div>  

      </div>
     
    </div>
        </>
     );
}

export default Chart;