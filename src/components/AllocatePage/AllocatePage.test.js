import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AllocatePage from './AllocatePage';

describe('<AllocatePage />', () => {
  test('it should mount', () => {
    render(<AllocatePage />);
    
    const allocatePage = screen.getByTestId('AllocatePage');

    expect(allocatePage).toBeInTheDocument();
  });
});