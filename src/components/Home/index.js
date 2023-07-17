import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'
import {IoIosClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import FilterGroup from '../FilterGroup'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  HomePageDetailsContainer,
  PopupAndSearchResultContainer,
  BannerSectionContainer,
  BannerDetailsContainer,
  BannerSectionWebsiteLogo,
  BannerSectionDescription,
  BannerSectionCloseButton,
  GetInNowButton,
  SearchAndVideoDetailsContainer,
  SearchInputAndLogoContainer,
  SearchInput,
  SearchLogo,
  FailureViewContainer,
  FailureViewHeading,
  FailureViewImage,
  FailureViewDescription,
  RetryButton,
  LoaderViewContainer,
  ListContainer,
  ListItem,
  ThumbnailUrl,
  ProfileAndDetailsContainer,
  ProfileLogo,
  TitleViewsPublishedDateContainer,
  VideoTitle,
  VideoName,
  ViewsAndPublishDate,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videoList: [],
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videoList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearch = () => {
    const {searchInput} = this.state
    this.getAllVideos(searchInput)
  }

  onEnterKey = event => {
    if (event.key === 'Enter') {
      this.onSearch()
    }
  }

  onClickRetryButton = () => {
    this.onSearch()
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
        const color = isDarkMode ? '#fff' : '#000'
        const {videoList} = this.state
        return (
          <ListContainer>
            {videoList.map(eachVideo => (
              <Link to={`/videos/${eachVideo.id}`}>
                <ListItem key={eachVideo.id}>
                  <ThumbnailUrl
                    src={eachVideo.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <ProfileAndDetailsContainer>
                    <ProfileLogo
                      src={eachVideo.channel.profileImageUrl}
                      alt="channel logo"
                    />
                    <TitleViewsPublishedDateContainer>
                      <VideoTitle color={color}>{eachVideo.title}</VideoTitle>
                      <VideoName>{eachVideo.channel.name}</VideoName>
                      <ViewsAndPublishDate>
                        {eachVideo.viewCount} views .{' '}
                        <span>{eachVideo.publishedAt}</span>
                      </ViewsAndPublishDate>
                    </TitleViewsPublishedDateContainer>
                  </ProfileAndDetailsContainer>
                </ListItem>
              </Link>
            ))}
          </ListContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  noSearchResults = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const color = isDarkMode ? '#fff' : '#000'
        return (
          <FailureViewContainer>
            <FailureViewImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureViewHeading color={color}>
              No Search results found
            </FailureViewHeading>
            <FailureViewDescription>
              Try different key words or remove search filter
            </FailureViewDescription>
            <RetryButton onClick={this.onClickRetryButton}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  getVideos = () => {
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
    const {searchInput, videoList} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const homeBgColor = isDarkMode ? '#181818 ' : '#f9f9f9'
          const searchInputBgColor = isDarkMode ? 'transparent' : '#ffffff'

          return (
            <div data-testid="home">
              <Header />
              <HomePageDetailsContainer>
                <FilterGroup />
                <PopupAndSearchResultContainer>
                  <BannerSectionContainer data-testid="banner">
                    <BannerDetailsContainer>
                      <BannerSectionWebsiteLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerSectionDescription>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerSectionDescription>
                      <GetInNowButton>GET IT NOW</GetInNowButton>
                    </BannerDetailsContainer>
                    <BannerSectionCloseButton data-testid="close" type="button">
                      <IoIosClose size="30px" />
                    </BannerSectionCloseButton>
                  </BannerSectionContainer>
                  <SearchAndVideoDetailsContainer bgColor={homeBgColor}>
                    <SearchInputAndLogoContainer>
                      <SearchInput
                        bgColor={searchInputBgColor}
                        placeholder="search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        onKeyDown={this.onEnterKey}
                      />
                      <SearchLogo
                        onClick={this.onSearch}
                        data-testid="searchButton"
                      >
                        <BsSearch />
                      </SearchLogo>
                    </SearchInputAndLogoContainer>
                    {videoList.length === 0
                      ? this.noSearchResults()
                      : this.getVideos()}
                  </SearchAndVideoDetailsContainer>
                </PopupAndSearchResultContainer>
              </HomePageDetailsContainer>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
