/* global gapi */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('render h1 element', () => {
  render(<App />);
  //expect(
  //  screen.queryByTestId('html-element')).toBeInTheDocument()
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});