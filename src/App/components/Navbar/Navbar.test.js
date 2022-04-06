import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Navbar as NavBar } from "react-bootstrap";

describe('<Navbar />', () => {
  test('it should mount', () => {
    render(<NavBar />);
    
    const navbar = screen.getByTestId('Navbar');

    expect(navbar).toBeInTheDocument();
  });
});