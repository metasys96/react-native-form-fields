import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Modal,
  Picker,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DeviceOrientation from './deviceOrientation';
import isEqual from 'lodash.isequal';
import {Icon} from 'react-native-elements';

interface AppProps {
  items: Array<itemsObj>;
  useNativeAndroidPickerStyle?: boolean;
  style?:any;
  modalProps?: any;
  dropDownProps?: any;
  disabled?: boolean;
  textInputProps?: any;
  placeholderTextColor?: string;
  placeholder?: dropDownplaceHolder;
  selectText?: string;
  hideSelectBar?: boolean;
  onChange?: (value: string , index: number)=>void;
  selectedItem?: any;
  dropdownIcon?: dropDownIcon;
  fieldIcon?: boolean;
  itemTextColor?: string;
}

const DropDown = (props: AppProps) => {
  const {
    useNativeAndroidPickerStyle,
    style,
    modalProps,
    dropDownProps,
    disabled,
    textInputProps,
    placeholderTextColor,
    placeholder,
    selectText,
    hideSelectBar,
    onChange,
    dropdownIcon,
    fieldIcon,
    itemTextColor,
  } = props;

  const handlePlaceholder = (placeholderhere: any) => {
    if (props.items) {
      if (isEqual(placeholderhere, {}) || isEqual(placeholderhere, undefined)) {
        return props.items;
      } else {
        return [placeholderhere, ...props.items];
      }
    }
  };

  const merged = handlePlaceholder(placeholder);
  const [items] = useState(merged);
  const [selectedItem, setSelectedItem] = useState(
    props.selectedItem ? props.selectedItem : placeholder,
  );
  const [showPicker, setShowPicker] = useState(false);
  const deviceOrientation = DeviceOrientation();
  const [orientation] = useState(deviceOrientation);

  const defaultStyles = StyleSheet.create({
    viewContainer: {
      alignSelf: 'stretch',
    },
    iconContainer: {
      position: 'absolute',
      right: 0,
    },
    modalViewTop: {
      flex: 1,
    },
    modalViewMiddle: {
      height: 44,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: 10,
      backgroundColor: '#f5f5f5',
      borderTopWidth: 0.5,
      borderTopColor: '#919498',
      zIndex: 2,
    },
    chevronContainer: {
      flexDirection: 'row',
    },
    chevron: {
      width: 15,
      height: 15,
      backgroundColor: 'transparent',
      borderColor: '#D0D4DB',
      borderTopWidth: 1.5,
      borderRightWidth: 1.5,
    },
    chevronUp: {
      marginLeft: 11,
      transform: [{translateY: 4}, {rotate: '-45deg'}],
    },
    chevronDown: {
      marginLeft: 22,
      transform: [{translateY: -5}, {rotate: '135deg'}],
    },
    chevronActive: {
      borderColor: '#007AFE',
    },
    select: {
      color: '#007AFE',
      fontWeight: 'bold',
      fontSize: 15,
      paddingTop: 1,
      paddingRight: 2,
    },
    modalViewBottom: {
      justifyContent: 'center',
      backgroundColor: '#F9f9f9',
    },
    placeholder: {
      color: '#C7C7CD',
    },
    headlessAndroidPicker: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      color: 'transparent',
      opacity: 0,
    },
    selectedItem: {color: 'black'},
  });

  useEffect(() => {
    items &&
      items.forEach((element: any, index: number) => {
        if (element && element.value === selectedItem.value) {
          onChange(selectedItem.value, index);
        }
      });
  }, [items]);

  const onValueChanges = (value: string, index: number) => {
    setSelectedItem(items[index]);
    onChange(value, index);
  };

  const getPlaceholderStyle = () => {
    if (
      !isEqual(placeholder, {}) &&
      placeholder &&
      selectedItem.label === placeholder.label
    ) {
      return {
        ...defaultStyles.placeholder,
        ...style.placeholder,
        color: placeholderTextColor,
      };
    } else if (isEqual(placeholder, {})) {
      return {
        ...defaultStyles.selectedItem,
        ...style.selectedItem,
      };
    } else {
      return {};
    }
  };

  const renderPickerItemList = () => {
    return (
      items &&
      items.map((item: any) => {
        if (item) {
          return (
            <Picker.Item
              label={item.label ? item.label : ''}
              value={item.value ? item.value : ''}
              key={item.key ? item.key : item.label}
              color={item.color ? item.color : itemTextColor}
            />
          );
        }
      })
    );
  };

  const renderPickerBar = () => {
    if (hideSelectBar) {
      return null;
    }
    return (
      <View style={[defaultStyles.modalViewMiddle, style.modalViewMiddle]}>
        <TouchableWithoutFeedback
          onPress={() => setShowPicker(!showPicker)}
          hitSlop={{top: 4, right: 4, bottom: 4, left: 4}}>
          <View>
            <Text
              allowFontScaling={false}
              style={[defaultStyles.select, style.select]}>
              {selectText}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  const renderIcon = () => {
    return (
      <View
        style={[
          {marginRight: 5},
          defaultStyles.iconContainer,
          style.iconContainer,
        ]}>
        {fieldIcon ? (
          fieldIcon
        ) : (
          <Icon
            size={dropdownIcon.size}
            name={dropdownIcon.name}
            type={dropdownIcon.type}
            color={dropdownIcon.color}
          />
        )}
      </View>
    );
  };

  const renderTextInput = () => {
    const containerStyle =
      Platform.OS === 'ios'
        ? style.inputIOSContainer
        : style.inputAndroidContainer;
    if (selectedItem) {
      return (
        <View
          pointerEvents="box-only"
          style={[DDLStyles.placeHolder, containerStyle]}>
          <TextInput
            style={[
              Platform.OS === 'ios' ? style.inputIOS : style.inputAndroid,
              getPlaceholderStyle(),
            ]}
            value={selectedItem.value ? selectedItem.value : selectedItem.label}
            editable={false}
            {...textInputProps}
          />
          {renderIcon()}
        </View>
      );
    }
  };

  const renderIOS = () => {
    const animationType =
      modalProps && modalProps.animationType
        ? modalProps.animationType
        : 'slide';

    return (
      <View style={[defaultStyles.viewContainer, style.viewContainer]}>
        <TouchableWithoutFeedback onPress={() => setShowPicker(!showPicker)}>
          {renderTextInput()}
        </TouchableWithoutFeedback>

        <Modal
          visible={showPicker}
          transparent
          animationType={animationType}
          supportedOrientations={['portrait', 'landscape']}
          {...modalProps}>
          <TouchableOpacity
            style={[defaultStyles.modalViewTop, style.modalViewTop]}
            onPress={() => setShowPicker(!showPicker)}
          />
          {renderPickerBar()}
          <View
            style={[
              defaultStyles.modalViewBottom,
              {height: orientation === 'portrait' ? 215 : 162},
              style.modalViewBottom,
            ]}>
            <Picker
              enabled={!disabled}
              onValueChange={(value, index) => onValueChanges(value, index)}
              selectedValue={
                selectedItem && selectedItem.value
                  ? selectedItem.value
                  : items && items[0].value
                  ? items[0].value
                  : null
              }
              {...dropDownProps}>
              {renderPickerItemList()}
            </Picker>
          </View>
        </Modal>
      </View>
    );
  };

  const renderAndroidHeadless = () => {
    return (
      <TouchableWithoutFeedback onPress={() => setShowPicker(!showPicker)}>
        <View style={[style.headlessAndroidContainer]}>
          {renderTextInput()}
          <Picker
            style={[
              dropdownIcon ? DDLStyles.transparent : {},
              defaultStyles.headlessAndroidPicker,
              style.headlessAndroidPicker,
            ]}
            enabled={!disabled}
            onValueChange={(value: string, index: number) =>
              onValueChanges(value, index)
            }
            selectedValue={selectedItem.value}
            {...dropDownProps}>
            {renderPickerItemList()}
          </Picker>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderAndroidNativePickerStyle = () => {
    return (
      <View style={[defaultStyles.viewContainer, style.viewContainer]}>
        <Picker
          style={[
            dropdownIcon ? DDLStyles.transparent : {},
            style.inputAndroid,
            getPlaceholderStyle(),
          ]}
          enabled={!disabled}
          onValueChange={(value: string, index: number) =>
            onValueChanges(value, index)
          }
          selectedValue={selectedItem.value}
          {...dropDownProps}>
          {renderPickerItemList()}
        </Picker>
        {renderIcon()}
      </View>
    );
  };

  return Platform.OS === 'ios'
    ? renderIOS()
    : useNativeAndroidPickerStyle === true
    ? renderAndroidNativePickerStyle()
    : renderAndroidHeadless();
};

DropDown.defaultProps = {
  placeholder: {
    id: 'default',
    label: 'Please select',
    value: '',
    color: '#9EA0A4',
  },
  disabled: false,
  style: {},
  placeholderTextColor: '#C7C7CD',
  itemTextColor: 'black',
  useNativeAndroidPickerStyle: false,
  hideSelectBar: false,
  selectText: 'Select',
  dropdownIcon: {
    size: 20,
    name: 'angle-down',
    type: 'font-awesome',
    color: 'black',
  },
  modalProps: {},
  textInputProps: {},
  dropDownProps: {},
};

const DDLStyles = StyleSheet.create({
  transparent: {backgroundColor: 'transparent'},
  placeHolder: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    color: 'black',
  },
});

export default DropDown;
