// @ts-ignore
import Input from 'react-native-reanimated-text-input';
import { Colors } from '../../theme';
import * as React from 'react';

export interface Props {
  placeholder: string;
  type: string;
  value: any;
  onChangeText: Function;
  label: string;
  secureTextEntry?: any;
}

function ReanimatedTextInputWithLabel({
  placeholder,
  type,
  value,
  onChangeText,
  label,
  ...props
}: Props) {
  return (
    <Input
      label={label}
      value={value}
      placeholder={placeholder}
      keyboardType={type}
      containerStyle={{ marginVertical: 10 }}
      error={null}
      placeholderTextColor={Colors.darkGray}
      onChangeText={onChangeText}
      onBlur={() => 'dfdf'}
      {...props}
    />
  );
}

export default ReanimatedTextInputWithLabel;
