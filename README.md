# [BACKEND] Estudo sobre streams

## O que são Streams?

- O conceito de streaming envolve a quebra da informação (seja essa um arquivo, uma stream ou qualquer coisa do tipo) e o envio da informação por meio da rede
    - Um exemplo sobre isso pode ser visto por meio de imagens sendo carregadas após o carregamento da página (quando a imagem fica meio que incompleta e vai se formando)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3aa72302-1796-4445-910c-77ca78d1adcb/Untitled.png)

- Agora, ao invés de ter que baixar o dado inteiro, podemos processá-lo a medida que ele está sendo enviado para o programa
- O uso básico de Streams vem de fazer respostas disponíveis como Streams (por exemplo o Body de um fetch request disponível como uma [ReadableStream()](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream))

## Como podemos usar Streams?

- Usando NodeJS podemos usar as libs:
    - import {ReadableStream} from ‘node:stream/web’
    - import {ReadableStream} from ‘stream/web’
    - import {Readable} from ‘stream’
- 