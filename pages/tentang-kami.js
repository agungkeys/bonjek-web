import React from 'react';
import SEO from 'constants/seo';
import MainHead from '@/components/head/MainHead';
import MainLayout from 'layout/MainLayout';
import Container from '@/components/section/Container';

function TentangKami(props) {
  return (
    <MainLayout isHeader isFooter>      
      <MainHead seo={SEO.DEFAULT} />
      <Container>
        <div className="pt-3">
          <span className="text-lg font-bold">Tentang Bonjek</span>
        </div>
      </Container>
    </MainLayout>
  )
}

export default TentangKami;