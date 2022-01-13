import React, {useState} from 'react';

export default function StateHook(){

  const [nome, setNome] = useState('');

  return (
    <>
      Nome: <input type='text' onChange={(evt) => setNome(evt.target.value)} value={nome} />
      <br />
      Olá {nome}
    </>
  );
}