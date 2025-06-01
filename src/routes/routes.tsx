import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "../pages/Notfound/Notfound";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Contacts from "../pages/Contacts/Contacts";
import About from "../pages/About/About";
import Loading from "../components/Loading/Loading";

const routes = () => {
  return (
    <BrowserRouter>
      <Loading />

      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/loading" element={<Loading />} />

          {/* Uncomment the following lines when the components are ready */}
          {/* <Route path="/products/containerized" element={<Containerized />} />
              <Route path="/products/open" element={<Open />} />
              <Route path="/products/silent" element={<Silent />} /> */}
          {/* <Route path="/menu" element={<Menu />} />
              <Route path="/games" element={<Games />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order" element={<Order />} /> */}
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
