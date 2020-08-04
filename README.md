# react-native-form-fields

Documentation

Cross-platform development is now an essential aspect of software
development. Node Packet Manager, the online repository is a go to site
for React Programmers. This is MetaSys' contribution based on challenges
we had while developing a single application for both Android and iOS.
We offer a flexible NPM package, for UI form field widgets which will
work on both Android and iOS platforms. The package is based on React
hooks and typescript, which provides an error-free field. It also gives
you a clean and consistent look and feel on iOS and Android devices with
high performance.\
\
This React Native package has the basic form fields such as Radio
Button, CheckBox, Dropdown List and different types of Text Fields. The
code takes care of most use cases for the different fields. Developers
can pass the required properties and get the results easily and very
quickly. The documentation below will help you to easily integrate with
your React Native projects. This version is compatible with react-native
0.60 and above.

Content

1.  Installation

2.  Screenshots

3.  Getting started

4.  Properties

5.  Contribution

**Installation**

Run npm i react-native-form-fields--save

```

import {

  RadioButton,

  CheckBox,

  IconTextField,

  BasicTextField,

  CustomTextField,

  DropDown } from \'react-native- form-fields\';

```

## Screenshot
<img src="https://raw.githubusercontent.com/metasys96/react-native-form-fields/master/screenshots/image1.png" width="6.260416666666667in" height="5.572916666666667in"/>

**Getting started**

Add react-native-form-fields to your JS file.

 **RadioButton**

```
import RadioButton from \'react-native- form-fields'

const onChangeRadio = (selectedObj: any) =\> {

    console.log('Selected item = ', selectedObj.value)

  };

\<RadioButton

items={\[{id:'item1',value:'male'},{id:'item2',value:'female'}\]}

onChange={onChangeRadio}

/\>
```
**Properties**

