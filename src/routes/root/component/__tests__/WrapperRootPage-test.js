import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

function noop() {}

describe('WrapperRootPage', () => {
  const appStatus = {
    leftNavOpen: true,
  };

  describe('Without DOM', () => {
    it('should work', () => {
      const WrapperRootPage = require('../WrapperRootPage');
      const wrapper = shallow(
        <WrapperRootPage
          leftNavMenuItems={[]}
          appStatus={appStatus}
          closeLeftNav={noop}
          toggleLeftNav={noop}
        >
          <div>children</div>
        </WrapperRootPage>,
        {
          context: { muiTheme: { rawTheme: { palette: {} } } },
        }
      );

      expect(wrapper).to.have.length(1);
    });

    it('should render the app Page components', () => {
      const WrapperRootPage = require('../WrapperRootPage');
      const wrapper = shallow(
        <WrapperRootPage
          leftNavMenuItems={[]}
          appStatus={appStatus}
          closeLeftNav={noop}
          toggleLeftNav={noop}
        >
          <div>children</div>
        </WrapperRootPage>,
        {
          context: { muiTheme: { rawTheme: { palette: {} } } },
        }
      );

      expect(wrapper.find('AppBar')).to.have.length(1);
      expect(wrapper.find('LeftMenuDrawer')).to.have.length(1);
    });

    it('should have a children', () => {
      const WrapperRootPage = require('../WrapperRootPage');
      const wrapper = shallow(
        <WrapperRootPage
          leftNavMenuItems={[]}
          appStatus={appStatus}
          closeLeftNav={noop}
          toggleLeftNav={noop}
        >
          <div>children!</div>
        </WrapperRootPage>,
        {
          context: { muiTheme: { rawTheme: { palette: {} } } },
        }
      );

      expect(wrapper.children().last().text()).to.equal('children!');
    });
  });
});
