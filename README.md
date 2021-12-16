# Discover

Aulas e Atividades realizadas durante o curso Discover - Rocketseat

CSS - Anotações:
Capítulo - Nem só de classes ou Ids

##Combinando Seletores

# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

# Descendant combinator

- Identificado por um espaço entre os seletores.
- Busca um elemento dentro do outro
  -- Exemplo:

```css
body article h2 {
  property: value;
}
```

# Child combinator

- Identificado pelo sinal `>` entre dois seletores
- Seleciona somente o elemento que é filho direto do pai
- Elementos depois do filho direto serão desconsiderados
  -- Exemplo:

```css
body > ul > li {
  property: value;
}
```

# Adjacent sibling combinator (Combinador irmão adjacente)

- Identificado pelo sinal `+` entre dois seletores
- Seleciona somente o elemento que é irmão direto na hierarquia do HTML

```css
h1 + p {
  property: value;
}
```

# General sibling combinator

- Identificado pelo sinal `~` entre dois seletores
- Seleciona todos os elementos irmãos

```css
h1 ~ p {
  property: value;
}
```

## Utilizando combinadores

```css
ul > li[class='red'] {
  property: value;
}
```

## Dica

- Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos
- Muitas vezes, o simples uso de classes torna o trabalho muito mais eficiente.

# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico
Exemplo: O primeiro elemento dentro de uma caixa; Elemento que está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com dois pontos seguido do nome da pseudo-classe
`:pseudo-class-name`

## Selecionando elementos com pseudo-classes

- :first-child
- nth-of-type()
- nth-child()

## Ações do usuário

- :hover
- :focus

## Atributos

- :disabled
- :required

## Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

## Pseudo-elements

Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

`::pseudo-element-name`

## Exemplos

- ::before
- ::after
- ::first-line

## Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

## -- Alinhando planetas

# Layouts e evolução

Layout tem a ver com a maneira que os elementos estão distribuídos na tela

## Normal flow

Ou flow Layout é maneira que os elementos `block` e `inline` ficam na página

```html
<p>Texto block com <strong>inline</strong> dentro</p>
```

## Tables

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que
os elementos internos como `td` e `tr` possam ser usados para montar uma tabela

```html
<table>
  <tr>
    <td>Hora</td>
    <td>20:00</td>
  </tr>
  <tr>
    <td>Hora</td>
    <td>22:00</td>
  </tr>
</table>
```

## Tabless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela.

```html
<div style="float: left">esquerda</div>
<div style="float: right">direita</div>
<div style="clear: both">normal flow</div>
```

## Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor:

- Alinamento
- Ordenação
- Tamanhos flexíveis

# Terminologia

- Flex Container
  - Flex item
- Nesting

```html
<div class="container">
  <div class="item">Item</div>
  <div class="item">Item</div>
  <div class="item">Item</div>
</div>
```

A partir do momento em que a div container se tornar flex, a div container é o flex container e as divs item são os flex items
Nesting é quando existe elemento dentro de outro elemento, conforme a estruta acima

-Axis (eixos)

- main (principal)
- start (inicio), end (fim)
- cross (cruzado)
- start (inicio), end (fim)

- Flex sizing
- flexível
- altera width/height dos itens para preenchimento dos espaços do flex container

# Propriedades do Flex Container

- Direção dos itens
- Multi linas
- Alinhamento
  - Principal
  - Cruzado
- Espaços entre os itens

# Direção dos itens

- Flex possui uma dimensão (horizontal ou vertical)
- Podemos mudar a direção com `flex-direction`
- valores: (row | row-reverse | column | column-reverse)

# flex-wrap

- Podemos usar multi linhas
- Cada nova linha, um novo flex container

# flex-flow

- shorthand (forma curta de escrever)
- flex-direction || flex-wrap

# justfy-content

- Alinamento dos elementos dentro do container
- Distribuição dos elementos

## valores

- flex-start (padrão)
- flex-end
- center
- space-around
- space-between
- space-evenly

# align-items

- Alinamento dos elementos no eixo cruzado

## valores

- stretch
- flex-start
- flex-end
- center

# gap

- Espaços entre os elementos

# valores

Unidades de medida
fixas: px, pt
flexíveis: %, em, rem

# Propriedades dos itens

- flex-basis
- flex-grow
- flex-shrink
- flex
- order

# flex-grow

- É o crescimento do item dentro do container em relação aos espaços vazios

# flex

- shorthand
- flex-grow flex-shrink flex-basis
- podem ter 1, 2, ou 3 valores

## Pilotando com a DOM

# DOM - Document Object Model

- É o HTML convertido para um Objeto JavaScript
- API que representa a interface com o HTML
- Estrutura de dados do tipo árvore, criada pelo browser
- Propriedades e métodos

# Pra que?

- Javascript usa a DOM para se conectar ao HTML
- Manipular o HTML com Javascript
- Você só programa pra Web porque existe a DOM

---

## Terminal - Sintaxe

# Command

ls -lh /usr/bin

- programa que você está rodando
- Obrigatório

# Option(s)

- Mudar o comportamento
- Explicar o comando como deve funcionar
- geralmente começa com um traço
- geralmente somente uma letra
- a maioria dos comandos oferecem muitas opções

# Arguments

- Onde o comando irá operar?
- Caminho do arquivo ou diretórios

# Dicas e truques - Terminal Hyper

- Atalhos
  - setinhas
    - up - down (comandos anteriores e próximos)
  - Ctrl
    - setinhas(pula palavras)
    - A (inicio da linha)
    - E (final da linha)
    - U (limpa a linha)
    - K (remove do cursor até o final da linha)
    - L (clear)
