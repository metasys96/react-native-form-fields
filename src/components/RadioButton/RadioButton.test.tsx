import {shallow, mount} from 'enzyme';
import RadioButton from './index';
import React from 'react';
import 'react-native';
import {cleanup, fireEvent, render} from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import {View, Text, TouchableOpacity} from 'react-native';

afterEach(cleanup);

const radioOptions = [
  {id: 'option1', value: 'Red'},
  {id: 'option2', value: 'Green'},
  {id: 'option3', value: 'Blue'},
];

function getShallowComponent() {
  return shallow(
    <RadioButton
      objects={radioOptions}
      selectedValue={{id: 'option3', value: 'Blue'}}
    />,
  );
}

function renderComponent(onPressFunction: jest.Mock<any, any>) {
  return render(
    <RadioButton
      objects={radioOptions}
      selectedValue={{id: 'option3', value: 'Blue'}}
      onChange={onPressFunction}
    />,
  );
}

function getJSONRenderer() {
  return renderer.create(<RadioButton />).toJSON();
}

test('create snapshot', () => {
  const component = getJSONRenderer();
  expect(component).toMatchSnapshot();
});

it('renders component', () => {
  const component = getJSONRenderer();
  expect(component).toBeTruthy();
});

it('should contain TouchableOpacity and text as same as length of the options', () => {
  const component = getShallowComponent();
  expect(component.find('TouchableOpacity')).toHaveLength(radioOptions.length);
  expect(component.find('Text').length).toEqual(radioOptions.length);
});

it('should change the radio option on press function', async () => {
  const onPressFunction = jest.fn();
  const wrapper = shallow(
    <RadioButton
      objects={radioOptions}
      selectedValue={{id: 'option3', value: 'Blue'}}
      onChange={onPressFunction}
      size={20}
    />,
  );

  const {getAllByProps} = renderComponent(onPressFunction);
  const results = getAllByProps({objects: radioOptions});

  expect(results).toHaveLength(1);
  const radioSelectionNo = 1;
  wrapper
    .find(TouchableOpacity)
    .at(radioSelectionNo)
    .props()
    .onPress();

  expect(onPressFunction).toHaveBeenCalledTimes(1);

  expect(
    wrapper.find('TouchableOpacity').get(radioSelectionNo).props.children[0]
      .props.children.props.name,
  ).toEqual('radio-button-checked');
 
});
