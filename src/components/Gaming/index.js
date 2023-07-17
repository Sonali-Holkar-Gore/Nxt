import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'
import {Loader} from 'react-loader-spinner'
import Header from '../Header'
import FilterGroup from '../FilterGroup'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  GamingPage,
  GamingVideoContainer,
  GamingContainer,
  LogoAndHeadingContainer,
  LogoContainer,
  Heading,
  VideoDetailsContainer,
  ThumbnailUrl,
  Title,
  Content,
  FailureViewContainer,
  FailureViewDescription,
  FailureViewHeading,
  FailureViewImage,
  RetryButton,
  LoaderViewContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideoList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideoList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  failureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const failureViewImage = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const color = isDarkMode ? '#fff' : '#000'
        return (
          <FailureViewContainer>
            <FailureViewImage src={failureViewImage} alt="failure view" />
            <FailureViewHeading color={color}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewDescription>
              We are having Some trouble to complete your request. Please try
              again.
            </FailureViewDescription>
            <RetryButton onClick={this.onClickRetryButton}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  loaderView = () => (
    <LoaderViewContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderViewContainer>
  )

  successView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const bgColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
        const textColor = isDarkMode ? '#fff' : '#000'
        const {gamingVideoList} = this.state
        return (
          <>
            <GamingContainer data-testid="gaming">
              <LogoAndHeadingContainer>
                <LogoContainer>
                  <SiYoutubegaming color="red" size="30" />
                </LogoContainer>
                <Heading color={textColor} fontSize="20">
                  Gaming
                </Heading>
              </LogoAndHeadingContainer>
              <GamingVideoContainer bgColor={bgColor}>
                {gamingVideoList.map(data => (
                  <Link to={`/videos/${data.id}`}>
                    <VideoDetailsContainer key={data.id}>
                      <ThumbnailUrl
                        src={data.thumbnailUrl}
                        alt={data.thumbnailUrl}
                      />
                      <Title color={textColor}>{data.title}</Title>
                      <Content>{data.viewCount} Watching Worldwide</Content>
                    </VideoDetailsContainer>
                  </Link>
                ))}
              </GamingVideoContainer>
            </GamingContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  getGaming = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.inProgress:
        return this.loaderView()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <GamingPage>
          <FilterGroup />
          {this.getGaming()}
        </GamingPage>
      </>
    )
  }
}

export default Gaming