+----------------+----------------+----------------+----------------+
| Name           | Description    | Type           | Default        |
+================+================+================+================+
| items          | Field Items    | Array          | \[             |
|                | Array          |                | {id: 1,value:  |
|                |                |                | \'Option 1\'}, |
|                |                |                |                |
|                |                |                | {              |
|                |                |                | id: 2,value: \ |
|                |                |                | 'Option 2\'}\] |
+----------------+----------------+----------------+----------------+
| size           | Field Size     | Number         | \-             |
+----------------+----------------+----------------+----------------+
| isVertical     | Fields'        | Boolean        | false          |
|                | Direction      |                |                |
+----------------+----------------+----------------+----------------+
| selectedValue  | Selected Field | Object         | \-             |
+----------------+----------------+----------------+----------------+
| onChange       | Change Radio   | Function       | \-             |
|                | callback       |                |                |
+----------------+----------------+----------------+----------------+
| containerStyle | Field          | Object         | { f            |
|                | Container      |                | lexDirection:  |
|                | Style          |                | \'row\',justif |
|                |                |                | yContent: \'ce |
|                |                |                | nter\',  margi |
|                |                |                | nRight: isVert |
|                |                |                | ical : \'5%\'} |
+----------------+----------------+----------------+----------------+
| icon           | Field Icon     | Object         | {justif        |
| ContainerStyle | Container      |                | yContent: \'ce |
|                | Style          |                | nter\', shadow |
|                |                |                | Color: \'rgba( |
|                |                |                | 0,0,0, .2)\',s |
|                |                |                | hadowOffset: { |
|                |                |                |  height: 1, wi |
|                |                |                | dth: 1 },shado |
|                |                |                | wOpacity: 1,sh |
|                |                |                | adowRadius: 1} |
+----------------+----------------+----------------+----------------+
| label          | Field Label    | Object         | {              |
| ContainerStyle | Container      |                |  justifyConten |
|                | Style          |                | t: \'center\'} |
+----------------+----------------+----------------+----------------+
| labelStyle     | Field Label    | Object         | {fontSize      |
|                | Style          |                | : 20, paddingL |
|                |                |                | eft: \'2%\',co |
|                |                |                | lor: \'white\' |
|                |                |                | }              |
+----------------+----------------+----------------+----------------+
| labelFontSize  | Field Label    | Number         | 20             |
|                | Font Size      |                |                |
+----------------+----------------+----------------+----------------+
| labelColor     | Field Label    | String         | black          |
|                | Font Color     |                |                |
+----------------+----------------+----------------+----------------+
| selectedIcon   | Selected Icon  | Object         | {              |
|                |                |                |  size: 20, nam |
|                |                |                | e: \'radio-but |
|                |                |                | ton-checked\', |
|                |                |                |  type: \'Mater |
|                |                |                | ialIcons\',col |
|                |                |                | or:\'black\' } |
+----------------+----------------+----------------+----------------+
| unSelectedIcon | Unselected     | Object         | { s            |
|                | Icon           |                | ize: 20, name: |
|                |                |                |  \'radio-butto |
|                |                |                | n-unchecked\', |
|                |                |                |  type: \'Mater |
|                |                |                | ialIcons\',col |
|                |                |                | or:\'black\' } |
+----------------+----------------+----------------+----------------+
| s              | Selected       | React Native   | \-             |
| electedElement | Component      | Component      |                |
+----------------+----------------+----------------+----------------+
| unS            | Unselected     | React Native   | \-             |
| electedElement | Component      | Component      |                |
+----------------+----------------+----------------+----------------+

**CheckBox**
```
import CheckBox from \'react-native- form-fields'

\<CheckBox label=\'Javascript\' isMarked={true}/\>
```
**Properties**

+----------------+----------------+----------------+----------------+
| Name           | Description    | Type           | Default        |
+================+================+================+================+
| isChecked      | Set Checkbox   | Boolean        | false          |
|                | Checked        |                |                |
+----------------+----------------+----------------+----------------+
| co             | Field          | Number         | \-             |
| ntainerBgColor | Background     |                |                |
|                | Color          |                |                |
+----------------+----------------+----------------+----------------+
| containe       | Fields'        | String         | row            |
| rFlexDirection | Direction      |                |                |
+----------------+----------------+----------------+----------------+
| containerStyle | Field          | Object         | { f            |
|                | Container      |                | lexDirection:  |
|                | Style          |                | \'row\',justif |
|                |                |                | yContent: \'ce |
|                |                |                | nter\',  margi |
|                |                |                | nRight: isVert |
|                |                |                | ical : \'5%\'} |
+----------------+----------------+----------------+----------------+
| icon           | Field Icon     | Object         | {heig          |
| ContainerStyle | Container      |                | ht: 20,justify |
|                | Style          |                | Content: \'fle |
|                |                |                | x-start\',shad |
|                |                |                | owColor: \'rgb |
|                |                |                | a(0,0,0, .2)\' |
|                |                |                | ,shadowOffset: |
|                |                |                |  { height: 1,  |
|                |                |                | width: 1 },sha |
|                |                |                | dowOpacity: 1, |
|                |                |                |                |
|                |                |                | sh             |
|                |                |                | adowRadius: 1} |
+----------------+----------------+----------------+----------------+
| label          | Field Label    | Object         | { j            |
| ContainerStyle | Container      |                | ustifyContent: |
|                | Style          |                |  \'flex-end\'} |
+----------------+----------------+----------------+----------------+
| labelStyle     | Field Label    | Object         | { fo           |
|                | Style          |                | ntSize:16, col |
|                |                |                | or: \'black\'} |
+----------------+----------------+----------------+----------------+
| label          | Field label    | String         |                |
+----------------+----------------+----------------+----------------+
| labelFontSize  | Field Label    | Number         | 16             |
|                | Font Size      |                |                |
+----------------+----------------+----------------+----------------+
| labelColor     | Field Label    | String         | black          |
|                | Font Color     |                |                |
+----------------+----------------+----------------+----------------+
| onChange       | Change         | Function       | \-             |
|                | checkbox       |                |                |
|                | callback       |                |                |
+----------------+----------------+----------------+----------------+
| checkedIcon    | Checked Icon   | Object         | { s            |
|                |                |                | ize: 20, name: |
|                |                |                |  \'check-box-o |
|                |                |                | utline\', type |
|                |                |                | : \'material-c |
|                |                |                | ommunity\',col |
|                |                |                | or:\'black\' } |
+----------------+----------------+----------------+----------------+
| unCheckedIcon  | Unchecked Icon | Object         | { size:        |
|                |                |                | 20, name: \'ch |
|                |                |                | eckbox-blank-o |
|                |                |                | utline\', type |
|                |                |                | : \'material-c |
|                |                |                | ommunity\',col |
|                |                |                | or:\'black\' } |
+----------------+----------------+----------------+----------------+
| checkedElement | Checked        | React Native   | \-             |
|                | Component      | Component      |                |
+----------------+----------------+----------------+----------------+
| un             | Unchecked      | React Native   | \-             |
| CheckedElement | Component      | Component      |                |
+----------------+----------------+----------------+----------------+

**DropDown**
```
import DropDown from \'react-native- form-fields'

const dropdownStyles = {

      select: {color: \'white\'},

      modalViewBottom: {backgroundColor: \'pink\'},

      placeholder: {backgroundColor: \'yellow\'},

      modalViewMiddle: {backgroundColor: \'red\'},

    };

const onChangeDropdown = (value: any) =\> {

    console.log(\'selected value = \', value);

  };

\<PickerSelect

                onChange={onChangeDropdown}

                style={dropdownStyles}

                items={\[

                  {id: \'item1\', label: \'Apple\', value: \'Apple\'},

                  {id: \'item2\', label: \'Ball\', value: \'Ball\'},

                  {id: \'item3\', label: \'Cat\', value: \'Cat\'}

                \]}

                 selectedItem={{id: \'item3\', label: \'Cat\', value: \'Cat\'}}

              /\>
```

**Properties**

  name                          description                                    type              default
  ----------------------------- ---------------------------------------------- ----------------- ------------------------------------------------------------------------
  items                         Field Items Array                              Array             \-
  useNativeAndroidPickerStyle   Native Android Dropdown                        Boolean           false
  style                         Different styles                               Object            \-
  modalProps                    Modal View Props (Only iOS)                    Props             \-
  dropDownProps                 DropDown Props                                 Props             \-
  disabled                      DropDown disabled for selection                Boolean           false
  textInputProps                Field Text Input Props                         Props             \-
  placeholderTextColor          Dropdown Placeholder Text Color                String            \#C7C7CD
  placeholder                   Placeholder For DropDown                       Object            \-
  selectText                    Default Text for Dropdown view                 String            Select
  hideSelectBar                 Render Dropdown Select Button Bar (iOS only)   Boolean           Select
  onChange                      Change Picker callback                         Function          \-
  selectedItem                  Selected item in the Dropdown list             Object            
  itemTextColor                 Items Text Color                               String            black
  dropdownIcon                  DropDown Icon                                  Object            { size: 20, name: \'chevron-down\', type: \'entypo\',color:\'black\' }
  fieldIcon                     DropDown Icon Component                        React Component   \-

**BasicTextField**
```
import BasicTextField from \'react-native- form-fields'

const onChangeText = (text: string) =\> {

    console.log(\'Field text = \',text);

setEmail(text);

  };

\<BasicTextField

                  label={\'Email\'}

                  value={this.state.email}

onChange={onChangeText}

                /\>
```

**Properties**

+------------------+------------------+----------+------------------+
| name             | description      | type     | default          |
+==================+==================+==========+==================+
| label            | Field Label      | String   | \-               |
+------------------+------------------+----------+------------------+
| labelColor       | Field Label      | String   | black            |
|                  | Color            |          |                  |
+------------------+------------------+----------+------------------+
| labelStyle       | Field Label      | Object   |                  |
|                  | Style            |          |                  |
+------------------+------------------+----------+------------------+
| isRequired       | Display Asterisk | Boolean  | false            |
|                  | Symbol           |          |                  |
+------------------+------------------+----------+------------------+
| a                | Asterisk Symbol  | Object   | { color: \'red\' |
| steriskTextStyle | Style            |          | , fontSize: 16 } |
+------------------+------------------+----------+------------------+
| Value            | Field Value      | String   | \-               |
+------------------+------------------+----------+------------------+
| on               | Field Border     | String   | \'\#007AFE\'     |
| FocusBorderColor | Color on focus   |          |                  |
+------------------+------------------+----------+------------------+
| isError          | To Display error | Boolean  | false            |
+------------------+------------------+----------+------------------+
| errorText        | Display Error    | String   |                  |
|                  | Text             |          |                  |
+------------------+------------------+----------+------------------+
| errorColor       | Error Text Color | String   | red              |
+------------------+------------------+----------+------------------+
| errorTextStyle   | Error Text Style | Object   | \-               |
+------------------+------------------+----------+------------------+
| err              | Error Container  | Object   | {                |
| orContainerStyle | Style            |          | justifyContent:  |
|                  |                  |          | \'center\', marg |
|                  |                  |          | inLeft: \'1%\' } |
+------------------+------------------+----------+------------------+
| hintText         | Hint             | String   | \-               |
+------------------+------------------+----------+------------------+
| hintTextStyle    | Hint Style       | Object   | { color          |
|                  |                  |          | : \'orange\', fo |
|                  |                  |          | ntSize: 16, marg |
|                  |                  |          | inLeft: \'2%\' } |
+------------------+------------------+----------+------------------+
| isSecureEntry    | To Set Sensetive | Boolean  | false            |
|                  | Text Stay Secure |          |                  |
+------------------+------------------+----------+------------------+
| placeholder      | Field            | String   |                  |
|                  | Placeholder      |          |                  |
+------------------+------------------+----------+------------------+
| keyboardType     | Keyboard Type    | String   | default          |
+------------------+------------------+----------+------------------+
| maxLength        | Max Length Of    | Number   | null             |
|                  | The Field        |          |                  |
+------------------+------------------+----------+------------------+
| is               | To Clear The     | Boolean  | false            |
| ClearTextOnFocus | Text On Focus    |          |                  |
+------------------+------------------+----------+------------------+
| onChange         | Change Text      | Function | \-               |
|                  | callback         |          |                  |
+------------------+------------------+----------+------------------+
| text             | Field Border     | String   | black            |
| FieldBorderColor | Color            |          |                  |
+------------------+------------------+----------+------------------+
| textFieldStyle   |                  | Object   | {                |
|                  |                  |          | c                |
|                  |                  |          | olor: \'black\', |
|                  |                  |          | padd             |
|                  |                  |          | ingLeft: \'2%\', |
|                  |                  |          | height: 40,      |
|                  |                  |          | fontSize: 20,    |
|                  |                  |          | padding          |
|                  |                  |          | Vertical: Platfo |
|                  |                  |          | rm.OS == \'andro |
|                  |                  |          | id\' ? 0 : null} |
+------------------+------------------+----------+------------------+
| textFie          |                  | Object   | {                |
| ldContainerStyle |                  |          | border           |
|                  |                  |          | Color:\'black\', |
|                  |                  |          | borderWidth: 1,  |
|                  |                  |          | b                |
|                  |                  |          | orderRadius: 10} |
+------------------+------------------+----------+------------------+
| headerStyle      |                  | Object   | {                |
|                  |                  |          |                  |
|                  |                  |          | alignT           |
|                  |                  |          | ext: \'center\', |
|                  |                  |          |                  |
|                  |                  |          | width: \'100%\', |
|                  |                  |          |                  |
|                  |                  |          | flexDir          |
|                  |                  |          | ection: \'row\', |
|                  |                  |          |                  |
|                  |                  |          | fle              |
|                  |                  |          | xWrap: \'wrap\', |
|                  |                  |          |                  |
|                  |                  |          | marginVer        |
|                  |                  |          | tical: \'0.5%\', |
|                  |                  |          |                  |
|                  |                  |          | pad              |
|                  |                  |          | dingLeft: \'1%\' |
|                  |                  |          |                  |
|                  |                  |          | }                |
+------------------+------------------+----------+------------------+
| textInputProps   | Props for Text   | Props    |                  |
|                  | Input            |          |                  |
+------------------+------------------+----------+------------------+

**IconTextField**
```
import IconTextField from \'react-native- form-fields'

const onChangeText = (text: string) =\> {

    console.log(\'Field text = \',text);

setUserName(text);

  };

\<IconTextField

                  icon={{size: 20, name: \'female\', type: \'font-awesome\'}}

                  value={this.state.userName}

                  errorText={\'add text\'}

                  isRequired={true}

                  onChange={onChangeText}

                /\>
```

**Properties**

+------------------+------------------+----------+------------------+
| name             | description      | type     | default          |
+==================+==================+==========+==================+
| icon             | Field Icon       | String   | { size: 20,      |
|                  |                  |          | name: \'user\',  |
|                  |                  |          | type: \          |
|                  |                  |          | 'font-awesome\'} |
+------------------+------------------+----------+------------------+
| iconColor        | Field Icon Color | String   | black            |
+------------------+------------------+----------+------------------+
| value            | Field Value      | String   |                  |
+------------------+------------------+----------+------------------+
| borderColor      | Field Border     | Object   | black            |
|                  | Color            |          |                  |
+------------------+------------------+----------+------------------+
| isRequiredStyle  | Asterisk Symbol  | Object   |                  |
|                  | Style            |          |                  |
+------------------+------------------+----------+------------------+
| defaultValue     | Default Value    | String   |                  |
+------------------+------------------+----------+------------------+
| isError          | To Display error | Boolean  | false            |
+------------------+------------------+----------+------------------+
| errorText        | Display Error    | String   |                  |
|                  | Text             |          |                  |
+------------------+------------------+----------+------------------+
| errorColor       | Error Text Color | String   | red              |
+------------------+------------------+----------+------------------+
| errorTextStyle   | Error Text Style | Object   | { margi          |
|                  |                  |          | nLeft: \'5%\', c |
|                  |                  |          | olor: \'blue\' } |
+------------------+------------------+----------+------------------+
| isSecureEntry    | To Set Sensetive | Boolean  | false            |
|                  | Text Stay Secure |          |                  |
+------------------+------------------+----------+------------------+
| placeholder      | Field            | String   |                  |
|                  | Placeholder      |          |                  |
+------------------+------------------+----------+------------------+
| plac             | Placeholder Text | String   | grey             |
| eholderTextColor | Color            |          |                  |
+------------------+------------------+----------+------------------+
| ma               | Main Container   | Object   | {                |
| inContainerStyle | Style            |          |                  |
|                  |                  |          | borderWidth: 1,  |
|                  |                  |          |                  |
|                  |                  |          | flexDir          |
|                  |                  |          | ection: \'row\', |
|                  |                  |          |                  |
|                  |                  |          | b                |
|                  |                  |          | orderRadius: 20, |
|                  |                  |          |                  |
|                  |                  |          | alignIt          |
|                  |                  |          | ems: \'center\', |
|                  |                  |          |                  |
|                  |                  |          | height: 40,      |
|                  |                  |          |                  |
|                  |                  |          | padding: 8,      |
|                  |                  |          |                  |
|                  |                  |          | width: \'100%\'  |
|                  |                  |          |                  |
|                  |                  |          | }                |
+------------------+------------------+----------+------------------+
| ic               | Icon Container   | Object   | {                |
| onContainerStyle | Style            |          |                  |
|                  |                  |          | width:\'8%\',    |
|                  |                  |          |                  |
|                  |                  |          | marg             |
|                  |                  |          | inRight: \'2%\', |
|                  |                  |          |                  |
|                  |                  |          | padding: 1,      |
|                  |                  |          |                  |
|                  |                  |          | }                |
+------------------+------------------+----------+------------------+
| textFie          | TextInput        | Object   | {width:\'88%\'}  |
| ldContainerStyle | Container Style  |          |                  |
+------------------+------------------+----------+------------------+
| textInputStyle   | TextInput Style  | Object   | {padding:2,      |
|                  |                  |          | c                |
|                  |                  |          | olor: \'black\', |
|                  |                  |          |                  |
|                  |                  |          | \...P            |
|                  |                  |          | latform.select({ |
|                  |                  |          |                  |
|                  |                  |          | androi           |
|                  |                  |          | d: {height: 40}, |
|                  |                  |          |                  |
|                  |                  |          | }),}             |
+------------------+------------------+----------+------------------+
| onChange         | Change Text      | Function | \-               |
|                  | callback         |          |                  |
+------------------+------------------+----------+------------------+

**Custom Text Field**
```
import CustomTextField from \'react-native- form-fields'
```
**Features**

Customized TextField Features

Animated state transitions (normal, focused and errored)

Customizable font size, colors and animation duration

Disabled state

Outlined and filled fields

Masked input support

Multiline text input

Character counter

Prefix and suffix

Accessory views

Helper text
```
const onChangeText = (text: string) =\> {

    console.log(\'Field text = \',text);

setFirstName(text);

  };

\<CustomTextField

                labelText={'First Name\'}

                errorMsg={this.state.firstNameErrorMsg}

                onChange={onChangeText}

                defaultText=\'Mr.\'

                defaultTextPosition={right}

                animationDuration={500}

                isRequired={true}

                isMultiline={true}

                value={this.state.firstName}

              /\>
```

**Properties**

  name                          description                                       type       default
  ----------------------------- ---------------------------------------------- -- ---------- ------------------------
  isMultiline                   Allow Multiple Lines                              Boolean    false
  defaultText                   Prefix or Suffix Text                             String     
  defaultTextPosition           Position Of The Default Text                      String     left
  value                         Field Value                                       String     
  editable                      Set Field Editable                                Boolean    true
  isRequired                    Display Asterisk Symbol                           Boolean    false
  animationDuration             Animation Duration                                Number     20
  isError                       To Display error                                  Boolean    false
  errorText                     Display Error Text                                String     
  errorColor                    Error Text Color                                  String     red
  tintColor                     Field Color On Focus                              String     \'rgb(0,100,234)\'
  rootColor                     Field Color When Not Focused                      String     \'rgba(0, 0, 0, .87)\'
  textColor                     Text Color                                        String     \'rgba(0, 0, 0, .87)
  clearTextOnFocus              Clear The Text When Focused                       Boolean    false
  fontSize                      Font Size Of The Text Input When Not Focused      Number     16
  errorFontSize                 Error Text Font Size                              Number     12
  activeFontSize                Font Size Of The Text Input When Focused          Number     12
  autoCapitalize                Capitalize Text,Sentences,Words,Charachters       String     'none'
  characterLimit                Charachter Limit For The Text Field               Number     
  inputContainerOverrideStyle   Set Input Container Style                         Object     
  inputOverrideStyle            Set Text Input Style                              Object     
  onChange                      Change Text callback                              Function   \-
  textInputProps                Props for Text Input                              Props      

**Contribution**

Any type of issues are welcome. Please add screenshots of the bug and
code snippet. Also the quickest way to solve the bug is to reproduce it
with one of the examples. We would also welcome Pull Requests.

git clone https://github.com/metasyssoftware/react-native-form-fields

npm install

npm run ios \# or npm run android 

Copyright and License



## Author

MetaSys Software Pvt. Ltd. / [@metasys96](https://github.com/metasys96)

## License

[MIT](./LICENSE)
Copyright 2020 MetaSys Software Pvt. Ltd. All rights reserved.
