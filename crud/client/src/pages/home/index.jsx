import React from "react";
import { Helmet } from "react-helmet";
import SectionOne from "./section-1";
import Sectiontwo from "./section-2";
import Sectionthree from "./section-3";
import SectionFour from "./section-4";
import SectionFive from "./section-5";

const Home = () => {
  return (
    <div id="Home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SectionOne />
      <Sectiontwo />
      <Sectionthree />
      <SectionFour />
      <SectionFive />
    </div>
  );
};

export default Home;
