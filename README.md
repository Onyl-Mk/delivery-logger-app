Delivery Logger - Mobile Tracking App

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

<img width="414" height="919" alt="Screenshot 2025-08-13 220023" src="https://github.com/user-attachments/assets/62926fb7-0221-4fb5-a7ea-4a63acbe6e2e" />
	

Deliveries (EN)

<img width="413" height="913" alt="Screenshot 2025-08-13 220030" src="https://github.com/user-attachments/assets/5b9e78a1-33e8-41b5-9392-1e4cb7542818" />
<img width="412" height="915" alt="Screenshot 2025-08-13 220038" src="https://github.com/user-attachments/assets/882c6fbd-d519-417d-8ce3-5bf5a2e1225c" />
<img width="412" height="915" alt="Screenshot 2025-08-13 224412" src="https://github.com/user-attachments/assets/0ce5eecb-a016-431e-a675-d38b861577d6" />
	

Details (EN)

<img width="412" height="915" alt="Screenshot 2025-08-13 224342" src="https://github.com/user-attachments/assets/4ac40682-9fdc-4414-a8c7-0517efbfd7df" />

	


	


Dashboard (FR)

<img width="412" height="914" alt="Screenshot 2025-08-13 215922" src="https://github.com/user-attachments/assets/6aecfb87-900e-4392-b839-966c426b7eca" />
	

Deliveries (FR)

<img width="409" height="920" alt="Screenshot 2025-08-13 215935" src="https://github.com/user-attachments/assets/3af9931f-5e1e-4548-95c5-ae2c4a946797" />
<img width="413" height="915" alt="Screenshot 2025-08-13 215949" src="https://github.com/user-attachments/assets/8d600520-57b8-453a-b5a4-dd0458d316e5" />
<img width="414" height="916" alt="Screenshot 2025-08-13 220005" src="https://github.com/user-attachments/assets/ec7ed6cc-6aaf-45a7-89c2-4b6c1151d243" />
	
Statistics (FR)

<img width="407" height="915" alt="Screenshot 2025-08-13 220013" src="https://github.com/user-attachments/assets/aa0252a8-2035-44d1-ac65-f8a6e07cefe5" />



	


	


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
