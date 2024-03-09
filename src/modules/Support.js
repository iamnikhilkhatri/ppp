import React from 'react';
import { Support1, Support2, Support3 } from '../assets/svg';
import { SearchHeader } from '../common/components/Utils';
import './index.scss';

export default function Support() {
  return (
    <div className="dashboard-wrapper row gy-4">
      <div className="col-12 mb-4">
        <SearchHeader enableTitle={false} />
      </div>
      <div className="footer-section">
        <div className="card-item">
          <div className="d-flex flex-column">
            <h3>Withdraw</h3>
            <p>GOLD/FULL SIP</p>
          </div>
          <Support1 height="128" width="128" />
        </div>
        <div className="card-item">
          <div className="d-flex flex-column">
            <h3>FAQ</h3>
            <p>Find your questions or ask questions</p>
          </div>
          <Support2 height="128" width="128" />
        </div>
        <div className="card-item">
          <div className="d-flex flex-column">
            <h3>Wallet</h3>
            <p>Find your questions or ask questions</p>
          </div>
          <Support3 height="128" width="128" />
        </div>
      </div>
      <div className="col-12">
        <div className="account-setting">
          <form className="mb-4">
            <h3 className="form-title">Contact Us</h3>
            <div className="form-wrapper">
              <div className="item-wrapper">
                <label>Your Full Name</label>
                <input type="text" placeholder="Enter Your Full Name" />
              </div>
              <div className="item-wrapper">
                <label>Phone Number</label>
                <input type="text" placeholder="Enter Your Phone" />
              </div>
              <div className="item-wrapper">
                <label>Email Address</label>
                <input type="text" placeholder="Enter Your Email" />
              </div>
              <div className="item-wrapper">
                <label>Location</label>
                <input type="text" placeholder="Enter Your Location" />
              </div>
              <div className="item-wrapper">
                <button type="button" className="button-primary">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
