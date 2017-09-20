import React from 'react';
import Group from './Group';

const Lane = ({ item, groups }) => {
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

export default Lane