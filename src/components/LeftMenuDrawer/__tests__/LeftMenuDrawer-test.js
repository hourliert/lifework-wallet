import chai, { expect } from 'chai';
import mockery from 'mockery';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);
chai.use(sinonChai);

import { shallow } from 'enzyme';

import React from 'react';

function noop() {}

describe('LeftMenuDrawer', () => {
  describe('Without DOM', () => {
    it('should exists', () => {
      const LeftMenuDrawer = require('../LeftMenuDrawer');
      const wrapper = shallow(
        <LeftMenuDrawer
          open={false}
          onClose={noop}
          menuItems={[]}
        />
      );
      expect(wrapper).to.have.length(1);
    });

    it('should render the components of LeftMenuDrawer', () => {
      const LeftMenuDrawer = require('../LeftMenuDrawer');
      const wrapper = shallow(
        <LeftMenuDrawer
          open={false}
          onClose={noop}
          menuItems={[]}
        />
      );

      expect(wrapper.find('AppBar')).to.have.length(1);
      expect(wrapper.find('LinksList')).to.have.length(1);
    });
  });
});
