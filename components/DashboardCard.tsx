
import React from 'react';

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, children, className }) => {
  return (
    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col ${className}`}>
      <div className="flex items-center mb-4">
        <div className="text-indigo-400">{icon}</div>
        <h2 className="text-xl font-semibold text-white ml-3">{title}</h2>
      </div>
      <div className="flex-grow h-80">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;
