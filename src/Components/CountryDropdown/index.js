import React from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState, useContext } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Select Location"); // Default city
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [search, setSearch] = useState("");
  const context = useContext(MyContext);

  // Filter cities based on search input
  const filteredCities = context.cityList?.filter(city =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const selectCity = (index) => {
    setSelectedTab(index);
    setSelectedCity(filteredCities[index]); // Set selected city
    setIsOpenModal(false);
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{selectedCity}</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="locationModal"
        slots={{
          transition: Transition,
        }}
      >
        <h4 className="mb-0">Choose your Delivery Location:</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="closeBtn" onClick={() => setIsOpenModal(false)}>
          <MdClose />
        </Button>

        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search your area"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>

        <ul className="locationList mt-3">
          {filteredCities?.length > 0 ? (
            filteredCities.map((city, index) => (
              <li key={index}>
                <Button
                  onClick={() => selectCity(index)}
                  className={`${selectedTab === index ? "active" : ""}`}
                >
                  {city}
                </Button>
              </li>
            ))
          ) : (
            <li>No cities found.</li>
          )}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
