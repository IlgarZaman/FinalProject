import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Helmet } from "react-helmet";
const Detailpage = () => {
  const { id } = useParams();

  const [flowerData, setFlowerData] = useState([]);
  const getData = async () => {
    let flowerData = await axios.get(`http://localhost:8080/flower/${id}`);
    setFlowerData(flowerData.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/flower/${id}`);
    navigate("/");
  };
  return (
    <div id="detailFlower">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Detail-Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="maindiv container">
        <div className="centerDiv">
          <img src={flowerData.img} alt="" />

          <div className="textDivMain">
            <div className="textdiv">
              <h1>{flowerData.name}</h1>
              <h4>${flowerData.price}</h4>
            </div>
          </div>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => {
              handleDelete(flowerData._id);
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
