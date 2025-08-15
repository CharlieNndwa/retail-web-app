import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { BsCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";
// import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [activeTabs, setActiveTabs] = useState(0);

  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>

            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">Jacobs Kronung Coffee 200g</h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brands : </span>
                    <span>Jacobs Kronung</span>
                  </div>
                </li>

                <li className="list-inline-item d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      size="small"
                      readOnly
                    />

                    <span className="text-light cursor ml-2">1 Review</span>
                  </div>
                </li>
              </ul>

              <div className="d-flex inf mb-3">
                <span className="oldPrice">R162.99</span>
                <span className="netPrice text-danger ml-2">R146.99</span>
              </div>

              <span className="badge badge-success">IN STOCK</span>

              <p className="mt-3">
                Enjoy a rich and aromatic coffee experience with this
                freeze-dried instant coffee. Made from carefully selected beans,
                it offers a medium-strength flavour that balances smoothness and
                robustness. Simply add hot water to enjoy a consistently
                satisfying beverage. Ideal for busy mornings or when you need a
                quick caffeine boost, this instant coffee delivers a delightful
                experience without the need for brewing equipment.
              </p>

              <div className="d-flex align-items-center"></div>

              <div className="d-flex align-items-center mt-4">
                <QuantityBox />

                <Button className="btn-blue btn-lg btn-big btn-round">
                  <BsCartFill /> &nbsp; Add to Cart
                </Button>

                <Tooltip title="Add to Wishlist" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                    <FaRegHeart />
                  </Button>
                </Tooltip>

                <Tooltip title="Add to Compare" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-3">
                    <MdOutlineCompareArrows />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <br />

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Additional Info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                    }}
                  >
                    Reviews (3)
                  </Button>
                </li>
              </ul>
              <br />
              {activeTabs === 0 && (
                <div className="tabContent">
                  <p>
                    Jacobs Krönung coffee has a rich history that begins with
                    its founder, Johann Jacobs. In 1895, at the age of 26,
                    Jacobs opened a specialty shop for coffee, tea, and
                    chocolate in Bremen, Germany. He had a strong belief in
                    delivering high-quality goods at a fair price. The business
                    grew, and in 1907, he opened his own roasting plant to
                    supply the Bremen area.
                  </p>
                </div>
              )}
              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr className="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr class="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5"L x 18.5"W x 16.5"H</p>
                          </td>
                        </tr>
                        <tr class="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5"L x 24"W x 18.5"H</p>
                          </td>
                        </tr>
                        <tr class="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr class="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr class="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr class="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr class="width">
                          <th>Width</th>
                          <td>
                            <p>24"</p>
                          </td>
                        </tr>
                        <tr class="handle-height-ground-to-handle">
                          <th>Handle height(ground to handle)</th>
                          <td>
                            <p>37-45"</p>
                          </td>
                        </tr>
                        <tr class="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12" air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr class="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5"</p>
                          </td>
                        </tr>
                        <tr class="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5"</p>
                          </td>
                        </tr>
                        <tr class="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25"</p>
                          </td>
                        </tr>
                        <tr class="pa-color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr class="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answers</h3>
                      <br />

                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img
                              src="https://www.club55-experts.com/wp-content/uploads/2022/10/club55-klaus-jacobs-mittel.jpg"
                              alt=""
                            />
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">
                            Jacobs Kronung
                          </span>
                        </div>

                        <div className="info pl-5">
                          <div className="d-flex align-items-center w-100">
                            <h5 className="text-light">01/03/1993</h5>
                            <div className="ml-auto">
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                                size="small"
                              />
                            </div>
                          </div>

                          <p>
                            Jacobs Krönung coffee has a rich history that begins
                            with its founder, Johann Jacobs. In 1895, at the age
                            of 26, Jacobs opened a specialty shop for coffee,
                            tea, and chocolate in Bremen, Germany. He had a
                            strong belief in delivering high-quality goods at a
                            fair price. The business grew, and in 1907, he
                            opened his own roasting plant to supply the Bremen
                            area.
                          </p>
                        </div>
                      </div>

                      <br className="res-hide" />

                      <br className="res-hide" />

                      <form className="reviewForm">
                        <h4>Add a review</h4> 
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Write a review"
                            name="review"
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="userName"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating
                                 name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <Button type="submit" className="btn-blue btn-lg btn-big btn-round">
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>

                 

               

                    
                  </div>
                </div>
              )}
              
            </div>
          </div>

          <br />

          <RelatedProducts title="RELATED PRODUCTS"/>

          <RelatedProducts title="RECENTLY VIEWED PRODUCTS"/>

        </div>
      </section>
    </>
  );
};

export default ProductDetails;
