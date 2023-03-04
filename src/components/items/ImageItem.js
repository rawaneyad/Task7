import { Image } from "@chakra-ui/react";
import React from "react";

const ImageItem = ({ src, maxW, className }) => {
  return (
    <Image
      src={src}
      alt="image"
      borderRadius="lg"
      maxW={maxW}
      className={className}
    />
  );
};

export default ImageItem;
