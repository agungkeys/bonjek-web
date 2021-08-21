import React from 'react';
import seo from 'constants/seo';
import MainHead from '@/components/head/MainHead';
import MainLayout from '/layout/MainLayout';
import Container from '@/components/container';
import Cards from '@/components/cards/Cards';
import Chip from '@/components/chip/Chip';

function Kurir({ props }) {

  return (
    <MainLayout isCart isHeader isFooter>      
      <MainHead seo={seo.DEFAULT} />
      <Container>
        <div className="pt-3">
          <span className="text-lg font-bold">Order Pengantaran</span>
        </div>
      </Container>
    </MainLayout>
  )
}

Kurir.getInitialProps = async (ctx) => {
  return {
    props : {}
  }
}

export default Kurir;