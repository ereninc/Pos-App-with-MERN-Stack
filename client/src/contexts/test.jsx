import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";

export function TestPage() {
  const navigate = useNavigate();
  const { searchKeyword, setSearchKeyword } = useContext(Context);

  const HandlerOne = () => {
    navigate("/home");
  };

  const handleOnChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div>
      <div>
        <input placeholder="test" onChange={handleOnChange} />
      </div>
    </div>
  );
}
