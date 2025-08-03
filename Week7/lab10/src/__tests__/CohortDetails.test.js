import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import CohortDetails from '../components/CohortDetails';  // adjust path if needed
import CohortData from '../data/CohortData';              // adjust path if needed

describe('Cohort Details Component', () => {

    test('should create the component', () => {
        const wrapper = shallow(<CohortDetails />);
        expect(wrapper.exists()).toBe(true);
    });

    test('should initialize the props', () => {
        const cohort = CohortData[0];
        const wrapper = mount(<CohortDetails cohort={cohort} />);
        expect(wrapper.props().cohort).toEqual(cohort);
    });

    test('should display cohort code in h3', () => {
        const cohort = CohortData[0];
        const wrapper = mount(<CohortDetails cohort={cohort} />);
        expect(wrapper.find('h3').text()).toContain(cohort.code);
    });

    test('should always render same html', () => {
        const cohort = CohortData[0];
        const wrapper = shallow(<CohortDetails cohort={cohort} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});
