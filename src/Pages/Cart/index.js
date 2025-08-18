import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import { IoIosClose } from "react-icons/io";
import Button from "@mui/material/Button";
import {IoCartSharp} from "react-icons/io5";

const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className="hd mb-1">Your Cart</h2>
          <p>
            There are <b className="text-red">3</b> products in your cart
          </p>
          <div className="row">
            <div className="col-md-9 pr-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="35%">Product</th>
                      <th width="15%">Unit Price</th>
                      <th width="25%">Quantity</th>
                      <th width="15%">Subtotal</th>
                      <th width="10%">Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://googro.co.za/cdn/shop/files/Savanna6pack.webp?v=1732715114&width=375"
                                alt=""
                                className="w-100"
                              />
                            </div>

                            <div className="info px-3">
                              <h6>Savanna Dry 500ml NRB 6 Pack</h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                precision={0.5}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">R105.99</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">R105.99</td>
                      <td width="10%">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://googro.co.za/cdn/shop/files/KELLOGGS-CORN-FLAKES-1KG.jpg?v=1709200677&width=300"
                                alt=""
                                className="w-100"
                              />
                            </div>

                            <div className="info px-3">
                              <h6>Kellogs Corn Flakes 1Kg</h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                precision={0.5}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">R92.99</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">R92.99</td>
                      <td width="10%">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://googro.co.za/cdn/shop/files/ACE5KG.webp?v=1732717124&width=300"
                                alt=""
                                className="w-100"
                              />
                            </div>

                            <div className="info px-3">
                              <h6>Ace Super Maize Meal 5kg</h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                precision={0.5}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">R69.99</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">R69.99</td>
                      <td width="10%">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border shadow p-3 cartDetails">
                <h4>CART TOTALS</h4>

                <div className="d-flex align-items-center mb-3">
                  <span>Subtotal</span>
                  <span className="ml-auto text-red font-weight-bold">
                    R269.99
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span>Shipping</span>
                  <span className="ml-auto">Free</span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span>Estimate for</span>
                  <span className="ml-auto">
                    <b>Johannesburg</b>
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <span>Total</span>
                  <span className="ml-auto text-red font-weight-bold">
                    R269.99
                  </span>
                </div>

                <br/>
                <Button className="btn-blue bg-red btn-lg btn-big">
                  <IoCartSharp/>
                  ADD TO CART
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
