import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  logo: {
    width: '70rem',
    height: '70rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '21rem'
  },
  heading: {
    marginBottom: '38rem',
    textAlign: 'center',
    width: '100%',
    color: Colors.black,
    lineHeight: '38rem',
    fontSize: Fonts.size.larg,
    ...Fonts.style.boldText
  },
  allInputStyle: {
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    borderRadius: '12rem',
    paddingVertical: '10rem',
    paddingHorizontal: '22rem',
    color: Colors.black,
    marginBottom: '20rem',
    // marginBottom: '20rem',
    height: '40rem',
    fontSize: Fonts.size.medium,
    '@media ios': {
      ...Fonts.style.normalText
    },
    '@media android': {
      ...Fonts.style.textInputText
    }
  },
  reactNativeInputReanimatedInputStyle: {
    fontSize: 16,
    // paddingTop: 10,
    // paddingBottom: 10,
    // paddingHorizontal: 15,
    // fontSize: 16,
    // paddingTop: 10,
    // paddingBottom: 10,
    // paddingHorizontal: 15,
    // borderColor: Colors.white
    // backgroundColor: Colors.white,
    // fontSize: 16,
    // paddingTop: 10,
    // paddingBottom: 10,
    // paddingHorizontal: 15,
    // borderRadius: '12rem',
    // paddingVertical: '10rem',
    // paddingHorizontal: '22rem',
    // color: Colors.black,
    // marginBottom: '20rem',
    // // marginBottom: '20rem',
    // height: '40rem',
    // fontSize: Fonts.size.medium,
    // '@media ios': {
    //   ...Fonts.style.normalText
    // },
    // '@media android': {
    //   ...Fonts.style.textInputText
    // }
  },
  reactNativeAnimatedLabelStyle: {
    // position: 'absolute',
    // left: 15,
    // fontSize: 16,
    // zIndex: 1,
    // paddingVertical: 8
  },
  reactNativeAnimatedInputContainerStyle: {
    // justifyContent: 'center',
    // marginVertical: 5
  },
  allInputContainerStyle: {
  },
  allInputLabelTextStyle: {
    marginTop: '3rem',
    left: 25,
    zIndex: 2,
    paddingBottom: 25,
    // marginLeft: '7rem'
  },
  passwordEyeImgBtn: {
    position: 'absolute',
    right: '12rem',
    // top: '12rem'
    top: '19rem'
  },
  passwordEyeImg: {
    // width: '16rem',
    // height: '16rem',
    width: '28rem',
    height: '28rem',
    opacity: 1
  },
  commanText: {
    lineHeight: '18rem',
    color: Colors.darkGray,
    textAlign: 'center',
    ...Fonts.style.textInputText,
    fontSize: Fonts.size.tiny
  },
  googleImg: {
    height: '30rem',
    width: '30rem'
  },
  facebookImg: {
    height: '30rem',
    width: '15rem'
  },
  googleFaceBookBtn: {
    width: '42%',
    borderRadius: '12rem',
    backgroundColor: Colors.gray,
    marginHorizontal: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '10rem',
    paddingHorizontal: '17rem'
  },
  googleFaceBookBtnText: {
    paddingLeft: '17rem',
    fontSize: '15rem',
    lineHeight: '22.5rem',
    color: Colors.black,
    ...Fonts.style.buttonText
  },
  resetInputStyle: {
    paddingVertical: '15rem',
    paddingRight: '35rem',
    color: Colors.black,
    marginBottom: '20rem',
    borderBottomWidth: '2rem',
    borderColor: Colors.lightGray,
    fontSize: Fonts.size.medium,
    '@media ios': {
      ...Fonts.style.normalText
    },
    '@media android': {
      ...Fonts.style.textInputText
    }
  },
  resetPasswordEyeImgBtn: {
    position: 'absolute',
    right: '12rem',
    top: '16rem'
  }
});

export default styles;
