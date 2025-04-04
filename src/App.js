import './global_scss/App.scss';

import Footer from './global-components/Footer';

import Section1 from './gpw-blocks/Section1';
import Section2 from './gpw-blocks/Section2';
import Section3 from './gpw-blocks/Section3';
import Section4 from './gpw-blocks/Section4';

import WOW1 from './gpw-blocks/WOW1';
import WOW2 from './gpw-blocks/WOW2';
import WOW3 from './gpw-blocks/WOW3';
import WOW4 from './gpw-blocks/WOW4';
import WOW5 from './gpw-blocks/WOW5';
import WOW6 from './gpw-blocks/WOW6';
import WOW7 from './gpw-blocks/WOW7';
import WOW8 from './gpw-blocks/WOW8';
import WOW9 from './gpw-blocks/WOW9';
import WOW10 from './gpw-blocks/WOW10';
import WOW11 from './gpw-blocks/WOW11';
import WOW12 from './gpw-blocks/WOW12';
import WOW13 from './gpw-blocks/WOW13';
import WOW14 from './gpw-blocks/WOW14';
import WOW15 from './gpw-blocks/WOW15';
import WOW16 from './gpw-blocks/WOW16';
import WOW17 from './gpw-blocks/WOW17';

function App() {
  return (
    <div className="container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <div className='GWPblocks'>
        <WOW1 />
        <WOW2 />
        <WOW3 />
        <WOW4 />
        <WOW5 />
        <WOW6 />
        <WOW7 />
        <WOW8 />
        <WOW9 />
        <WOW10 />
        <WOW11 />
        <WOW12 />
        <WOW13 />
        <WOW14 />
        <WOW15 />
        <WOW16 />
        <WOW17 />
      </div>

      <Footer />
    </div>
  );
}

export default App;