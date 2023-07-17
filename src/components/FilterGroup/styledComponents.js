import styled from 'styled-components'

export const FilterGroupContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  min-height: 100vh;
  width: 20%;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const RouteName = styled.p`
  color: ${props => props.color};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-left: 13px;
  text-decoration: none;
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContactUs = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: bold;
  font-family: 'Roboto';
`
export const SocialMediaLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SocialMediaLogo = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 10px;
`
