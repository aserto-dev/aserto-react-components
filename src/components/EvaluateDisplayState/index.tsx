import React from 'react'

export type DisplayState = {
  [key: string]: string | boolean
}

const EvaluateDisplayMapComponent = ({
  children,
  displayStateMap,
}: {
  children: React.ReactElement
  displayStateMap: DisplayState
}) => {
  const isVisible = displayStateMap.visible
  const isEnabled = displayStateMap.enabled

  return <>{isVisible && React.cloneElement(children, { disabled: !isEnabled })}</>
}

export const EvaluateDisplayMap = React.memo(EvaluateDisplayMapComponent)
