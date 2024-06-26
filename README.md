# FlowLaunch Product Listing App

This is a product listing web application built with React and Tailwind CSS. It allows users to browse and search through a collection of products provided by the FlowLaunch API.

## Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd flowlaunch-product-listing
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add the following line to the `.env.local` file:
     ```
     NEXT_PUBLIC_API_URL=https://api.flowlaunch.com/products
     ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Navigate to `http://localhost:3000` to view the app.

## Features

- Browse and search through a collection of products.
- Click on a product to view its details in a modal.
- Clean and responsive UI using Tailwind CSS.

## Technologies Used

- React
- Tailwind CSS
- Next.js
- React Responsive Carousel
