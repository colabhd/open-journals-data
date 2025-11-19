### O JournalsBR começou como um repositório apenas de revistas de Relações Internacionais, mas com o crescimento da equipe do Centro de Pesquisa Política e Social, foi possível abranger ainda mais o escopo do projeto.

Atualmente o projeto está dividido em cinco repositórios:
- Coletar Metadados
- Coletar PDFs
- Vincular Metadados e PDFs (XMP)
- RecollWeb
- Extrair referências dos PDFs

---

### Metadados

A definição dos nomes das variáveis dos metadados segue os padrões estabelecidos pelo "Rótulos de campo da Principal Coleção do Web of Science", disponível em: https://archive.is/5stfq

### Metadados das referencias citadas em cada artigo das revistas

| variável | significado |
|----------|-------------|
|cited_in_journal| Revista em que a referencia foi citada|
|cited_in_journal_year | ano em que a referencia foi citada na revista|
| cited_in_journal_year | ano em que a referência foi citada na revista|
| references_raw | referência completa(crua) |
| references_date | data da referência |
| references_author | autores da referencias|
| title_monogr | titulo |
| title_analytic | titulo |
| path_pdf | local do pdf |
|path_xml | local do xml | 

---

### Pesquisas dos metadados

1. Quantidade de artigos por ano
2. Frequência de artigos de um mesmo autor
3. Quais instituições aparecem, NANs, etc ("varredura nas instituições")
4. Línguas
5. Quantidade de páginas dos artigos
6. Quantidade de artigos com as referências apontadas
7. Frequência de palavras-chave
8. Busca por palavras-chave no título
9. Busca por palavras-chave por ano

---

### Pastas com dados e metadados 

| Pasta | Conteúdo | Estrutura | Exemplo |
| :--- | :--- | :--- | :--- |
| `pdf` | arquivos PDF de todos os artigos | `pdf/ano/nome_arquivo` | `pdf/2003/2003-v.2-n.2-02.pdf` |
| `xml` | xml gerados, via grobid, a partir dos pdfs | `xml/ano/nome_arquivo` | `xml/2003/2003-v.2-n.2-02.tei.xml` |
| `metadados` | cada linha contem metadados de um artigo da edição | `metadados/nome_arquivo` | `metadados/2013v01n01.csv` |
| `csv` | cada arquivo csv contem dados das referências citadas em cada artigo das revistas | `csv/ano/nome_arquivo` | `csv/2003/2003-v.2-n.2-02.csv` |
| `logs` | info de controle da coleta dos pdfs | `logs/` | `.logs.csv, logs/acervo.csv, info_data` |
| `logs_metadata` | info de controle de coleta dos metadados | `logs_metadata/` | `.logs.csv, acervo.csv` |

---

### Arquivos do controle

| nome | função | variáveis |
| :--- | :--- | :--- |
| `.logs.csv` | armanezar histórico da coleta | `date`, `houve_coleta(TRUE)`, `coleta` |
| `acervo.csv` | refere-se cada edição | `url` de determinada edição, `editions`, `vol`, `n`, `ano`, `revista` |
| `info_data` | tamanho e localização de cada pdf | `loc_arquivo` local do pdf, `pdf_url` localização web, `size` tamanho |


> Importante:  O info_data contém informações que possibilitam vincular os arquivos pdf, csv (com referencias) , csv (com metadados)

`loc_arquivo` (de `logs/info_data.csv`) e `path_pdf``  (de csv/ano/nome_arquivo.csv ) vinculam os arquivos pdf ao csv das referencias

pdf_url (de logs/info_data.csv) e PDFURL (de metadados/nome_arquivo.csv) vinculam o metadados com os arquivos pdf