

import React, { useState } from 'react';
import DataGrid from 'react-data-grid';

const initialRows = [
  { id: 0, date: '2024-08-07', item: 'Item 1', quantity: 10, price: 15 },
  { id: 1, date: '2024-08-08', item: 'Item 2', quantity: 5, price: 20 },
];

const columns = [
  { key: 'date', name: 'Date' },
  { key: 'item', name: 'Item' },
  { key: 'quantity', name: 'Quantity', editable: true },
  { key: 'price', name: 'Price', editable: true },
  { key: 'total', name: 'Total' },
];

const calculateTotals = (rows) => {
  let totalSales = 0;
  let totalProfit = 0;

  rows.forEach(row => {
    const total = row.quantity * row.price;
    totalSales += total;
    totalProfit += total - (row.quantity * 10); // Assuming cost price is 10 for simplicity
  });

  return { totalSales, totalProfit };
};

export const ExcelPannel = () => {
  const [rows, setRows] = useState(initialRows);

  const handleRowsChange = (updatedRows) => {
    setRows(updatedRows);
  };

  const { totalSales, totalProfit } = calculateTotals(rows);

  return (
    <div>
      <h1>Shopkeeper Account Management</h1>
      <DataGrid
        columns={columns}
        rows={rows}
        onRowsChange={handleRowsChange}
      />
      <div>
        <h2>Totals</h2>
        <p>Total Sales: ${totalSales}</p>
        <p>Total Profit: ${totalProfit}</p>
      </div>
    </div>
  );
};


