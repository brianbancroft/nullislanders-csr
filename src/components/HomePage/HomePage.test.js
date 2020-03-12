import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'

import HomePage from './HomePage'

test('HomePage component renders with the expected UI elements', () => {
const { getByText } = render(
<HomePage />)

expect(getByText('I should fail'))

})
