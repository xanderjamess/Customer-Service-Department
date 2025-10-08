
import type { 
  EventTypeData, 
  FrequentReturnerData, 
  FeedbackRatingData, 
  SupportTicketSubjectData,
  MonthlyReturnData,
  TicketStatusPriorityData,
  TopCustomerData
} from '../types';

// 1. Event Type Distribution
export const eventTypeDistribution: EventTypeData[] = [
  { eventType: 'support_ticket', totalEvents: 1250 },
  { eventType: 'feedback', totalEvents: 820 },
  { eventType: 'return', totalEvents: 450 },
  { eventType: 'purchase_inquiry', totalEvents: 300 },
  { eventType: 'account_update', totalEvents: 210 },
];

// 2. Frequent Returners
export const frequentReturners: FrequentReturnerData[] = [
  { customerId: 101, customerFirstName: 'John', customerLastName: 'Doe', returnCount: 5, totalRefundAmount: 450.75 },
  { customerId: 205, customerFirstName: 'Jane', customerLastName: 'Smith', returnCount: 4, totalRefundAmount: 220.50 },
  { customerId: 302, customerFirstName: 'Alice', customerLastName: 'Johnson', returnCount: 3, totalRefundAmount: 890.00 },
  { customerId: 115, customerFirstName: 'Bob', customerLastName: 'Brown', returnCount: 3, totalRefundAmount: 150.25 },
  { customerId: 410, customerFirstName: 'Charlie', customerLastName: 'Davis', returnCount: 2, totalRefundAmount: 55.00 },
];

// 3. Feedback Ratings
export const feedbackRatings: FeedbackRatingData[] = [
  { rating: 1, feedbackCount: 30 },
  { rating: 2, feedbackCount: 45 },
  { rating: 3, feedbackCount: 150 },
  { rating: 4, feedbackCount: 280 },
  { rating: 5, feedbackCount: 315 },
];

// 4. Top Support Ticket Subjects
export const topSupportTickets: SupportTicketSubjectData[] = [
  { subject: 'Password Reset', ticketCount: 210 },
  { subject: 'Shipping Status', ticketCount: 185 },
  { subject: 'Damaged Item', ticketCount: 150 },
  { subject: 'Billing Inquiry', ticketCount: 132 },
  { subject: 'Product Feature Question', ticketCount: 105 },
  { subject: 'Cancel Order', ticketCount: 95 },
  { subject: 'Return Request', ticketCount: 88 },
  { subject: 'Website Bug', ticketCount: 70 },
  { subject: 'Account Deletion', ticketCount: 65 },
  { subject: 'Bulk Order Inquiry', ticketCount: 50 },
];

// 5. Monthly Returns & Refunds
export const monthlyReturns: MonthlyReturnData[] = [
  { month: '2023-01', totalReturns: 30, totalRefunds: 3500.50 },
  { month: '2023-02', totalReturns: 25, totalRefunds: 2800.75 },
  { month: '2023-03', totalReturns: 40, totalRefunds: 4200.00 },
  { month: '2023-04', totalReturns: 35, totalRefunds: 3900.25 },
  { month: '2023-05', totalReturns: 50, totalRefunds: 5500.00 },
  { month: '2023-06', totalReturns: 48, totalRefunds: 5100.50 },
  { month: '2023-07', totalReturns: 55, totalRefunds: 6200.00 },
  { month: '2023-08', totalReturns: 60, totalRefunds: 6800.75 },
];

// 6. Ticket Status by Priority
export const ticketStatusPriority: TicketStatusPriorityData[] = [
  { status: 'Open', priority: 'Low', ticketCount: 120 },
  { status: 'Open', priority: 'Medium', ticketCount: 80 },
  { status: 'Open', priority: 'High', ticketCount: 50 },
  { status: 'In Progress', priority: 'Low', ticketCount: 60 },
  { status: 'In Progress', priority: 'Medium', ticketCount: 110 },
  { status: 'In Progress', priority: 'High', ticketCount: 90 },
  { status: 'Closed', priority: 'Low', ticketCount: 250 },
  { status: 'Closed', priority: 'Medium', ticketCount: 320 },
  { status: 'Closed', priority: 'High', ticketCount: 170 },
];

// 7. Top 10 Most Active Customers
export const topCustomers: TopCustomerData[] = [
  { customerId: 115, customerFirstName: 'Bob', customerLastName: 'Brown', totalEvents: 45 },
  { customerId: 205, customerFirstName: 'Jane', customerLastName: 'Smith', totalEvents: 42 },
  { customerId: 302, customerFirstName: 'Alice', customerLastName: 'Johnson', totalEvents: 38 },
  { customerId: 101, customerFirstName: 'John', customerLastName: 'Doe', totalEvents: 35 },
  { customerId: 501, customerFirstName: 'Emily', customerLastName: 'White', totalEvents: 33 },
  { customerId: 410, customerFirstName: 'Charlie', customerLastName: 'Davis', totalEvents: 31 },
  { customerId: 603, customerFirstName: 'Frank', customerLastName: 'Green', totalEvents: 29 },
  { customerId: 708, customerFirstName: 'Grace', customerLastName: 'Hall', totalEvents: 25 },
  { customerId: 802, customerFirstName: 'Heidi', customerLastName: 'King', totalEvents: 22 },
  { customerId: 901, customerFirstName: 'Ivan', customerLastName: 'Lee', totalEvents: 20 },
];
