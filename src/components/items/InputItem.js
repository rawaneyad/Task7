import React from "react";
import { Input, FormLabel, FormControl } from "@chakra-ui/react";

const InputItem = ({ name, formik, type }) => {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor={name}>{name}</FormLabel>
      <Input
        focusBorderColor="brand.900"
        type={type}
        id={name}
        placeholder={name}
        onChange={formik.handleChange}
        value={formik.values.id}
      />
    </FormControl>
  );
};

export default InputItem;
