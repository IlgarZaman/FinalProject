import React from "react";
import "./index.scss";
import { useFormik } from "formik";
import { FlowerSchema } from "./schema";
import SendIcon from "@mui/icons-material/Send";
import { Button, FormLabel, Input, InputLabel } from "@mui/material";
import axios from "axios";
import { Helmet } from "react-helmet";
const AddFlower = () => {
  const { values, handleChange, handleSubmit, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        img: "",
        name: "",
        price: "",
      },
      validationSchema: FlowerSchema,
      onSubmit: (values) => {
        axios.post("http://localhost:8080/flower",values);
        resetForm();
      },
    });
  return (
    <div id="addFlower">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Add Flower</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <form onSubmit={handleSubmit} className="mainFormField">
        <div className="formField">
          <InputLabel htmlFor="img">FLOWER IMG URL: </InputLabel>
          <Input
            id="img"
            name="img"
            type="text"
            onChange={handleChange}
            value={values.img}
          />
        </div>
        {errors.img && touched.img && (
          <span className="redError">{errors.img}</span>
        )}

        <div className="formField">
          <InputLabel htmlFor="name">FLOWER NAME: </InputLabel>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
          />
        </div>
        {errors.name && touched.name && (
          <span className="redError">{errors.name}</span>
        )}

        <div className="formField">
          <InputLabel htmlFor="price">FLOWER PRICE: </InputLabel>
          <Input
            id="price"
            name="price"
            type="number"
            onChange={handleChange}
            value={values.price}
          />
        </div>
        {errors.price && touched.price && (
          <span className="redError">{errors.price}</span>
        )}
        <div className="addBtn">
          <Button
            variant="contained"
            color="success"
            type="submit"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddFlower;
