import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeForm from './MemeForm';
import { DummyMeme } from '../../interfaces/common';
import { store } from "../../store/store";
import { Provider } from "react-redux";

describe('<MemeForm />', () => {
  test('it should mount', () => {
    render(<Provider store={store}><MemeForm  images={[]} currentMeme={DummyMeme} onInputValueChange={()=>{}} /></Provider>);

    const memeForm = screen.getByTestId('MemeForm');

    expect(memeForm).toBeInTheDocument();
  });
});