import React from "react";
import { Input } from "antd";

const { Search } = Input;

const NavSearch: React.FunctionComponent = () => {
  return (
    <div>
      <Search
        placeholder='Find your function'
        onSearch={value => console.log(value)}
        style={{ paddingTop: "0.3em", width: "30vw", transition:"none" }}
      />
    </div>
  );
};

export default NavSearch;
