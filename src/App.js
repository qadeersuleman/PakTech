import React, { useState } from "react";
import SplashScreen from "./Components/SplashScreen";
import Main from "./Components/Main"
import Routers from "./Components/Routers";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
<>
<Routers />


</>
  )
  // showSplash ? (
  //   <SplashScreen onFinish={() => setShowSplash(false)} />
  // ) : (
  //   <Main />
  // );
  
}

export default App;
