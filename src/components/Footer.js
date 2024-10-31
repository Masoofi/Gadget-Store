import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid d-flex justify-content-between mt-5 bg-primary text-white p-5">
      <div className="footer-logo">
        <h1 className="pb-2">Gadget Store</h1>
      </div>
      <div className="footer_details">
        <ul className="details text-s">
          <li className="add">Address: 421,Manhatten New York City</li>
          <li className="mob text-start">Mob: 9843255334342</li>
          <li className="pin text-start">PIN code: 532255</li>

        </ul>
      </div>
    </div>
  );
};

export default Footer;
