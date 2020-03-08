import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'

import SiteHeader from './SiteHeader'

test('SiteHeader component renders with the expected UI elements', () => {
  const { getByText } = render(<SiteHeader />)

  expect(getByText('SiteHeader'))
})
