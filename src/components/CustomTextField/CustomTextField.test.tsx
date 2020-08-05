import {shallow} from 'enzyme';
import CustomTextField from './index';
import React from 'react';
import 'react-native';
import {cleanup, fireEvent} from 'react-native-testing-library';
import renderer from 'react-test-renderer';

afterEach(cleanup);

function getShallowComponent() {
  return shallow(<CustomTextField isMultiline={true} value="aditya" />);
}

function getJSONRenderer() {
  return renderer.create(<CustomTextField />).toJSON();
}

test('create snapshot', () => {
  const component = getJSONRenderer();
  expect(component).toMatchSnapshot();
});

it('renders component', () => {
  const component = getJSONRenderer();
  expect(component).toBeTruthy();
});

it('should contain one textInput and one text', () => {
  const component = getShallowComponent();
  expect(component.find('TextInput')).toHaveLength(1);
  expect(component.find('Text').length).toEqual(1);
});

it('should check the property value and multiline when passed', () => {
  const component = getShallowComponent();
  expect(component.find('TextInput').get(0).props.value).toEqual('aditya');
  expect(component.find('TextInput').get(0).props.multiline).toBeTruthy();
});

it('should change the value', async () => {
  const onChangeFunction = jest.fn();
  const component = shallow(
    <CustomTextField
      onChange={onChangeFunction}
      isMultiline={true}
      value="aditya"
    />,
  );

  const textField = component.find('TextInput').get(0); 
  fireEvent.changeText(textField as any, '12345');
  expect(onChangeFunction).toHaveBeenCalledTimes(1);
  const textField1 = component.find('TextInput').get(0);
  expect(textField1.props.value).toEqual('12345');
});