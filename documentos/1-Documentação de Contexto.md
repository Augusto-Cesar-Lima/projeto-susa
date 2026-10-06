# Introdução 
O seguinte projeto, designado Sistema Unificado de Sumário de Alta (SUSA - BH), surge de uma necessidade concreta de solucionar problemas enfrentados por prestadores e usuários da área da saúde na região de Belo Horizonte, relacionados principalmente à fragmentação do acesso a históricos de pacientes. Idealizado como uma plataforma web voltada para a área hospitalar que atua como repositório centralizado de sumários de alta, o sistema permitiria que profissionais de diferentes unidades da rede cadastrada acessassem estes dados, promovendo agilidade no atendimento, continuidade do cuidado e segurança da informação através de controle de admissão.

Este acesso imediato a diagnósticos prévios, procedimentos realizados, alergias documentadas e medicamentos prescritos, independentemente da instituição onde foram gerados, reduziria ou eliminaria a necessidade de repetição de exames e recoleta de informações já disponíveis, com impacto direto na redução de custos operacionais e no uso de recursos. A disponibilidade destes dados reduziria também a ocorrência de eventos adversos evitáveis, resultado de interações medicamentosas e condições de risco elevado. 

O repositório funcionaria como uma camada adicional de segurança para o paciente, e a equipe de triagem poderia considerar os riscos com maior eficiência, reduzindo o tempo entre a admissão e o início do tratamento efetivo, além de assegurar a continuidade do cuidado mesmo em situações de emergência ou quando o paciente não tem condições de fornecer informações sobre seu próprio estado clínico.

# Problema
É comum que pacientes deem entrada em unidades hospitalares, especialmente em quadros agudos ou de emergência, sem portar o seu histórico médico prévio ou o sumário de alta de internações recentes. A falta de conhecimento sobre medicamentos prescritos, procedimentos realizados e diagnósticos anteriores gera:
Retrabalho médico: sem acesso ao histórico do paciente, a equipe assistencial é compelida a reiniciar o processo diagnóstico do zero, o que inclui: repetição de exames laboratoriais e de imagem já realizados recentemente em outras instituições, reconstrução da anamnese com base exclusivamente no relato do paciente ou de acompanhantes, sujeito a imprecisões e omissões (LACERDA; ALMEIDA, 2023), risco de prescrição de medicamentos contraindicados ou duplicados, especialmente em pacientes poli tratados (LACERDA; ALMEIDA, 2023; BRASIL; FIOCRUZ; ANVISA, 2014).


Atraso no tratamento: desperdício de insumos e tempo de profissionais de saúde em procedimentos que poderiam ser evitados (LACERDA; ALMEIDA, 2023), atraso na identificação de condições crônicas preexistentes que influenciam diretamente a conduta dos profissionais, dificuldade em distinguir agravamentos de condições já conhecidas de novos eventos clínicos, maior tempo de espera na triagem para estabilização do diagnóstico inicial, risco aumentado de eventos adversos decorrentes de condutas tomadas sem informação clínica completa (BRASIL; FIOCRUZ; ANVISA, 2014).

Prolongamento da internação: o aumento do tempo médio de permanência hospitalar por necessidade de investigação complementar traz consigo problemas como a ocupação prolongada de leitos de alta complexidade por questões que poderiam ser resolvidas com acesso a informações prévias. Consequências financeiras sobre o sistema de saúde público e privado tornam-se inevitáveis. (MORAES, M. C. et al, 2019)

# Objetivos
Objetivo Geral: Desenvolver um sistema web para o cadastro e consulta de sumários de alta e históricos de saúde, focado na rede hospitalar de Belo Horizonte, universalizando as condições de acesso a estes dados para todas as instituições registradas.

Objetivos Específicos: 
- Permitir aos médicos o acesso a sumários de alta recentes e anteriores
- Facilitar a identificação de fatores que podem interferir no tratamento em situações de urgência (alergias, interações medicamentosas etc.)
- Agilizar o tratamento, reduzindo o tempo de internação do paciente
- Baratear serviços sem perda de eficiência.

# Justificativa
A escolha deste problema se justifica pela relevância do tema no contexto da saúde pública e privada. A taxa de readmissão hospitalar em até 30 dias após a alta é considerada um importante indicador de qualidade assistencial pela Agência Nacional de Saúde Suplementar (ANS), refletindo a eficácia do atendimento inicial e o sucesso das estratégias de continuidade de cuidados (ANS, 2016). Readmissões frequentes podem sobrecarregar os recursos hospitalares, ocupando leitos que poderiam ser utilizados para novos casos, além de impactar negativamente a recuperação e o bem-estar do paciente (SOCIEDADE BRASILEIRA DE CARDIOLOGIA, 2024).

De acordo com o Conselho Federal de Medicina (CFM), o prontuário médico é documento legal que deve garantir a comunicação entre membros da equipe multiprofissional e a continuidade da assistência prestada ao indivíduo (CONSELHO FEDERAL DE MEDICINA, 2002). No entanto, a falta de integração entre unidades de saúde ainda é um desafio: embora 88% dos estabelecimentos de saúde brasileiros já utilizem sistemas eletrônicos de registro, muitos ainda não conseguem integrar os dados de forma ideal (COMITÊ GESTOR DA INTERNET NO BRASIL, 2023).

Conversas iniciais com profissionais da área (médicos e enfermeiros de unidades de pronto-atendimento em Belo Horizonte) reforçaram a demanda por uma ferramenta simples e acessível que centralize os sumários de alta. Durante essas entrevistas informais, foi relatado que, em média, 30% dos atendimentos de emergência são impactados pela falta de histórico médico do paciente, resultando em atrasos e retrabalho. Portanto, o desenvolvimento do SUSA não apenas atende a uma necessidade prática e imediata dos profissionais de saúde, mas também contribui para a melhoria da qualidade do atendimento e para a otimização dos recursos hospitalares.

# Público-alvo
O público-alvo do SUSA são médicos responsáveis pelos registros e acompanhamento dos sumários de alta dos pacientes.

Médicos vinculados a hospitais e unidades de saúde cadastrados no sistema SUSA. Esses profissionais possuem formação superior completa, estão familiarizados com o uso de sistemas informatizados (prontuários eletrônicos, sistemas de gestão hospitalar) e necessitam de uma ferramenta ágil e confiável para acessar históricos de pacientes. 
