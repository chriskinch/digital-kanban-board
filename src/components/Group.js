import React from 'react';

export default class Group extends React.Component {
  render() {
    return (
      <section>
        <h4>{ this.props.item.label }</h4>
      </section>
    )
  }
}
