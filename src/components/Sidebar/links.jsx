import React from 'react';

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
        icon: <TiChartPieOutline />
      },
      {
        name: 'Balance',
        icon: <BiWallet />,
        iconNormal: <BiWallet />
      },
      {
        name: 'Transactions',
        path: 'transactions',
        icon: <RiArrowUpDownFill />
      },
      {
        name: 'Analytics',
        icon: <AiFillSignal />
      },
      {
        name: 'Marketing',
        icon: <HiOutlineSpeakerphone />
      },
      {
        name: 'Exchange rates',
        icon: <TbExchange />
      }
    ]
  },

  {
    title1: 'Accept payments',
    title2: 'Accept',
    links: [
      {
        name: 'KlashaCheckout',
        icon: <FiShoppingCart />
      },
      {
        name: 'Payment Links',
        icon: <BiLink />
      }
    ]
  },
  {
    title1: 'Send payment',
    title2: 'Send',
    links: [
      {
        name: 'KlashaWire',
        icon: <BiTransfer />
      }
    ]
  }
];
