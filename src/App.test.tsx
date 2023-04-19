import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('shows track your calories', () => {
  render(<App></App>);

  //Assert
  const trackCalorieElement = screen.getByText('Track your calories', {exact: false});
  expect(trackCalorieElement).toBeInTheDocument();
});

test('shows CALORIES ', () => {
  render(<App></App>);

  //Assert
  const trackCalorieElement = screen.getByText('CALORIES');
  expect(trackCalorieElement).toBeInTheDocument();
});