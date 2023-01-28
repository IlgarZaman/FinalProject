import React from "react";

const SectionFour = () => {
  return (
    <div id="sectionFour">
      <div className="container">
        <div className="enterText">
          <p>Devoted to wonderful beauty</p>
          <h1>Events Pricing</h1>
        </div>
        <div className="cards">
          <div className="card">
            <div className="price">
              <div className="square">
                <h1>$16</h1>
              </div>
              <div className="pTagClass">
                <p>per table</p>
              </div>
            </div>
            <h3>Birthday Events</h3>
            <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
            <button>Shop now</button>
          </div>
          <div className="card">
            <div className="price">
              <div className="square">
                <h1>$31</h1>
              </div>

              <div className="pTagClass">
                <p>per table</p>
              </div>
            </div>
            <h3>Wedding Events</h3>
            <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
            <button>Shop now</button>
          </div>
          <div className="card">
            <div className="price">
              <div className="square">
                <h1>$52</h1>
              </div>
              <div className="pTagClass">
                <p>per table</p>
              </div>
            </div>
            <h3>Party Events</h3>
            <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
            <button>Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
