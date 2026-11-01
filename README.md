## Prerequisites

1. **Node.js 20 or newer** (22 LTS recommended). Download it from https://nodejs.org or install via
   `nvm`. `npm` comes with it.
2. **Git**, to clone the repository.
3. A terminal: Terminal / iTerm on macOS, PowerShell or Git Bash on Windows.

Check that everything is in place:

```bash
node -v    # v20.x or higher
npm -v     # 9.x or higher
git --version
```

## Step-by-step setup

```bash
# 1. Clone the repository and go into the folder
git clone
cd bugbasket_autotests

# 2. Install project dependencies
npm install

# 3. Download the browser Playwright will use for tests (one-time, ~100 MB)
npx playwright install chromium
```

## Run the tests

```bash
npm test
```

Other useful ways to run them:

```bash
npm run test:headed   # watch the browser while tests run
npm run test:ui       # Playwright UI Mode: step through tests, inspect locators
npm run test:debug    # Playwright Inspector: pause and step through each action
npm run test:report   # open the HTML report of the last run
```

## Scripts

| Command               | What it does                      |
| --------------------- | --------------------------------- |
| `npm test`            | Run all Playwright tests headless |
| `npm run test:headed` | Same, with a visible browser      |
| `npm run test:ui`     | Open Playwright UI Mode           |
| `npm run test:debug`  | Run tests in Playwright Inspector |
| `npm run test:report` | Open the last HTML report         |

## Project structure
bugbasket_autotests/
├── .github/              # GitHub Actions CI/CD workflows
├── pages/                # Page Object Model (POM) classes
│   ├── CartPage.ts       # Cart interactions and locators
│   ├── LoginPage.ts      # Login page interactions and locators
│   ├── ProductsPage.ts   # Product catalog interactions and locators
│   └── RegisterPage.ts   # Registration page interactions and locators
├── tests/                # Test specifications
│   ├── auth/             # Authentication test suites (login, register)
│   │   ├── login.spec.ts
│   │   └── register.spec.ts
│   ├── cart/             # Shopping cart tests
│   │   └── cart.spec.ts
│   └── products/         # Product catalog and search test suites
│       ├── search.spec.ts
│       └── catalog.spec.ts
├── playwright.config.ts  # Playwright test configuration
├── package.json          # Project metadata, dependencies, and scripts
└── README.md             # Project documentation
