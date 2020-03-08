import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'

import SiteFooter from './SiteFooter'

test('SiteFooter component renders with the expected UI elements', () => {
  const { getByText } = render(<SiteFooter />)

  expect(getByText('SiteFooter'))
})
