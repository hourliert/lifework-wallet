import React, { Component, PropTypes } from 'react';

import pureRender from 'pure-render-decorator';
import LinkItem from 'components/LinkItem';

@pureRender
export default class LinksList extends Component {
  static propTypes = {
    links: PropTypes.array.isRequired,
    onLinkTouch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    links: [],
  };

  render() {
    const { onLinkTouch, links } = this.props;

    return (
      <div>
      {
        links.map((m, i) => (
          <LinkItem
            key={i}
            item={m}
            withContainer={m.internal}
            onLinkTouch={onLinkTouch}
          />
        ))
      }
      </div>
    );
  }
}
