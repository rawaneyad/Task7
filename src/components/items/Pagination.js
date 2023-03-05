import React from "react";
import { Wrap } from "@chakra-ui/react";
import ButtonItem from "./ButtonItem";

const Pagination = ({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <Wrap spacing="30px" justify="center">
      {pages.map((page, index) => {
        return (
          <ButtonItem
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
            name={page}
          />
        );
      })}
    </Wrap>
  );
};

export default Pagination;
