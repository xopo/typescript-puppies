import React from 'react';
import { shallow } from 'enzyme';
import Puppy from '../../../../Components/PuppiesDetails/Puppy';
import { APuppy } from '../../../../Types/Types';

const adopt = jest.fn();
const del = jest.fn();
const props: APuppy = {
  id: 3,
  adopted: false,
  name: 'Bob',
  type: 'canis',
  adopt,
  delete: del
}

describe('Puppy Component', () => {
  it('should render witout errors', () => {
    const shallowElement = shallow<APuppy>(<Puppy {...props}/>);
    
    expect(shallowElement).toMatchSnapshot();
  });

  it('should trigger adopt function when adopt button is clicked and send the id as param', () => { 
    const shallowElement = shallow<APuppy>(<Puppy {...props}/>);
    const adoptButton = shallowElement.find('.adopt');
    adoptButton.simulate('click');
    
    expect(adoptButton.length).toBe(1);
    expect(adopt).toHaveBeenCalled();
    expect(adopt).toHaveBeenCalledWith(props.id);
  });
}) 