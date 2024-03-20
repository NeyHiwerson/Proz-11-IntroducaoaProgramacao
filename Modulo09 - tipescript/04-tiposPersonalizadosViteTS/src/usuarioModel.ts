export type UsuarioType = {
    nome: string;
    dt_nascimento: Date;
    email: string;
    telefone: string;
    endereco: {
        rua: string;
        numero: number;
        bairro: string;
        cidade: string;
        estado: string;
    }
}
