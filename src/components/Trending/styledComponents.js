import styled from 'styled-components'

export const TrendingPage = styled.div`
  display: flex;
  flex-direction: row;
`
export const TrendingContainer = styled.div`
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

export const TrendingVideoContainer = styled.div`
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
  padding: 5px;
  font-size: 9px;
  font-weight: bold;
  color: #fff;
`
export const LoaderViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
