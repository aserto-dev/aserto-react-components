import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import 'codemirror/theme/monokai.css'
import 'codemirror-rego/mode'
import './aserto-custom.css'

export const Highlight = ({ children }) => (
  <CodeMirror
    value={children}
    height="auto"
    options={{
      theme: 'monokai',
      mode: 'rego',
      lineNumbers: false,
      readOnly: true,
      scrollbarStyle: null,
    }}
  />
)
