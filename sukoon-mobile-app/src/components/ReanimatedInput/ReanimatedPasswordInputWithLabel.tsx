import { Images } from '../../theme';
import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from '../SignUpLogIn/Styles';
import { useState } from 'react';
import ReanimatedTextInputWithLabel from './ReanimatedTextInputWithLabel';

export interface Props {
  value: any;
  onChangeText: Function;
  passwordStyle: any;
}

function ReanimatedPasswordInputWithLabel({
  passwordStyle,
  value,
  onChangeText,
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={passwordStyle}>
      <ReanimatedTextInputWithLabel
        {...props}
        label={'Password'}
        placeholder={'Password'}
        type="default"
        value={value}
        secureTextEntry={showPassword}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={styles.passwordEyeImgBtn}
        onPress={() => setShowPassword(!showPassword)}>
        <Image
          source={showPassword ? Images.HideEye : Images.OpenEye}
          style={styles.passwordEyeImg}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

export default ReanimatedPasswordInputWithLabel;
