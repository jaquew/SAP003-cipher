# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Projeto "Encode Yourself"](#2-projeto-"encode-yourself")
* [3. Funcionamento](#3-funcionamento)
* [4. Considerações finais](#4-considerações-finais)
* [5. Checklist](#5-checklist)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Projeto "Encode Yourself"


## 3. Funcionamento 


## 4. Considerações finais



## 5. Checklist

### Parte Obrigatória

* [ ] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [ ] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [ ] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [ ] Usar VanillaJS.
* [ ] **Não** usar `this`.
* [ ] Implementar `cipher.encode`.
* [ ] Implementar `cipher.decode`.
* [ ] Passar o linter com a configuração definida.
* [ ] Passar as provas unitárias.
* [ ] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [ ] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [ ] Interface que permita escrever um texto para ser cifrado.
* [ ] Interface que mostre o resultado da cifra corretamente.
* [ ] Interface que permita escrever um texto para ser decifrado.
* [ ] Interface que mostre o resultado decifrado corretamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifrar/decifrar minúsculas.
* [ ] Cifrar/decifrar _outros_ caractéres (espações, pontuação, `ç`, `á`, ...).
* [ ] Permitir usar `offset` negativo.
