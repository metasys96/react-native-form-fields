import {shallow} from 'enzyme';
import DropDown from './index';
import React from 'react';
import 'react-native';
import {cleanup, fireEvent} from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import {Picker} from 'react-native';

afterEach(cleanup);

const dropDownOptions = [
  {label: 'RD', value: 'Red'},
  {label: 'GR', value: 'Green'},
  {label: 'BL', value: 'Blue'},
];

function getShallowComponent() {
  return shallow(
    <DropDown
      items={dropDownOptions}
      selectedItem={{label: 'BL', value: 'Blue'}}
    />,
  );
}
function getJSONRenderer() {
  return renderer.create(<DropDown />).toJSON();
}

test('create snapshot', () => {
  const component = getJSONRenderer();
  expect(component).toMatchSnapshot();
});

it('renders component', () => {
  const component = getJSONRenderer();
  expect(component).toBeTruthy();
});

it('should contain Picker and text as same as length of the options', () => {
  const component = getShallowComponent();
  expect(component.find('Picker')).toHaveLength(1);
  expect(component.find('Text').length).toEqual(1);
});

it('should change the dropdown option on press function', async () => {
  const onPressFunction = jest.fn();
  const wrapper = shallow(
    <DropDown
      items={dropDownOptions}
      selectedItem={{label: 'BL', value: 'Blue'}}
      onChange={onPressFunction}
    />,
  );

  const valueChangeEvent = {target: {value: 'Red', index: 1}};
  wrapper
    .find(Picker)
    .first()
    .simulate('onChange', valueChangeEvent);

  expect(onPressFunction).toHaveBeenCalledTimes(1);

});
