# 💰 BudgetApp — Dashboard Budgétaire React

Application web de pilotage budgétaire développée en ReactJS, dans le cadre d'un mini-projet personnel visant à monter en compétences sur l'écosystème frontend moderne.

## 🖥️ Aperçu

L'application simule un tableau de bord de gestion budgétaire avec :
- Une vue **Dashboard** avec indicateurs clés (KPI) et graphique d'évolution mensuelle
- Une vue **Transactions** avec tableau filtrable en temps réel

## 🛠️ Technologies utilisées

| Technologie | Rôle |
|---|---|
| ReactJS | Framework frontend, composants, hooks |
| Material UI (MUI) | Bibliothèque de composants UI |
| React Router | Navigation entre les pages |
| Recharts | Visualisation graphique des données |
| Vite | Bundler et serveur de développement |

## 📁 Structure du projet

src/
├── components/
│   └── Sidebar.jsx       # Barre de navigation latérale
├── pages/
│   ├── Dashboard.jsx     # Page principale avec KPI et graphique
│   └── Transactions.jsx  # Page tableau de transactions filtrable
├── data/
│   └── mockData.js       # Données fictives simulant une API
├── App.jsx               # Routing principal
└── main.jsx              # Point d'entrée, thème MUI

## 🚀 Lancer le projet

### Avec Node.js
```bash
npm install
npm run dev
```

### Avec Docker
```bash
docker run -it --rm -v ${PWD}:/app -w /app -p 5173:5173 node:24-slim bash
npm install
npm run dev -- --host
```

Puis ouvrir [http://localhost:5173](http://localhost:5173)

## ✨ Fonctionnalités

- Navigation entre pages sans rechargement (SPA)
- Cartes KPI avec code couleur (budget, dépenses, solde)
- Graphique d'évolution mensuelle budget vs dépenses
- Tableau de transactions avec recherche en temps réel
- Thème sombre personnalisé