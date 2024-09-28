---
aliases: 
tags:
  - React
---
---
Creation : 20th September 2024
Last Modified : 20th September 2024
___


Hook useState -> armazena o estado do seu componente (estado se refere a propiedades que precisam ser rastreados)

retorna 2 valores:
1. o valor atual do estado
2. uma função para alterar o estado


import React,{ useState } from 'react';


const [count, setCount] = useState(0);
