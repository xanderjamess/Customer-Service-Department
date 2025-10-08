
import React from 'react';
import { topCustomers } from '../../services/mockData';

const TopCustomersTable: React.FC = () => {
  return (
    <div className="overflow-x-auto h-full">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700/50">
          <tr>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-300">Customer ID</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-300">Name</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-300">Total Events</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700 bg-gray-800">
          {topCustomers.map((customer) => (
            <tr key={customer.customerId} className="hover:bg-gray-700/50 transition-colors">
              <td className="whitespace-nowrap py-4 px-4 text-sm font-medium text-white">{customer.customerId}</td>
              <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300">{`${customer.customerFirstName} ${customer.customerLastName}`}</td>
              <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300">{customer.totalEvents}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopCustomersTable;
