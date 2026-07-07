# Google Ads — Ateliers Haussmann

## IDs déjà installés sur le site

| Service | ID | Statut |
|---------|-----|--------|
| Google Analytics 4 | `G-TSYW641PEE` | ✅ Actif |
| Google Ads | `AW-XXXXXXXXX` | ⏳ À configurer |

## Étape 1 — Créer le compte Google Ads

1. Allez sur [ads.google.com](https://ads.google.com)
2. Connectez-vous avec **ateliers.haussmann@gmail.com** (ou le compte Google de l'entreprise)
3. Choisissez **Créer une campagne sans guide**
4. Objectif : **Générer des prospects** (Leads)
5. Type de conversion : **Soumissions de formulaire** + **Appels téléphoniques**

## Étape 2 — Lier GA4 à Google Ads

1. Dans Google Ads → **Outils** → **Conversions**
2. Cliquez **+ Nouvelle action de conversion**
3. Choisissez **Site web**
4. Sélectionnez **Importer depuis Google Analytics**
5. Importez l'événement `generate_lead` depuis GA4 (`G-TSYW641PEE`)

## Étape 3 — Créer les actions de conversion

### Conversion 1 : Demande de devis (formulaire)
- Nom : `Devis gratuit — formulaire`
- Catégorie : Prospect qualifié
- Valeur : 50 € (estimation par lead)
- Comptage : Une seule conversion

### Conversion 2 : Appel téléphonique
- Nom : `Appel — 01 80 89 24 58`
- Catégorie : Prospect qualifié
- Valeur : 30 €
- Comptage : Une seule conversion
- Utilisez le **suivi des appels** Google Ads (extension d'appel)

## Étape 4 — Récupérer l'ID de conversion

1. Google Ads → **Outils** → **Conversions**
2. Cliquez sur `Devis gratuit — formulaire`
3. **Installation de la balise** → Copiez :
   - ID Google Ads : `AW-XXXXXXXXX`
   - Libellé de conversion : `AbCdEfGhIjK`

## Étape 5 — Configurer le site

Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_GA_ID=G-TSYW641PEE
NEXT_PUBLIC_GADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GADS_CONVERSION_LABEL=AbCdEfGhIjK
```

Puis redéployez sur Vercel :
1. Vercel Dashboard → Projet `ateliers-haussmann-3d`
2. **Settings** → **Environment Variables**
3. Ajoutez les 3 variables ci-dessus
4. **Redeploy**

## Étape 6 — Structure des campagnes recommandée

### Campagne 1 : Pompe à chaleur (Search)
- **Budget** : 30–50 €/jour pour commencer
- **Zone** : France (ou Île-de-France + 100 km autour de Stains)
- **Enchères** : Maximiser les conversions (après 15+ conversions) ou CPC manuel (1,50–3,50 €)
- **URL finale** : `https://ateliers-haussmann-3d.vercel.app/pompe-a-chaleur?utm_source=google&utm_medium=cpc&utm_campaign=pac_search`
- **Mots-clés** : voir `keywords.txt`

### Campagne 2 : Ballon thermodynamique (Search)
- **Budget** : 15–25 €/jour
- **URL** : `/ballon-thermodynamique?utm_source=google&utm_medium=cpc&utm_campaign=ballon_search`

### Campagne 3 : MaPrimeRénov / Aides (Search)
- **Budget** : 20–30 €/jour
- **URL** : `/aides-financement?utm_source=google&utm_medium=cpc&utm_campaign=aides_search`

### Campagne 4 : Remarketing (Display)
- **Budget** : 5–10 €/jour
- **Audience** : Visiteurs du site (30 derniers jours) via GA4
- **URL** : `/?utm_source=google&utm_medium=display&utm_campaign=remarketing`

## Étape 7 — Extensions d'annonce (obligatoires)

| Extension | Contenu |
|-----------|---------|
| **Appel** | 01 80 89 24 58 |
| **Liens annexes** | Pompe à chaleur, Ballon thermo, Aides, Devis gratuit |
| **Accroches** | Artisan RGE certifié, Devis sous 24h, Jusqu'à 70% d'aides |
| **Extraits structurés** | Services : PAC, Ballon, Solaire, Clim |
| **Lieu** | 19 rue Gambetta, 93240 Stains |

## Étape 8 — Vérification

1. Installez l'extension Chrome [Tag Assistant](https://tagassistant.google.com)
2. Visitez le site → soumettez un devis test
3. Vérifiez que `generate_lead` apparaît dans GA4 → Temps réel
4. Dans Google Ads → Conversions → vérifiez le statut **Enregistrement des conversions**

## Budget recommandé pour démarrer

| Poste | Montant mensuel |
|-------|----------------|
| Pompe à chaleur | 900–1 500 € |
| Ballon thermo | 450–750 € |
| Aides / MPR | 600–900 € |
| Remarketing | 150–300 € |
| **Total** | **2 100–3 450 €/mois** |

Ajustez après 2 semaines selon le coût par lead (objectif : < 40 €/lead).

## KPIs à suivre

- Coût par lead (formulaire + appel)
- Taux de conversion landing page (objectif : > 5 %)
- Taux de clic annonces (objectif : > 4 %)
- Quality Score mots-clés (objectif : > 7/10)
