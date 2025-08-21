# Contributing Guide

Thank you for your interest in contributing to MCP Weather Server! 🎉

This document will guide you through the contribution process to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Environment Setup](#development-environment-setup)
- [Development Process](#development-process)
- [Code Standards](#code-standards)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)
- [Documentation](#documentation)

## Code of Conduct

This project adheres to the [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior.

## How to Contribute

There are many ways to contribute to MCP Weather Server:

- 🐛 **Report bugs**
- 💡 **Suggest new features**
- 📝 **Improve documentation**
- 🔧 **Write code**
- 🧪 **Write tests**
- 🎨 **Improve user experience**

## Development Environment Setup

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git
- Code editor (we recommend VS Code)

### Initial Setup

1. **Fork the repository**
   ```bash
   # Fork the repository on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/mcp-weather.git
   cd mcp-weather
   ```

2. **Set up upstream repository**
   ```bash
   git remote add upstream https://github.com/zkjon/mcp-weather.git
   ```

3. **Install dependencies**
   ```bash
   bun install
   ```

4. **Verify everything works**
   ```bash
   bun run start
   ```

### Project Structure

```
mcp-weather/
├── main.ts              # Main MCP server
├── package.json         # Project configuration
├── bun.lock            # Dependencies lock file
├── README.md           # Main documentation
├── LICENSE             # MIT License
├── CODE_OF_CONDUCT.md  # Code of conduct
├── SECURITY.md         # Security policies
└── CONTRIBUTING.md     # This guide
```

## Development Process

### Git Workflow

1. **Sync your fork**
   ```bash
   git checkout main
   git fetch upstream
   git merge upstream/main
   ```

2. **Create a branch for your feature**
   ```bash
   git checkout -b feature/your-feature-name
   # or for bugs:
   git checkout -b fix/bug-description
   ```

3. **Make your changes**
   - Write clean and well-documented code
   - Follow the project's code standards
   - Add tests if necessary

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: clear description of your change"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**

### Commit Conventions

We use [Conventional Commits](https://www.conventionalcommits.org/) to maintain a clean history:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Formatting changes (do not affect functionality)
- `refactor:` Code refactoring
- `test:` Add or modify tests
- `chore:` Maintenance tasks

**Examples:**
```bash
git commit -m "feat: add support for multiple languages"
git commit -m "fix: correct geocoding error"
git commit -m "docs: update README with new instructions"
```

## Code Standards

### TypeScript/JavaScript

- **Use TypeScript** for static typing
- **Indentation**: 4 spaces
- **Semicolons**: Always
- **Quotes**: Double quotes for strings
- **Naming**: camelCase for variables and functions, PascalCase for classes

### Code Example

```typescript
// ✅ Good
interface WeatherData {
    temperature: number;
    humidity: number;
    location: string;
}

async function getWeatherData(location: string): Promise<WeatherData> {
    const response = await fetch(`https://api.example.com/weather?location=${location}`);
    const data = await response.json();
    
    return {
        temperature: data.temp,
        humidity: data.humidity,
        location: location
    };
}

// ❌ Bad
function getweather(loc) {
    return fetch('https://api.example.com/weather?location=' + loc).then(r => r.json())
}
```

### Comments

- **Document complex functions**
- **Explain the "why", not the "what"**
- **Use JSDoc for public functions**

```typescript
/**
 * Gets weather data for a specific location
 * @param location - Location name (city, country, etc.)
 * @returns Structured weather data
 */
async function getWeatherData(location: string): Promise<WeatherData> {
    // Implementation...
}
```

## Submitting Pull Requests

### Before Submitting

- [ ] Your code compiles without errors
- [ ] You have tested your changes locally
- [ ] You have added tests if necessary
- [ ] Documentation is updated
- [ ] You follow code conventions
- [ ] Your commit follows conventions

### Pull Request Template

```markdown
## Description
Brief description of the changes made.

## Type of Change
- [ ] Bug fix (change that fixes an issue)
- [ ] New feature (change that adds functionality)
- [ ] Breaking change (change that breaks compatibility)
- [ ] Documentation

## How to Test
1. Step 1
2. Step 2
3. Step 3

## Checklist
- [ ] My code follows the project standards
- [ ] I have performed a self-review of my code
- [ ] I have commented my code in hard-to-understand areas
- [ ] I have updated the corresponding documentation
- [ ] My changes generate no new warnings
```

### Review Process

1. **Automatic review**: GitHub Actions will run automatic checks
2. **Peer review**: A maintainer will review your code
3. **Feedback**: You might receive comments for improvement
4. **Approval**: Once approved, your PR will be merged

## Reporting Bugs

### Before Reporting

- Search in [existing issues](https://github.com/zkjon/mcp-weather/issues)
- Verify you are using the latest version
- Reproduce the bug in a clean environment

### Information to Include

- **Clear description** of the problem
- **Steps to reproduce** the bug
- **Expected behavior** vs **actual behavior**
- **Environment**: OS, Node/Bun version, project version
- **Error logs** if available
- **Screenshots** if relevant

### Bug Report Template

```markdown
**Bug Description**
Clear and concise description of the problem.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll to '...'
4. See error

**Expected Behavior**
Description of what you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - OS: [e.g. Windows 11]
 - Runtime: [e.g. Bun 1.0.0]
 - Version: [e.g. 1.0.0]

**Additional Context**
Any other relevant information.
```

## Requesting Features

### Before Requesting

- Search in existing issues
- Consider if the feature fits the project's purpose
- Think about specific use cases

### Information to Include

- **Clear description** of the feature
- **Justification**: Why is it needed?
- **Use cases**: How would it be used?
- **Alternatives considered**
- **Suggested implementation** (optional)

## Documentation

### Types of Documentation

- **README.md**: Main project documentation
- **Code comments**: To explain complex logic
- **JSDoc**: To document public APIs
- **.md files**: For specific guides

### Documentation Standards

- **Clarity**: Write for users of all levels
- **Examples**: Include practical examples
- **Updates**: Keep documentation synchronized with code
- **Language**: Main documentation in English, code in English

## Frequently Asked Questions

### Can I contribute if I'm a beginner?

Absolutely! We have issues labeled "good first issue" perfect for getting started.

### What happens if my PR is not accepted?

Don't be discouraged. You will receive constructive feedback to improve your contribution.

### Can I work on multiple features at once?

It's better to focus on one feature at a time to facilitate review.

### Do I need to write tests?

For new features, yes. For small bugs, it's not always necessary.

## Contact

If you have questions about contributions:

- **GitHub Issues**: For public discussions
- **GitHub Discussions**: For general questions
- **Maintainer**: [@zkjon](https://github.com/zkjon)

## Acknowledgments

All contributors will be recognized in the project README.

---

Thank you for contributing to MCP Weather Server! 🌟