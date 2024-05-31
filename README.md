# Stock Data Visualizer

This is a React application built with Vite and TypeScript, styled with Tailwind CSS. It fetches and displays stock data using the Alpha Vantage API and is deployed on GitHub Pages.

## Features

- Fetches intra day stock data using the Alpha Vantage API.
- Displays data in both chart (candlestick and volume) and table formats.
- Allows the user to select the stock symbol, view mode (chart or data), and time interval.
- Implements efficient data fetching, caching, and error handling.
- Responsive design with Tailwind CSS.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/chamallakshika09/stock-data-visualizer.git
    cd stock-data-visualizer
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    - Copy the .env.sample file to .env:

      ```bash
      cp .env.sample .env
      ```

    - Edit the .env file and add your Alpha Vantage API key and base URL:

      ```bash
      VITE_APP_API_KEY=your_alpha_vantage_api_key
      VITE_APP_BASE_URL=https://www.alphavantage.co/query
      ```

## Running the App

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Open the app in your browser:**

   Visit `http://localhost:3000` to see your app in action.

## Deployment

This app is deployed using GitHub Pages. To deploy your own version:

1. **Build the app:**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**

   ```bash
   npm run deploy
   ```

The app will be available at `https://chamallakshika09.github.io/stock-data-visualizer`.

## Usage

1. **Search for a stock symbol:**

   Use the search bar to enter a stock symbol (e.g., `AAPL` for Apple Inc.).

2. **Select view mode:**

   Use the "View" dropdown to switch between chart view and data view.

3. **Select time interval:**

   Use the "Interval" dropdown to select the time interval for the data (e.g., `1min`, `5min`, `15min`).

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Alpha Vantage](https://www.alphavantage.co/)
