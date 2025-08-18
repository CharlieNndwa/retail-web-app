import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import ProductModal from "./Components/ProductModal";
import Footer from "./Components/Footer";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp"


const MyContext = createContext();

function App() {
  const [cityList, setCityList] = useState([]);
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);


  //   const closeProductModal=()=>{
  //   context.setisOpenProductModal(false);
  // }

  useEffect(() => {
    getCities("https://countriesnow.space/api/v0.1/countries/cities");
  }, []);

  const getCities = (url) => {
    axios.post(url, { country: "South Africa" }).then((res) => {
      setCityList(res.data.data);
      console.log(res.data.data);
    });
  };

  const values = {
    cityList,
    isOpenProductModal,
    setisOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin,
     setisOpenProductModal,

  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route
            exact={true}
            path="/product/:id"
            element={<ProductDetails />}
          />
          <Route exact={true} path="/cart" element={<Cart />} />
          <Route exact={true} path="/sign-in" element={<SignIn />} />
          <Route exact={true} path="/sign-up"  element={<SignUp />} />
        </Routes>
        {isHeaderFooterShow === true && <Footer />}
        

        {isOpenProductModal === true && <ProductModal />}
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route exact={true} path="/product/:id"  element={<ProductDetails />} />
          <Route exact={true} path="/cart"  element={<Cart />} />
        </Routes>
        <Footer />

         {
      isOpenProductModal === true && <ProductModal />
    }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };
