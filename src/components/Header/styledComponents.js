import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
export const WebsiteLogo = styled.img`
  height: 30px;
  width: 120px;
  margin-left: 10px;
`
export const NavItemContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
`
export const ThemeLogo = styled.img`
  height: 34px;
  width: 34px;
  margin-left: 10px;
`
export const ProfileImage = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 10px;
`
export const LogoutButton = styled.button`
  color: ${props => props.color};
  background-color: transparent;
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  padding: 4px;
  font-size: 11px;
  font-weight: 500;
  margin-left: 10px;
  font-family: 'Roboto';
`
export const PopupContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: none;
  padding: 10px;
`
export const PopupHeading = styled.p`
  color: ${props => props.color};
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const PopupButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const PopupButton = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 2px;
  font-size: 10px;
  padding: 4px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-right: 10px;
`
