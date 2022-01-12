import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Modal } from '../components/Modal'

export default {
  title: 'Common/Modal',
  component: Modal,
} as Meta

const Template = () => (
  <Modal show>
    <Modal.Header>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>This is some content</p>
      <Input label="Input" info="Enter something here" />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>
)

export const Primary = Template.bind({})
Primary.args = {}
