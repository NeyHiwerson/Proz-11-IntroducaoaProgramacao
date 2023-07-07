def calculadora(valor1, valor2, operacao):
    if operacao == "+": return valor1 + valor2
    elif operacao == "-": return valor1 - valor2
    elif operacao == "*": return valor1 * valor2
    elif operacao == "/": return valor1 / valor2
    else: return "valores incorretos"

print(calculadora(10, 2, "+"))
