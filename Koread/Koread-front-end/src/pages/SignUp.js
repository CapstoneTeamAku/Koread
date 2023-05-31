import React, { useState } from 'react';
import '../styles/SignUp.css';

const SignUp = () => {
  const [name, setName] = useState(''); 
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleBirthdate = (event) => {
    const input = event.target.value;
    const sanitizedInput = input.replace(/\D/g, '').slice(0, 6); // 숫자 이외의 문자 제거 및 6자리로 제한
    setBirthdate(sanitizedInput);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.currentTarget.value);
}

  const handleNickname = (event) => {
    setNickname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    

    if(password !== ConfirmPassword){
      return alert('비밀번호가 일치하지 않습니다.')
    }


    //서버로 데이터를 보내는 파트
    const data = {
      name: name,
      birthdate: birthdate,
      gender: gender,
      email: email,
      password: password,
      nickname: nickname
    };
  //'url'은 서버주소
    fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {

        
      if (response.ok) {
        alert('회원가입이 완료되었습니다!');
      } else {
        throw new Error('회원가입에 실패했습니다.');
      }
    })
    .catch(error => alert(error.message));
  };



  return (
    <div className="container">
      {/*<div className="logo">*/}
        {/* 로고 이미지 */}
        {/*<img src="../koreadlogo.png" alt="site logo" />*/}
      {/*</div>*/}
      <form className="signform" onSubmit={handleSubmit}>
      <label htmlFor="email-input">이메일</label>
        <input id="email-input" type="email" value={email} onChange={handleEmail} />
        
        <label htmlFor="password-input">비밀번호</label>
        <input id="password-input" type="password" value={password} onChange={handlePassword} />
        
        <label htmlFor="confirm-password-input">비밀번호확인</label>
        <input id="password-input" type="password" value={ConfirmPassword} onChange={handleConfirmPassword} />


        <label htmlFor="name-input">이름</label>
        <input id="name-input" type="text" value={name} onChange={handleName} />

        <label htmlFor="birthdate-input">생년월일(6자리)</label>
        <input id="birthdate-input" type="text" value={birthdate} onChange={handleBirthdate} />
        
        <label htmlFor="gender-input">성별</label>
          <div className="gender-input">

              <a className='gender-male'>남</a>
              <input type="checkbox" className="maleCheckbox" value="male" checked={gender === 'male'} onChange={handleGender} />

              <a className='gender-female'>여</a>
              <input type="checkbox" className="femaleCheckbox" value="female" checked={gender === 'female'} onChange={handleGender} />
             

          </div>
        <label htmlFor="nickname-input">닉네임</label>
        <input id="nickname-input" type="text" value={nickname} onChange={handleNickname} />
        
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;