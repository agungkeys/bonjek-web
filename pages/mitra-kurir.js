import React from 'react';
import seo from 'constants/seo';
import MainHead from '@/components/head/MainHead';
import MainLayout from 'layout/MainLayout';
import Container from '@/components/section/Container';

function MitraKurir(props) {
  return (
    <MainLayout isHeader isFooter>      
      <MainHead seo={seo.DEFAULT} />
      <Container>
        <div className="pt-3">
          <span className="text-lg font-bold">Mitra Kurir</span>
        </div>
      </Container>
    </MainLayout>
  )
}

export default MitraKurir;