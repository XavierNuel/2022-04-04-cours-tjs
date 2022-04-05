import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeViewer from './MemeViewer';
import { DummyMeme } from '../../interfaces/common';
import { store } from "../../store/store";
import { Provider } from "react-redux";

describe('<MemeViewer />', () => {
  test('it should mount', () => {
    render(<Provider store={store}><MemeViewer meme={DummyMeme} image={undefined} /></Provider>);
    
    const memeViewer = screen.getByTestId('MemeViewer');

    expect(memeViewer).toBeInTheDocument();
  });
});