import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "../pages/Notfound/Notfound";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ContactUs from "../pages/ContactUs/ContactUs";
import Contacts from "../pages/Contacts/Contacts";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/contacts" element={<Contacts />} />
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
