import React, {useState} from 'react';
import {View, Text, TouchableOpacity,StyleSheet,StyleProp,ViewStyle,TextStyle } from 'react-native';
import {Icon} from 'react-native-elements';

interface AppProps {
  isChecked?: boolean;
  containerBgColor?: string;
  containerFlexDirection?: string;
  containerStyle?: any;
  iconContainerStyle?: StyleProp<ViewStyle>;
  labelContainerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  label?: string;
  labelFontSize?: number;
  labelColor?: string;
  checkedIcon?: checkedIcon;
  uncheckedIcon?: uncheckedIcon;
  checkedElement?: boolean;
  uncheckedElement?: boolean;
  onChange?: (e)=>void;
}

const CheckBox = (props: AppProps) => {
  const {
    isChecked,
    label,
    labelFontSize,
    labelColor,
    checkedIcon,
    uncheckedIcon,
    checkedElement,
    uncheckedElement,
    containerBgColor,
    containerFlexDirection,
    containerStyle,
    iconContainerStyle,
    labelContainerStyle,
    labelStyle,
    onChange,
  } = props;

  const [isCheck, setIsChecked] = useState(isChecked);

  const checked = () => {
    setIsChecked(!isCheck);
    if ('function' === typeof onChange) {
      onChange(!isCheck);
    }
  };

  return (
    <TouchableOpacity
      onPress={checked}
      activeOpacity={1}
      style={[
        [DefaultStyles.containerStyle,{
          flexDirection: containerFlexDirection
            ? containerFlexDirection
            : 'row',
          backgroundColor: containerBgColor,
        }],
        containerStyle,
      ]}>
      <View
        style={[
          DefaultStyles.iconContainerStyle,
          iconContainerStyle,
        ]}>
        {isCheck ? (
          checkedElement ? (
            checkedElement
          ) : (
           
            <Icon
              size={checkedIcon.size}
              name={checkedIcon.name}
              type={checkedIcon.type}
              color={checkedIcon.color}
            />
          )
        ) : uncheckedElement ? (
          uncheckedElement
        ) : (
          <Icon
            size={uncheckedIcon.size}
            name={uncheckedIcon.name}
            type={uncheckedIcon.type}
            color={uncheckedIcon.color}
          />
        )}
      </View>
      <View style={[{justifyContent: 'flex-end'}, labelContainerStyle]}>
        {label ? (
          <Text
            style={[{fontSize: labelFontSize, color: labelColor}, labelStyle]}>
            {label}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
const DefaultStyles = StyleSheet.create({
  iconContainerStyle: {
    justifyContent: 'flex-start',
    height: 20,
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  containerStyle :{
    display: 'flex',
    alignItems: 'center',
    height: 40
  }
})

CheckBox.defaultProps = {
  isCheck: false,
  label: '',
  labelColor: 'black',
  labelFontSize: 16,
  containerFlxDirection: 'row',
  checkedIcon: {
    size: 20,
    name: 'check-box',
    type: 'MaterialIcons',
    color: 'black',
  },
  uncheckedIcon: {
    size: 20,
    name: 'check-box-outline-blank',
    type: 'MaterialIcons',
    color: 'black',
  },
};

export default CheckBox;
