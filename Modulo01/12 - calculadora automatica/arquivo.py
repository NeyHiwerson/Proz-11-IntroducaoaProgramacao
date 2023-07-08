def calculadora(valor1, valor2, operacao):
    if operacao == "1": return valor1 + valor2
    elif operacao == "2": return valor1 - valor2
    elif operacao == "3": return valor1 * valor2
    elif operacao == "4": return valor1 / valor2

while True:
    print("1: Soma")
    print("2: Subtração")
    print("3: Multiplicação")
    print("4: Divisão")
    print("0: Sair")

    operacao = input("Digite o tipo de operação desejada: ")
    if operacao == "0": BREAK
    if operacao != "1" and operacao != "2" and operacao != "3" and operacao != "4":
      print("Essa opção não existe")
      continue

    valor1 = int(input("Digite o primeiro número: "))
    valor2 = int(input("Digite o segundo número: "))
    resultado = calculadora(valor1, valor2, operacao)
    print(resultado)
