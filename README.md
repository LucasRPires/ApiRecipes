# ApiRecipe
Uma Api de integração á outros serviços como: Recipe Puppy e Giphy

## Requerimentos
Para executar o projeto, você precisará dessas bibliotecas:
```bash
Docker 19.^
Docker-compose 1.^
Node 12.^
```

## Instalação
Após clonar o projeto, no diretório raiz:
```bash
docker-compose up --build 
```

## Usabilidade
Crie um arquivo no diretório raiz do projeto com o nome *.env* seguindo o modelo do arquivo *.env.exemple*
```
NODE_ENV="dev"

PORT=3000

RECIPE_PUPPY_API='http://www.recipepuppy.com/api/?i='

GIPHY_API='https://api.giphy.com/v1/gifs/search'
GIPHY_API_KEY=''
```

A api irá executar na porta padrão do arquivo *.env, após executar o container, navegue até seu navegado em: 
```bash
localhos:[PORT]
```

Por padrão, o navegador irá lhe redirecionar para a interface de teste e documentação: Swagger:
![](/images/swagger_init.png)

Cique em Try it out e insira os ingredientes:
![](/images/swagger_parameters.png)

Formato de resposta da Api:
![](/images/swagger_response.png)

## Testes
Para executar os testes:
```
npm test
```

## Tecnologias e Conceitos Utilizados
O projeto segue alguns padrões de projetos e conceitos de programação orientada á objetos. São eles:
- [x] SOLID
- [x] Dependency Injection
- [x] Unit Tests
- [x] Docker
- [x] Clean Code
- [x] Lint
- [x] Environment Variables
