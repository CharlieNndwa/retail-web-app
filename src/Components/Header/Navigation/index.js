import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">All Categories</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isopenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/groceries">
                      <Button>
                        Food essentials <FaAngleRight className="ml-auto" />
                      </Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>Grains, Rice & Pasta</Button>
                      </Link>
                      <Link to="/appliances">
                        <Button>Meat & Poultry</Button>
                      </Link>
                      <Link to="/personal-care">
                        <Button>Salt,Herbs & Spices</Button>
                      </Link>
                      <Link to="/groceries">
                        <Button>Soup,Gravy & Stock</Button>
                      </Link>
                      <Link to="/electronics">
                        <Button>Cans,Jars & Packaged food</Button>
                      </Link>
                      <Link to="/home-kitchen">
                        <Button>Oil & Vinegar</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/shop/beverages">
                      <Button>Beverages <FaAngleRight className="ml-auto" /></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>Cold Drinks</Button>
                      </Link>
                      <Link to="/appliances">
                        <Button>Sports & Energy Drinks</Button>
                      </Link>
                      <Link to="/personal-care">
                        <Button>Fruit Juices</Button>
                      </Link>
                      <Link to="/groceries">
                        <Button>Water</Button>
                      </Link>
                      <Link to="/electronics">
                        <Button>Cordials & Squashes</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/health-beauty">
                      <Button>Health & Beauty <FaAngleRight className="ml-auto" /></Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/alcohol">
                      <Button>Alcohol <FaAngleRight className="ml-auto" /></Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/electronics">
                      <Button>Electronics <FaAngleRight className="ml-auto" /></Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/home-kitchen">
                      <Button>Home & Kitchen <FaAngleRight className="ml-auto" /></Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/pet-care">
                      <Button>Pet care</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/appliances">
                      <Button>Appliances <FaAngleRight className="ml-auto" /></Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Shop
                    <span className="icon2 ml-2">
                      <FaAngleDown />
                    </span>
                  </Button>

                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>Beverages</Button>
                    </Link>
                    <Link to="/appliances">
                      <Button>Appliances</Button>
                    </Link>
                    <Link to="/personal-care">
                      <Button>Personal Care</Button>
                    </Link>
                    <Link to="/groceries">
                      <Button>Groceries</Button>
                    </Link>
                    <Link to="/electronics">
                      <Button>Electronics</Button>
                    </Link>
                    <Link to="/home-kitchen">
                      <Button>Home & Kitchen</Button>
                    </Link>
                  </div>
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="/">
                  <Button>All Products</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Alcohol{" "}
                    <span className="icon2 ml-2">
                      <FaAngleDown />
                    </span>
                  </Button>
                  <div className="submenu shadow">
                    <Button>View All</Button>
                    <Button>Beer & cider</Button>
                    <Button>Wine</Button>
                    <Button>Spirit</Button>
                  </div>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Groceries
                    <span className="icon2 ml-2">
                      <FaAngleDown />
                    </span>
                  </Button>
                  <div className="submenu shadow">
                    <Button>Cooking</Button>
                    <Button>Cereals</Button>
                    <Button>Beverages</Button>
                    <Button>Sauces & Spreads</Button>
                  </div>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Contact</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
