import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import './navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import { UserContext } from '../../../contexts/user.contexts';
import { signOutUser } from '../../../utils/firebase/firebase.utils';

export default function Navigation() {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links'>
          <Link to='/shop' className='nav-link'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to='/auth' className='nav-link'>
              Sign in
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
}
