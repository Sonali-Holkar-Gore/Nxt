import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  NavbarContainer,
  NavItemContainer,
  WebsiteLogo,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  PopupHeading,
  PopupButtonsContainer,
  PopupButton,
  ThemeButton,
} from './styledComponents'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, changeTheme} = value
      const headingColor = isDarkMode ? '#ffffff' : ' #1e293b'
      const backgroundColor = isDarkMode ? '#181818 ' : '#f9f9f9'
      const color = isDarkMode ? '#fff' : '#3b82f6'
      const websiteLogo = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const onClickChangeTheme = () => {
        changeTheme()
      }
      return (
        <NavbarContainer bgColor={backgroundColor}>
          <Link to="/">
            <WebsiteLogo src={websiteLogo} alt="website logo" />
          </Link>
          <NavItemContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onClickChangeTheme}
            >
              {isDarkMode ? (
                <FiSun size="30px" color="#fff" />
              ) : (
                <BsMoon size="30px" />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton type="button" color={color}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <PopupContainer bgColor={backgroundColor}>
                  <PopupHeading color={headingColor}>
                    Are you sure, you want to logout
                  </PopupHeading>
                  <PopupButtonsContainer>
                    <PopupButton
                      color="#f1f5f9"
                      bgColor="transparent"
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </PopupButton>
                    <Link to="login">
                      <PopupButton type="button" color="#fff" bgColor="#3b82f6">
                        Confirm
                      </PopupButton>
                    </Link>
                  </PopupButtonsContainer>
                </PopupContainer>
              )}
            </Popup>
          </NavItemContainer>
        </NavbarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
