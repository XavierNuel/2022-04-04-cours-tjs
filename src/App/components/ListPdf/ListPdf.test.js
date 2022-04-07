import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListPdf from './ListPdf';

describe('<ListPdf />', () => {
  test('it should mount', () => {
    render(<ListPdf />);
    
    const listPdf = screen.getByTestId('ListPdf');

    expect(listPdf).toBeInTheDocument();
  });
});