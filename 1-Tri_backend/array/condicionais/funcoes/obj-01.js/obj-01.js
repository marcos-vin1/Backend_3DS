//objetos são estruturas do chave-valor
// podemos atribuir de forma, assim como em arrays
// objetos tem indices nomeados
// podemos usar (for of) ou (for in)
 const carros = {
  nome: "camaro",
  modelo: "xpto cam",
cores: ["amarelo", "preto"],

 }
 carros.modelo = "fusca"
 carros["nome"] = "chev"
 console.log(carros.modelo)
 console.log(carros.nome)

 // for(carro in carros) {console.log(carro)}