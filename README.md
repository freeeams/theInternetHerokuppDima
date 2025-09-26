# Playwright TypeScript Project

A modern end-to-end testing project using Playwright with TypeScript.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npm run install:browsers
```

## Running Tests

### Basic test execution
```bash
# Run all tests
npm test

# Run tests in headed mode (with browser UI)
npm run test:headed

# Run tests in debug mode
npm run test:debug

# Run tests with UI mode
npm run test:ui
```

### View test reports
```bash
npm run report
```

## Project Structure

```
├── tests/                 # Test files
│   └── example.spec.ts    # Example test suite
├── playwright.config.ts   # Playwright configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Node.js dependencies and scripts
└── .gitignore           # Git ignore rules
```

## Configuration

The project is configured with:

- **TypeScript**: For type safety and better development experience
- **Multiple browsers**: Chromium, Firefox, and WebKit
- **HTML Reporter**: For detailed test reports
- **Screenshots**: Captured on test failures
- **Video recording**: For failed tests
- **Trace collection**: For debugging failed tests

## Writing Tests

Tests are located in the `tests/` directory. Each test file should have the `.spec.ts` extension.

Example test structure:
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page.locator('h1')).toBeVisible();
  });
});
```

## Useful Commands

- `playwright codegen` - Generate tests by recording your actions
- `playwright test --reporter=line` - Run tests with line reporter
- `playwright test --grep="test name"` - Run specific tests
- `playwright test tests/example.spec.ts` - Run specific test file

## Browser Configuration

The project is configured to run tests on:
- Chromium (Desktop Chrome)
- Firefox (Desktop Firefox)  
- WebKit (Desktop Safari)

Mobile viewports and other browsers can be enabled in `playwright.config.ts`.

## CI/CD Integration

The configuration includes CI-friendly settings:
- Retries on CI environments
- Appropriate worker configuration
- Fail-fast on `test.only` in CI

## Troubleshooting

1. **Module not found errors**: Run `npm install` to install dependencies
2. **Browser not found**: Run `npm run install:browsers`
3. **TypeScript errors**: Ensure `@playwright/test` is installed and `tsconfig.json` is properly configured

For more information, visit the [Playwright documentation](https://playwright.dev/).