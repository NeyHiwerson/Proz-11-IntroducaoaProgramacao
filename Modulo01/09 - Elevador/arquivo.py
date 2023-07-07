for numero in range(20, -1, -1):
  if (numero !=13 and numero != 0):
    print(numero)
  elif numero == 0:
    print("T")

andar = 20
while (andar >= 0):
  if andar == 13:
    andar = andar - 1
  elif andar == 0:
    print("T")
    andar = andar - 1
  else:
    print(andar)
    andar = andar - 1


andar = 20

while True:
  if andar == 13:
    andar = andar - 1
  elif andar == 0:
    print("T")
    andar = andar - 1
  else:
    print(andar)
    andar = andar - 1

  if andar < 0:
    break
