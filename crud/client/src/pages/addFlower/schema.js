import * as yup from "yup";

const FlowerSchema = yup.object().shape({
  img: yup.string().required("Please Fill Field"),
  name: yup.string().required("Please Fill Field"),
  price: yup.number().required("Please Fill Field").positive().integer(),
});

export { FlowerSchema };
