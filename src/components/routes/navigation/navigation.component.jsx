import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

import './navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';

export default function Navigation() {
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
          <Link to='/signin' className='nav-link'>
            Sign in
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
}
