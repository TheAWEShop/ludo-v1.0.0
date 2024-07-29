import React, { Children } from "react";

type Props = {};

const Header = ({}: Props) => {
  return <div
  className="w-full absolute top-0 h-[90px] shadow-2xl shadow-blue-500/20 flex items-center p-3 px-5"
  >
  <div className="logo">
    <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlMrU4IEjmjqnF7cOi0WevM0agV2oHq7HGg&s" 
    alt="LudoApp" 
className="h-10 w-10"
    />
    </div>
    </div>;
};

export default Header;
