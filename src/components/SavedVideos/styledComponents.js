import styled from 'styled-components'

export const SavedVideosPage = styled.div`
  display: flex;
  flex-direction: row;
`
export const SavedVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const LogoAndHeadingContainer = styled.div`
  height: 80px;
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #909090;
  padding: 20px;
`
export const LogoContainer = styled.div`
  background-color: #94a3b8;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  margin-right: 10px;
`

export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
  font-weight: bold;
`

export const SavedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`

export const ThumbnailUrl = styled.img`
  height: 150px;
  width: 200px;
  margin-right: 10px;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-weight: bold;
`
export const Content = styled.p`
  color: #64748b;
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${props => props.bgColor};
`

export const NoSavedVideosImage = styled.img`
  height: 300px;
  width: 90%;
`
