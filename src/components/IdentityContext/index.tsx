import React from 'react'
import styled from 'styled-components'
import { Input, Select } from '../..'
// import { Input, Select } from '@aserto/aserto-react-components'

const Col = styled.div`
  width: 100%;
`
const Row = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${Col}:first-of-type {
    padding-right: 10px;
  }
`

export const IdentityContext = ({ mode, setMode, identity, setIdentity }) => {
  const identityOptions = [
    {
      label: 'Anonymous',
      value: 'ANONYMOUS',
    },
    {
      label: 'JWT',
      value: 'JWT',
    },
    {
      label: 'Manual',
      value: 'MANUAL',
    },
  ]

  // if mode wasn't specified and identity is set, use Manual
  if (!mode && identity) {
    mode = 'MANUAL'
  }

  // set default identity context
  let index = identityOptions.findIndex((i) => i.value === mode)
  if (index < 0) {
    index = 0
  }
  const defaultMode = identityOptions[index]

  return (
    <Row>
      <Col>
        <Select
          options={identityOptions}
          defaultValue={defaultMode}
          onChange={(e) => setMode(e.value)}
        />
      </Col>
      <Col style={{ marginTop: 10, marginBottom: 10 }}>
        {mode !== 'ANONYMOUS' && (
          <Input
            placeholder={mode === 'JWT' ? 'JWT' : 'identity'}
            value={identity}
            onChange={(e) => setIdentity(e.target.value)}
          />
        )}
      </Col>
    </Row>
  )
}
