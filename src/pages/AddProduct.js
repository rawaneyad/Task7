import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ButtonItem, InputItem, TextareaItem } from "../components";
import { useFormik } from "formik";
import { addNewProduct, fetchProducts } from "../features";
import { useDispatch, useSelector } from "react-redux";

const AddProduct = () => {
  const toast = useToast();
  const newProduct = useSelector((state) => state.newProduct);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
      description: "",
    },
    onSubmit: (values) => {
      dispatch(addNewProduct(values))
        .then(() => onClose())
        .then(() =>
          toast({
            position: "top",
            title:
              JSON?.parse(localStorage?.getItem("addProductToAPI")).title ||
              "Error",
            description:
              JSON?.parse(localStorage?.getItem("addProductToAPI"))
                .description || "The product added failed",
            status: JSON?.parse(localStorage?.getItem("addProductToAPI"))
              ? "success"
              : "error",
            duration: 9000,
            isClosable: true,
          })
        )
        .then(() => dispatch(fetchProducts()));
    },
  });
  return (
    <>
      <ButtonItem onClick={onOpen} name="Add New Product" />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new Product</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody pb={6}>
              <InputItem name="name" formik={formik} type="text" />
              <InputItem name="price" formik={formik} type="number" />
              <InputItem name="image" formik={formik} type="url" />
              <TextareaItem name="description" formik={formik} />
            </ModalBody>
            <ModalFooter>
              <ButtonItem
                isLoading={newProduct.loading}
                name="Save"
                type="submit"
              />
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
