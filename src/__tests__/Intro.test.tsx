

// import React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
// import 'testing-library/jest-dom';
import Intro from '../Intro';

describe('Intro', () => {

    test('testtest', () => {
        expect(1).toBe(1)
    })
    test('renders Intro component', () => {
        const { getByText } = render(<Intro name="John" />);
        const introElement = getByText(/Hello, John!/i);
        expect(introElement).toBeInTheDocument();
    });
})
// test('demo', () => {
//     expect(true).toBe(true)
//   })