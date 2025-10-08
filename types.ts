
export interface EventTypeData {
  eventType: string;
  totalEvents: number;
}

export interface FrequentReturnerData {
  customerId: number;
  customerFirstName: string;
  customerLastName: string;
  returnCount: number;
  totalRefundAmount: number;
}

export interface FeedbackRatingData {
  rating: number;
  feedbackCount: number;
}

export interface SupportTicketSubjectData {
  subject: string;
  ticketCount: number;
}

export interface MonthlyReturnData {
  month: string;
  totalReturns: number;
  totalRefunds: number;
}

export interface TicketStatusPriorityData {
  status: 'Open' | 'In Progress' | 'Closed';
  priority: 'Low' | 'Medium' | 'High';
  ticketCount: number;
}

export interface TopCustomerData {
  customerId: number;
  customerFirstName: string;
  customerLastName: string;
  totalEvents: number;
}
