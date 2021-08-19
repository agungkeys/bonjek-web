import React from 'react';
import Card from './Card';

export default function Cards({ items, isPopular }) {
  return(
    <>
      {isPopular && 
        <>
          {items && items.map((item, idx) => (
            !!item.popular && <Card key={idx} item={item} />
          ))}
        </>
        ||
        <>
          {items && items.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </>
      }
    </>
  )
}