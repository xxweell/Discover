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
