---
aliases: 
tags:
  - React
---
---
Creation : 26th September 2024
Last Modified : 26th September 2024
___

componente que associa uma rota (path) para um componente

necessário instalar o pacote : npm install react-router-dom

Note que na linha 1 do arquivo routes.jsx importamos três
componentes do pacote do react-router-dom: BrowserRouter, Rotes e
Route.
Esses três componentes provêm e gerenciam as rotas dentro da nossa
aplicação. Vamos aprender a função de cada um.
● BrowserRouter: é um componente responsável por informar a
nossa aplicação que teremos um roteamento de componentes, por
conta disso ele ficará em volta dos componentes <Routes>.
● Routes: componente renderizado em qualquer lugar no aplicativo,
<Routes> corresponderá a um conjunto de rotas filhas do local
atual .
● Route: componente que associa a rota ao componente. Nele
temos três parâmetros: element, path e exact.
○ O parâmetro element recebe o componente que precisa
ser exibido ao acessar a rota.
○ O parâmetro path é o caminho na URL que precisa ser
acessado para mostrar o componente, definido pelo
parâmetro component.
○ O parâmetro exact determina qual o componente vai ser
exibido apenas se a rota for igual ao definido entre aspas,
no nosso caso se for exatamente "/".


com isso nossos componentes serão exibidos na url de acordo o acesso do usuario


