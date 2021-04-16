import Enzyme, {shallow, render, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

// Fail tests on any warning
console.error = message => {};
console.warning = message => {};
