import React, { useState, useEffect } from "react";
import MainContent from "./MainContent";

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [sideNavExpanded, setSideNavExpanded] = useState(true);

  const updatedWindowWidth = () => {
    if (windowWidth <= 460) {
      setWindowWidth(window.innerWidth)
      setSideNavExpanded(false)
    } else {
      setWindowWidth(window.innerWidth)
      setSideNavExpanded(true)
    }
  }
  const contentStyle = {
    marginLeft: sideNavExpanded ? "240px" : "0px",
    // transition: "margin 0.2s ease"
  };

  useEffect(() => {
    updatedWindowWidth()
  }, [])

  return (
    windowWidth <= 460 ?
      (<div >
        <MainContent setSideNavExpanded={setSideNavExpanded}
          sideNavExpanded={sideNavExpanded} />
      </div>)
      : (
        <div style={contentStyle}>
          <MainContent setSideNavExpanded={setSideNavExpanded}
            sideNavExpanded={sideNavExpanded} />
        </div>
      )
  );
}

export default App;
