import styled, { css } from 'styled-components'

export const NavBarContainer = styled.div<{
  $topPosition?: number
  $expandBreakpoint?: number
  $showMobileMenu?: boolean
}>`
  position: fixed;
  top: ${({ $topPosition }) => $topPosition || 0}px;
  width: 100%;
  left: 0;
  z-index: 10;

  .router-link-exact-active {
    color: rgb(231, 231, 231) !important;
    @media (min-width: ${({ $expandBreakpoint }) => $expandBreakpoint || 1200}px) {
      border-bottom: 1px solid rgb(103, 203, 207);
    }
    @media (max-width: ${({ $expandBreakpoint }) => $expandBreakpoint || 1200}px) {
      border-left: 1px solid rgb(103, 203, 207);
    }
  }

  nav {
    display: flex;
    -webkit-align-items: center;
    z-index: 9;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    background-color: rgb(30, 30, 30);
    position: relative;
    ${({ $showMobileMenu }) =>
      $showMobileMenu
        ? ''
        : css`
            border-bottom: 1px solid rgb(65, 65, 65);
          `};
    @media (max-width: ${({ $expandBreakpoint }) => $expandBreakpoint || 1200}px) {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      padding: 6px;
    }
    @media (min-width: ${({ $expandBreakpoint }) => $expandBreakpoint || 1200}px) {
      height: 82px;
      -webkit-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -webkit-justify-content: flex-start;
      justify-content: flex-start;
    }
  }
`

export const NavBarBrand = styled.span<{ $expandBreakpoint?: number }>`
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;

  @media (min-width: ${({ $expandBreakpoint }) => $expandBreakpoint || 1200}px) {
    margin-left: 10px;
    flex: 1 1 0%;

    margin-right: 30px;
  }
  @media (max-width: ${({ $expandBreakpoint }) => $expandBreakpoint || 1200}px) {
    img {
      margin-left: 0px !important;
      height: 38px;
    }
    vertical-align: top;
  }
`

export const Separator = styled.img<{ $hideBreakpoint?: number }>`
  margin-top: 3px;
  margin-right: 30px;
  @media (max-width: ${({ $hideBreakpoint }) => $hideBreakpoint || 1200}px) {
    display: none;
  }
`

export const NavbarText = styled.span`
  display: inline-block;
  margin-right: 10px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`
export const NavbarToggle = styled.button`
  padding: 0.25rem 0.5rem;
  //margin-right: 10px;
  color: rgb(160, 160, 160);
  border-color: hsla(0, 0%, 100%, 0.1);
  font-size: 1.1rem;
  line-height: 1;
  background-color: transparent;
  border-radius: 0.25rem;
  @media (min-width: 1200px) {
    display: none;
  }
  span {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: '';
    background: 50%/100% 100% no-repeat;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
`

export const NavbarCollapse = styled.div<{ $expandBreakpoint?: number }>`
  -webkit-flex-basis: 100%;
  flex-basis: 100%;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  -webkit-align-items: center;
  align-items: center;
  @media (min-width: 992px) {
    display: -webkit-flex !important;
    display: flex !important;
    -webkit-flex-basis: auto;
    flex-basis: auto;
  }

  ul {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-right: auto !important;
    @media (min-width: ${({ $expandBreakpoint }) => $expandBreakpoint || 1200}px) {
      -webkit-flex-direction: row;
      flex-direction: row;
    }
    @media (max-width: ${({ $expandBreakpoint }) => $expandBreakpoint || 1200}px) {
      display: none;
    }
  }
`

export const NavMobile = styled.div<{ $expandBreakpoint?: number; show?: boolean }>`
  -webkit-flex-basis: 100%;
  border-bottom: 1px solid rgb(65, 65, 65);
  flex-basis: 100%;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: ${({ show }) => (show ? 64 : -500)}px;
  left: 0px;
  background-color: rgb(30, 30, 30);
  transition: top 0.55s;

  ul {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-right: auto !important;
    li {
      padding-left: 10px;
    }
    @media (min-width: ${({ $expandBreakpoint }) => $expandBreakpoint || 1200}px) {
      display: none;
    }
    a {
      border-bottom: 0px;
      vertical-align: middle;
      padding-left: 13px !important;
      border-left: 1px solid rgb(30, 30, 30);
    }
  }
`

export const NavItem = styled.li`
  @media (min-width: 800px) {
    height: 60px !important;
  }
  a {
    display: block;
    text-decoration: none;
    background-color: transparent;
    padding-top: 11px;
    padding-bottom: 34px;
    box-sizing: border-box;
    margin: 0px 40px 0px 0px;
    font-weight: 400;
    color: rgb(160, 160, 160) !important;
  }
`
