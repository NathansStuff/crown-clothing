import './authentication.styles.scss'

import { SignUpForm } from '../../sign-up/sign-up.componenet';
import { SignInForm } from '../../sign-in/sign-in.componenet';

export default function Authentication() {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
