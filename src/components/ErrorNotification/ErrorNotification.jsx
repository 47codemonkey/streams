import React from 'react';

const stylesForError = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function ErrorNotification({ text }) {
  return <h1 style={stylesForError}>Ooops, something went wrong: {text}</h1>;
}
