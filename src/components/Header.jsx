import React from "react";
import "./Header.css";
function Header() {  
  return (
    <div className="header ">
      
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <i  className="fa-solid fa-magnifying-glass bg-warning p-1"></i>
      </div>

      <div className="header__nav flex-wrap">
        
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        
          <div className="header__optionBasket flex-end">
          
            <span className="header__optionLineTwo header__basketCount">
              Cart 
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;