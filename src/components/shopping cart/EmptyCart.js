import React from "react";
import EmptyImage from "../../Image/Empty-pana.png";
import { ImageItem } from "../items";

const EmptyCart = () => {
  return (
    <ImageItem
      className="EmptyImage"
      maxW={{ base: "100%", sm: "400px" }}
      src={EmptyImage}
    />
  );
};

export default EmptyCart;
