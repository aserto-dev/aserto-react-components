import React from 'react'

export type DisplayState = {
  [key: string]: string | boolean
}

const EvaluateDisplayStateComponent = ({
  children,
  displayState,
}: {
  children: React.ReactElement
  displayState: DisplayState
}) => {
  const isVisible = displayState.visible
  const isEnabled = displayState.enabled

  return <>{isVisible && React.cloneElement(children, { disabled: !isEnabled })}</>
}

export const EvaluateDisplayState = React.memo(EvaluateDisplayStateComponent)
