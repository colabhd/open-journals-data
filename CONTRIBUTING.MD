# 📝 Política de Contribuição

Este repositório segue uma política de **colaboração baseada em Pull Requests (PRs)** para manter a qualidade e a rastreabilidade do código.

## 🔒 Proteção da branch `main`

A branch `main` é protegida — **não são permitidos commits ou push diretos**. Todas as alterações devem passar pelo fluxo de revisão via Pull Request.

## 👥 Como contribuir

1. Crie uma nova branch a partir da `main`. No comando abaixo subtitua `nome-da-sua-branch` pelo nome da branch que você criará (coloque um nome relacionado ao que você está fazendo):

   ```
   git checkout main
   git pull origin main
   git checkout -b nome-da-sua-branch
   ```

2. Faça suas alterações e commit:

   ```
   git add .
   git commit -m "Descrição clara da alteração"
   ```

3. Envie sua branch:
   ```
   git push origin nome-da-sua-branch &&
   git push origin nome-da-sua-branch
   ```

4. Abra um **Pull Request (PR)** no GitHub, descrevendo:
   - O que foi alterado
   - Por que a alteração é necessária

5. Aguarde a **revisão e aprovação** antes do merge.

## ✅ Boas práticas

- Prefira PRs pequenos e específicos.  
- Use mensagens de commit descritivas.  
- Atualize sua branch com a `main` antes de pedir o merge:
  
  ```
  git fetch origin main
  git rebase origin/main
  ```
  
### Guia de estilo (padronização das contribuições)

Para manter a consistência do banco de dados, todas as contribuições devem seguir os padrões estabelecidos.

* **Metadados:** A definição dos nomes das variáveis de metadados segue os padrões estabelecidos pelo "Rótulos de campo da Principal Coleção do Web of Science", disponível em: [https://archive.is/5stfq](https://archive.is/5stfq)
* **Metadados das Referências:** As variáveis para os metadados das referências citadas seguem a estrutura abaixo:

| variável | significado |
| :--- | :--- |
| `cited_in_journal` | Revista em que a referência foi citada |
| `cited_in_journal_year` | Ano em que a referência foi citada na revista |
| `references_raw` | Referência completa (crua) |
| `references_date` | Data da referência |
| `references_author` | Autores da referência |
| `title_monogr` | Título |
| `title_analytic` | Título |
| `path_pdf` | Local do pdf |
| `path_xml` | Local do xml |