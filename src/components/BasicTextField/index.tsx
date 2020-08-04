import React, {useState} from 'react';
import {View, TextInput, Text, Platform, StyleSheet,ViewStyle,StyleProp,TextStyle} from 'react-native';


interface AppProps {
  label?: string;
  labelColor?: string;
  labelStyle?:  StyleProp<TextStyle>;
  isRequired?: boolean;
  value?: string;
  isError?: boolean;
  onFocusBorderColor?: string;
  errorText?: string;
  errorColor?: string;
  errorTextStyle?:  StyleProp<TextStyle>;
  errorContainerStyle?: StyleProp<ViewStyle>;
  hintText?: string;
  hintTextStyle?: StyleProp<TextStyle>;
  isSecureEntry?: boolean;
  placeholder?: string;
  keyboardType?: string;
  maxLength?: number;
  isClearTextOnFocus?: boolean;
  onChange?: (value: string)=> void;
  textFieldStyle?: StyleProp<ViewStyle>;
  textFieldBorderColor?: string;
  textFieldContainerStyle?: StyleProp<ViewStyle>;
  asteriskTextStyle?: StyleProp<TextStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  textInputProps?: any;
}

const BasicTextField = (props: AppProps) => {
  const {
    label,
    labelColor,
    labelStyle,
    isRequired,
    value,
    isError,
    onFocusBorderColor,
    errorText,
    errorColor,
    errorTextStyle,
    errorContainerStyle,
    hintText,
    hintTextStyle,
    isSecureEntry,
    placeholder,
    keyboardType,
    maxLength,
    isClearTextOnFocus,
    onChange,
    textFieldStyle,
    textFieldBorderColor,
    textFieldContainerStyle,
    asteriskTextStyle,
    headerStyle,
    textInputProps,
  } = props;

  const [isHint, setIsHint] = useState(false);
  const [outerBorderColor, setOuterBorderColor] = useState(
    textFieldBorderColor,
  );
  const [textValue, setTextValue] = useState(value);

  const onChangeTextInput = (text: string) => {
    setTextValue(text);

    if ('function' === typeof onChange) {
      onChange(text);
    }
  };

  const onFocus = () => {
    setIsHint(true);
    setOuterBorderColor(onFocusBorderColor);
  };
  const onBlur = () => {
    setIsHint(false);
    setOuterBorderColor(textFieldBorderColor);
  };

  return (
    <View>
      <View style={StyleSheet.flatten([DefaultStyles.headerContainerStyle, headerStyle])}>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={StyleSheet.flatten([
              {color: isError ? errorColor : labelColor, fontSize: 16},
              labelStyle,
            ])}>
            {label}
          </Text>
        </View>

        <View style={{justifyContent: 'center'}}>
          {isRequired ? (
            <Text
              style={StyleSheet.flatten([
                {color: 'red', fontSize: 16},
                asteriskTextStyle,
              ])}>
              *
            </Text>
          ) : null}
        </View>

        {isHint ? (
          <View style={{justifyContent: 'center'}}>
            <Text
              style={StyleSheet.flatten([
                DefaultStyles.hintTextStyle,
                hintTextStyle,
              ])}>
              {hintText}
            </Text>
          </View>
        ) : null}
      </View>

      <View
        style={[
          {
            borderColor: isError ? errorColor : outerBorderColor,
            borderWidth: 1,
            borderRadius: 10,
          },
          textFieldContainerStyle,
        ]}>
        <TextInput
          maxLength={maxLength}
          secureTextEntry={isSecureEntry}
          keyboardType={keyboardType}
          style={StyleSheet.flatten([DefaultStyles.textFieldDefaultStyle, textFieldStyle])}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          value={textValue}
          onChangeText={onChangeTextInput}
          clearTextOnFocus={isClearTextOnFocus}
          {...textInputProps}
        />
      </View>

      {isError ? (
        <View
          style={StyleSheet.flatten([
            {justifyContent: 'center', marginLeft: '1%'},
            errorContainerStyle,
          ])}>
          <Text
            style={StyleSheet.flatten([errorTextStyle, {color: errorColor}])}>
            {errorText}
          </Text>
        </View>
      ) : (
        <Text> </Text>
      )}
    </View>
  );
};

const DefaultStyles = StyleSheet.create({
  hintTextStyle:{
    color: 'orange', 
    fontSize: 16, 
    marginLeft: '2%'
  },
  textFieldDefaultStyle : {
    color: 'black',
    paddingLeft: '2%',
    height: 40,
    fontSize: 20,
    paddingVertical: Platform.OS == 'android' ? 0 : null,
  },
  headerContainerStyle: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: '0.5%',
    paddingLeft: '1%',
  }
})

BasicTextField.defaultProps = {
  textFieldBorderColor: 'black',
  label: '',
  isRequired: false,
  value: '',
  isError: false,
  errorColor: 'red',
  onFocusBorderColor: '#007AFE',
  errorText: '',
  hintText: '',
  isSecureEntry: false,
  placeholder: '',
  keyboardType: 'default',
  maxLength: null,
  isClearTextOnFocus: false,
  labelColor: 'black',
};

export default BasicTextField;
