import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeThumbnail from './MemeThumbnail';
import { store } from "../../store/store";
import { Provider } from "react-redux";

describe('<MemeThumbnail />', () => {
  test('it should mount', () => {
    render(<Provider store={store}><MemeThumbnail /></Provider>);
    
    const memeThumbnail = screen.getByTestId('MemeThumbnail');

    expect(memeThumbnail).toBeInTheDocument();
  });
});