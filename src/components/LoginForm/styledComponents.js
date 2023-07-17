import styled from 'styled-components'

export const LoginAppContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`
export const LoginFormContainer = styled.div`
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
  box-shadow: 2px #cccccc;
`
export const LoginWebsiteLogo = styled.img`
  height: 35px;
  width: 150px;
  align-self: center;
`
export const FormContainer = styled.form`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

export const Label = styled.label`
  color: ${props => props.color};
  font-size: 10px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 3px;
`

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  width: 100%;
  height: 26px;
  color: #64748b;
  font-size: 9px;
  padding: 4px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 5px;
`

export const Checkbox = styled.input`
  height: 12px;
  width: 12px;
  border: none;
  margin-right: 4px;
`

export const CheckboxLabel = styled.label`
  color: ${props => props.color};
  font-size: 11px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  padding: 6px;
  color: #ffffff;
  font-size: 12px;
`
export const ErrorMsg = styled.p`
  color: ${props => props.color};
  font-size: 10px;
  font-weight: 500;
  font-family: 'Roboto';
`
