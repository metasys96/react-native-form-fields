import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Animated,
  StyleSheet,
  Platform,
  I18nManager,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native';

interface AppProps {
  isMultiline?: boolean;
  label?: string;
  defaultText?: string;
  maxLength?: number;
  editable?: boolean;
  animationDuration?: number;
  fontSize?: number;
  tintColor?: string;
  rootColor?: string;
  textColor?: string;
  errorColor?: string;
  lineWidth?: number;
  clearTextOnFocus?: boolean;
  isRequired?: boolean;
  activeLineWidth?: number;
  errorFontSize?: number;
  activeFontSize?: number;
  labelHeight?: number;
  labelPadding?: number;
  inputContainerPadding?: number;
  labelTextStyle?: StyleProp<ViewStyle> |StyleProp<TextStyle> ;
  errorTextStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  format?: string;
  defaultTextPosition?: string;
  autoCapitalize?: string;
  active?: boolean;
  isError?: boolean;
  onBlur?: (e:Event)=> void;
  onChange?: (value:string)=> void;
  onContentSizeChange?: (event: {
    nativeEvent: {contentSize: {width: number; height: number}};
  }) => void;
  renderAccesseries?: any;
  characterLimit?: number;
  errorText?: any;
  defaultTextContainerOverridesStyle?: StyleProp<ViewStyle>;
  defaultTextStyle?: StyleProp<TextStyle>;
  inputContainerOverrideStyle?:  StyleProp<ViewStyle>;
  inputOverrideStyle?:  StyleProp<ViewStyle>;
  value?: string;
  height?: number;
  onFocused?: (e: Event)=> void;
  textInputProps?: any;
}

