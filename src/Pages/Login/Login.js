import React, { Component } from 'react';
import LoginBtn from './LoginBtn';
import LoginInput from './LoginInput';
import LoginTextPage from './LoginTextPage';
import './Login.scss';

export default class Login extends Component {
  state = {
    idValue: '',
    passwordValue: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state.idValue);
  };

  goToLogin = e => {
    // const { idValue, passwordValue } = this.state;
    this.props.history.push('/');

    // fetch('http://10.58.5.115:8000/user/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: idValue,
    //     password: passwordValue,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     if (response.token) {
    //       localStorage.setItem('token', response.token);
    //       this.props.history.push('/');
    //     }
    //   });
  };
  goToSignUp = e => {
    this.props.history.push('/signup');
  };

  render() {
    // const { idValue, passwordValue } = this.state;

    return (
      <section className="loginMainSection">
        <LoginTextPage />
        <article className="loginMainArticle">
          <div className="loginForm">
            <LoginInput
              name="idValue"
              placeholder="이메일"
              handleChange={this.handleChange}
              subtext="다른 로그인 옵션 :"
              linkText="일회용 코드로 로그인"
              warnText="이메일 또는 휴대폰 번호를 입력해주세요"
            />

            <LoginInput
              name="passwordValue"
              placeholder="비밀번호"
              type="password"
              handleChange={this.handleChange}
              linkText="비밀번호 찾기"
              warnText="비밀번호를 입력해주세요"
            />

            <LoginBtn
              placeholder="로그인"
              className="loginBtn"
              goToPage={this.goToLogin}
            />
          </div>

          <p className="loginComment">
            WEKEA 계정이 없으신가요? 지금 바로 만들어 보세요!
          </p>
          <LoginBtn
            placeholder="회원가입"
            className="loginBtnForSignup"
            goToPage={this.goToSignUp}
          />
        </article>
      </section>
    );
  }
}
