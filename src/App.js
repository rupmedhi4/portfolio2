import Home from "./Components/Home/Home";
import {  useSelector } from "react-redux";
import Modal from "./Components/Portal/Modal";

function App() {
  const menu = useSelector((state) => state.PortalSlice.isMenuOpen);



  return (
    <>
     <Home/>
     {
      menu ? <Modal/> : null
     }
    
    </>
  );
}

export default App;
