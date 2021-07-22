import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";

export default function Reviews() {
  const dispatch = useDispatch();
//   const product = useSelector((state) => state.products);
  const firstExample = {
    size: 30,
    value: 4,
    edit: false,
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactStars {...firstExample} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div class="text-muted mb-3">34 reviews</div>
      </div>
    </>
  );
}
