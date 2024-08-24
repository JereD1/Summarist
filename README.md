# Summarist

Welcome to Summarist, a Next.js application that allows users to search for books, view detailed book information, listen to book summaries, and manage their personal library. The app provides a responsive sidebar for easy navigation.

## Features

- **Search Books:** Find books by title or author using the search bar.
- **View Book Details:** Detailed information including title, author, ratings, and an audio player for book summaries.
- **Personal Library:** Add and manage favorite books in your personal library.
- **Responsive Design:** Sidebar navigation with links to various sections of the app.

## Technologies Used

- **Next.js:** React framework for server-side rendering and static site generation.
- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Axios:** HTTP client for making API requests.

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/my-reading-app.git
Usage
Search for Books

Use the search bar to enter book titles or authors. The results will display matching books.
View Book Details

Click on a book to view its details. You’ll see information like the title, author, ratings, and a summary. If available, an audio player will allow you to listen to the book summary.
Manage Your Library

Books can be added to or removed from your personal library. Access your library from the sidebar to view and manage your saved books.
Sidebar Navigation

The sidebar contains links to:

    Home: View recommended books.
    My Library: Manage your saved books.
    Highlights: View highlighted books.
    Search: Access the book search page.
    Settings: Configure application settings.
    Help & Support: Get help and support.
    Logout: Sign out of your account.

API Endpoints
Get Book Details

    Endpoint: GET /api/getBook
    Query Parameter: id (string) - The ID of the book.

Search Books

    Endpoint: GET /api/getBooksByAuthorOrTitle
    Query Parameter: search (string) - The search query for book title or author.

Folder Structure

ruby

/my-reading-app
├── public/              # Static files (images, favicon, etc.)
├── src/                 # Source files
│   ├── app/             # Application routes and components
│   │   ├── account/     # Account-related pages and components
│   │   ├── library/     # Library-related pages and components
│   │   ├── search/      # Search-related pages and components
│   ├── components/      # Reusable components
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions and helpers
├── .env.local           # Environment variables
├── next.config.js       # Next.js configuration
└── package.json         # Project dependencies and scripts

Contributing

Contributions are welcome! Please follow these steps to contribute:

    Fork the repository
    Create a new branch: git checkout -b feature-branch
    Make your changes
    Commit your changes: git commit -am 'Add new feature'
    Push to the branch: git push origin feature-branch
    Create a new Pull Request

License

This project is licensed under the MIT License - see the LICENSE file for details.

markdown


### Creating a Downloadable File

1. **Create the README.md File**:

   - Open a text editor (like Notepad on Windows or TextEdit on macOS).
   - Copy and paste the above content into the text editor.
   - Save the file with the name `README.md`.

2. **Share or Download**:

   - : You can upload the `README.md` file to a file-sharing service like Dropbox or Google Drive and share the link.
   -  Alternatively, create a [GitHub Gist](https://gist.github.com/) with the README content and share the Gist URL.

If you need further assistance with generating a downloadable link or have other questions, feel free to ask!

