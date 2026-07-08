# Manual de Bordo do Site Vidraçaria Liderança

## 1. Introdução

Este documento serve como o **Manual de Bordo** do site institucional da Vidraçaria Liderança, detalhando sua arquitetura, funcionalidades, tecnologias utilizadas e diretrizes de manutenção. O objetivo é fornecer uma referência completa para a gestão, atualização e evolução do projeto.

O site foi desenvolvido com foco em um design **moderno, fluido e clean**, priorizando a experiência do usuário (UX) e a otimização para dispositivos móveis (responsividade).

---

## 2. Arquitetura e Tecnologia

O site é uma **Single Page Application (SPA)** construída com a biblioteca **React**, utilizando o framework **Vite** para o ambiente de desenvolvimento e build.

### 2.1. Tecnologias Principais

| Tecnologia | Função | Versão |
| :--- | :--- | :--- |
| **React** | Biblioteca JavaScript para construção da interface de usuário. | Última Estável |
| **Vite** | Ferramenta de build e servidor de desenvolvimento rápido. | Última Estável |
| **Tailwind CSS** | Framework CSS utilitário para estilização rápida e responsiva. | Última Estável |
| **React Router DOM** | Gerenciamento de rotas e navegação entre páginas. | Última Estável |
| **Lucide React** | Biblioteca de ícones moderna e leve. | Última Estável |

### 2.2. Estrutura de Arquivos

A estrutura do projeto segue o padrão de aplicações React, com foco na modularidade e fácil manutenção:

```
vidracaria-lideranca/
├── index.html              # Ponto de entrada principal
├── package.json            # Dependências e scripts do projeto
├── vite.config.js          # Configuração do Vite
└── src/
    ├── App.jsx             # Componente principal e roteamento
    ├── main.jsx            # Inicialização do React
    ├── assets/             # Imagens, logos e outros arquivos estáticos
    ├── components/         # Componentes reutilizáveis (Header, Footer, etc.)
    │   ├── Header.jsx
    │   └── Footer.jsx
    └── pages/              # Componentes de página (rotas)
        ├── Home.jsx        # Página Inicial
        ├── About.jsx       # Sobre Nós
        ├── Services.jsx    # Serviços (Hub)
        ├── ServiceDetail.jsx # Detalhe de cada serviço
        ├── Portfolio.jsx   # Portfólio
        ├── Partners.jsx    # Parceiros
        └── Contact.jsx     # Contato
```

---

## 3. Funcionalidades Detalhadas

### 3.1. Navegação e Rotas

O site possui 6 rotas principais, gerenciadas pelo `React Router DOM` no arquivo `App.jsx`:

| Rota | Arquivo | Descrição |
| :--- | :--- | :--- |
| `/` | `Home.jsx` | Página inicial, com carrossel, serviços e diferenciais. |
| `/sobre` | `About.jsx` | Informações institucionais (História, Missão, Valores). |
| `/servicos` | `Services.jsx` | Hub de serviços com listagem completa. |
| `/servicos/:id` | `ServiceDetail.jsx` | Página dinâmica para cada serviço (Box, Esquadrias, etc.). |
| `/portfolio` | `Portfolio.jsx` | Galeria de projetos realizados. |
| `/parceiros` | `Partners.jsx` | Listagem dos fornecedores e parceiros. |
| `/contato` | `Contact.jsx` | Formulário de contato, mapa e informações. |

### 3.2. Página Inicial (`Home.jsx`)

A página inicial é o cartão de visitas do site, focada em capturar a atenção e direcionar o usuário.

#### **3.2.1. Carrossel Principal (Banner)**
- **Função:** Apresentação visual de alto impacto.
- **Design:** Fluido, com transições suaves e efeitos de *glassmorphism* nos botões.
- **Conteúdo:** Inclui a nova imagem da marca e slides sobre os principais serviços.

#### **3.2.2. Seção "Tipos de Vidro"**
- **Função:** Destacar a expertise da empresa em materiais.
- **Conteúdo:** Cards dedicados a **Vidro Temperado**, **Vidro Laminado** e **Vidro Refletivo**, com ícones e descrições claras.

#### **3.2.3. Seção de Serviços**
- **Função:** Visão geral dos 8 serviços principais.
- **Design:** Cards *clean* com imagens e links diretos para a página de detalhes do serviço.

### 3.3. Página de Contato (`Contact.jsx`)

Esta página é crucial para a conversão de leads e foi configurada para máxima eficiência.

#### **3.3.1. Formulário de Orçamento**
- **Função:** Coletar dados do cliente para solicitação de orçamento.
- **Ação:** Ao invés de enviar um e-mail, o formulário gera uma mensagem formatada e redireciona o usuário para o **WhatsApp** do Diego, garantindo um atendimento imediato.

#### **3.3.2. Google Maps Integrado**
- **Função:** Mostrar a localização física da Vidraçaria Liderança.
- **Implementação:** Utiliza o `iframe` do Google Maps com as coordenadas exatas e o endereço completo:
  - **Endereço:** Rua Toshie Nishiyama Sucupira, 3947 - Umuarama - PR
  - **Coordenadas:** -23.7495444, -53.2732118
- **Benefício:** Evita erros de localização e facilita a navegação do cliente.

#### **3.3.3. Contatos Diretos**
- **Telefones:** Diego (44) 98415-2049 e Jonathan (44) 98456-4529 (corrigido).
- **Ação:** Todos os números são clicáveis (links `tel:` e `wa.me`) para contato direto.

---

## 4. Manutenção e Atualização

### 4.1. Como Atualizar o Conteúdo

