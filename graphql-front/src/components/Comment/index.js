import React from 'react';

export default function Comment({ name, content }) {
  return (
    <div className="comment">
      <p className="comment-name">Nome: {name}</p>
      <p>Descrição: {content}</p>
    </div>
  )
}