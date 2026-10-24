# Auditoria inicial — Gabarito Data Center
Data: 24/10/2026

## Escopo verificado
- `index.html`, `script.js` e `simulados/operacao-monitoramento/index.html` consultados na branch principal.
- Repositório de teste específico `gabarito-datacenter-opera-o-monitoramento-teste` identificado; demais 11 bancos ainda não auditados.

## Evidências
1. O catálogo contém **12 trilhas**, identificadas pelos códigos OPS, NOC, PWR, HVAC, BMS, NET, MNT, EHS, LOG, PMO, CXM e LDR.
2. A página comercial usa links da **Kiwify** em todas as trilhas, com preços anunciados de R$ 19,90 a R$ 49,90. Nenhum link deve ser trocado antes de verificar produto e entrega no novo checkout.
3. O número anunciado de questões premium é calculado por `modules.length * 20` no JavaScript. Esta regra comprova a **quantidade anunciada**, não a existência nem a qualidade do banco premium.
4. O teste gratuito OPS tem duas unidades de cinco perguntas codificadas diretamente no HTML. Possui alternativas embaralhadas, temporizador, correção, feedback, revisão de erros, sons externos e melhor pontuação salva no dispositivo.
5. O conteúdo das 10 perguntas OPS foi lido: cobre finalidade de data center, UPS, corredores térmicos, PUE, acesso físico, alarmes, passagem de turno, vazamento, mudança e comunicação de incidente.
6. **Falha pedagógica identificada:** nas dez perguntas originais OPS a resposta correta está marcada em `a:1` em 8 perguntas e em `a:0` em 2. O embaralhamento em execução mascara a distribuição visual, mas não corrige eventual artificialidade de elaboração.
7. **Falha de escopo:** o teste oferece explicação da resposta correta, mas não justifica individualmente por que cada alternativa errada está incorreta.
8. Histórico atual é local (localStorage), não acompanhamento identificado por aluno ou por competência.
9. Áudios carregados de terceiros requerem verificação de disponibilidade e licença.

## Decisões preservacionistas
- **Não alterar** a marca, layout, URLs ou preços nesta fase.
- **Não declarar** os bancos premium nem os 12 produtos aprovados.
- **Piloto recomendado:** OPS — Operação e Monitoramento, por reunir base comprovada e procedimentos transversais às demais trilhas.
- Posicionamento sugerido, sujeito a aprovação: manter a marca Gabarito Data Center e apresentar um catálogo ampliável de preparação em infraestrutura crítica e apoio industrial.

## Próximas verificações
- Localizar os bancos premium, e-books, documentos de entrega e checkouts atuais.
- Auditar as outras 11 trilhas, testar em navegador real e conferir a licença dos áudios.
- Produzir matriz de competências e conteúdo aprofundado do piloto; criar questões contextualizadas e avaliar redundâncias, ambiguidade e rastreabilidade.
- Inspecionar Hotmart antes de duplicar produtos.

**Situação:** diagnóstico inicial baseado em leitura de arquivos; nenhum teste funcional em navegador foi executado e nenhum produto foi migrado/publicado.
