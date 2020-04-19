import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks' 
import { gql } from 'apollo-boost'
import './App.css';

import Comment from './components/Comment'
import Form from './components/Form'

const GET_COMMENTS = gql`
  query {
    comments {
      id
      name
      content
    }
  }
`;

export default function App() {
  const [isLoading, setLoading] = useState(false)
  const { loading, error, data } = useQuery(GET_COMMENTS)


  if(error) return 'Erro'

  function load() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }

  return (
    <>
      <h1>GraphQL Comments</h1>
      <Form load={load} />
      {loading || isLoading ?  (
        <div className="loading">Carregando comentário...</div>
      ) : (
        <section className="comments">
          {data.comments.map(({ id, name, content }) => (
            <Comment key={id} name={name} content={content} />
          ))}
        </section>
      )}
    </>
  );
}