const CustomTextField = (props: AppProps) => {
  const {
    isMultiline,
    label,
    defaultText,
    maxLength,
    editable,
    animationDuration,
    fontSize,
    tintColor,
    rootColor,
    textColor,
    errorColor,
    lineWidth,
    onFocused,
    clearTextOnFocus,
    isRequired,
    activeLineWidth,
    errorFontSize,
    activeFontSize,
    labelHeight,
    labelPadding,
    inputContainerPadding,
    labelTextStyle,
    errorTextStyle,
    containerStyle,
    format,
    defaultTextPosition,
    autoCapitalize,
    active,
    isError,
    onBlur,
    onChange,
    onContentSizeChange,
    renderAccesseries,
    characterLimit,
    errorText,
    defaultTextContainerOverridesStyle,
    defaultTextStyle,
    inputContainerOverrideStyle,
    inputOverrideStyle,
    value,
    textInputProps,
  } = props;

  const focusState = (errorText?: string, isFocused?: boolean) => {
    return errorText ? -1 : isFocused ? 1 : 0;
  };

  const inputState = (isFocused?: any, active?: any) => {
    return active || isFocused ? 1 : 0;
  };

  const [isActive, setIsActive] = useState(false);
  const [focusSt] = useState(new Animated.Value(focusState(errorText, false)));

  const [isFocusState, setIsFocusState] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState(errorText);
  const [height, setHeight] = useState(fontSize * 1.5);
  const [lblfocus] = useState(new Animated.Value(focusState()));
  const [isErrored, setIsErrored] = useState(isError);
  const [receivedFocus, setReceivedFocus] = useState(false);

  const [lblinput, setLblinput] = useState(new Animated.Value(inputState(0)));
  const [text, setText] = useState(value);
  let mounted = false;

  useEffect(() => {
    mounted = true;
  }, []);

  useEffect(() => {
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    setText(value);
    setErrorMsgs(errorText);
    setIsErrored(!!errorText);
  }, [errorText, value]);

  const usePrevious = (value: any) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevFocusState = usePrevious(isFocusState);
  const prevErrored = usePrevious(isErrored);

  useEffect(() => {
    if (errorText !== errorText || prevFocusState !== isFocusState) {
      const toValue = focusState(errorText, isFocusState);
      Animated.timing(focusSt, {toValue, duration: animationDuration}).start(
        onFocusAnimationEnd,
      );
    }

    if (prevFocusState !== isFocusState || active !== isActive) {
      const toValue = inputState(isFocusState, isActive);
      Animated.timing(lblinput, {toValue, duration: animationDuration}).start();
    }

    if (prevFocusState !== isFocusState || prevErrored !== isErrored) {
      const toValue = focusState(errorText, isFocusState);
      Animated.timing(lblfocus, {toValue, duration: animationDuration}).start();
    }
  }, [isFocusState]);

  const clear = () => {
    clear();
    onChangeText('');
  };

  useEffect(() => {
    if (!isFocusState) {
      if (text) {
        setLblinput(new Animated.Value(1));
      }
    }
  }, [isFocusState]);

  const onFocus = (event: any) => {
    setIsFocusState(true);

    if ('function' === typeof onFocused) {
      onFocused(event);
    }
    if (clearTextOnFocus) {
      clear();
    }
    setReceivedFocus(true);
  };

  const onBlurTextFiled = (event: any) => {
    if ('function' === typeof onBlur) {
      onBlur(event);
    }
    setIsFocusState(false);
    setIsActive(false);
  };

  const onChangeText = (text: string) => {
    setText(text);

    if (isErrored) {
      setIsErrored(false);
    }

    if ('function' === typeof onChange) {
      onChange(text);
    }
  };

  const onContentSizeChanges = (event: any) => {
    let hightValue;
    hightValue = event.nativeEvent.contentSize;
    if ('function' === typeof onContentSizeChange) {
      onContentSizeChange(event);
    }

    const newHeight = Platform.select({ios: 5, android: 1});
    const finalHeight = Math.max(
      fontSize * 1.5,
      Math.ceil(hightValue.height) + (newHeight ? newHeight : 3),
    );
    setHeight(finalHeight);
  };

  const onFocusAnimationEnd = () => {
    if (mounted) {
      setErrorMsgs(!errorText);
    }
  };

  const renderAccessery = () => {
    if ('function' !== typeof renderAccesseries) {
      return null;
    }

    return (
      <View
        style={{
          top: 2,
          justifyContent: 'center',
          alignSelf: 'flex-start',
        }}>
        {renderAccesseries()}
      </View>
    );
  };

  const renderDefaultText = (position: any) => {
    let textStyle = {
      color: rootColor,
      fontSize,
      textAlign,
    };

    let defaultTextContainer = {
      paddingRight: 0,
      paddingLeft: 0,
      height: fontSize * 2,
    };

    switch (position) {
      case 'left':
        defaultTextContainer.paddingRight = 8;
        textStyle.textAlign = 'left';
        break;

      case 'right':
        defaultTextContainer.paddingLeft = 8;
        textStyle.textAlign = 'right';
        break;
    }

    if (defaultText === null) {
      return null;
    }

    return (
      <Animated.View
        style={[
          {top: 2, alignSelf: 'flex-start'},
          defaultTextContainer,
          defaultTextContainerOverridesStyle,
        ]}>
        <Animated.Text style={[textStyle, defaultTextStyle]}>
          {defaultText}
        </Animated.Text>
      </Animated.View>
    );
  };

  if (isMultiline && props.height) {
    setHeight(props.height);
  }

  let defaultVisible = false;
  if (defaultText) {
    defaultVisible = true;
  }

  const textAlign = I18nManager.isRTL ? 'right' : 'left';
  const count = text && text.length ? text.length : 0;
  const isRestricted = characterLimit < count;

  let lblcolor = rootColor;
  if (isRestricted) {
    lblcolor = errorColor;
  } else if (isError) {
    lblcolor = errorColor;
  } else if (isFocusState) {
    lblcolor = tintColor;
  }

  const borderBottomColor = lblcolor;
  const borderBottomWidth = isRestricted
    ? activeLineWidth
    : focusSt.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [activeLineWidth, lineWidth, activeLineWidth],
      });

  let inputContainerHeightStyle;
  if (isMultiline) {
    inputContainerHeightStyle = {
      height: labelHeight + inputContainerPadding + height,
    };
  } else {
    inputContainerHeightStyle = {
      height: labelHeight + inputContainerPadding + fontSize * 1.5,
    };
  }

  let inputBottomPaddingStyle;
  if (!editable) {
    inputBottomPaddingStyle = {overflow: 'hidden'};
  } else {
    inputBottomPaddingStyle = {borderBottomColor, borderBottomWidth};
  }

  let heightStyle = {height: fontSize * 1.5};
  if (isMultiline) {
    if (height) {
      heightStyle = {height: fontSize * 1.5 + height};
    } else {
      heightStyle = {height: fontSize * 1.5 + 25};
    }
  }

  const inputStyle = {
    fontSize,
    textAlign,
    color: editable || defaultVisible ? textColor : rootColor,
  };

  const inputContainerProps = {
    style: [
      {
        backgroundColor: 'transparent',
        paddingTop: labelHeight,
        paddingBottom: inputContainerPadding,
      },
      inputContainerHeightStyle,
      inputBottomPaddingStyle,
      inputContainerOverrideStyle,
    ],
  };

  const ErrorMsgContainerStyle = {
    flexDirection: 'row',
    height:
      errorText || characterLimit
        ? errorFontSize * 2
        : focusSt.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [errorFontSize * 2, 8, 8],
          }),
  };

  const containerProps = {
    style: containerStyle,
    onStartShouldSetResponder: () => true,
      pointerEvents: editable ? 'auto' : 'none',
  };

  const errorStyle = {
    color: errorColor,
    opacity: focusSt.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [1, 0, 0],
    }),
    fontSize: errorText
      ? errorFontSize
      : focusSt.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [errorFontSize, 0, 0],
        }),
  };

  const lbltop = lblinput.interpolate({
    inputRange: [0, 1],
    outputRange: [
      labelHeight + fontSize * 0.05,
      labelHeight - labelPadding - activeFontSize,
    ],
  });

  const lblLeft = lblinput.interpolate({
    inputRange: [0, 1],
    outputRange: [
      labelHeight + fontSize * 0.25,
      labelHeight - labelPadding * 8,
    ],
  });

  const lbltextStyle = {
    fontSize: lblinput.interpolate({
      inputRange: [0, 1],
      outputRange: [fontSize, activeFontSize],
    }),
    color: lblcolor,
    width: '100%',
  };

  const lblcontainerStyle = {
    position: 'absolute',
    top: lbltop,
    left: defaultText && defaultTextPosition === 'left' ? lblLeft : 0,
  };

  const charCountertextStyle = {
    fontSize: errorFontSize,
    color: count > characterLimit || isError ? errorColor : rootColor,
  };

  let platFormWiseSpecificStyle;
  if (isMultiline) {
    if (Platform.OS === 'ios') {
      platFormWiseSpecificStyle = {top: -1};
    } else {
      platFormWiseSpecificStyle = {textAlignVertical: 'top'};
    }
  }

  const textInputStyle = [
    {top: 2, padding: 0, margin: 0, flex: 1},
    inputStyle,
    heightStyle,
    platFormWiseSpecificStyle,
    inputOverrideStyle,
  ];

  return (
    <Animated.View {...containerProps}>
      <Animated.View {...inputContainerProps}>
        <Animated.View style={lblcontainerStyle}>
          <Animated.Text
            style={[
              lbltextStyle,
              labelTextStyle,
              {justifyContent: 'space-between'},
            ]}>
            <Text style={{width: '50%'}}>{label}</Text>
            {isRequired ? (
              <Text style={{color: 'red', fontSize: 15, lineHeight: 18}}>
                {'*'}
              </Text>
            ) : null}
            {isFocusState && format ? (
              <Text style={{fontSize: 15}}>{` ${format}`}</Text>
            ) : null}
          </Animated.Text>
        </Animated.View>
        <View style={{flexDirection: 'row'}}>
          {defaultText && defaultTextPosition === 'left'
            ? renderDefaultText('left')
            : null}
          <TextInput
            multiline={isMultiline}
            style={textInputStyle}
            {...textInputProps}
            selectionColor={tintColor}
            editable={editable}
            onChangeText={onChangeText}
            onContentSizeChange={onContentSizeChanges}
            onFocus={onFocus}
            onBlur={onBlurTextFiled}
            value={text}
            maxLength={maxLength}
            autoCapitalize={autoCapitalize}
          />

          {defaultText && defaultTextPosition === 'right'
            ? renderDefaultText('right')
            : null}
          {renderAccessery()}
        </View>
      </Animated.View>
      <Animated.View style={ErrorMsgContainerStyle}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            paddingVertical: 4,
            flex: 1,
            alignItems: 'flex-start',
          }}>
          <Animated.Text
            style={[
              {backgroundColor: 'transparent'},
              errorStyle,
              errorTextStyle,
            ]}>
            {isError ? errorText : null}
          </Animated.Text>
        </View>
      </Animated.View>
      {!characterLimit ? null : (
        <View style={{paddingVertical: 4, paddingLeft: 4}}>
          <Text
            style={[
              charCountertextStyle,
              {textAlign: 'right', backgroundColor: 'transparent'},
            ]}>
            {count} / {characterLimit}
          </Text>
        </View>
      )}
    </Animated.View>
  );
};

CustomTextField.defaultProps = {
  isMultiline: false,
  label: '',
  value: '',
  isRequired: false,
  active: false,
  isFocused: false,
  isError: false,
  isRestricted: false,
  underlineColorAndroid: 'transparent',
  disableFullscreenUI: true,
  editable: true,
  animationDuration: 20,
  fontSize: 16,
  errorFontSize: 12,
  activeFontSize: 12,
  labelHeight: 32,
  labelPadding: 4,
  inputContainerPadding: 8,
  rootColor: 'rgba(0, 0, 0, .87)',
  tintColor: 'rgb(0,100,234)',
  textColor: 'rgba(0, 0, 0, .87)',
  errorColor: 'red',
  lineWidth: StyleSheet.hairlineWidth,
  activeLineWidth: 2,
  autoCapitalize: 'none',
  defaultTextPosition: 'left',
  defaultText: '',
  errorText: '',
};

export default CustomTextField;
