import React from 'react';
import Avatar from './Avatar';

export default function Profile({ Children }) {
  return (
    <div>
      <Avatar img='' />
      <div>아이디</div>
      <div>{Children}</div>
    </div>
  );
}
