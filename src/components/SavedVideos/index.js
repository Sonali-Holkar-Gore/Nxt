import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'
import Header from '../Header'
import FilterGroup from '../FilterGroup'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  SavedVideosPage,
  SavedVideoDetailsContainer,
  LogoAndHeadingContainer,
  LogoContainer,
  Heading,
  SavedVideoContainer,
  VideoDetailsContainer,
  ThumbnailUrl,
  DetailsContainer,
  Title,
  Content,
  NoSavedVideosContainer,
  NoSavedVideosImage,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode, savedVideos} = value
          const bgColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkMode ? '#fff' : '#000'
          return (
            <>
              <Header />
              <SavedVideosPage>
                <FilterGroup />
                {savedVideos.length === 0 ? (
                  <NoSavedVideosContainer
                    bgColor={bgColor}
                    data-testid="savedVideos"
                  >
                    <NoSavedVideosImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <Heading fontSize="30">No saved videos found</Heading>
                    <Content fontSize="16px">
                      You can save your videos while watching them
                    </Content>
                  </NoSavedVideosContainer>
                ) : (
                  <SavedVideoDetailsContainer>
                    <LogoAndHeadingContainer>
                      <LogoContainer>
                        <MdPlaylistAdd color="red" size="30" />
                      </LogoContainer>
                      <Heading color={textColor} fontSize="20">
                        Saved Videos
                      </Heading>
                    </LogoAndHeadingContainer>
                    <SavedVideoContainer bgColor={bgColor}>
                      {savedVideos.map(data => (
                        <Link to={`/videos/${data.id}`}>
                          <VideoDetailsContainer>
                            <ThumbnailUrl
                              src={data.thumbnailUrl}
                              alt={data.thumbnailUrl}
                            />
                            <DetailsContainer>
                              <Title color={textColor}>{data.title}</Title>
                              <Content fontSize="10">
                                {data.channel.name}
                              </Content>
                              <Content fontSize="10">
                                {data.viewCount} views . {data.publishedAt}
                              </Content>
                            </DetailsContainer>
                          </VideoDetailsContainer>
                        </Link>
                      ))}
                    </SavedVideoContainer>
                  </SavedVideoDetailsContainer>
                )}
              </SavedVideosPage>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
