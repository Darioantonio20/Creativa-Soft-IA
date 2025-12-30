# Frontend - React.js Application

This is a modern, responsive web UI/UX built with:

- **React.js** - Component-based UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Atomic Design** - Component architecture methodology

## Project Structure

The project follows Atomic Design principles with the following structure:

```
src/
├── components/
│   ├── atoms/          # Basic building blocks (Button, Input, Text)
│   ├── molecules/      # Simple component combinations (FormField, Card)
│   ├── organisms/      # Complex components (Navbar, Footer, FeaturesGrid)
│   ├── templates/      # Page layouts (MainLayout)
│   └── pages/          # Complete pages (HomePage)
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

## Atomic Design Methodology

### Atoms
The smallest, most basic building blocks of the UI:
- `Button` - Reusable button component with variants
- `Input` - Form input with validation support
- `Text` - Typography component for headings and paragraphs

### Molecules
Simple combinations of atoms:
- `FormField` - Input with label and optional button
- `Card` - Container for content with title and description

### Organisms
Complex, reusable components:
- `Navbar` - Navigation bar with logo and links
- `Footer` - Footer with company info and links
- `FeaturesGrid` - Grid layout for feature cards

### Templates
Page-level layouts:
- `MainLayout` - Main application layout with navbar and footer

### Pages
Complete page implementations:
- `HomePage` - Landing page with hero, features, and about sections

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install Dependencies
```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Tailwind CSS

Tailwind CSS is configured with PostCSS. The configuration files are:
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

Tailwind directives are imported in `src/index.css`.

## Component Usage

### Example: Using Atomic Components

```tsx
import { Button, Input, Text } from './components';

function MyComponent() {
  return (
    <div>
      <Text variant="h1">Hello World</Text>
      <Input label="Email" type="email" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

### Example: Using the HomePage

The `HomePage` component demonstrates how to combine all atomic design levels:

```tsx
import { HomePage } from './components';

function App() {
  return <HomePage />;
}
```

## Styling Guidelines

- Use Tailwind utility classes for styling
- Follow mobile-first responsive design
- Maintain consistent spacing and color schemes
- Use semantic color names from Tailwind's palette

## TypeScript

All components are written in TypeScript with proper type definitions:
- Props interfaces are defined for all components
- Type-safe component composition
- Better IDE support and autocomplete

## Contributing

When adding new components:
1. Determine the appropriate atomic level (atom, molecule, organism, template, or page)
2. Create the component in the correct directory
3. Export it from the directory's `index.ts`
4. Add TypeScript interfaces for all props
5. Use Tailwind CSS for styling
6. Follow existing naming conventions

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
