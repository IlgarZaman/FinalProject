import React from "react";
import { Helmet } from "react-helmet";
import "./index.scss";
const NoteFound = () => {
  return (
    <div id="noteFound">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="mainDiv">

      <div className="notfound"></div>
      </div>
    </div>
  );
};

export default NoteFound;
