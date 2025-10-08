
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { ticketStatusPriority } from '../../services/mockData';
import type { TicketStatusPriorityData } from '../../types';

const TicketStatusPriorityChart: React.FC = () => {
  // Pivot data for grouped bar chart
  const data = ticketStatusPriority.reduce((acc, curr) => {
    let group = acc.find(item => item.status === curr.status);
    if (!group) {
      group = { status: curr.status };
      acc.push(group);
    }
    group[curr.priority] = curr.ticketCount;
    return acc;
  }, [] as ({status: string} & {[key: string]: number | string})[]);


  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
        <XAxis dataKey="status" tick={{ fill: '#a0aec0' }} tickLine={{ stroke: '#718096' }} />
        <YAxis tick={{ fill: '#a0aec0' }} tickLine={{ stroke: '#718096' }} />
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
        <Bar dataKey="Low" fill="#82ca9d" />
        <Bar dataKey="Medium" fill="#ffc658" />
        <Bar dataKey="High" fill="#ff8042" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TicketStatusPriorityChart;
