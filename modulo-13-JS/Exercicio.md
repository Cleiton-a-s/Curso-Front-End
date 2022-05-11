# Exercícios:
## 1. Resolva as operações:
<p>● 10 + 15 = 25</p>
<p>● “10” + 2 = 102</p>
<p>● “10” * 2 = 20</p>
<p>● “10” / 3 = 3,333</p>
<p>● “10” % 3 = 1</p>
<p>● 10 + true = 11</p>
<p>● 10 == ”10” = true</p>
<p>● 10 === “10” = false</p>
<p>● 10 < 11 = true</p>
<p>● 10 > 12 = false</p>
<p>● 10 <= 10.1 = true</p>
<p>● 10 > 9.99 = true</p>
<p>● 10 != “dez” = true</p>
<p>● 10 + true = 11</p>
<p>● “dez” + true = deztrue</p>
<p>● 10 + false = 10</p>
<p>● 10 * false = 0</p>
<p>● true + true = 2</p>
<p>● 10++ = 11</p>
<p>● 10-- = 9</p>
<p>● 1 & 1 = true</p>
<p>● 1 & 0 = false</p>
<p>● 0 & 0 = false</p>
<p>● 1 & 0 = false</p>
<p>● 0 / 1 = 0 </p>
<p>● 5 + 5 == 10 = true</p>
<p>● “5” + ”5” == 10 = false</p>
<p>● “5” * 2 > 9 = true</p>
<p>● (10 + 10) * 2 = 40</p>
<p>● 10 + 10 * 2 = 30</p>
## 2. Responda as perguntas de acordo com as variáveis.
<p>var branco = “preto”;</p>
<p>var preto = “cinza”;</p>
<p>var cinza = “branco”;</p>
<p>var carro = “preto”;</p>
<p>var valor = 30000;</p>
<p>var prestacao = 750;</p>

### a) branco == “branco”  
Resp: false

### b) branco == cinza     
Resp: false

### c) carro === branco    
Resp: true

### d) var cavalo = carro == “preto” ? “cinza” : “marron”;  
Resp: "cinza"

### e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação. 

<p>var vcarro = 30000</p>
<p>var entrada = 3000</p>
<p>var parc = 750</p>

var p = (vcarro - entrada) / parc

console.log(`O carro custa ${vcarro}. Com a entrada de #{entrada}, o carro custará mais ${p} parcelas de ${parc}`)

### f) Somando as variáveis de cores é formada uma string de quantos caracteres?

<p>var branco = 'preto';</p>
<p>var preto = 'cinza';</p>
<p>var cinza = 'branco';</p>

var soma = branco + preto + cinza

console.log(soma.length)

*Resposta: 16 caracteres*