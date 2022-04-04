import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexVLayout from './FlexVLayout';

describe('<FlexVLayout />', () => {
  test('it should mount', () => {
    render(<FlexVLayout />);
    
    const flexVLayout = screen.getByTestId('FlexVLayout');

    expect(flexVLayout).toBeInTheDocument();
  });
});