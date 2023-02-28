import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";

const TextareaItem = ({ name, formik }) => {
  return (
    <FormControl mt={3} isRequired>
      <FormLabel>{name}</FormLabel>
      <Textarea
        focusBorderColor="brand.900"
        id={name}
        placeholder={name}
        onChange={formik.handleChange}
        value={formik.values.id}
      />
    </FormControl>
  );
};

export default TextareaItem;
