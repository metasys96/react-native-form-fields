import {shallow, mount} from 'enzyme';
import CheckBox from './index';
import React from 'react';
import 'react-native';
import {cleanup, fireEvent, render} from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import {View, Text, TouchableOpacity} from 'react-native';

afterEach(cleanup);

function getShallowComponent() {
  return shallow(<CheckBox label="test label" />);
}

function renderComponent(onPressFunction: any) {
  return render(<CheckBox label="test label" />);
}

function getJSONRenderer() {
  return renderer.create(<CheckBox />).toJSON();
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
  expect(component.find('TouchableOpacity')).toHaveLength(1);
});

it('set checked the given checkbox', () => {
  const onPressFunction = jest.fn();
  const wrapper = shallow(
    <CheckBox onChange={onPressFunction} label="test label" />,
  );
  wrapper
    .find('TouchableOpacity')
    .first()
    .props()
    .onPress();
  expect(onPressFunction).toHaveBeenCalledTimes(1);
});
