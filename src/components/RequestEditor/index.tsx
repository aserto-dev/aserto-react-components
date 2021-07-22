import React, { useState } from 'react'
import { Highlight } from '../Highlight'
import { PlayButton } from '../PlayButton'
import { Select } from '../Select'
import { TextArea } from '../TextArea'
import { IdentityContext } from '../IdentityContext'
import styled, { css } from 'styled-components'
import { Label } from '../Label'

const Col = styled.div`
  display: flex;
  @media (min-width: 680px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    flex: 1;
    flex-direction: column;
  }
`

const Container = styled.div`
  textarea {
    resize: none;
  }
`

const Text = styled.div`
  margin: auto 20px auto auto;
`

const Content = styled.div<{ $flex?: boolean; $fixed?: boolean; $paddingTop?: number }>`
  border-bottom: 1px solid ${({ theme }) => theme.grey20};
  border-right: 1px solid ${({ theme }) => theme.grey20};
  color: ${({ theme }) => theme.grey100};
  ${({ $flex }) => ($flex ? 'flex: 1' : '')};
  display: flex;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  @media (min-width: 620px) {
    ${({ $fixed }) => {
      return $fixed
        ? css`
            height: 83px;
            margin-top: -2px;
            width: 50%;
            background-color: ${({ theme }) => theme.primaryBlack};
            display: flex;
            position: fixed;
            span {
              margin: auto 0px;
            }
          `
        : ''
    }}

    ${({ $paddingTop }) => {
      return `padding-top: ${$paddingTop}px`
    }}
  }

  @media (max-width: 720px) and (min-width: 680px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const Row = styled.div`
  flex-wrap: wrap;
  margin-bottom: 20px;
  display: flex;
`

const HighlightWrapper = styled.div`
  width: 100%;
  padding: 20px 5px;
  overflow: hidden;
  min-width: 200px;
  min-height: 200px;
`

export const RequestEditor = ({ identity, setIdentity, onExecute, output }) => {
  const [mode, setMode] = useState(identity ? 'MANUAL' : 'ANONYMOUS')
  const [input, setInput] = useState()
  const [query, setQuery] = useState()

  const requestOptions = [
    {
      label: 'query',
      value: 'query',
      /*  }, {
    label: 'is',
    value: 'is',
    disabled: true
  }, {
    label: 'decisiontree',
    value: 'decisiontree',
    disabled: true*/
    },
  ]

  // const execute = async () => {
  //   try {
  //     const body = {
  //       identityContext: {
  //         mode: mode,
  //         identity: identity,
  //       },
  //       query,
  //       input: undefined,
  //     }
  //     if (input) {
  //       body.input = input
  //     }
  //     //
  //     // const response = await fetch(`${authorizerApi}/authz/query`, {
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     //   method: 'POST',
  //     //   body: JSON.stringify(body),
  //     // })
  //
  //     // const responseData = await response.json()
  //     // if (!response.ok) {
  //     //   setOutput((responseData && responseData.message) || (await response.text()))
  //     // } else {
  //     //   setOutput(responseData && responseData.results)
  //     // }
  //   } catch (error) {
  //     setOutput(error.message)
  //   }
  // }

  return (
    <Container>
      <Row>
        <Col>
          <Content $fixed>
            <Row
              style={{
                flex: 2,
              }}
            >
              <Text>Request:</Text>
              <Select
                style={{
                  flex: 1,
                  margin: 'auto',
                }}
                options={requestOptions}
                defaultValue={requestOptions[0]}
                onChange={console.log}
              />
            </Row>
            <Row
              style={{
                justifyContent: 'flex-end',
                flex: 1,
              }}
            >
              <PlayButton onClick={() => onExecute(mode, query, input)} />
            </Row>
          </Content>
          <Content $flex $paddingTop={99}>
            <div style={{ maxHeight: 'calc(100vh - 295px)', width: '100%' }}>
              <Label>Identity context</Label>
              <IdentityContext
                mode={mode}
                setMode={setMode}
                identity={identity}
                setIdentity={setIdentity}
              />

              <Label>Query</Label>
              <TextArea
                style={{ height: 'calc((100vh - 540px) * 2 / 3)' }}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                }}
              />

              <Label>Input</Label>
              <TextArea
                style={{ height: 'calc((100vh - 490px) / 3)' }}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value)
                }}
              />
            </div>
          </Content>
        </Col>
        <Col>
          <Content $fixed>
            <span>Output</span>
          </Content>
          <Content
            style={{
              maxHeight: 'calc(100vh - 205px)',
            }}
            $flex
            $paddingTop={99}
          >
            <HighlightWrapper>
              {
                <Highlight style={{ maxHeight: 'calc(100vh - 255px)' }}>
                  {JSON.stringify(output, null, 2)}
                </Highlight>
              }
            </HighlightWrapper>
          </Content>
        </Col>
      </Row>
    </Container>
  )
}
