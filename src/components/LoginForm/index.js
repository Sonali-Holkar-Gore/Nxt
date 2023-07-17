import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  LoginAppContainer,
  LoginFormContainer,
  LoginWebsiteLogo,
  FormContainer,
  Label,
  InputContainer,
  Input,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onCheckCheckbox = event => {
    if (event.target.checked) {
      this.setState({showPassword: true})
    } else {
      this.setState({showPassword: false})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {password, username} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      showPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      ;<Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const loginAppBgColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
          const loginFormBgColor = isDarkMode ? '#000' : '#fff'
          const color = isDarkMode ? '#fff' : '#cbd5e1'
          const checkboxLabelColor = isDarkMode ? '#fff' : '#000'
          const errorMsgColor = isDarkMode ? '#ff0000' : '#ff0b37'
          const loginWebsiteLogo = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginAppContainer bgColor={loginAppBgColor}>
              <LoginFormContainer bgColor={loginFormBgColor}>
                <LoginWebsiteLogo src={loginWebsiteLogo} alt="website logo" />
                <FormContainer onSubmit={this.submitForm}>
                  <InputContainer>
                    <Label color={color} htmlFor="username">
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      placeholder="Username"
                      value={username}
                      id="username"
                      onChange={this.onChangeUsername}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="password" color={color}>
                      PASSWORD
                    </Label>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      id="password"
                      onChange={this.onChangePassword}
                    />
                  </InputContainer>
                  <CheckboxContainer>
                    <Checkbox
                      id="checkbox"
                      type="checkbox"
                      onClick={this.onCheckCheckbox}
                    />
                    <CheckboxLabel
                      color={checkboxLabelColor}
                      htmlFor="checkbox"
                    >
                      Show Password
                    </CheckboxLabel>
                  </CheckboxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError && (
                    <ErrorMsg color={errorMsgColor}>*{errorMsg}</ErrorMsg>
                  )}
                </FormContainer>
              </LoginFormContainer>
            </LoginAppContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
