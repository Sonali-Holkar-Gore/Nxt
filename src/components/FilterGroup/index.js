import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  FilterGroupContainer,
  LinksContainer,
  LinkContainer,
  ContactUsContainer,
  ContactUs,
  SocialMediaLogoContainer,
  SocialMediaLogo,
  RouteName,
} from './styledComponents'

const FilterGroup = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, activeTabItem} = value
      const bgColor = isDarkMode ? '#000 ' : '#fff'
      const routeColor = isDarkMode ? '#f1f1f1' : ' #424242'
      const contactUsColor = isDarkMode ? '#fff' : '#1e293b'
      const onClickHomeTab = () => {
        activeTabItem('HOME')
      }

      const onClickTrendingTab = () => {
        activeTabItem('TRENDING')
      }

      const onClickGamingTab = () => {
        activeTabItem('GAMING')
      }

      const onClickSavedVideosTab = () => {
        activeTabItem('SAVED VIDEOS')
      }

      return (
        <FilterGroupContainer bgColor={bgColor}>
          <LinksContainer>
            <LinkContainer onClick={onClickHomeTab}>
              <Link to="/">
                <AiFillHome />
                <RouteName color={routeColor}>Home</RouteName>
              </Link>
            </LinkContainer>
            <LinkContainer onClick={onClickTrendingTab}>
              <Link to="/trending">
                <AiFillFire />
                <RouteName color={routeColor}>Trending</RouteName>
              </Link>
            </LinkContainer>
            <LinkContainer onClick={onClickGamingTab}>
              <Link to="/gaming">
                <SiYoutubegaming />
                <RouteName color={routeColor}>Gaming</RouteName>
              </Link>
            </LinkContainer>

            <LinkContainer onClick={onClickSavedVideosTab}>
              <Link to="/saved-videos">
                <MdPlaylistAdd />
                <RouteName color={routeColor}>Saved videos</RouteName>
              </Link>
            </LinkContainer>
          </LinksContainer>
          <ContactUsContainer>
            <ContactUs fontSize="14px" color={contactUsColor}>
              CONTACT US
            </ContactUs>
            <SocialMediaLogoContainer>
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaLogoContainer>
            <ContactUs fontSize="11px" color={contactUsColor}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUs>
          </ContactUsContainer>
        </FilterGroupContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default FilterGroup
