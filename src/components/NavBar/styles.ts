import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import { theme } from '../../theme'

export const NavBarContainer = styled.div<{ $topPosition?: number; $expandBreakpoint?: number }>`
  position: fixed;
  top: ${({ $topPosition = 0 }) => $topPosition}px;
  width: 100%;
  z-index: 10;

  .navbar-toggler {
    padding: 0.25rem 0.50rem;
    color: ${theme.grey70};
    font-size: 1.1rem;
  }

  .navbar.bg-dark .nav-link {
    color: ${theme.grey70} !important;
  }

  .navbar.bg-dark .nav-link:hover {
    color: ${theme.grey20};
  }

  .navbar {
    background-color: ${theme.grey10};
    padding: 1.375rem 0;
    border-bottom: 1px solid ${theme.grey30};
  }

  .nav-item a.nav-link {
    padding-top: 10px;
    padding-bottom: 25px;
  }


  .navbar-nav .nav-link {
    color: ${theme.grey70} !important;
    padding: 0 0 1rem 0;
    box-sizing: border-box;
    margin: 0 40px 0 0;
    font-weight: 400;
  }

  .navbar-nav .nav-link:hover {
    color: ${theme.fullWhite};
  }

  .navbar-nav .btn {
    min-width: 145px;
  }

  .nav-user-profile {
    border-radius: 50% 50%;
    max-width: 3.785rem;
    height: auto;
    box0px ${theme.grey70};
  }

  .nav-item.dropdown .dropdown-toggle {
    margin: 0;
  }

  .nav-item.dropdown .dropdown-name {
    font-weight: 600;
  }

  .nav-item.dropdown .router-link-exact-active {
    border: 0;
  }

  .nav-item.dropdown .dropdown-menu {
    box-shadow: 0px 0px 4px 0px ${theme.grey70};
  }

  .nav-item.dropdown .dropdown-header {
    border-bottom: 1px solid ${theme.grey70};
    font-size: 1rem;
    font-weight: 600;
    color: #041433;
  }

  .nav-item.dropdown .dropdown-item {
    border-bottom: 1px solid ${theme.grey70};
    padding: 0.55rem 1.5rem;
  }

  .nav-item.dropdown .dropdown-item .icon {
    margin-right: 8px;
    vertical-align: middle;
  }

  .nav-item.dropdown .dropdown-item:first-child:hover {
    background: inherit;
  }

  .nav-item.dropdown .dropdown-item:last-child {
    border-bottom: 0;
  }

  .navbar {
    padding: 1.375rem 0 0 0;
  }
  
  .navbar .router-link-exact-active {
    border-bottom: 1px solid ${theme.lochivarAccent4};
    color: ${theme.grey100} !important;
  }

  @media (min-width: ${({ $expandBreakpoint = 1200 }) => $expandBreakpoint}px) {
    .navbar-brand {
      margin-right: 24px;
      margin-top: -18px;
    }
  }

  .navbar-brand {
    margin-left: 20px;
  }

  @media (max-width: ${({ $expandBreakpoint = 1200 }) => $expandBreakpoint - 1}px) {
    .navbar {
      padding: 12px;
      display: flex;
      align-items: center;
    }
    .navbar-text {
      flex: 1;
    }

    .nav-item {
      margin-bottom: 1rem;
    }

    .nav-item .nav-link {
      padding: 0 0 0 16px;
    }

    .nav-item .nav-link.router-link-exact-active {
      border-bottom: 0;
      border-left: 1px solid ${theme.lochivarAccent3};
      padding-left: 13px !important;
      vertical-align: middle;
    }

    .navbar-brand {
      margin-left: 10px;
      vertical-align: top;
      img {
        height: 38px;
      }
    }

    .navbar-nav {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }

    .navbar-nav:first-child {
      margin-top: 1.5em;
    }

    .navbar-nav:last-child {
      background-color: ${theme.grey10};
    }

    .navbar-nav:last-child li {
      margin-bottom: 1em;
    }

    .navbar-nav:last-child li .icon {
      margin-right: 1em;
      vertical-align: middle;
    }

    .navbar-nav:last-child li a {
      vertical-align: middle;
      color: ${theme.grey70};
    }

    .navbar-nav .user-info img {
      margin-right: 1em;
    }

    .navbar-nav .btn-link {
      padding: 0;
      color: ${theme.grey70};
      min-width: 0px;
    }
  }
`

export const NavBarBrand = Navbar.Brand

export const Separator = styled.img<{ $hideBreakpoint?: number }>`
  margin-bottom: 16px;
  margin-right: 30px;
  @media (max-width: ${({ $hideBreakpoint = 1200 }) => $hideBreakpoint}px) {
    display: none;
  }
`
