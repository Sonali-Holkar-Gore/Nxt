import styled from 'styled-components'

export const GamingPage = styled.div`
  display: flex;
  flex-direction: row;
`
export const GamingContainer = styled.div`
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

export const GamingVideoContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`

export const VideoDetailsContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const ThumbnailUrl = styled.img`
  height: 200px;
  width: 150px;
  margin-right: 10px;
`

export const Title = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-weight: bold;
`
export const Content = styled.p`
  color: #64748b;
  font-size: 10px;
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
