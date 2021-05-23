import React from "react";
import Filter from "../Products/Filter";
import Products from "../Products/Products";


const Shop = () => {


  return (
    <div className="container-fluid pl-5 pr-5">
      <div className="row">
        <div className="col-md-3 mt-4 ">
          <Filter />
        </div>
        <div className="col-md-9 mt-4">
          <div className="">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

