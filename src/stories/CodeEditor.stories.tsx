import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { CodeEditor, CodeEditorProps } from '../components/CodeEditor'

export default {
  title: 'Common/CodeEditor',
  component: CodeEditor,
} as Meta

const Template: Story<Pick<CodeEditorProps, 'language'>> = ({ language }) => {
  const [code, setCode] = useState(
    'package peoplefinder.DELETE.api.users.__id\n' +
      '\n' +
      'default allowed = false\n' +
      '\n' +
      'default visible = false\n' +
      '\n' +
      'default enabled = false\n' +
      '\n' +
      'allowed {\n' +
      '\tu = input.user\n' +
      '\tu.attr.department == "Operations"\n' +
      '\tu.attr.title == "IT Manager"\n' +
      '}\n' +
      '\n' +
      'visible {\n' +
      '\tu = input.user\n' +
      '\tu.attr.department == "Operations"\n' +
      '}\n' +
      '\n' +
      'enabled {\n' +
      '\tallowed\n' +
      '}'
  )

  return <CodeEditor language={language} value={code} onChange={setCode} />
}

export const Primary = Template.bind({})
Primary.args = {
  language: 'rego',
}
