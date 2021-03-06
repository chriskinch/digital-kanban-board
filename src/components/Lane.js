import React from 'react';
import Group from './Group';

export default class Lane extends React.Component {
  render() {
    const item = this.props.item;
    const groups = this.props.groups;
    return (
      <section>
        <h4>{ item.label }</h4>
        <h5>{ item.wip }</h5>
        {groups.map((item, index) => (
           <Group item={item} key={index} />
        ))}
      </section>
    )
  }
}
