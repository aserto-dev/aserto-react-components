import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import 'codemirror/keymap/sublime'
import 'codemirror/theme/monokai.css'
import 'codemirror-rego/mode'
import './aserto-custom.css'

export const Highlight = ({ children }) => (
  <CodeMirror
    value={children}
    height="100%"
    options={{
      theme: 'monokai',
      keyMap: 'sublime',
      mode: 'rego',
      lineNumbers: false,
      readOnly: true,
    }}
  />
)
