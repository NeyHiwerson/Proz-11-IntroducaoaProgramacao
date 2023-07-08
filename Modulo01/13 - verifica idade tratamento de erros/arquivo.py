#Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.
#A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).
#Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.


inicio = True 
preechaAno = True
while inicio:
    nome = input("Digite o seu nome completo: ")
    while preenchaAno:
        try:
            anoDeNascimento = int(input("Digite o ano de nascimento:")) 
            if anoDeNascimento > 1922 and anoDeNascimento < 2021:
                anoAtual = 2023
                idadeUsuario = anoAtual - anoDeNascimento
                print(nome," tem ",idadeUsuario," anos")
             else:
                 print("Erro, ano invalido!!")
         except:
             print("Caracteres invalidos, digite o ano entre1923 e 2020")
