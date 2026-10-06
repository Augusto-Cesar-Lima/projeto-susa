# Especificação do Projeto

## Perfil de Usuário

<table>
<tbody>
<tr>
<th colspan="2">Perfil 1: Médico </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Profissional da saúde com formação superior completa em Medicina, devidamente registrado no Conselho Regional de Medicina (CRM), que atua em unidades hospitalares ou de pronto-atendimento da rede de saúde de Belo Horizonte. Este profissional pode desempenhar suas atividades em diferentes contextos: plantões em emergências, atendimentos ambulatoriais, enfermarias ou corpo clínico hospitalar. De modo geral, possui familiaridade com sistemas informatizados de saúde (prontuários eletrônicos, sistemas de gestão hospitalar) e valoriza interfaces objetivas, que exijam o mínimo de cliques e ofereçam respostas rápidas, considerando a dinâmica e a pressão por tempo típicas do ambiente hospitalar.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Realizar login de forma segura e ágil no sistema;<br>2. Buscar pacientes por CPF ou Cartão SUS de maneira eficiente;<br>3. Visualizar o histórico completo e cronológico dos sumários de alta;<br>4. Cadastrar novos sumários de alta por meio de um formulário intuitivo;<br>5. Consultar o log de acessos com data e hora |


</td>
</tr>
</tbody>
</table>

## Requisitos do Projeto

|  **ID**  | **Descrição do Requisito** | **Eu como...** | **Quero/Desejo/Preciso** | **Para** | **Responsável** | **Prioridade** |
|--------|---------------------------|----------------|--------------------------|----------|-----------------|----------------|
| RF-01 | Permitir cadastro de usuário | Médico | realizar cadastro na plataforma SUSA | ter acesso ao sistema de sumários de paciente | Augusto | Alta |
| RF-02 | Permitir usuário fazer login e logout | Médico | entrar e sair da plataforma | iniciar e finalizar atendimento de paciente | Augusto | Alta |
| RF-03 | Permitir usuário recuperar a senha | Médico | recuperar senha de acesso | recuperar acesso à plataforma | Bruno | Alta |
| RF-04 | Permitir que o usuário faça busca por paciente utilizando CPF ou CNS | Médico | acessar dados de paciente de forma rápida| agilizar o atendimento | Bruno | Alta |
| RF-05 | Permitir gerenciar sumários de alta | Médico | cadastrar ou editar sumários de alta | inserir e alterar documentos na plataforma durante o período de tratamento | Gustavo | Média |
| RF-06 | Permitir adicionar notas/observações a um sumário de alta | Médico | realizar anotações de acompanhamento do paciente a | reunir estes dados em um único espaço antes de submetê-los ao sumário | Gustavo | Baixa |
| RF-07 | Permitir paginação entre os sumários de alta | Médico | acessar sumários em ordem cronológica | facilitar a experiência de navegação, sem poluição visual | Isabela | Baixa |
| RF-08 | Permitir usuário incluir arquivo como anexo | Médico | realizar upload de um sumário de alta antigo | reunir todos os sumários do paciente em um único espaço | Isabela | Média |
| RF-09 | Permitir usuário exportar e imprimir sumário de alta | Médico | ter acesso ao sumário enquanto documento físico | entregá-lo ao paciente | Weslley | Média |
| RF-10 | Permitir solicitação de contato com suporte técnico | Médico | solucionar problemas de acesso, usabilidade, etc. | manter um uso estável da plataforma | Weslley | Média |

## Requisitos Não Funcionais

| **ID** | **Descrição** | **Prioridade** |
|--------|---------------|----------------|
| RNF-01 | O sistema deve operar com disponibilidade mínima de 99,9% | Alta |
| RNF-02 | O sistema deve ser desenvolvido em HTML5, CSS3 e JavaScript puro, sem dependência de frameworks ou bibliotecas externas. | Alta |
| RNF-03 | O sistema deve possuir compatibilidade com diferentes navegadores web: chrome, firefox e edge. | Alta |
| RNF-04 | O sistema deve possuir adaptabilidade de interface para funcionar em mobile e em desktop web. | Média |
| RNF-05 | Os dados devem ser persistidos localmente utilizando localStorage para simular o banco de dados. | Média |