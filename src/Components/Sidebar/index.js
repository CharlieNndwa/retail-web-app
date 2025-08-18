import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [value, setValue] = useState([100, 60000]);
  const [value2, setValue2] = useState(0);

  return (
    <>
      <div className="sidebar">
        <div className="sticky">
          <div className="filterBox">
            <h6>PRODUCT CATEGORIES</h6>

            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Beverages"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Biscuits & Snacks"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Breads & Bakery"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Breakfast & Dairy"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Frozen Foods"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Fruits & Vegetables"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Meats & Seafood"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Household Appliances"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Liquor"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="filterBox">
            <h6>FILTER BY PRICE</h6>

            <RangeSlider
              value={value}
              onInput={setValue}
              min={100}
              max={60000}
              step={5}
            />

            <div className="d-flex pt-2 pb-2 priceRange">
              <span>
                From: <strong className="text-dark">Rs: {value[0]}</strong>
              </span>
              <span className="ml-auto text-dark">
                <strong>Rs: {value[1]}</strong>
              </span>
            </div>
          </div>

          <div className="filterBox">
            <h6>AVAILABILITY</h6>

            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="In Stock"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="On Sale"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="filterBox">
            <h6>BRANDS</h6>

            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="COCA COLA"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="ENERGADE"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="OREOS"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="SPEKKO"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="NESPRESSO"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="ENERGADE"
                  />
                </li>
              </ul>
            </div>
          </div>

          <br />

          <Link to="#">
            <img
              src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/470209172_8960556260646496_6492859488608603634_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vRPbBtiQBsUQ7kNvwELJf1B&_nc_oc=Adn93hBVBYnn4RSuW2FsVbRTpCQtR_MnOnbxB9dRGg0dqezYBAnkR1hv5ZKxYgCm4L0&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=oONd4QOcQgECpMfoQYFORw&oh=00_AfXpMBcnL0y1lZjyeqF_8MMOxiVDFTys5qYl55sW4qjd7g&oe=68A221E9"
              className="w-100"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
