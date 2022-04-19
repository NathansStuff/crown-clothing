import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleReirect,
} from '../../../utils/firebase/firebase.utils';

import { SignUpForm } from '../../sign-up/sign-up.componenet';
export default function SignIn() {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign-in.component</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleReirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
}
