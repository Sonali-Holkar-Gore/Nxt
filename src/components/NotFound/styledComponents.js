import styled from 'styled-components'

export const NotFoundPage = styled.div`
  display: flex;
  flex-direction: row;
`
export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const NotFoundImage = styled.img`
  height: 400px;
  width: 90%;
`

export const NotFoundHeading = styled.h1`
  color: ${props => props.color};
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const NotFoundDescription = styled.p`
  color: #94a3b8;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
`
