---
aliases: 
tags:
  - React
---
---
Creation : 20th September 2024
Last Modified : 20th September 2024
___

permite memorizar o resultado de uma função cara(custosa computacionalmente) e só recalcular esse valor quando as dependências mudarem

ex: reindexar paginas

![Pasted image 20240920215105](../Images/Pasted%20image%2020240920215105.png)

![Pasted image 20240920215344](../Images/Pasted%20image%2020240920215344.png)


usememo NÃO memoriza componentes  (react.memo faz isso)

não previne todas as renderizações