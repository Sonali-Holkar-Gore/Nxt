import styled from 'styled-components'

export const VideoItemDetailsPage = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 20px;
`

export const VideoItemTitle = styled.h1`
  color: ${props => props.color};
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const ViewsCountAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
  align-items: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Button = styled.button`
  margin-right: 12px;
  color: ${props => props.color};
  font-size: 13px;
  font-weight: 500;
`
export const Content = styled.p`
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const ProfileLogo = styled.img`
  height: 30px;
  width: 30px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const VideoItemName = styled.p`
  color: ${props => props.color};
  font-size: 13px;
  font-weight: 600;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-weight: 500;
`
