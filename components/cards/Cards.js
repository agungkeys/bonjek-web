import React from 'react';
import Card from './Card';

export default function Cards({items}) {
  return(
    <>
      {items && items.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </>
  )
}