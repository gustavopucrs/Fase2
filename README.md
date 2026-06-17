# PataFeliz Petshop – Arquivo de Ajuda (Fase 2)

## Descrição do Projeto

O **PataFeliz Petshop** é um sistema web desenvolvido como projeto da disciplina de Fundamentos Web do curso de Sistemas de Análise e Desenvolvimento de Sistemas da PUCRS.

Esta é a **Fase 2** do projeto, que adiciona Bootstrap, CSS customizado, JavaScript e o formulário de cadastro e agendamento.

---

## Estrutura de Arquivos

| Arquivo           | Descrição                                                     |
|-------------------|---------------------------------------------------------------|
| `index.html`      | Página inicial com carrossel, status de funcionamento e categorias |
| `acessorios.html` | Categoria: Acessórios (cards Bootstrap com imagens)           |
| `racoes.html`     | Categoria: Rações não perecíveis (cards Bootstrap)            |
| `higiene.html`    | Categoria: Higiene e Limpeza (cards Bootstrap)                |
| `servicos.html`   | Serviços: Banho e Tosa – tabelas de preços com/sem tele-busca |
| `cadastro.html`   | Formulário de cadastro do cliente, pet e agendamento          |
| `style.css`       | Estilos CSS customizados da marca PataFeliz                   |
| `scripts.js`      | Funções JavaScript (relógio, validação, máscaras, etc.)       |
| `README.md`       | Este arquivo de ajuda                                         |

---

## Funcionalidades da Fase 2

### Bootstrap 5
- **Navbar responsiva** com menu hamburguer no mobile em todas as páginas.
- **Carrossel automático** na página inicial com 3 slides, legenda e botões de ação.
- **Cards** para exibição de produtos com imagem, descrição e preço.
- **Tabelas estilizadas** com Bootstrap na página de serviços.
- **Grid responsivo** (col-md-4, col-md-6) que adapta o layout para mobile.
- **Badges**, **buttons** e **alerts** com classes do Bootstrap.

### CSS Customizado (`style.css`)
- Variáveis CSS (`:root`) com a paleta de cores da marca (verde e laranja).
- Estilo próprio para navbar, cards de produto, cards de serviço e rodapé.
- Hover com elevação nos cards de produto.
- Tipografia e espaçamentos consistentes em todas as páginas.

### JavaScript (`scripts.js`)
1. **Relógio em tempo real** – atualizado a cada segundo no banner superior, exibindo dia da semana, data e hora.
2. **Status de funcionamento** – verifica automaticamente se o petshop está aberto ou fechado com base no horário atual.
3. **Contador regressivo** – exibe o tempo restante de uma promoção diária até a meia-noite.
4. **Validação do formulário** – valida CPF (formato), telefone (formato), seleção de serviço e método de agendamento antes de submeter.
5. **Máscara de CPF** – formata automaticamente o campo CPF enquanto o usuário digita (000.000.000-00).
6. **Máscara de telefone** – formata automaticamente o campo telefone enquanto o usuário digita ((00) 00000-0000).
7. **Toggle de endereço** – exibe/oculta o campo de endereço de tele-busca de acordo com a opção selecionada.
8. **Alto contraste** – botão de acessibilidade que ativa modo de alto contraste, com persistência no localStorage.

### Formulário de Cadastro (`cadastro.html`)
- **Dados do cliente:** nome, CPF (com máscara), data de nascimento, sexo (radio button), telefone (com máscara), e-mail, endereço, CEP, cidade, estado, como conheceu o petshop.
- **Dados do pet:** nome, espécie (select), raça, idade (number), porte (select), peso, sexo do pet (select), castrado (radio), vacinas em dia (radio), observações (textarea).
- **Escolha do serviço:** checkboxes com descrição e preço de cada modalidade.
- **Agendamento:** radio button para tele-busca ou entrega no local; campo de endereço de busca condicional; calendário (input date) e seletor de horário.
- **Confirmação:** aceite dos termos (LGPD) e aceite de contato via WhatsApp.
- **Feedback:** mensagem de erro com lista de campos inválidos; mensagem de sucesso após submissão correta.

### Acessibilidade
- **`alt` descritivo em todas as imagens** (audiodescrição completa do conteúdo visual).
- **Skip link** ("Pular para o conteúdo principal") em todas as páginas para navegação por teclado/leitor de tela.
- **`aria-label`** em botões, tabelas, formulários e seções sem rótulo textual visível.
- **`aria-live`** no relógio e status de funcionamento para leitores de tela.
- **`aria-current="page"`** no menu de navegação indicando a página ativa.
- **`role="contentinfo"`** no footer e `role="alert"` nas mensagens de erro/sucesso.
- **Foco visível** com outline laranja para navegação por teclado.
- **Botão de alto contraste** acessível via teclado com `aria-pressed`.
- **`fieldset` e `legend`** em todos os grupos de campos do formulário.
- **`<abbr title="obrigatório">`** para indicar campos obrigatórios de forma acessível.

---

## Ajustes realizados em relação à Fase 1

1. Adicionado Bootstrap 5 e Bootstrap Icons via CDN em todas as páginas.
2. Criado `style.css` com identidade visual própria da marca.
3. Criado `scripts.js` com todas as funções JavaScript comentadas.
4. Substituída a navbar de links simples por navbar Bootstrap responsiva.
5. Substituídas as tabelas HTML puras por tabelas Bootstrap estilizadas.
6. Cards Bootstrap adicionados para exibição dos produtos.
7. Nova página `cadastro.html` com formulário completo.
8. Adicionado carrossel Bootstrap na página inicial.
9. Todos os atributos `alt` das imagens revisados e expandidos para audiodescrição completa.
10. Adicionado skip link de acessibilidade em todas as páginas.
11. Atributos ARIA adicionados em elementos interativos e regiões importantes.

---

## Tecnologias Utilizadas

- **HTML5** – estrutura semântica
- **CSS3** – estilos customizados
- **Bootstrap 5.3** – framework CSS/JS
- **Bootstrap Icons 1.11** – ícones vetoriais
- **JavaScript (ES6)** – interatividade e validação
- **GitHub** – controle de versão
- **GitHub Pages** – hospedagem

---

## Autor

**Nome:** Gustavo  
**Curso:** Sistemas de Análise e Desenvolvimento de Sistemas  
**Universidade:** PUCRS  
**Disciplina:** Fundamentos Web  
**Ano:** 2025
