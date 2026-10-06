# Sistema Unificado de Sumário de Alta - SUSA

`Análise e Desenvolvimento de Sistemas - PUC Minas`

`Desenvolvimento de aplicação web front-end`

`1º semestre/2026`

O objetivo geral deste projeto é desenvolver um sistema web para o cadastro e consulta de sumários de alta e históricos de saúde, focado na rede hospitalar de Belo Horizonte, universalizando as condições de acesso a estes dados para todas as instituições registradas.

## Integrantes

- Augusto César Queiroz de Lima
- Bruno Savelli Brandão Gomes
- Gustavo Gomes Evangelista
- Nathalia Isabela Gonzales Cruz
- Weslley Henrique Ribeiro Cavalcante

## Orientadora

- Viviâne de Almeida Tôrres

# Documentação

- [01-Documentação de Contexto](documentos/1-Documentação%20de%20Contexto.md)
- [02-Especificação do Projeto](documentos/2-Especificação%20do%20Projeto.md)
- [03-Metodologia](documentos/3-Metodologia.md)
- [04-Projeto de Interface](documentos/4-Projeto%20de%20Interface.md)
- [05-Template padrão do Site](documentos/5-Template%20padrão%20do%20site.md)
- [06-Programação de Funcionalidades](documentos/6-Programaçao%20de%20funcionalidades.md)
- [07-Referência Bibliográficas](documentos/7-Referência%20Bibliográficas.md)

# Hospedagem

A aplicação em HTML/CSS/JS é um projeto que pode ser utilizado tanto em servidores como em navegadores web. Clique <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2026-1-e1-proj-web-t03-susa/tree/main/codigo-fonte/login">aqui</a> para acessá-lo.

# Dados de Exemplo

Os dados iniciais de usuários e pacientes são carregados automaticamente no runtime da plataforma através do arquivo `codigo-fonte/assets/js/db-load.js`. Estes dados são armazenados no `localStorage` do navegador durante o carregamento da página, permitindo que o sistema funcione sem dependência de um servidor backend.

**Usuários pré-carregados:**
- Admin (admin@admin.com / admin123)
- Dr. João Silva (drjoao@susa.com / senha123)
- Dra. Maria Oliveira (dramaria@susa.com / senha456)
- Dr. Fizz Buzz (fizzbuzz@susa.com / 123123)

**Pacientes pré-carregados:**
- Ana (CPF: 987.659.876-54)
- Carlos (CPF: 555.443.332-22)
- Mariana (CPF: 321.098.765-43)
- Felipe (CPF: 112.233.445-56)
- Patrícia (CPF: 776.655.443-32)

# Orientações de Uso

- Para acessar o sistema, utilize as credenciais válidas no formulário de login.
- Após o login, você pode pesquisar pacientes pelo nome ou outros dados cadastrais na área de busca.
- A pesquisa retorna resultados rápidos para facilitar a localização do paciente desejado.
- Mesmo com acesso por credenciais, o sistema permite cadastrar novos pacientes a partir da página de cadastro.
- Ou seja, o login habilita o uso das funcionalidades e, mesmo assim, você ainda pode incluir novos registros de pacientes quando necessário.

# Código-Fonte

<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2026-1-e1-proj-web-t03-susa/tree/main/codigo-fonte"> Código Fonte</a></li>

# Apresentação

<li><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2026-1-e1-proj-web-t03-susa/tree/main/apresentacao"> Apresentação da solução</a></li>
