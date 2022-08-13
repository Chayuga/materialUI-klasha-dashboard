export const COLUMNS = [
  {
    id: 'transaction_id',
    label: 'Transaction ID',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'source',
    label: 'Source'
  },
  {
    id: 'customer_name',
    label: 'Customer name',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'customer_email',
    label: 'Customer email',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'amount',
    label: 'Amount'
  },
  {
    id: 'request_date',
    label: 'Request date',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'status',
    label: 'Status'
  }
];
