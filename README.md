# Fumer Tue - Site de Sensibilisation au Tabagisme

Un site web interactif pour sensibiliser aux dangers du tabagisme, avec des statistiques, un mini-jeu, et des ressources pour arrêter de fumer.

## Fonctionnalités

- Interface interactive avec mode sombre
- Statistiques sur le tabagisme en France
- Mini-jeu "Snip la Cigarette"
- Quiz d'évaluation de la dépendance
- Galerie d'images comparatives
- Formulaire de contact

## Déploiement sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com) si vous n'en avez pas déjà un.

2. Installez Vercel CLI (optionnel) :
```bash
npm install -g vercel
```

3. Connectez votre compte GitHub à Vercel :
   - Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
   - Cliquez sur "Import Project"
   - Sélectionnez votre dépôt GitHub

4. Configurez le projet :
   - Framework Preset: Python
   - Build Command: pip install -r requirements.txt
   - Output Directory: .
   - Install Command: pip install -r requirements.txt

5. Cliquez sur "Deploy"

## Déploiement Local

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
cd [NOM_DU_REPO]
```

2. Créez un environnement virtuel et activez-le :
```bash
python3 -m venv venv
source venv/bin/activate  # Sur Linux/Mac
# ou
.\venv\Scripts\activate  # Sur Windows
```

3. Installez les dépendances :
```bash
pip install -r requirements.txt
```

4. Lancez l'application :
```bash
python app.py
```

## Structure du Projet

```
.
├── app.py              # Application Flask
├── requirements.txt    # Dépendances Python
├── static/            # Fichiers statiques
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── sounds/
│   └── uploads/
└── templates/         # Templates HTML
    └── index.html
```

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails. 