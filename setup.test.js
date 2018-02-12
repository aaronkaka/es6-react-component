import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('proves the test setup file is processed', () => {
  expect('test setup').toEqual('test setup');
});
