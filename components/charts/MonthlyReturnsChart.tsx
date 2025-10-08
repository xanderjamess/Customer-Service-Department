
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { monthlyReturns } from '../../services/mockData';

const MonthlyReturnsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={monthlyReturns} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
        <XAxis dataKey="month" tick={{ fill: '#a0aec0' }} tickLine={{ stroke: '#718096' }} />
        <YAxis yAxisId="left" tickFormatter={(value) => `$${value/1000}k`} tick={{ fill: '#a0aec0' }} tickLine={{ stroke: '#718096' }} />
        <YAxis yAxisId="right" orientation="right" tick={{ fill: '#a0aec0' }} tickLine={{ stroke: '#718096' }} />
        <Tooltip
          formatter={(value, name) => (name === 'Total Refunds' ? `$${(value as number).toFixed(2)}` : value)}
          contentStyle={{
            backgroundColor: 'rgba(31, 41, 55, 0.8)',
            borderColor: 'rgba(75, 85, 99, 0.8)',
            borderRadius: '0.5rem',
          }}
          itemStyle={{ color: '#e5e7eb' }}
        />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="totalRefunds" name="Total Refunds" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="totalReturns" name="Total Returns" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MonthlyReturnsChart;
