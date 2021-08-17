import React from 'react';
import MainHeader from '@/components/header/MainHeader';
import MainFooter from '@/components/footer/MainFooter';


function MainLayout(props){
  const { 
    isHeader,
    isFooter,
    isCart,

    children,
    q = '',
    filter = '',
    queryParams = '',
  } = props;

  return(
    <>
      {isHeader && <MainHeader isCart={isCart} q={q} filter={filter} queryParams={queryParams} />}
      <div>{children}</div>
      {isFooter && <MainFooter />}
    </>
  )
}

export default MainLayout;
