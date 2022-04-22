import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from './navigation.styles';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../../contexts/cart.context';
import { signOutUser } from '../../../utils/firebase/firebase.utils';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../store/user/user.selector';

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}
