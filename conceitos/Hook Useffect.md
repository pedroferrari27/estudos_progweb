---
aliases: 
tags:
  - React
---
---
Creation : 20th September 2024
Last Modified : 20th September 2024
___


hook useEfect -> permite executar efeitos colaterais em seus componentes

side efects são como: buscar dados de uma api, subrescrever a eventos (como listeners de eventos ou sockets), MANIPULAR DIRETAMENTE O DOM , configurar temporizadors



recebe 2 argumentos

usaEffect(effect, dependencies);

efect-> função com o codigo a ser executado

dependencies -> um array que determina quando o efeito será executado e quantas vezes

use effect pode ser usado para fazer cleanup, ou chamar funções de limpeza

![[Pasted image 20240920214421.png]]

![[Pasted image 20240920214440.png]]

usefect pode ser usado para substituir varios metodos de ciclo de vida de classes: