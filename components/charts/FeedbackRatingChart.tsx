
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { feedbackRatings } from '../../services/mockData';

const FeedbackRatingChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={feedbackRatings} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
        <XAxis dataKey="rating" tick={{ fill: '#a0aec0' }} tickLine={{ stroke: '#718096' }} />
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
        <Bar dataKey="feedbackCount" name="Feedback Count" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FeedbackRatingChart;
