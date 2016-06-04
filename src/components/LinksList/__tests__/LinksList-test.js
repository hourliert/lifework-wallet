import chai, { expect } from 'chai';
import mockery from 'mockery';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);
chai.use(sinonChai);

import { shallow } from 'enzyme';

import React from 'react';

function noop() {}

describe('LinksList', () => {
  const menuItems = [
    {
      icon: 'home',
      label: 'Home',
      url: '/home',
      withDivider: true,
      accessLevel: {
        bitMask: 7,
      },
    },
    {
      icon: 'settings',
      label: 'Settings',
      url: '/settings',
      accessLevel: {
        bitMask: 6,
      },
    },
    {
      icon: 'power_settings_new',
      label: 'Log Out',
      url: '/logout',
      accessLevel: {
        bitMask: 7,
      },
    },
  ];

  describe('Without DOM', () => {
    it('should exists', () => {
      const LinksList = require('../LinksList');
      const wrapper = shallow(
        <LinksList
          onLinkTouch={noop}
          links={[]}
        />
      );

      expect(wrapper).to.have.length(1);
    });

    it('should render the linkslist components', () => {
      const LinksList = require('../LinksList');
      const wrapper = shallow(
        <LinksList
          onLinkTouch={noop}
          links={[menuItems[0]]}
        />,
      );

      expect(wrapper.find('LinkItem')).to.have.length(1);
    });

    it('should render 3 menu items', () => {
      const LinksList = require('../LinksList');
      const wrapper = shallow(
        <LinksList
          onLinkTouch={noop}
          links={menuItems}
        />,
      );

      expect(wrapper.find('LinkItem')).to.have.length(3);
    });
  });
});
