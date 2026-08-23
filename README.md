# Playwright 2026 🚀

A hands-on **Playwright + TypeScript** automation portfolio covering UI automation, API testing, framework design, and CI/CD practices.

This repository documents my progression from Playwright fundamentals to a reusable, interview-ready SDET automation framework.

## 🧪 Tech Stack

- **Language:** TypeScript
- **Automation:** Playwright
- **Testing:** Playwright Test
- **API:** Playwright APIRequest / REST API testing
- **Framework:** Page Object Model (POM), fixtures, reusable utilities
- **Build & Package:** Node.js, npm
- **CI/CD:** GitHub Actions
- **Version Control:** Git & GitHub

## 📚 Learning Roadmap

### 1. Playwright Fundamentals

- Browser, context and page
- Locators
- `getByRole`
- `getByLabel`
- `getByText`
- `getByTestId`
- CSS selectors and XPath
- Assertions
- Auto-waiting
- Timeouts

### 2. Browser & UI Automation

- Forms
- Dropdowns
- Checkboxes and radio buttons
- Frames
- Multiple tabs/windows
- Popups and dialogs
- Screenshots and videos
- Navigation and browser events

### 3. Test Design

- Test hooks
- Parameterization
- Dynamic tests
- Environment variables
- Test data
- Reusable utilities
- Fixtures
- Annotations and tags

### 4. Framework & POM

- Page Object Model
- Base page/components
- Reusable page methods
- Test configuration
- Multiple browser projects
- Parallel execution
- Retries
- HTML reporting
- Failure screenshots and traces

### 5. API Automation

- GET / POST / PUT / DELETE
- Request headers
- Query and path parameters
- Authentication
- Request payloads
- Response assertions
- JSON validation
- API + UI end-to-end scenarios

### 6. CI/CD

- GitHub Actions
- Automated Playwright execution
- HTML reports and artifacts
- Environment-based execution
- Docker integration

## 🏗️ Target Framework Structure

```text
Playwright-2026/
├── tests/
│   ├── Chapter01/       # Fundamentals & locators
│   ├── Chapter02/       # Assertions & waits
│   ├── Chapter03/       # UI interactions
│   ├── Chapter04/       # Frames, tabs & popups
│   ├── Chapter05/       # Hooks, data & dynamic tests
│   ├── Chapter06/       # Real-world UI scenarios
│   ├── api/             # API automation
│   └── framework/       # POM-based framework tests
│
├── pages/               # Page Object classes
├── utils/               # Reusable utilities
├── test-data/           # Test data
├── playwright.config.ts
├── package.json
└── README.md
```

## 🎯 Current Focus

I am currently building this repository alongside my Playwright learning, gradually converting tutorial exercises into reusable, real-world automation.

The goal is to demonstrate:

**UI → API → POM → Framework → CI/CD**

rather than simply collecting tutorial scripts.

## 💡 Example: Dynamic Validation

One of the framework patterns used in this project is dynamic test validation using environment-driven data and Page Object methods:

```typescript
const playlistPage = new PlaylistPage(page)

await playlistPage.validateOnPlaylist(
  `${process.env.SEARCH_KEYWORDS} ✅ - YouTube`
)
```

This demonstrates reusable POM methods combined with dynamic test data.

## 🚀 Goal

Build a production-style Playwright framework suitable for modern **SDET / QA Automation Engineer** roles, with strong coverage of UI, API, test architecture, CI/CD, and maintainability.

---

⭐ This repository is actively evolving as I continue building my Playwright and TypeScript automation skills in 2026.
