import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import { View, TextInput, Text, Platform,StyleProp,ViewStyle,TextStyle } from 'react-native';


interface AppProps {
    icon?:iconObj;
    iconColor?:string;
    placeHolder?:string;
    borderColor?:string;
    value?:string;
    isSecureEntry?:boolean;
    isRequired?:boolean;
    defaultValue?:string;
    outerBorderDefaultColor?:string; 
    isError?:boolean;
    errorColor?:string;
    errorText?:string;
    placeholderTextColor?:string;
    isRequiredStyle?:StyleProp<TextStyle>;
    errorTextStyle?:StyleProp<TextStyle>;
    mainContainerStyle?:StyleProp<ViewStyle>;
    iconContainerStyle?:StyleProp<ViewStyle>;
    textFieldContainerStyle?:StyleProp<ViewStyle>;
    textContaineDefaultStyle:StyleProp<ViewStyle>; 
    textInputStyle?:StyleProp<TextStyle>;
    iconContainerDefaultStyle?:StyleProp<ViewStyle>;
    textInputDefaultStyle?:StyleProp<TextStyle>;
  onChange?:(value: string)=>void;
}

const IconTextField = (props: AppProps) => {
  const {
    icon,
    iconColor,
    placeHolder,
    borderColor,
    value,
    isSecureEntry,
    isRequired,
    defaultValue,
    outerBorderDefaultColor,
    isError,
    errorColor,
    errorText,
    placeholderTextColor,
    isRequiredStyle,
    errorTextStyle,
    mainContainerStyle,
    iconContainerStyle,
    textFieldContainerStyle,
    textInputStyle,
    textContaineDefaultStyle,
    iconContainerDefaultStyle,
    textInputDefaultStyle,
    onChange
  } = props;


  const [outerBorderColor, setOuterBorderColor] = useState(borderColor);
  const [textValue, setTextValue] = useState(value);

  const onFocus = () => {
    setOuterBorderColor(outerBorderDefaultColor);
  };
  
  const onBlur = () => {
    setOuterBorderColor(borderColor);
  };

  const onChangeText = (textValue: any) => {
    setTextValue(textValue);
    if ('function' === typeof onChange) {
      onChange(textValue);
    }
  };

  return (
    <View style={{ marginVertical: '2%',width:'100%',marginRight:'1%' }}>
      <View style={[ mainContainerStyle, { borderColor: isError ? errorColor : outerBorderColor}]}>
        <View style={[iconContainerDefaultStyle,iconContainerStyle,]}>
          <Icon
            size={icon.size}
            name={icon.name}
            type={icon.type}
            color={isError ? errorColor : iconColor}
          />
        </View>
        <View style={[textContaineDefaultStyle,textFieldContainerStyle]}>
          <TextInput
            secureTextEntry={isSecureEntry}
            defaultValue={defaultValue}
            style={[textInputDefaultStyle,textInputStyle]}
            placeholder={placeHolder}
            placeholderTextColor={placeholderTextColor}
            value={textValue}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          </View>
        {isRequired ? <Text style={isRequiredStyle}>*</Text> : null}
      </View>
      {isError ? (<Text style={errorTextStyle}>{errorText}</Text>) : null }
    </View>
  );
};

IconTextField.defaultProps = {
  borderColor:'black',
  placeholderTextColor: 'grey',
  icon:{  size: 20,
    name: 'user',
    type: 'font-awesome'
  },
  iconColor: 'black',
  outerBorderDefaultColor: '#007AFE',
  placeHolder: 'Add text',
  value: '',
  isSecureEntry: false,
  defaultValue: '',
  errorColor: 'red',
  isError: false,
  isRequired: true,
  errorText: '',
  isRequiredStyle:{color: 'red'},
  errorTextStyle:{ marginLeft: '5%', color: 'blue' },
  mainContainerStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    height: 40,
    padding: 8,
    width: '100%'
  },
  iconContainerDefaultStyle: {
    width:'8%',
    marginRight: '2%',
    padding: 1,
  },
  textContaineDefaultStyle:{width:'88%'},
  textInputDefaultStyle: {
    padding:2,
    color: 'black',
    ...Platform.select({
      android: {height: 40},
    }),
   }
};

export default IconTextField;