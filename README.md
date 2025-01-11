# Blogzilla - Blog Application

**Blogzilla** is a full-stack blog application built using **React**, **Express**, **Mongoose**, **TypeScript**, **Tailwind CSS**, and other modern tools. It allows users to write, edit, and manage blog posts, providing a clean and user-friendly interface with real-time functionality.

## Features

- **User Authentication**: Secure sign-up and login for users to manage their blog posts.
- **Blog Post Creation & Editing**: Users can create, edit, and delete blog posts with an intuitive rich text editor.
- **Real-Time Updates**: Instant updates to blog posts and user interactions.
- **Responsive Design**: The app is fully responsive, ensuring a smooth experience across devices.
- **Rich Text Editor**: A custom editor powered by **TipTap** for creating blog posts with formatted text, links, images, and more.
- **Icons & UI**: Clean and modern UI using **Tailwind CSS** and **Lucid React** icons for a polished look.

## Technologies Used

- **Frontend**:

  - **React**: JavaScript library for building user interfaces.
  - **React Router**: For routing and navigation within the app.
  - **TypeScript**: A statically typed superset of JavaScript for better developer experience and reliability.
  - **Tailwind CSS**: Utility-first CSS framework for styling the app.
  - **Lucid React Icons**: A set of customizable icons for the UI.
  - **TipTap**: A rich text editor to create and manage blog content.

- **Backend**:
  - **Express**: Web framework for Node.js, providing an API for handling user authentication and blog posts.
  - **Mongoose**: MongoDB object modeling for handling data persistence.
  - **MongoDB**: NoSQL database to store user and blog data.

## Getting Started

### Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** (with `npm` or `yarn`)
- **MongoDB** (either locally or via MongoDB Atlas)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/anishudupa/blogzilla.git
   ```

2. **Server setup**

```bash
  cd server
  npm i
  npm run dev
```

3. **Client Setup**

```bash
  cd client
  npm i
  npm run dev
```

### Access the App

Once the application is running, you can access it through:

locally: [localhost](http://localhost:5000)

Live app: [blogzilla](https://blogzilla-phi.vercel.app/)
