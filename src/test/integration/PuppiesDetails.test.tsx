import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PuppiesDetails from '../../Components/PuppiesDetails/PuppiesDetails';
import { mount } from 'enzyme';

const mockStore = configureStore();

const mockDispatchfn = jest.fn();

describe('<PuppiesDetails />', () => {
    const props = {
        deletePuppy: jest.fn(),
        adoptPuppy: jest.fn(),
        puppies: [
            {
                id: 3,
                adopted: false,
                name: 'Bob',
                type: 'canis',
                adopt: jest.fn(),
                delete: jest.fn()
            }
        ]
    }
    let wrapper = mount(
        <Provider store={mockStore()}>
            <PuppiesDetails {...props}/>
        </Provider>
    );
    beforeEach(() => {
        wrapper = mount(
            <Provider store={mockStore()}>
                <PuppiesDetails {...props}/>
            </Provider>
        );
        console.log(typeof wrapper);
    })

    it('renders the component', () => {
        expect(wrapper.find('Puppy').first()).toBeDefined();
    });

    it('uses parent suplied adoptPuppy method when click on Puppy adopt button', () => {
        const puppy = wrapper.find('Puppy');
        expect(puppy.find('.adopt')).toEqual(3);
    });
});
