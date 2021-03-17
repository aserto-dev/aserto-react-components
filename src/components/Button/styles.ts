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
    box-shadow: none !important;
  }
  &:active {
    background-color: ${theme.lochivarAccent3} !important;
  }
  &:disabled {
    background-color: ${theme.lochivar30};
  }
`

export const SecondaryButton = styled(BaseButton)`
  color: ${theme.grey100};
  background-color: ${theme.grey20};
  border: 1px solid ${theme.grey};
  &:hover,
  &:visited,
  &:focus {
    border: 1px solid ${theme.grey} !important;
    outline: none;
    box-shadow: none !important;
    background-color: ${theme.grey30};
  }
  &:disabled {
    background-color: ${theme.grey10};
    border-color: ${theme.grey10};
    color: ${theme.grey40};
  }
  &:active {
    border: 1px solid ${theme.grey20} !important;
    background-color: ${theme.grey40} !important;
  }
`

export const DangerButton = styled(BaseButton)`
  color: ${theme.fullWhite};
  background-color: ${theme.mojo80};
  &:hover,
  &:visited,
  &:focus {
    box-shadow: none !important;
    background-color: ${theme.mojo60} !important;
  }
  &:disabled {
    background-color: ${theme.mojo20};
    color: ${theme.mojo50};
  }
  &:active {
    background-color: ${theme.grey80} !important;
  }
`
