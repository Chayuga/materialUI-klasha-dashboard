import { TiChartPieOutline } from 'react-icons/ti';
import { BiWallet } from 'react-icons/bi';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { AiFillSignal } from 'react-icons/ai';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { TbExchange } from 'react-icons/tb';
import { FiShoppingCart } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';
import { BiTransfer } from 'react-icons/bi';

export const links = [
  {
    title1: 'Main pages',
    title2: 'Pages',
    links: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        iconActive: <TiChartPieOutline />,
        iconNormal: <TiChartPieOutline />,
      },
      {
        name: 'Balance',
        iconActive: <BiWallet />,
        iconNormal: <BiWallet />,
      },
      {
        name: 'Transactions',
        path: 'transactions',
        iconActive: <RiArrowUpDownFill />,
        iconNormal: <RiArrowUpDownFill />,
      },
      {
        name: 'Analytics',
        iconActive: <AiFillSignal />,
        iconNormal: <AiFillSignal />,
      },
      {
        name: 'Marketing',
        iconActive: <HiOutlineSpeakerphone />,
        iconNormal: <HiOutlineSpeakerphone />,
      },
      {
        name: 'Exchange rates',
        iconActive: <TbExchange />,
        iconNormal: <TbExchange />,
      },
    ],
  },

  {
    title1: 'Accept payments',
    title2: 'Accept',
    links: [
      {
        name: 'KlashaCheckout',
        iconActive: <FiShoppingCart />,
        iconNormal: <FiShoppingCart />,
      },
      {
        name: 'Payment Links',
        iconActive: <BiLink />,
        iconNormal: <BiLink />,
      },
    ],
  },
  {
    title1: 'Send payment',
    title2: 'Send',
    links: [
      {
        name: 'KlashaWire',
        iconActive: <BiTransfer />,
        iconNormal: <BiTransfer />,
      },
    ],
  },
];
