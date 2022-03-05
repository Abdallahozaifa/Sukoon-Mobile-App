import * as React from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from '../../components';
import LogoHeading from '../../components/SignUpLogIn/LogoHeading';
import CommanBtnScreen from '../../components/CommanBtn/index';
import CommanText from '../../components/SignUpLogIn/CommanText';
import GoogleFaceBookBtn from '../../components/SignUpLogIn/GoogleFaceBookBtn';
import styles from './Styles/SignupStyle';
import { Images } from '../../theme';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import ReanimatedTextInputWithLabel from '../../components/ReanimatedInput/ReanimatedTextInputWithLabel';
import ReanimatedPasswordInputWithLabel from '../../components/ReanimatedInput/ReanimatedPasswordInputWithLabel';

export interface Props {
  navigation: any;
}
function SignupScreen({ navigation }: any) {
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = () => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(fullName, email, phoneNumber, password);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
    // navigation.navigate('OtpSignUpNumber');
  };

  return (
    <Container>
      <Content hasHeader contentContainerStyle={styles.container}>
        <LogoHeading heading="Sign up with Sukoon" />
        <View style={styles.signupLoginInputGroup}>
          <ReanimatedTextInputWithLabel
            label="Full Name"
            placeholder="Full name"
            type="default"
            value={fullName}
            onChangeText={setFullName}
          />
          <ReanimatedTextInputWithLabel
            label="E-mail Address"
            placeholder="E-mail address"
            type="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <ReanimatedTextInputWithLabel
            label="Phone Number"
            placeholder="Phone number"
            type="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <ReanimatedPasswordInputWithLabel
            passwordStyle={styles.lastInputStyle}
            value={password}
            onChangeText={setPassword}
          />
          <CommanBtnScreen
            btnText="Sign up"
            commanBtnStyle={styles.signUpLogInBtn}
            onBtnPress={onSubmit}
          />
          <CommanText commanText="Or log in using" />
          <View style={styles.googleFaceBookBtnRow}>
            <GoogleFaceBookBtn
              googleImg
              btnImage={Images.Google}
              btnText="Google"
            />
            <GoogleFaceBookBtn btnImage={Images.Facebook} btnText="Facebook" />
          </View>
          <Text style={styles.bottomAccountText}>
            Already have an account?{' '}
            <Text
              style={styles.loginSignupBtnText}
              onPress={() => navigation.navigate('Login')}>
              Log in
            </Text>
          </Text>
        </View>
      </Content>
    </Container>
  );
}

export default SignupScreen;
