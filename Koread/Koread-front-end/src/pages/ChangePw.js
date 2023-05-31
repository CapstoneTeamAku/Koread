import React, { useState } from 'react';
import '../styles/ChangePw.css';

function ChangePw({ onClose }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === '') {
      alert('새 비밀번호를 입력해주세요.');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    // 비밀번호 변경 로직 추가 필요
    // 콘솔출력 예시로 대체테스트 하였음.
    console.log('새 비밀번호:', newPassword);
    alert('비밀번호가 변경되었습니다.');
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className='change-pw-container'>
    <a className='changepwtext'> 비밀번호 변경 </a>



      <h3>새 비밀번호</h3>
      <input
        type='password'
        name='newPassword'
        value={newPassword}
        onChange={handleChange}
      />

      <h3>새 비밀번호 확인</h3>
      <input
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        onChange={handleChange}
      />

      <button className='submit' onClick={handleSubmit}>확인</button>
      <button className='cancel' onClick={handleCancel}>취소</button>
    </div>
  );
}

export default ChangePw;