import React, { useState, useEffect } from 'react';

function InputPersonalizado({ texto, tipo, id, onChange }) {
  return (
    <>
      <label htmlFor={id}>{texto}</label>
      <input type={tipo} name={id} id={id} placeholder={`Digite seu ${id}`} onChange={onChange} />
      <br />
    </>
  );
}

function geraNumeroAleatorio() {
  return Math.floor(Math.random() * (10 - 1 + 1) + 1);
}

function GeraLabelParaSoma({ setSoma }) {
  const [N1, setN1] = useState(geraNumeroAleatorio());
  const [N2, setN2] = useState(geraNumeroAleatorio());

  useEffect(() => {
    setSoma(N1 + N2);
  }, [N1, N2, setSoma]);

  return (
    <>
      <br />
      <label htmlFor="resultado">Quanto é {N1} + {N2}?</label>
      <br />
    </>
  );
}

function GeraButtonEnviar({ nome, email, idade, resultado, soma }) {
  const handleClick = () => {
    if (nome === "" || email === "" || idade === "" || resultado === "" || resultado <= 0) {
      alert("Preencha todos os campos!");
    } else {
      verificaResultado(nome, email, idade, resultado, soma);
    }
  };

  const verificaResultado = (nome, email, idade, resultado, soma) => {
    if (parseInt(resultado) === soma) {
      alert(`Parabéns ${nome} de ${idade} anos.
      Você acertou a soma e enviamos
      um email de confirmação para
      ${email}`);
    } else {
      alert("Você errou!");
    }
  };

  return (
    <>
      <br />
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </>
  );
}

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [resultado, setResultado] = useState("");
  const [soma, setSoma] = useState(0);

  return (
    <>
      <h1>Componentes</h1>
      <InputPersonalizado texto="Nome: " tipo="text" id="nome" onChange={(e) => setNome(e.target.value)} />
      <InputPersonalizado texto="Email: " tipo="text" id="email" onChange={(e) => setEmail(e.target.value)} />
      <InputPersonalizado texto="Idade: " tipo="number" id="idade" onChange={(e) => setIdade(e.target.value)} />
      <GeraLabelParaSoma setSoma={setSoma} />
      <InputPersonalizado texto="Resultado: " tipo="number" id="resultado" onChange={(e) => setResultado(e.target.value)} />
      <GeraButtonEnviar nome={nome} email={email} idade={idade} resultado={resultado} soma={soma} />
    </>
  );
}

export default App;

