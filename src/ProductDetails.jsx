import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "./Action";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item, error } = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="card">
      <h2>Product Details</h2>
      {item && (
        <div>
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
