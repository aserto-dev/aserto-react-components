import styled from 'styled-components'
import { Button as BootstrapButton } from 'react-bootstrap'
import { theme } from '../../theme'

const BaseButton = styled(BootstrapButton)`
  border: none;
  border-radius: 4px;
  font-size: 14px;
  height: 36px;
  text-align: center;
  &:disabled {
    background-color: ${theme.grey40};
  }
`

export const PrimaryButton = styled(BaseButton)`
  background-color: ${theme.lochivarAccent1};
  color: ${theme.fullWhite};
  &:hover,
  &:visited,
  &:focus {
    background-color: ${theme.lochivarAccent2};
  }
  &:active {
    background-color: ${theme.lochivarAccent3} !important;
  }
`

export const SecondaryButton = styled(BaseButton)`
  color: ${theme.grey100};
  background-color: ${theme.grey20};
  border: 1px solid ${theme.grey};
  &:hover,
  &:visited,
  &:focus {
    background-color: ${theme.grey60};
  }
  &:active {
    background-color: ${theme.grey80} !important;
  }
`
