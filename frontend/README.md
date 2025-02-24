# My Next.js App

This is a Next.js application that utilizes Material-UI (MUI) for theming and styling. The application includes a form for inputting patient information and a page to retrieve patient details by UUID.

## Features

- A form to input patient name, weight, and height.
- A page to display patient information based on a UUID.
- Utilizes MUI for a consistent and modern UI.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (version 5.6 or later)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd my-nextjs-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```
npm run dev
```

The application will be available at `http://localhost:3000`.

### Pages

- **Home Page**: `pages/index.tsx` - A welcome message and navigation to the form.
- **Form Page**: `pages/form.tsx` - A form to input patient details.
- **Patient Information Page**: `pages/patient.tsx` - Displays patient information based on UUID.

### Components

- **Form Component**: `components/Form.tsx` - Handles input and submission of patient data.
- **Patient Info Component**: `components/PatientInfo.tsx` - Displays formatted patient information.

### Utilities

- **API Utilities**: `utils/api.ts` - Contains functions for making API calls to fetch patient data.

## License

This project is licensed under the MIT License.