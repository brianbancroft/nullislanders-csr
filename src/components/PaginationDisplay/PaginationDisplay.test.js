import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'

import PaginationDisplay from './PaginationDisplay'

test('PaginationDisplay component renders with the expected UI elements', () => {
const { getByText } = render(
<PaginationDisplay />)

expect(getByText('I should fail'))

})
