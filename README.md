# JournalsBR

Este é o repositório central de documentação do projeto JournalsBR, uma iniciativa do Centro de Pesquisa Política e Social (CPPS).


### Sobre o projeto

#### Introdução

O **JournalsBR** começou como um repositório focado em agregar revistas de Relações Internacionais. Com o crescimento da equipe do Centro de Pesquisa Política e Social (CPPS) da UNESP de Franca, o escopo do projeto foi ampliado.

As revistas acadêmicas brasileiras de Relações Internacionais seguem as políticas de acesso aberto. Com isso, todo o conhecimento divulgado por estas revistas podem ser acessados gratuitamente por qualquer pessoa interessada e podem ser reutilizados sem prévia autorização dos editores e autores, desde que seja respeitada a licença de uso do Creative Commons adotado pelos respectivos periódicos. Apesar da adoção do acesso aberto ser um aspecto importante para garantir acesso universal ao conhecimento científico, parte dos metadados destas revistas apresentam inconsistências. Ademais, a indexação integral do conteúdo dessas revistas não é disponibilizada publicamente, dificultando a busca por palavras chaves na integralidade dos arquivos. A partir do exposto acima, o projeto IRjornalsBR objetiva formar uma base de dados que aglutine tanto metadados mais consistentes como também forneça uma indexação integral destas revistas.

Atualmente, o projeto é um *pipeline* de coleta e organização de dados acadêmicos (PDFs, metadados e referências) dividido em cinco repositórios principais:

1.  Coletar Metadados
2.  Coletar PDFs
3.  Vincular Metadados e PDFs (XMP)
4.  RecollWeb
5.  Extrair referências dos PDFs

#### Sobre a equipe

Equipe Atual:
    rafaelrdealmeida
    CaioPalombo
    ligiadlsimplicio

#### FAQ

Caso qualquer usuário tenha dúvidas sobre como utilizar as funcionalidades ou como contribuir, entre em contato pelo e-mail: cpps.franca@unesp.br

---

### Utilizando o projeto

#### Introdução

Esta seção detalha a estrutura dos dados coletados e como eles estão organizados. A compreensão desta estrutura é essencial para utilizar os *datasets* de forma eficaz.

##### Estrutura de Pastas

Os dados brutos e os metadados gerados estão organizados na seguinte estrutura:

| Pasta | Conteúdo | Estrutura | Exemplo |
| :--- | :--- | :--- | :--- |
| `pdf` | arquivos PDF de todos os artigos | `pdf/ano/nome_arquivo` | `pdf/2003/2003-v.2-n.2-02.pdf` |
| `xml` | xml gerados, via grobid, a partir dos pdfs | `xml/ano/nome_arquivo` | `xml/2003/2003-v.2-n.2-02.tei.xml` |
| `metadados` | cada linha contem metadados de um artigo da edição | `metadados/nome_arquivo` | `metadados/2013v01n01.csv` |
| `csv` | cada arquivo csv contem dados das referências citadas em cada artigo das revistas | `csv/ano/nome_arquivo` | `csv/2003/2003-v.2-n.2-02.csv` |
| `logs` | info de controle da coleta dos pdfs | `logs/` | `.logs.csv, logs/acervo.csv, info_data` |
| `logs_metadata` | info de controle de coleta dos metadados | `logs_metadata/` | `.logs.csv, acervo.csv` |

##### Arquivos de Controle

Para o gerenciamento da coleta, utilizamos três arquivos principais:

| nome | função | variáveis |
| :--- | :--- | :--- |
| `.logs.csv` | armanezar histórico da coleta | `date`, `houve_coleta(TRUE)`, `coleta` |
| `acervo.csv` | refere-se cada edição | `url` de determinada edição, `editions`, `vol`, `n`, `ano`, `revista` |
| `info_data` | tamanho e localização de cada pdf | `loc_arquivo` local do pdf, `pdf_url` localização web, `size` tamanho |

##### Vinculando os Dados (Importante)

O arquivo `info_data.csv` é a chave para vincular os diferentes *datasets*:

* **PDF ↔ Referências:** O `loc_arquivo` (de `logs/info_data.csv`) e o `path_pdf` (de `csv/ano/nome_arquivo.csv`) vinculam os arquivos PDF ao CSV das referências.
* **PDF ↔ Metadados:** O `pdf_url` (de `logs/info_data.csv`) e o `PDFURL` (de `metadados/nome_arquivo.csv`) vinculam os metadados aos arquivos PDF.

##### Exemplos de Pesquisas

Os dados coletados permitem diversas análises, como:

* Quantidade de artigos por ano
* Frequência de artigos de um mesmo autor
* "Varredura nas instituições" (identificação de instituições, NANs, etc.)
* Análise das línguas mais frequentes
* Quantidade de páginas dos artigos
* Quantidade de artigos com referências apontadas
* Frequência de palavras-chave (buscas por título ou por ano)

---

### Contribuindo para o projeto

Sua contribuição é muito importante para nós! Este projeto é mantido pela equipe do CPPS, mas contribuições externas são bem-vindas. Antes de começar, por favor, leia nossas diretrizes.

#### Como reportar bugs

Se você encontrar um bug ou um erro nos dados, por favor, [abra uma Issue](link-para-issues) neste repositório, descrevendo o problema em detalhes.

#### Com o que posso contribuir?

As intruduções completas estão presente neste documento: `link`

#### Guia de estilo (padronização das contribuições)

Para manter a consistência do banco de dados, todas as contribuições devem seguir os padrões estabelecidos.

* **Metadados:** A definição dos nomes das variáveis de metadados segue os padrões estabelecidos pelo "Rótulos de campo da Principal Coleção do Web of Science", disponível em: [https://archive.is/5stfq](https://archive.is/5stfq)
* **Metadados das Referências:** As variáveis para os metadados das referências citadas seguem a estrutura abaixo:

| variável | significado |
| :--- | :--- |
| `cited_in_journal` | Revista em que a referencia foi citada |
| `cited_in_journal_year` | ano em que a referencia foi citada na revista |
| `references_raw` | referência completa(crua) |
| `references_date` | data da referência |
| `references_author` | autores da referencia |
| `title_monogr` | titulo |
| `title_analytic` | titulo |
| `path_pdf` | local do pdf |
| `path_xml` | local do xml |


#### Contato

cpps.franca@unesp.br