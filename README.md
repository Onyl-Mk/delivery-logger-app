Delivery Logger - Mobile Tracking App

    Suggestion: Record a short GIF of you using the app and save it as app-demo.gif in the assets folder.

    Version Française : Cliquez ici pour lire en français

📋 Table of Contents

    Description

    Key Features

    Tech Stack

    Screenshots

    Setup and Installation

📝 Description

Delivery Logger is a comprehensive, multilingual mobile application built with React Native (Expo) designed for individuals and small businesses to efficiently track and manage package deliveries. The app provides a dynamic, at-a-glance dashboard, a detailed delivery list with search and filtering, and a guided multi-step form for adding new entries. All data is saved locally on the user's device for offline access and persistence.

This project was built as a portfolio piece to demonstrate a wide range of modern mobile development skills, including complex state management, dynamic UI, data persistence, and internationalization.
✨ Key Features

    Dynamic Dashboard: A high-level overview of all delivery statistics, including total counts, status breakdowns, and performance metrics.

    Full CRUD Functionality: Users can Create, Read, Update, and Delete deliveries.

    Data Persistence: Utilizes AsyncStorage to save all delivery data directly on the device, ensuring information is never lost between sessions.

    Advanced Filtering & Search: The main deliveries list can be instantly filtered by status or priority, and searched by recipient name or tracking number.

    Multi-Step Form: A guided, user-friendly form for adding new deliveries, complete with validation and a progress indicator.

    Multilingual Support (i18n): The entire application is translated into English and French using i18next, with a language switcher for easy toggling.

    Custom Charting: A custom-built, dependency-free bar chart on the statistics screen to visualize the delivery breakdown.

🛠️ Tech Stack

    Framework: React Native (Expo)

    State Management: React Context API with Hooks

    Navigation: React Navigation (Bottom Tab, Native Stack)

    Data Storage: @react-native-async-storage/async-storage

    Internationalization: i18next & react-i18next

    UI Components: React Native StyleSheet

    High-Performance Lists: @shopify/flash-list

📸 Screenshots

Dashboard (EN)
	

Deliveries (EN)
	

Details (EN)


	


	


Dashboard (FR)
	

Deliveries (FR)
	

Statistics (FR)


	


	


🚀 Setup and Installation

To run this project locally, follow these steps:

    Clone the repository:

    git clone https://github.com/your-username/delivery-logger-app.git
    cd delivery-logger-app

    Install dependencies:

    npm install

    Run the application:

    npx expo start

    Scan the QR code with the Expo Go app on your iOS or Android device.