import React from 'react'

function PriceCard() {
  return (
    <div className='wrapper'>
         <div className="card">
    <div className="card_body">
      <div className="card_header">
          <h5 className="card_title">FREE</h5>
          <h2 className="card_price">$0<span class="period">/month</span></h2>
      </div>
      <hr></hr>
      <div className="card_description">
      <ul>
            <li className="list_checked">Single User</li>
            <li className="list_checked">5GB Storage</li>
            <li className="list_checked">Unlimited Public Projects</li>
            <li className="list_checked">Community Access</li>
            <li className="text-muted">Unlimited Private Projects</li>
            <li className="text-muted">Dedicated Phone Support</li>
            <li className="text-muted">Free Subdomain</li>
            <li className="text-muted">Monthly Status Reports</li>
          </ul>
      </div>
      <div className="card_footer">
           <button className="card_btn">BUTTON</button>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card_body">
    <div className="card_header">
          <h5 className="card_title">PLUS</h5>
          <h2 className="card_price">$9<span class="period">/month</span></h2>
      </div>
      <hr></hr>
      <div className="card_description">
      <ul>
            <li className="list_checked"><b>5 Users</b></li>
            <li className="list_checked">50GB Storage</li>
            <li className="list_checked">Unlimited Public Projects</li>
            <li className="list_checked">Community Access</li>
            <li className="list_checked">Unlimited Private Projects</li>
            <li className="list_checked">Dedicated Phone Support</li>
            <li className="list_checked">Free Subdomain</li>
            <li className="text-muted">Monthly Status Reports</li>
          </ul>
      </div>

      <div className="card_footer">
           <button className="card_btn">BUTTON</button>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card_body">
    <div className="card_header">
          <h5 className="card_title">PRO</h5>
          <h2 className="card_price">$49<span class="period">/month</span></h2>
      </div>
      <hr></hr>
      <div className="card_description">
      <ul>
            <li className="list_checked">Unlimited User</li>
            <li className="list_checked">150GB Storage</li>
            <li className="list_checked">Unlimited Public Projects</li>
            <li className="list_checked">Community Access</li>
            <li className="list_checked">Unlimited Private Projects</li>
            <li className="list_checked">Dedicated Phone Support</li>
            <li className="list_checked"><b>Unlimited </b>Free Subdomains</li>
            <li className="list_checked">Monthly Status Reports</li>
          </ul>
      </div>
      <div className="card_footer">
           <button className="card_btn">BUTTON</button>
      </div>
    </div>
  </div>

    </div>
  )
}

export default PriceCard