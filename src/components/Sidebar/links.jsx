import {
  analytics,
  paymentLink,
  normalPayments,
  normalPieChart,
  radar,
  shoppingCart,
  swap,
  transactions,
  wallet,
} from '../../assets/icons';

export const links = [
  {
    title: 'Main pages',
    links: [
      {
        name: 'Dashboard',
        icon: <img src={normalPieChart} alt='pie chart' className='h-5' />,
      },
      {
        name: 'Balance',
        icon: <img src={wallet} alt='wallet' className='h-5' />,
      },
      {
        name: 'Transaction',
        icon: <img src={normalPayments} alt='transactions' className='h-5' />,
      },
      {
        name: 'Analytics',
        icon: <img src={analytics} alt='analytics' className='h-5' />,
      },
      {
        name: 'Marketing',
        icon: <img src={radar} alt='marketing' className='h-5' />,
      },
      {
        name: 'Exchange rates',
        icon: <img src={swap} alt='exchange' className='h-5' />,
      },
    ],
  },

  {
    title: 'Accept payments',
    links: [
      {
        name: 'KlashaCheckout',
        icon: <img src={shoppingCart} alt='checkout' className='h-5' />,
      },
      {
        name: 'Payment Links',
        icon: <img src={paymentLink} alt='payment link' className='h-5' />,
      },
    ],
  },
  {
    title: 'Send payment',
    links: [
      {
        name: 'KlashaWire',
        icon: <img src={transactions} alt='send payment' className='h-5' />,
      },
    ],
  },
];
