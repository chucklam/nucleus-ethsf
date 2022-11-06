import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const rows = [
  {
    name: 'BNB',
    apy: '11%',
    supply: '10.96M',
    borrowed: '1.08M',
    utilization: '9.08%',
    balance: '0.00',
  },
  {
    name: 'USDT',
    apy: '8%',
    supply: '200.6M',
    borrowed: '10.08M',
    utilization: '8.8%',
    balance: '0.00',
  },
];

const buttons = [
  <Button key="deposit">Deposit</Button>,
  <Button key="withdraw">Withdraw</Button>,
];

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Available Lending Pools</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>APY</TableCell>
            <TableCell>Total Supply</TableCell>
            <TableCell>Total Borrowed</TableCell>
            <TableCell>Utilization</TableCell>
            <TableCell align="right">Your Balance</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.apy}</TableCell>
              <TableCell>{row.supply}</TableCell>
              <TableCell>{row.borrowed}</TableCell>
              <TableCell>{row.utilization}</TableCell>
              <TableCell align="right">${row.balance}</TableCell>
              <TableCell>
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical outlined button group"
                >
                  {buttons}
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}