import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // or 17/18 based on your setup

configure({ adapter: new Adapter() });
