import { Button, Input } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Sectionthree = () => {
  const [flowerData, setFlowerData] = useState([]);
  const [count, setCount] = useState(0);
  const getData = async () => {
    let flowerData = await axios.get("http://localhost:8080/flower");
    setFlowerData(flowerData.data);
  };
  console.log(flowerData);
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    axios.get("http://localhost:8080/flower").then((res) => {
      let filteredArr = res.data.filter((element) =>
        element.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFlowerData(filteredArr);
    });
  };
  return (
    <div id="sectionthree">
      <div className="mainDiv">
        <div className="centerDiv container">
          <div className="enterText">
            <p>Devoted to wonderful beauty</p>
            <h1>Flowers Pricing</h1>
          </div>
          <div className="sortAndFilterDiv">
            <Button
              color="secondary"
              onClick={() => {
                if (count === 0) {
                  axios.get("http://localhost:8080/flower").then((res) => {
                    let sortDec = res.data.sort((a, b) => b.price - a.price);
                    setFlowerData(sortDec);
                    setCount(count + 1);
                  });
                }
                if (count === 1) {
                  axios.get("http://localhost:8080/flower").then((res) => {
                    let sortDec = res.data.sort((a, b) => a.price - b.price);
                    setFlowerData(sortDec);
                    setCount(count + 1);
                  });
                }
                if (count === 2) {
                  axios.get("http://localhost:8080/flower").then((res) => {
                    let sortDec = res.data;
                    setFlowerData(sortDec);
                    setCount(0);
                  });
                }
              }}
            >
              SORT BY PRICE
            </Button>
            <Input
              className="inputMainClass"
              placeholder="Search by name..."
              onChange={(e) => {
                handleSearch(e);
              }}
            />
          </div>
          <div className="mainCardDiv">
            {flowerData.map((e) => {
              return (
                <div className="mainCard">
                  <Link to={`/detail-page/${e._id}`} className="linkTag">
                    <div className="imgDiv">
                      <img src={e.img} alt="" />
                    </div>
                    <div className="textDiv">
                      <h2>{e.name}</h2>
                      <p>${e.price}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionthree;
