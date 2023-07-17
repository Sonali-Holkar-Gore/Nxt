import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
import {Loader} from 'react-loader-spinner'
import {Link, Redirect} from 'react-router-dom'
import Header from '../Header'
import FilterGroup from '../FilterGroup'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  TrendingPage,
  TrendingContainer,
  LogoAndHeadingContainer,
  LogoContainer,
  Heading,
  TrendingVideoContainer,
  VideoDetailsContainer,
  ThumbnailUrl,
  DetailsContainer,
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

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideoList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        publishedAt: eachVideo.published_at,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideoList: updatedData,
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
        const {trendingVideoList} = this.state
        return (
          <>
            <TrendingContainer data-testid="trending">
              <LogoAndHeadingContainer>
                <LogoContainer>
                  <AiFillFire color="red" size="30" />
                </LogoContainer>
                <Heading color={textColor} fontSize="20">
                  Trending
                </Heading>
              </LogoAndHeadingContainer>
              <TrendingVideoContainer bgColor={bgColor}>
                {trendingVideoList.map(data => (
                  <Link to={`/videos/${data.id}`}>
                    <VideoDetailsContainer key={data.id}>
                      <ThumbnailUrl
                        src={data.thumbnailUrl}
                        alt={data.thumbnailUrl}
                      />
                      <DetailsContainer>
                        <Title color={textColor}>{data.title}</Title>
                        <Content fontSize="10">{data.channel.name}</Content>
                        <Content fontSize="10">
                          {data.viewCount} views . {data.publishedAt}
                        </Content>
                      </DetailsContainer>
                    </VideoDetailsContainer>
                  </Link>
                ))}
              </TrendingVideoContainer>
            </TrendingContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  getTrending = () => {
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
        <TrendingPage>
          <FilterGroup />
          {this.getTrending()}
        </TrendingPage>
      </>
    )
  }
}

export default Trending
