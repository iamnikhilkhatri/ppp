import React from 'react';
import {
  Chevron,
  EmptyWallet,
  Facebook,
  GoldGrey,
  Instagram,
  MoneyBag,
  TrendingDown,
  TrendingUp,
} from '../assets/svg';
import { CustomCard, SearchHeader } from '../common/components/Utils';
import './index.scss';

export default function Transaction() {
  return (
    <div className="dashboard-wrapper row gy-4">
      <div className="col-12 mb-4">
        <SearchHeader enableTitle={false} />
      </div>
      <div className="col-12 col-lg-4">
        <CustomCard
          heading="Total Wallet Balance"
          icon1={<EmptyWallet />}
          icon2={<TrendingDown />}
          text="-5% More than last month"
          type="danger"
          value="1,222"
        />
      </div>
      <div className="col-12 col-lg-4">
        <CustomCard
          heading="Total Interest Received"
          icon1={<MoneyBag />}
          icon2={<TrendingUp />}
          text="+7% More than last month"
          type="success"
          value="1,222"
        />
      </div>
      <div className="col-12 col-lg-4">
        <CustomCard
          heading="Total Interest Received"
          icon1={<GoldGrey />}
          icon2={<TrendingUp />}
          text="+3% More than last month"
          type="success"
          value="1,222"
        />
      </div>
      <div className="col-12 col-lg-8">
        <div className="monthly-summary-wrapper">
          <div className="graph-header">
            <h2>Monthly Summary</h2>
            <div className="dropdown-wrapper flex-column flex-md-row">
              <p className="text-range">Choose range</p>
              <div className="dropdown">
                <p className="text-month">6 Months</p>
                <Chevron />
                <div className="dropdown-list">
                  <button type="button">3 Months</button>
                  <button type="button" className="active">
                    6 Months
                  </button>
                  <button type="button">12 Months</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="mandate-card">
          <h2>E-Mandate</h2>
          <hr />
          <button type="button" className="button-mandate">
            Issue New Mandate
          </button>
          <button type="button" className="button-mandate">
            Review the mandate
          </button>
          <button type="button" className="button-primary">
            Interest Certificate
          </button>
        </div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="transaction-table">
          <div className="table-header">
            <h2>Transactions</h2>
            <p>View All</p>
          </div>
          <table>
            <thead>
              <th>Amount</th>
              <th>Interest</th>
              <th>Gold</th>
              <th>Total</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="info-box">
                    <h3>
                      1,702 <span className="text-type">(Deposit)</span>
                    </h3>
                    <p className="text-date">08/09/2023</p>
                  </div>
                </td>
                <td>
                  <div className="info-box">
                    <h3>152</h3>
                    <p className="text-date">7%</p>
                  </div>
                </td>
                <td>
                  <div className="info-box">
                    <h3>170</h3>
                    <p className="text-date">10%</p>
                  </div>
                </td>
                <td>
                  <div className="info-box">
                    <h3>2,024</h3>
                    <p className="text-date">Total in Sep 23</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="info-box">
                    <h3>
                      1,702 <span className="text-type">(Deposit)</span>
                    </h3>
                    <p className="text-date">08/09/2023</p>
                  </div>
                </td>
                <td>
                  <div className="info-box">
                    <h3>152</h3>
                    <p className="text-date">7%</p>
                  </div>
                </td>
                <td>
                  <div className="info-box">
                    <h3>170</h3>
                    <p className="text-date">10%</p>
                  </div>
                </td>
                <td>
                  <div className="info-box">
                    <h3>2,024</h3>
                    <p className="text-date">Total in Sep 23</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="info-box">
                    <h3>
                      1,702 <span className="text-type">(Deposit)</span>
                    </h3>
                    <p className="text-date">08/09/2023</p>
                  </div>
                </td>
                <td>
                  <div className="info-box">
                    <h3>152</h3>
                    <p className="text-date">7%</p>
                  </div>
                </td>
                <td>
                  <div className="info-box">
                    <h3>170</h3>
                    <p className="text-date">10%</p>
                  </div>
                </td>
                <td>
                  <div className="info-box">
                    <h3>2,024</h3>
                    <p className="text-date">Total in Sep 23</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="gy-4">
          <div className="collection-card col-12 mb-4">
            <h3>Poorti Postpaid</h3>
            <button type="button" className="button-primary p-2 px-3 w-100">
              Check your Eligibility here
            </button>
          </div>
          <div className="collection-card col-12">
            <h3>Follow us on</h3>
            <div className="d-flex gap-2 flex-column w-100">
              <button
                type="button"
                className="button-primary p-2 px-3 gap-2 w-100"
              >
                <Facebook />
                Facebook
              </button>
              <button
                type="button"
                className="button-primary p-2 px-3 gap-2 w-100"
              >
                <Instagram />
                Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
