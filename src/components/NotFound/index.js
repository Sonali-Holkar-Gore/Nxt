import NxtWatchContext from '../../Context/NxtWatchContext'
import FilterGroup from '../FilterGroup'
import Header from '../Header'
import {
  NotFoundPage,
  NotFoundContainer,
  NotFoundImage,
  NotFoundDescription,
  NotFoundHeading,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const notFoundBgColor = isDarkMode ? '#000' : '#f1f1f1'
      const notFoundColor = isDarkMode ? '#fff' : '#000'
      const notFoundImage = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundPage>
            <FilterGroup />
            <NotFoundContainer bgColor={notFoundBgColor}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHeading color={notFoundColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </NotFoundPage>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
