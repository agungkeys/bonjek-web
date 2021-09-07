import React from 'react';
import Link from "next/link";

function NextLink(props){
  const { href, onCLick, passHref, children } = props;
  if(href){
    return(
      <Link href={href} passHref={passHref}>{children}</Link>
    )
  }else{
    return(
      <Link onCLick={onCLick}>{children}</Link>
    )
  }
}
export default NextLink;