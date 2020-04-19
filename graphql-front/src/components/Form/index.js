import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const ADD_COMMENT = gql`
  mutation ($name: String!, $content: String!)  {
    saveComment (
      input: {
        name: $name,
        content: $content
      }
    ){
      name
      content
    }
  }
`

export default function Form({ load }) {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const [saveComment] = useMutation(ADD_COMMENT)

  function submit(e) {
    e.preventDefault()
    saveComment({variables: {name: name, content: content}})
    load()
  }
  
  return (
    <form onSubmit={e => submit(e)}>
      <input
        type="text"
        placeholder="Digite o seu nome"
        value={name}
        onChange={e => setName(e.target.value)} 
      />
      <input
        type="text"
        placeholder="Digite o seu comentário"
        value={content}
        onChange={e => setContent(e.target.value)}  
      />
      <button type="submit">Comentar</button>
    </form>
  )
}