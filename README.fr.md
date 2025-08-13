Delivery Logger - Application de Suivi Mobile

    English Version: Click here to read in English

📋 Table des Matières

    Description

    Fonctionnalités Clés

    Stack Technique

    Captures d'écran

    Installation

📝 Description

Delivery Logger est une application mobile complète et multilingue, développée avec React Native (Expo), conçue pour les particuliers et les petites entreprises afin de suivre et gérer efficacement les livraisons de colis. L'application offre un tableau de bord dynamique, une liste détaillée des livraisons avec recherche et filtrage, et un formulaire guidé en plusieurs étapes pour ajouter de nouvelles entrées. Toutes les données sont sauvegardées localement sur l'appareil de l'utilisateur pour un accès hors ligne et une persistance des données.

Ce projet a été réalisé pour mon portfolio afin de démontrer un large éventail de compétences en développement mobile moderne.
✨ Fonctionnalités Clés

    Tableau de Bord Dynamique : Un aperçu de haut niveau de toutes les statistiques de livraison.

    Fonctionnalité CRUD Complète : Créez, lisez, mettez à jour et supprimez des livraisons.

    Persistance des Données : Utilise AsyncStorage pour sauvegarder toutes les données sur l'appareil.

    Filtrage et Recherche Avancés : Filtrez instantanément la liste par statut ou priorité.

    Formulaire en Plusieurs Étapes : Un formulaire guidé et convivial pour ajouter de nouvelles livraisons.

    Support Multilingue (i18n) : L'application entière est traduite en anglais et en français.

    Graphique Personnalisé : Un graphique à barres personnalisé pour visualiser la répartition des livraisons.

🛠️ Stack Technique

    Framework : React Native (Expo)

    Gestion d'état : React Context API avec Hooks

    Navigation : React Navigation

    Stockage de données : @react-native-async-storage/async-storage

    Internationalisation : i18next & react-i18next

    Listes Performantes : @shopify/flash-list

📸 Captures d'écran

Tableau de Bord (FR)
	

Livraisons (FR)
	

Détails (FR)


	


	


Tableau de Bord (EN)
	

Livraisons (EN)
	

Statistiques (FR)


	


	


🚀 Installation

Pour exécuter ce projet localement, suivez ces étapes :

    Clonez le dépôt :

    git clone https://github.com/votre-nom-utilisateur/delivery-logger-app.git
    cd delivery-logger-app

    Installez les dépendances :

    npm install

    Lancez l'application :

    npx expo start

    Scannez le code QR avec l'application Expo Go sur votre appareil iOS ou Android.