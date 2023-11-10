import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card-container">
      <div className="user-card">
        <h2>{user.username}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </div>
      <div className="company">
        <h3>Company</h3>
        <p>{user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
        <p>{user.company.bs}</p>
      </div>
      <div className="address">
        <h3>Address</h3>
        <p>{user.address.street}</p>
        <p>{user.address.suite}</p>
        <p>{user.address.city}</p>
        <p>{user.address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
