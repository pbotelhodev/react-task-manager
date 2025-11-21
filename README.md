# ✅ React Task Manager

> Uma aplicação de produtividade minimalista focada na organização de tarefas diárias com persistência de dados.

![Status do Projeto](https://img.shields.io/badge/STATUS-CONCLUÍDO-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

![Preview do App](https://via.placeholder.com/1000x500?text=Coloque+aqui+o+Print+do+Task+Manager)

---

## 💻 Sobre o Projeto

O **Task Manager** é uma aplicação web desenvolvida para demonstrar o domínio sobre o ciclo de vida do React e manipulação de estado complexo.

O objetivo foi criar uma ferramenta fluida onde o usuário possa gerenciar suas pendências sem interrupções, garantindo que os dados sejam salvos automaticamente no navegador (**LocalStorage**), simulando a experiência de um aplicativo nativo.

### 🎯 Destaques Técnicos
- **CRUD Completo:** Create, Read, Update, Delete.
- **Persistência Local:** As tarefas sobrevivem ao *refresh* da página (`useEffect` + `localStorage`).
- **Design Responsivo:** Interface adaptável para Mobile e Desktop.

---

## ⚙️ Funcionalidades

- [x] **Adicionar Tarefa:** Validação de input para não criar tarefas vazias.
- [x] **Editar Tarefa:** Permite corrigir erros de digitação ou mudar o escopo.
- [x] **Concluir/Pendente:** Toggle de estado visual (riscado/normal).
- [x] **Excluir:** Remoção permanente da lista.
- [x] **Auto-Save:** Qualquer alteração é salva instantaneamente no banco local.

---

## 🛠️ Tecnologias Utilizadas

- **Front-end:** ReactJS + Vite
- **Estilização:** CSS3 
- **Ícones:** React Icons
- **Armazenamento:** LocalStorage API

---

## 🚀 Como rodar o projeto

```bash
# 1. Clone o repositório
$ git clone [https://github.com/pbotelhodev/react-task-manager.git](https://github.com/pbotelhodev/react-task-manager.git)

# 2. Acesse a pasta
$ cd react-task-manager

# 3. Instale as dependências
$ npm install

# 4. Execute o projeto
$ npm run dev
