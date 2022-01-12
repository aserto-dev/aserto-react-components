import { Modal as BootstrapModal } from 'react-bootstrap'
import styled from 'styled-components'
import { theme } from '../../theme'

const StyledHeader = styled(BootstrapModal.Header)`
  background-color: ${theme.grey20};
  border: none;
  padding: 20px;
`

const StyledTitle = styled(BootstrapModal.Title)`
  font-size: 20px;
  font-weight: 500;
  color: ${theme.grey100};
`

const StyledBody = styled(BootstrapModal.Body)`
  background-color: ${theme.grey10};
  padding: 20px;
`

const StyledFooter = styled(BootstrapModal.Footer)`
  background-color: ${theme.grey10};
  border: none;
`

export const Modal = Object.assign(styled(BootstrapModal).attrs({ centered: true })``, {
  Header: StyledHeader,
  Title: StyledTitle,
  Body: StyledBody,
  Footer: StyledFooter,
})
