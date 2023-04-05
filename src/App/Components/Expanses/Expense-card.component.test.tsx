import { render, screen } from '@testing-library/react';
import ExpenseCard from './Expense-card.component';

test('renders learn react link', () => {
  render(<ExpenseCard />);
  const linkElement = screen.getByText(/title/i);
  expect(linkElement).toBeInTheDocument();
});