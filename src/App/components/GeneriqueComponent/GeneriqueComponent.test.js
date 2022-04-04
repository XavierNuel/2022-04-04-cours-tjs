import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GeneriqueComponent from './GeneriqueComponent';

describe('<GeneriqueComponent />', () => {
  test('it should mount', () => {
    render(<GeneriqueComponent />);
    
    const generiqueComponent = screen.getByTestId('GeneriqueComponent');

    expect(generiqueComponent).toBeInTheDocument();
  });
});