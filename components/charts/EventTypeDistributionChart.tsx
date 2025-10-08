
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { eventTypeDistribution } from '../../services/mockData';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];

const EventTypeDistributionChart: React.FC = () => {
  const formattedData = eventTypeDistribution.map(item => ({
    name: item.eventType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value: item.totalEvents
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(31, 41, 55, 0.8)',
            borderColor: 'rgba(75, 85, 99, 0.8)',
            borderRadius: '0.5rem'
          }}
          itemStyle={{ color: '#e5e7eb' }}
        />
        <Legend iconType="circle" />
        <Pie
          data={formattedData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
        >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventTypeDistributionChart;
