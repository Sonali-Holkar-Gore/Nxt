import styled from 'styled-components'

export const HomePageDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`

export const PopupAndSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BannerSectionContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 160px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`

export const BannerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const BannerSectionWebsiteLogo = styled.img`
  height: 25px;
  width: 90px;
`
export const BannerSectionDescription = styled.p`
  color: #313131;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const GetInNowButton = styled.button`
  color: #212121;
  border: 1px solid #212121;
  font-size: 10px;
  background-color: transparent;
  font-weight: 500;
  font-family: 'Roboto';
  padding: 6px;
  width: 80px;
`

export const BannerSectionCloseButton = styled.button`
  background-color: transparent;
  align-self: flex-start;
  border: none;
`

export const SearchAndVideoDetailsContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const SearchInputAndLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
`
export const SearchInput = styled.input`
  background-color: ${props => props.bgColor};
  padding: 6px;
  color: #909090;
  border: 1px solid #909090;
  font-size: 9px;
  border-radius: 3px;
  width: 250px;
`
export const SearchLogo = styled.button`
  background-color: #f1f1f1;
  padding: 6px;
  align-self: center;
  border: 1px solid #909090;
  border-radius: 3px;
`
export const FailureViewContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const FailureViewImage = styled.img`
  height: 330px;
  width: 90%;
`
export const FailureViewHeading = styled.h1`
  color: ${props => props.color};
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const FailureViewDescription = styled.p`
  color: #94a3b8;
  font-size: 13px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  padding: 6px;
  font-size: 9px;
  font-weight: bold;
  border: none;
  color: #fff;
`
export const LoaderViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 0px;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 20px;
  width: 310px;
  cursor: pointer;
`

export const ThumbnailUrl = styled.img`
  height: 200px;
  width: 300px;
  margin-bottom: 6px;
`

export const ProfileAndDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ProfileLogo = styled.img`
  height: 30px;
  width: 30px;
  margin-top: 9px;
`
export const TitleViewsPublishedDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
`
export const VideoTitle = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  text-decoration: none;
  margin-bottom: 0px;
`

export const VideoName = styled.p`
  color: #475569;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  text-decoration: none;
  margin-bottom: 0px;
  margin-top: 4px;
`

export const ViewsAndPublishDate = styled.p`
  color: #475569;
  font-size: 11px;
  font-weight: 500;
  font-family: 'Roboto';
  text-decoration: none;
  margin-bottom: 0px;
  margin-top: 4px;
`
