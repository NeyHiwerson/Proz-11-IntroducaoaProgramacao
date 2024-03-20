import './style.css';
import { UsuarioType } from './usuarioModel.ts';

const user: UsuarioType = {
  nome: 'Ney Hiwerson', // Use ":" para atribuição de valores, não "="
  dt_nascimento: new Date(1986, 8, 13), // Use "new Date()" para criar uma data
  email: 'ney@email.com',
  telefone: '11 99999-9999',
  endereco: {
    rua: 'Rua dos Bobos',
    numero: 10,
    bairro: 'Bobos',
    cidade: 'Baoba',
    estado: 'SC',
  },
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <!-- Conteúdo do seu aplicativo aqui -->
    <h1>Ficha do Usuario ${user.nome}</h1>
    <p>Nascido em: ${user.dt_nascimento.toLocaleDateString()}</p>
    <p>Email: ${user.email}</p>
    <p>Telefone: ${user.telefone}</p>
    <p>Endereço: ${user.endereco.rua}, ${user.endereco.numero}, ${user.endereco.bairro},</p>
    <p>Cidade: ${user.endereco.cidade}, Estado: ${user.endereco.estado}</p>
  </div>
`;
