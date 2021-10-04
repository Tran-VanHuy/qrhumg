import React from 'react';
import "./style.css"

const Header = () => {
      return (
            <div className = "wrapper-header">
                  <img src = "/images/header.JPG" />
                  <div className = "login">
                        <div>icon</div>
                        <div>Đăng nhập</div>
                        <div>
                              <input id="txtSearch" name="txtSearch" className="isearch" value="" placeholder="Tìm kiếm..." type="text"/>
                        </div>
                        <div>americar</div>
                  </div>
            </div>
      );
};

export default Header;