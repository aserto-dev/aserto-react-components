import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/index.css'
import {MemoryRouter, Route} from 'react-router-dom'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    padded: true,
}

export const decorators = [
    Story => (
        <MemoryRouter>
            <Route>
                <Story />
            </Route>
        </MemoryRouter>
    ),
]