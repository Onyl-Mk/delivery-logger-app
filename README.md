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


<img width="408" height="912" alt="Screenshot 2025-08-13 225036" src="https://github.com/user-attachments/assets/95c266a6-65b4-4e10-831b-588a851630b4" />


Deliveries (EN)

<img width="405" height="909" alt="Screenshot 2025-08-13 225216" src="https://github.com/user-attachments/assets/6d234a82-25c2-4e06-92c4-7dfb35a84787" />
<img width="406" height="909" alt="Screenshot 2025-08-13 225235" src="https://github.com/user-attachments/assets/70ba4c8d-faee-4a33-bd3d-1bd80f55bdbd" />
<img width="406" height="909" alt="Screenshot 2025-08-13 225307" src="https://github.com/user-attachments/assets/4bbcacaf-8f0d-4c70-865e-b32a7ee64a12" />

	

Details (EN)

<img width="405" height="909" alt="Screenshot 2025-08-13 225321" src="https://github.com/user-attachments/assets/2da6402e-a14a-417f-b5b4-014db6ddc3ca" />


	


	


Dashboard (FR)

<img width="406" height="909" alt="Screenshot 2025-08-13 225012" src="https://github.com/user-attachments/assets/5fecf425-767d-48be-9244-c94397d7ad0f" />
	

Deliveries (FR)

<img width="403" height="908" alt="Screenshot 2025-08-13 225356" src="https://github.com/user-attachments/assets/ba98cf85-a6c4-4b34-9894-38b244e7f1b8" />
<img width="405" height="906" alt="Screenshot 2025-08-13 225416" src="https://github.com/user-attachments/assets/b83eb991-0435-469e-b514-35072775aed1" />
<img width="406" height="911" alt="Screenshot 2025-08-13 225429" src="https://github.com/user-attachments/assets/881af34e-d27c-4078-ab1a-094333c2a7db" />

	
Statistics (FR)

<img width="407" height="911" alt="Screenshot 2025-08-13 225443" src="https://github.com/user-attachments/assets/7f82a944-f61d-4791-ba4e-d449c226d7d4" />




	


	


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
