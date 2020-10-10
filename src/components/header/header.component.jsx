import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../res/crwns.svg";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component";
import { connect } from "react-redux";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/sigin-signup">
        SIGN IN
      </Link>
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({ hidden: selectCartHidden });

export default connect(mapStateToProps, null)(Header);
