import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExamScheduler from './ExamScheduler';

describe('<ExamScheduler />', () => {
  test('it should mount', () => {
    render(<ExamScheduler />);
    
    const examScheduler = screen.getByTestId('ExamScheduler');

    expect(examScheduler).toBeInTheDocument();
  });
});