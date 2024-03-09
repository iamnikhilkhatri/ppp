import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { Avatar, Chevron, Menu, Notification, Search } from '../../assets/svg';

export function CustomCard({ icon1, icon2, heading, text, value, type }) {
  return (
    <div className="custom-card">
      <div className="rounded-bg">{icon1}</div>
      <div className="description">
        <p>{heading}</p>
        <h2>{value}</h2>
        <p className={type}>{text}</p>
      </div>
      <div className="rounded-bg">{icon2}</div>
    </div>
  );
}

export function SearchHeader({ enableTitle }) {
  const { dispatch } = useContext(AppContext);
  return (
    <div className="header-wrapper">
      <div className="search-wrapper d-none d-lg-flex w-50">
        <input type="text" placeholder="Search anything…" className="w-100" />
        <Search className="floating-svg" />
      </div>
      <div className="search-wrapper d-flex d-lg-none align-items-center gap-3">
        <Menu onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })} />
        <div className="rounded-bg">
          <Search />
        </div>
      </div>
      {enableTitle && (
        <p className="text-title">How to get started /Complete KYC?</p>
      )}
      <div className="profile-wrapper d-flex align-items-center gap-4">
        <Notification />
        <div className="d-flex align-items-center gap-2">
          <Avatar />
          <Chevron />
        </div>
      </div>
    </div>
  );
}
