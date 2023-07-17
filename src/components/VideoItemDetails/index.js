import {Component} from 'react'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import FilterGroup from '../FilterGroup'
import Header from '../Header'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  VideoItemDetailsPage,
  VideoItemDetailsContainer,
  ProfileLogo,
  VideoItemTitle,
  VideoItemName,
  ViewsCountAndButtonsContainer,
  ButtonsContainer,
  Content,
  VideoDetailsContainer,
  DetailsContainer,
  Description,
  Button,
} from './styledComponents'

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    liked: false,
    disliked: false,
    saved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const responseData = await response.json()
      const data = responseData.video_details
      const updatedData = {
        id: data.id,
        title: data.title,
        videoUrl: data.video_url,
        thumbnailUrl: data.thumbnail_url,
        viewCount: data.view_count,
        publishedAt: data.published_at,
        description: data.description,
        channel: {
          name: data.channel.name,
          profileImageUrl: data.channel.profile_image_url,
          subscriberCount: data.channel.subscriber_count,
        },
      }
      this.setState({videoDetails: updatedData})
    }
  }

  isDisliked = () => {
    const {liked, disliked} = this.state
    if (liked) {
      this.setState({liked: false})
    }
    if (disliked) {
      this.setState({disliked: false})
    } else {
      this.setState({disliked: true})
    }
  }

  isLiked = () => {
    const {liked, disliked} = this.state
    if (disliked) {
      this.setState({disliked: false})
    }
    if (liked) {
      this.setState({liked: false})
    } else {
      this.setState({liked: true})
    }
  }

  isSaved = async () => {
    const {saved} = this.state
    if (saved) {
      await this.setState({saved: false})
    } else {
      await this.setState({saved: true})
    }
  }

  render() {
    const {videoDetails, liked, disliked, saved} = this.state
    const {
      videoUrl,
      title,
      description,
      viewCount,
      publishedAt,
      channel,
    } = videoDetails
    const {subscriberCount, name, profileImageUrl} = channel

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode, addSavedVideos} = value
          const bgColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkMode ? '#fff' : '#000'
          const onSave = () => {
            this.isSaved()
            addSavedVideos(videoDetails)
          }
          return (
            <>
              <Header />
              <VideoItemDetailsPage>
                <FilterGroup />
                <VideoItemDetailsContainer bgColor={bgColor}>
                  <ReactPlayer url={videoUrl} controls />
                  <VideoItemTitle color={textColor}>{title}</VideoItemTitle>
                  <ViewsCountAndButtonsContainer>
                    <Content>
                      {viewCount} views . {publishedAt}
                    </Content>
                    <ButtonsContainer>
                      <Button
                        onClick={this.isLiked}
                        color={liked ? '#2563eb' : '#64748b'}
                      >
                        <AiOutlineLike fontSize="20px" />
                        Like
                      </Button>
                      <Button
                        onClick={this.isDisliked}
                        color={disliked ? '#2563eb' : '#64748b'}
                      >
                        <AiOutlineDislike fontSize="20px" />
                        DisLike
                      </Button>
                      <Button
                        onClick={onSave}
                        color={saved ? '#2563eb' : '#64748b'}
                      >
                        <MdPlaylistAdd fontSize="20px" />
                        {saved ? 'Saved' : 'Save'}
                      </Button>
                    </ButtonsContainer>
                  </ViewsCountAndButtonsContainer>
                  <hr />
                  <VideoDetailsContainer>
                    <ProfileLogo src={profileImageUrl} alt="profile logo" />
                    <DetailsContainer>
                      <VideoItemName color={textColor}>{name}</VideoItemName>
                      <Content>{subscriberCount}</Content>
                      <Description color={textColor}>{description}</Description>
                    </DetailsContainer>
                  </VideoDetailsContainer>
                </VideoItemDetailsContainer>
              </VideoItemDetailsPage>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
