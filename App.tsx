
import React from 'react';
import DashboardCard from './components/DashboardCard';
import { AnalyticsIcon, BarChartIcon, CustomerIcon, FeedbackIcon, LineChartIcon, PieChartIcon, TicketIcon } from './components/icons/ChartIcons';
import EventTypeDistributionChart from './components/charts/EventTypeDistributionChart';
import FrequentReturnersTable from './components/charts/FrequentReturnersTable';
import FeedbackRatingChart from './components/charts/FeedbackRatingChart';
import TopSupportTicketsChart from './components/charts/TopSupportTicketsChart';
import MonthlyReturnsChart from './components/charts/MonthlyReturnsChart';
import TicketStatusPriorityChart from './components/charts/TicketStatusPriorityChart';
import TopCustomersTable from './components/charts/TopCustomersTable';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 p-4 sm:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white tracking-tight flex items-center gap-3">
          <AnalyticsIcon />
          Customer Service Analytics
        </h1>
        <p className="text-gray-400 mt-2">
          An overview of customer interactions and service performance.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <DashboardCard title="Event Type Distribution" icon={<PieChartIcon />} className="xl:col-span-1">
          <EventTypeDistributionChart />
        </DashboardCard>
        
        <DashboardCard title="Ticket Status by Priority" icon={<BarChartIcon />} className="xl:col-span-2">
          <TicketStatusPriorityChart />
        </DashboardCard>

        <DashboardCard title="Monthly Returns & Refunds" icon={<LineChartIcon />} className="xl:col-span-3">
          <MonthlyReturnsChart />
        </DashboardCard>
        
        <DashboardCard title="Feedback Ratings" icon={<FeedbackIcon />} className="xl:col-span-1">
          <FeedbackRatingChart />
        </DashboardCard>
        
        <DashboardCard title="Top 10 Support Ticket Subjects" icon={<TicketIcon />} className="xl:col-span-2">
          <TopSupportTicketsChart />
        </DashboardCard>
        
        <DashboardCard title="Most Frequent Returners" icon={<CustomerIcon />} className="md:col-span-2 xl:col-span-3">
          <FrequentReturnersTable />
        </DashboardCard>
        
        <DashboardCard title="Top 10 Most Active Customers" icon={<CustomerIcon />} className="md:col-span-2 xl:col-span-3">
          <TopCustomersTable />
        </DashboardCard>
      </main>
      
      <footer className="text-center mt-12 text-gray-500">
        <p>Powered by React & Recharts</p>
      </footer>
    </div>
  );
};

export default App;
