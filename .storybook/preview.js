import React from 'react'
import '../src/index.css'
import { MemoryRouter, Route } from 'react-router-dom'
import { theme } from '../src'
import { ThemeProvider } from 'styled-components'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  padded: true,
}

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <Route>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </Route>
    </MemoryRouter>
  ),
]
