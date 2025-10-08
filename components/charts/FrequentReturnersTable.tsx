
import React from 'react';
import { frequentReturners } from '../../services/mockData';

const FrequentReturnersTable: React.FC = () => {
  return (
    <div className="overflow-x-auto h-full">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700/50">
          <tr>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-300">Customer</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-300">Return Count</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-300">Total Refund</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700 bg-gray-800">
          {frequentReturners.map((item) => (
            <tr key={item.customerId} className="hover:bg-gray-700/50 transition-colors">
              <td className="whitespace-nowrap py-4 px-4 text-sm font-medium text-white">{`${item.customerFirstName} ${item.customerLastName}`}</td>
              <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300">{item.returnCount}</td>
              <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300">${item.totalRefundAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FrequentReturnersTable;
