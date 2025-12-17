---
title: Diretórios 
description: Diretórios do Open Journals Data
slug: "infos/diretorios"
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