import React from "react";
import sideImage from "../../assets/images/side.png";

const Homesec3 = () => {
  return (
    <div>
      <div className="payments_container">
        <div className="payments_sub">
          <span className="your_finance">
            Your Finance at
            <br />
            Your Fingertips
          </span>

          <span className="your_finance_mob">
            YOUR FINANACE AT
            <br />
            YOUR FINGERTIPS
          </span>
          <div className="your_finance_container">
            {finance_items.map((each) => {
              return (
                <div
                  className="your_finance_item"
                  id={each.title}
                  key={each.title}
                >
                  <div
                    className="your_finance_icon"
                    dangerouslySetInnerHTML={{ __html: each.icon }}
                  />
                  <div className="your_finance_sub_card">
                    <span className="your_finance_title">{each.title}</span>
                    <span className="your_finance_sub_text">
                      {each.subtext}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <a
          style={{ textDecoration: "none" }}
          href="/Ntarpay"
          className="web_explore_btn"
        >
          <button href="/Education" className="Explore">
            Explore
            <img className="explor-side" src={sideImage} alt="Girl" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Homesec3;
