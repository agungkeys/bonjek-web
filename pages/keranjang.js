import React, { useEffect, useState } from 'react';
import seo from 'constants/seo';
import MainHead from '@/components/head/MainHead';
import MainLayout from '/layout/MainLayout';
import Container from '@/components/section/Container';
import Image from 'next/image';

import { getDistrictsCities } from '@/lib/api';
import Select from '@/components/select/Select';

function Keranjang({ props }) {
const { query, isPickup, storeDistrictsCities } = props;
  const [stateDistricts, setStateDistricts] = useState([]);

  useEffect(() => {
    if(storeDistrictsCities){
      const data = storeDistrictsCities.map(item => item.districts.map(items => {
        return {
          id: items.id,
          name: `${item.name} - ${items.name}`,
          data: {
            id: items.id,
            name: items.name
          }
        }
      }))
      setStateDistricts(data[0]);
      
    }
  }, [storeDistrictsCities]);
  function CartHeader() {
    return (
      <div className="w-full mb-3">
        <div className="bg-landing-cc bg-cover bg-top rounded-lg shadow-lg cursor-pointer">
          <div className="bg-purple-primary bg-opacity-50 p-2 md:p-5 lg:p-5 rounded-lg h-full">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white md:text-lg text-xs font-light md:font-bold tracking-wider uppercase">
                  Order
                </p>
                <p className="text-white md:text-4xl text-sm font-extrabold tracking-wide">
                  Pengantaran
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  function FormSectionCart() {
    return (
      <div className="mt-3 grid grid-cols-3 gap-5">
        <div className="col-span-3 md:col-span-2 lg:col-span-2 bg-gray-200 border-0 rounded-lg p-3 shadow-lg">
          form
        </div>
        <div className="col-span-3 md:col-span-1 lg:col-span-1 bg-gray-200 border-0 rounded-lg p-3 shadow-lg">
          summary
        </div>
      </div>
    )
  }

  function handlerChangeDropdown(e){
    // console.log("clientside", e)
  }

  function FormSectionCourier() {
    return (
      <div className="mt-3 grid grid-cols-3 gap-5">
        <div className="col-span-3 md:col-span-2 lg:col-span-2 bg-gray-100 border-0 rounded-lg p-3 shadow-lg">
          <form action="" className="space-y-3">
            <h1
              className="font-bold text-lg md:text-xl xl:text-2xl tracking-tight"
            >
              Pengambilan
            </h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label
                  for="name"
                  className="block font-medium tracking-tight"
                >Nama</label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2"
                  placeholder="Nama Pengirim"
                />
                {/* <span className="text-xs text-red-500"
                >Nama wajib di isi</span
                > */}
              </div>
              <div className="space-y-2">
                <label
                  for="telp"
                  className="block font-medium tracking-tight"
                >No. Whatsapp</label>
                <input
                  id="telp"
                  type="number"
                  className="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2"
                  placeholder="No. WA Pengirim"
                />
                {/* <span className="text-xs text-red-500"
                >Email is required</span
                > */}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <div className="space-y-2">
                <label
                  for="district"
                  className="block font-medium tracking-tight"
                >Wilayah</label
                >
                <Select items={stateDistricts} selected={{id: 0, name: 'Pilih Wilayah'}} onChange={handlerChangeDropdown} />
                {/* <span className="text-xs text-red-500"
                >Nama wajib di isi</span
                > */}
              </div>

              <div className="space-y-2">
                <label
                  for="address"
                  className="block font-medium tracking-tight"
                >Alamat</label>
                <textarea placeholder="Alamat Pengirim" className="border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline block w-full resize-y h-16 p-1"/>
                {/* <span className="text-xs text-red-500"
                >Nama wajib di isi</span
                > */}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <div className="space-y-2">
              <label
                for="address"
                className="block font-medium tracking-tight"
              >Jumlah Talangan</label>
                <input
                  id="credit"
                  type="number"
                  className="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2"
                  placeholder="Biaya Talangan"
                />
                {/* <span className="text-xs text-red-500"
                >Nama wajib di isi</span
                > */}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="space-y-2">
                <label
                  for="address"
                  className="block font-medium tracking-tight"
                >Keterangan Barang</label
                >
                <textarea placeholder="Kue Ulang Tahun, Mohon berhati-hati membawa barangnya." className="border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline block w-full resize-y h-16 p-1"/>
                {/* <span className="text-xs text-red-500"
                >Nama wajib di isi</span
                > */}
              </div>
            </div>

            <div className="pt-3 pb-1 md:pt-5 md:pb2 lg:pt-5 lg:pb2">
              <hr className="border-2 border-gray-300"/>
            </div>

            <h1
              className="font-bold text-lg md:text-xl xl:text-2xl tracking-tight"
            >
              Pengantaran
            </h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label
                  for="name"
                  className="block font-medium tracking-tight"
                >Nama</label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2"
                  placeholder="Nama Penerima"
                />
                {/* <span className="text-xs text-red-500"
                >Nama wajib di isi</span
                > */}
              </div>
              <div className="space-y-2">
                <label
                  for="telp"
                  className="block font-medium tracking-tight"
                >No. Whatsapp</label>
                <input
                  id="telp"
                  type="number"
                  className="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2"
                  placeholder="No. WA Penerima"
                />
                {/* <span className="text-xs text-red-500"
                >Email is required</span
                > */}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <div className="space-y-2">
                <label
                  for="district"
                  className="block font-medium tracking-tight"
                >Wilayah</label
                >
                <Select items={stateDistricts} selected={{id: 0, name: 'Pilih Wilayah'}} onChange={handlerChangeDropdown} />
                {/* <span className="text-xs text-red-500"
                >Nama wajib di isi</span
                > */}
              </div>

              <div className="space-y-2">
                <label
                  for="address"
                  className="block font-medium tracking-tight"
                >Alamat</label
                >
                <textarea placeholder="Alamat Penerima" className="border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline block w-full resize-y h-16 p-1"/>
                {/* <span className="text-xs text-red-500"
                >Nama wajib di isi</span
                > */}
              </div>
            </div>
            
          </form>
      
        </div>
        <div className="col-span-3 h-auto md:col-span-1 lg:col-span-1 bg-gray-100 border-0 rounded-lg p-3 shadow-lg">
          <form action="" className="space-y-3">
            <h1
              className="font-bold text-lg md:text-xl xl:text-2xl tracking-tight"
            >
              Ringkasan Pembayaran
            </h1>

            <div className="py-3">
              <div className="flex space-x-3 w-full items-center">
                <div className="flex-1 text-left">
                  <div className="block">
                    <span className="text-gray-500 text-xs md:text-sm lg:text-sm">Asal Pengambilan</span>
                  </div>
                  <div className="block">
                    <span className="font-bold text-sm md:text-base lg:text-base">Bontang Baru</span>
                  </div>
                </div>
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <div className="block">
                    <span className="text-gray-500 text-xs md:text-sm lg:text-sm">Tujuan Pengantaran</span>
                  </div>
                  <div className="block">
                    <span className="font-bold text-sm md:text-base lg:text-base">Tanjung Laut Indah</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex space-x-2 w-full items-center">
                <div className="flex-1 text-left">
                  <div className="block">
                    <span className="text-gray-600 text-sm md:text-base lg:text-base">Estimasi Biaya Delivery</span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div className="block">
                    <span className="text-gray-600 text-sm md:text-base lg:text-base">15.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex space-x-2 w-full items-center">
                <div className="flex-1 text-left">
                  <div className="block">
                    <span className="text-gray-600 text-sm md:text-base lg:text-base">Biaya Talangan</span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div className="block">
                    <span className="text-gray-600 text-sm md:text-base lg:text-base">-</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex space-x-2 w-full items-center">
                <div className="flex-1 text-left">
                  <div className="block">
                    <span className="text-gray-700 font-bold text-sm md:text-base lg:text-base">Total Bayar</span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div className="block">
                    <span className="text-gray-700 font-bold text-sm md:text-base lg:text-base">15.000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <button
                type="button"
                className="w-full items-center text-white px-5 py-2 rounded-lg overflow-hidden focus:outline-none bg-purple-primary hover:bg-purple-900 font-semibold tracking-tight text-center"
              >
                Pesan Sekarang
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <MainLayout isCart isHeader isFooter>      
      <MainHead seo={seo.DEFAULT} />
      <Container>
        <div className="pt-5">
          {isPickup && <CartHeader />}
          <div>
            <span className="text-lg font-bold">{isPickup ? `Form Pickup Order` : `Keranjang Belanja`}</span>
          </div>
          {isPickup ? <FormSectionCourier /> : <FormSectionCart />}
        </div>
      </Container>
    </MainLayout>
  )
}

Keranjang.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const isPickup = query.isPickup;

  const storeDistrictsCities = await getDistrictsCities();

  return {
    props: { query, isPickup, storeDistrictsCities },
    fallback: true,
  }
}

export default Keranjang;