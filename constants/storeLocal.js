import IconCatFood from '@/components/icon/IconCatFood';
import IconCatCourier from '@/components/icon/IconCatCourier';

const storeLandingCategories = [
  {
    id: 0,
    label: 'Order',
    title: 'Makanan',
    background: 'bg-landing-cf',
    icon: <IconCatFood />,
    link: '/umkm'
  },
  {
    id: 1,
    label: 'Order',
    title: 'Kurir',
    background: 'bg-landing-cc',
    icon: <IconCatCourier />,
    link: '/kurir'
  }
];

export {
  storeLandingCategories,
}