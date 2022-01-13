import React, {useState, useEffect} from 'react';

export default function EffectHook(){

  const [nome, setNome] = useState(undefined);

  useEffect(() => {
    if(nome === undefined){
      setNome(sessionStorage.getItem('nome') || "");
    } 
    else{
      sessionStorage.setItem('nome', nome);
    }
  }, [nome]);

  return (
    <>
      Nome: <input type='text' onChange={(evt) => setNome(evt.target.value)} value={nome} />
      <br />
      Olá {nome}
    </>
  );
}