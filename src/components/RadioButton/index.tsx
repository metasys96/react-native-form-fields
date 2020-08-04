/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity,StyleSheet,StyleProp,ViewStyle,TextStyle} from 'react-native';
import {Icon} from 'react-native-elements';
interface AppProps {
  items: Array<itemsObj>;
  size?: number;
  isVertical?: boolean;
  selectedValue?: itemsObj;
  onChange?: (value:itemsObj )=>void;
  containerStyle?:  StyleProp<ViewStyle>;
  iconContainerStyle?:  StyleProp<ViewStyle>;
  labelContainerStyle?:  StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  labelFontSize?: number;
  labelColor?: string;
  selectedIcon?: selectedIconObj;
  unSelectedIcon?: unSelectedIconObj;
  selectedElement?: boolean;
  unSelectedElement?: boolean;
}

const RadioButton = (props: AppProps) => {
  const {
    items,
    size,
    isVertical,
    selectedValue,
    onChange,
    containerStyle,
    iconContainerStyle,
    labelContainerStyle,
    labelStyle,
    labelFontSize,
    labelColor,
    selectedIcon,
    unSelectedIcon,
    selectedElement,
    unSelectedElement,
  } = props;

  const [radioSelected, setRadio] = useState(
    selectedValue ? selectedValue.id : items[0].id,
  );

  const onRadioClick = (item: any) => {
    setRadio(item.id);
    if ('function' === typeof onChange) {
      onChange(item);
    }
  };

  const getOptions = () => {
    const options = items.map((item: any) => {
      return (
        <TouchableOpacity        
          key={item.id}         
          activeOpacity={1}
          onPress={() => onRadioClick(item)}
          style={[
            DefaultStyles.containerStyle,
            {height: size,marginRight: isVertical ? '0%' : '5%'},
            containerStyle,
          ]}>
          <View
            style={[
              DefaultStyles.iconContainerStyle,
              iconContainerStyle,
            ]}>
            {item.id === radioSelected ? (
              selectedElement ? (
                selectedElement
              ) : (
                <Icon
                  size={size ? size : selectedIcon.size}
                  name={selectedIcon.name}
                  type={selectedIcon.type}
                  color={selectedIcon.color}
                />
              )
            ) : unSelectedElement ? (
              unSelectedElement
            ) : (
              <Icon
                size={size ? size : unSelectedIcon.size}
                name={unSelectedIcon.name}
                type={unSelectedIcon.type}
                color={unSelectedIcon.color}
              />
            )}
          </View>
          <View style={[{justifyContent: 'center'}, labelContainerStyle]}>
            <Text
              style={[
                {
                  fontSize: size ? size * 0.8 : labelFontSize,
                  paddingLeft: '2%',
                  color: labelColor,
                },
                labelStyle,
              ]}>
              {item.value}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });

    return options;
  };

  return (
    <View
      style={{
        flexDirection: isVertical ? 'column' : 'row',
        marginVertical: '1%',
      }}>
      {getOptions()}
    </View>
  );
};
const DefaultStyles = StyleSheet.create({
  iconContainerStyle:{
    justifyContent: 'center',
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  containerStyle:{
    flexDirection: 'row',
    justifyContent: 'center',
  }
})


RadioButton.defaultProps = {
  items: [
    {
      id: 1,
      value: 'Option 1',
    },
    {
      id: 2,
      value: 'Option 2',
    },
  ],

  labelColor: 'black',
  isVertical: false,
  labelFontSize: 20,
  selectedIcon: {
    size: 20,
    name: 'radio-button-checked',
    type: 'MaterialIcons',
    color: 'black',
  },
  unSelectedIcon: {
    size: 20,
    name: 'radio-button-unchecked',
    type: 'MaterialIcons',
    color: 'black',
  },
};
export default RadioButton;
