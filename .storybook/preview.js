import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import '../src/index.css'
import { MemoryRouter, Route } from 'react-router-dom'
import { theme } from '../src/theme'
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
