---
aliases: 
tags:
  - React
---
---
Creation : 20th September 2024
Last Modified : 20th September 2024
___

memoriza uma função , evitando que ela seja recriada em cada renderização

utilizado para desempenho

util em componentes que passam funções como props para filhas.
usado funçoes como propriedades.

usada em funçoes usadas dentro de useffect e outros hooks, para evitar renderização desnecessária

useCallback memoriza funçoes, enquanto o React.memo memoriza componentes.