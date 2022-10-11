
import React from "react";
import Logo from "../../assets/ML.jpg"


export default function Navigation(props) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <>
    <img className="logo text-center" src={Logo} alt="Mike Levy Logo"></img>
    {/* <header className="text-center">Mike Levy</header> */}
    <div className="">
      <ul className="nav nav-tabs justify-content-center">
        {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}