| Tipo de Conteúdo | Arquivo para Edição | Instrução |
| :--- | :--- | :--- |
| **Textos da Home** | `src/pages/Home.jsx` | Editar as variáveis `bannerSlides`, `glassTypes` e os textos das seções. |
| **Serviços** | `src/pages/Services.jsx` e `src/pages/ServiceDetail.jsx` | O conteúdo de cada serviço está em um objeto JavaScript no `ServiceDetail.jsx`. |
| **Contatos** | `src/components/Footer.jsx` e `src/pages/Contact.jsx` | Alterar números de telefone, e-mail e endereço. |
| **Imagens** | `src/assets/` | Substituir os arquivos de imagem (`.jpg`, `.png`) mantendo o mesmo nome para evitar quebrar o código. |

### 4.2. Processo de Deploy (Publicação)

Para publicar qualquer alteração no site:

1.  **Build do Projeto:** Execute o comando `npm run build` no terminal, dentro da pasta `vidracaria-lideranca`. Isso criará a pasta `dist/` com os arquivos otimizados.
2.  **Deploy:** Utilize a ferramenta de implantação (como o `service_deploy_frontend` usado no desenvolvimento) apontando para a pasta `dist/`.
3.  **Publicação:** Clique no botão "Publish" na interface de gerenciamento para que as alterações fiquem visíveis publicamente.

---

## 5. Próximos Passos e Recomendações

### 5.1. Melhoria de Imagens

Recomenda-se a substituição das imagens de banco de dados (Unsplash) por **fotos reais de projetos** da Vidraçaria Liderança. Isso aumentará a credibilidade e o engajamento dos visitantes.

### 5.2. Integração de Vídeo

O vídeo fornecido (`1000121948.mp4`) pode ser integrado na página inicial para um impacto visual ainda maior. Isso requer um upgrade de assinatura para o recurso de vídeo.

### 5.3. Desenvolvimento de Novos Aplicativos

O plano de trabalho agora inclui o desenvolvimento de:
1.  **Aplicativo de Mockups:** Para aplicar imagens em contextos (fachadas, embalagens, etc.).
2.  **Aplicativo de Imobiliária:** Adaptado para a Vidraçaria Liderança, focando em imóveis que necessitam de serviços de vidro e esquadrias.

---

**Fim do Manual de Bordo**
*Autor: Manus AI*
*Data de Emissão: 20 de Setembro de 2025*

## 6. Sumário Executivo

O site da Vidraçaria Liderança foi desenvolvido como uma **Single Page Application (SPA)** utilizando **React** e **Tailwind CSS**, garantindo um design moderno, fluido e totalmente responsivo. A arquitetura modular facilita a manutenção e futuras expansões.

**Funcionalidades Chave:**

*   **Design Renovado:** Implementação de um visual *clean* com efeitos de *glassmorphism* e transições suaves.
*   **Nova Seção "Tipos de Vidro":** Destaque para Vidro Temperado, Laminado e Refletivo.
*   **Conversão de Leads:** Formulário de contato que redireciona diretamente para o **WhatsApp** do Diego, com a mensagem pré-preenchida.
*   **Localização Precisa:** Integração do Google Maps com as coordenadas exatas da Rua Toshie Nishiyama Sucupira, 3947, em Umuarama - PR.
*   **Contatos Corrigidos:** Atualização e correção dos números de telefone do Diego e Jonathan em todo o site.

**Diretrizes de Manutenção:**

*   O conteúdo é facilmente editável nos arquivos `.jsx` correspondentes a cada seção.
*   A publicação de novas versões é feita através do comando `npm run build` seguido do deploy da pasta `dist/`.

Este manual detalha a estrutura do código e o processo de atualização, servindo como guia para a gestão contínua do ativo digital da Vidraçaria Liderança.

---

## 7. Glossário Técnico

| Termo | Definição |
| :--- | :--- |
| **SPA** | Single Page Application. Aplicação web que carrega uma única página HTML e atualiza o conteúdo dinamicamente. |
| **React** | Biblioteca JavaScript para construir interfaces de usuário. |
| **Tailwind CSS** | Framework CSS que permite estilizar o HTML diretamente com classes utilitárias. |
| **Vite** | Ferramenta de build moderna e rápida para projetos web. |
| **Glassmorphism** | Tendência de design que utiliza transparência, *blur* e cores vibrantes para simular vidro. |
| **Deploy** | Processo de disponibilizar a aplicação para acesso público. |
| **Build** | Processo de compilação e otimização do código para produção. |

---

## 8. Referências

*   [1] Código Fonte do Projeto: `vidracaria-lideranca-essencial.zip`
*   [2] Documentação Oficial do React: `https://reactjs.org/`
*   [3] Documentação Oficial do Tailwind CSS: `https://tailwindcss.com/`
*   [4] Localização Google Maps: `https://www.google.com/maps/place/R.+Toshie+Nishiyama+Sucupira,+3947`

---

## 9. Anexos

*   **Anexo A:** Estrutura de Arquivos Completa (Conforme Seção 2.2)
*   **Anexo B:** Relatório de Testes e Resultados (Conforme `teste_resultados.md`)
*   **Anexo C:** Arquivo ZIP do Código Fonte (Conforme `vidracaria-lideranca-essencial.zip`)
*   **Anexo D:** Relatório de Atualizações (Conforme `atualizacoes_realizadas.md`)
*   **Anexo E:** Relatório de Melhorias Finais (Conforme `melhorias_finais_realizadas.md`)

---

**Fim do Documento**
*Diretoria de Vigilância em Saúde / Secretaria Municipal de Saúde* | **Manual de Bordo do Site Vidraçaria Liderança** | *20/09/2025 20:46* | Página 1 de 1

