import React, { useState } from "react";
import SplashScreen from "./Components/SplashScreen";
import Routers from "./Components/Routers";
import Main from "./Components/Main";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (

    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Routers />
      )}
    </>
  );
}

export default App;