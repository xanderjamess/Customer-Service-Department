
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { topSupportTickets } from '../../services/mockData';

const TopSupportTicketsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={topSupportTickets}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
        <XAxis type="number" tick={{ fill: '#a0aec0' }} tickLine={{ stroke: '#718096' }} />
        <YAxis
          type="category"
          dataKey="subject"
          width={150}
          tick={{ fill: '#a0aec0' }}
          tickLine={{ stroke: '#718096' }}
        />
        <Tooltip
          cursor={{ fill: 'rgba(147, 197, 253, 0.1)' }}
          contentStyle={{
            backgroundColor: 'rgba(31, 41, 55, 0.8)',
            borderColor: 'rgba(75, 85, 99, 0.8)',
            borderRadius: '0.5rem',
          }}
          itemStyle={{ color: '#e5e7eb' }}
        />
        <Legend />
        <Bar dataKey="ticketCount" name="Ticket Count" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopSupportTicketsChart;
