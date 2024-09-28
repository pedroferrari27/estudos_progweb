---
aliases: 
tags:
  - HTML
  - CSS
---
---
Creation : 30th August 2024
Last Modified : 30th August 2024 
___
design responsivo - uso do html e CSS para realizar redimensionamento, ocultar,encolher ou ampliar automaticamente uma pagina web, tornando-a mais bonita e responsiva

são um conjunto de boas praticas para fazer o conteúdo se adequar a situação da tela e a vários dispositivos.

design responsivo -> adapta a renderização da pagina

design adaptável -> cria varias versões da pagina para diferentes dispositivos

breakpoints -> define o "tamanho do corte", que seria o tamanho minimo e máximo para alternar entre designs

estrategia padrão é a mobile-first, onde fazemos o design da menor tela primeiro para então tentar escalar para tela final.

alem disso, temos o design paralelo, onde fazemos o design de ambas modalidades concorrentemente

![Pasted image 20240830213803](../Images/Pasted%20image%2020240830213803.png)



![Pasted image 20240830214015](../Images/Pasted%20image%2020240830214015.png)

grids fluidos -> tamanho alvo/contexto = tamanho relativo

atualmente utilizamos flexbox e displayflex para isso.

viewport -> area visível para nossos usuários.

por isso sempre utilizamos : <meta name="viewport" content="width=device-width, initial-scale=1.0">

regras viewport :

	1.não usar elementos de largura fixa
	2. não deixe que o conteudo dependa de uma largura  determinada de janela para ser renderizado
	3. use consultas de midia css para aplicar diferentes a telas pequenas e grandes

