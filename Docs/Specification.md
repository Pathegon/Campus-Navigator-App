
# Specification.md
## Overview

The **Campus Navigator App** is designed to assist college students in navigating their campus efficiently and effectively. This user-friendly app provides an interactive map displaying buildings, locations, and points of interest. Additionally, it offers turn-by-turn directions, search functionality for classes, events, and dining options, and enables students to manage their saved events, activities, and locations. The app aims to enhance the college experience by providing a comprehensive tool for students to explore and engage with their campus.

## Features

### 1. Interactive Campus Map

The app features an interactive map that displays detailed information on campus buildings, locations, and points of interest. Users can zoom in and out, as well as pan and scroll, to navigate the map with ease. They can also tap on buildings or locations to view more details, such as opening hours, contact information, or photos.

### 2. Directions and Navigation

Students can enter their desired destination on campus, and the app will provide turn-by-turn directions to guide them there. The app also supports multiple modes of transportation, including walking, biking, and public transit. Estimated arrival times and route options are provided to help users plan their journey efficiently.

### 3. Search Functionality

The app offers a powerful search function that allows users to search for classes, events, and dining options using keywords or filters. They can search by event type, date, time, or location, and refine their search results with additional filters such as price or distance. The search results are displayed as cards or in a list view, with key information such as title, image, date, time, and location.

### 4. Events and Activities

The app allows users to discover campus events and activities, with options to save, share, or join them. The events and activities can be filtered by categories such as academic, social, cultural, or athletic, and users can set preferences to receive personalized recommendations based on their interests. Event details include descriptions, images, location, and RSVP options, as well as links to any relevant websites or social media pages.

### 5. Personal Dashboard

Students can manage their saved events, activities, and locations in a personalized dashboard. This dashboard provides an organized view of their upcoming events, saved locations, and recently viewed items. Users can also edit, delete, or share their saved content directly from the dashboard.

### 6. Profile and Settings

Users can create and edit their profile, manage notification settings, and customize their app experience. The profile section includes the user's profile picture, name, bio, and contact information. Users can also manage their notification preferences, such as receiving reminders for saved events or updates on new events in their preferred categories.

## Technical Requirements

1.  The app must be developed using React Native or Jetpack Compose.
2.  Backend services, such as user authentication and data storage, should be implemented using Firebase or SQLite.
3.  The app should utilize device location services and Google Maps API for location-based event discovery and map integration.
4.  The user interface and user experience should be well-designed, intuitive, and visually appealing, incorporating the principles of UX/UI design.
5.  The project must be organized and managed using version control, specifically Git with a clear commit history demonstrating collaboration and progress throughout the development process.
6.  Clear documentation is required at every step of the way, in Markdown Format.

## Screens and Layouts

The app should consist of at least 6 screens, each serving a specific purpose within the overall user experience:

1.  **Welcome/Login screen**
2.  **Main feed screen**
3.  **Detail screen**
4.  **Create/edit screen**
5.  **Personal dashboard or management screen**
6.  **Settings/Profile screen**

Each screen should follow the template requirements outlined earlier, providing a consistent structure and set of features that ensure a smooth and engaging user experience.

### 1. Welcome/Login Screen

-   App logo or title
-   Brief description of the app's purpose
-   Sign up and Login buttons (could include social media login options)
-   Optional: a short onboarding tutorial or carousel showcasing app features

### 2. Main Feed Screen

-   Search bar for users to search for items or content based on keywords or other criteria
-   Filter and sort options (e.g., by date, popularity, or other relevant factors)
-   A list or grid view of cards displaying essential information, such as:
    -   Title or name
    -   Image or icon
    -   Key details (e.g., date and time, location, ratings)
-   Optional: a map view or other visual representation of the content

### 3. Detail Screen

-   Main image or banner
-   Title or name
-   Key details (e.g., date and time, location, ratings, description)
-   Buttons for primary actions (e.g., save, share, purchase, join)
-   Additional information or sections related to the content (e.g., reviews, related items)

### 4. Create/Edit Screen

-   Form fields for entering item or content details, such as:
    -   Title or name
    -   Image or banner upload
    -   Date and time picker (if applicable)
    -   Location input (with map integration, if applicable)
    -   Description field
-   Buttons to save, preview, or cancel creation/editing

### 5. Personal Dashboard or Management Screen

-   A segmented or tabbed view of the user's content, such as:
    -   Created items
    -   Saved or favorite items
    -   History or activity
-   Cards with essential information (similar to the main feed)
-   Button or actions to edit, delete, or share content

### 6. Settings/Profile Screen

-   User's profile picture and name
-   Optional: user's bio or description
-   A list of user-specific settings or actions, such as:
    -   Edit profile
    -   Notification settings
    -   Change password
    -   Privacy settings
-   Log out button

By incorporating these screens and layouts, along with the detailed features and technical requirements, the Campus Navigator App will provide a comprehensive solution for college students to efficiently navigate their campus, discover events and activities, and manage their personal preferences within the app.
