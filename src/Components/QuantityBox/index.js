import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { useState } from "react";

const QuantityBox = () => {
  const [inputValue, setInputValue] = useState(1);

  const minus = () => {
    if (inputValue !== 1 && inputValue > 0) {
      setInputValue(inputValue - 1);
    }
  };

  const plus = () => {
    setInputValue(inputValue + 1);
  };

  return (
    <div className="quantityDrop d-flex align-items-center">
      <Button onClick={minus}>
        <FaMinus />
      </Button>
      <input type="text" value={inputValue} />
      <Button onClick={plus}>
        <FaPlus />
      </Button>
    </div>
  );
};

export default QuantityBox;
