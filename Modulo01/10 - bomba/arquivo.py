import time

tempoEmSegundos = int(input("Digite o tempo em segundos do Timer da Bomba: "))
for i in range(tempoEmSegundos, 0, -1):
    print(i)
    time.sleep(1)

print("Boom!!!")


