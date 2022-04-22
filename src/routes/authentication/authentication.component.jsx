import SignUpForm from '../../components/sign-up-form/sign-up-form.componenet';
import SignInForm from '../../components/sign-in-form/sign-in-form.componenet';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;