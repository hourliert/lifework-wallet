import chai, { expect } from 'chai';
import mockery from 'mockery';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);
chai.use(sinonChai);

import { shallow } from 'enzyme';

import React from 'react';
import { Link } from 'react-router';

function noop() {}

describe('LinkItem', () => {
  describe('Without DOM', () => {
    it('should exists', () => {
      const LinkItem = require('../LinkItem');
      const wrapper = shallow(
        <LinkItem
          item={{}}
          onLinkTouch={noop}
        />
      );
      expect(wrapper).to.have.length(1);
    });

    it('should render LinkItem components', () => {
      const LinkItem = require('../LinkItem');
      const wrapper = shallow(
        <LinkItem
          item={{
            withDivider: true,
          }}
          onLinkTouch={noop}
        />
      );
      expect(wrapper.find('MenuItem')).to.have.length(1);
      expect(wrapper.find('Divider')).to.have.length(1);
    });

    it('should render LinkItem components with a link container', () => {
      const LinkItem = require('../LinkItem');
      const wrapper = shallow(
        <LinkItem
          item={{
            withDivider: true,
            internal: true,
          }}
          onLinkTouch={noop}
        />
      );
      expect(wrapper.find('MenuItem')).to.have.length(1);
      expect(wrapper.find('Divider')).to.have.length(1);
      expect(wrapper.find('MenuItem').prop('containerElement').type).to.equal(Link);
    });
  });
});
