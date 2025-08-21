# Security Policy

## Supported Versions

We currently provide security support for the following versions of the project:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

The security of MCP Weather Server is a priority. If you discover a security vulnerability, we appreciate you reporting it responsibly.

### How to Report

**DO NOT** report security vulnerabilities through public GitHub issues.

Instead, please:

1. **Send an email** to zkjon@github with the vulnerability details
2. **Include the following information**:
   - Detailed description of the vulnerability
   - Steps to reproduce the issue
   - Affected software version
   - Potential impact of the vulnerability
   - Any temporary mitigations you have identified

### What to Expect

- **Confirmation**: You will receive confirmation of your report within 48 hours
- **Initial assessment**: We will evaluate the vulnerability within 5 business days
- **Regular updates**: We will keep you informed of progress every 7 days
- **Resolution**: We will work to resolve the vulnerability as soon as possible

### Disclosure Process

1. **Report received**: We confirm receipt of the report
2. **Verification**: We verify and reproduce the vulnerability
3. **Patch development**: We develop a solution
4. **Testing**: We thoroughly test the patch
5. **Release**: We release the corrected version
6. **Public disclosure**: We publish vulnerability details after the release

## Known Security Vulnerabilities

There are currently no known security vulnerabilities in the supported versions.

## Security Best Practices

### For Users

- **Keep updated**: Always use the latest stable version
- **Secure configuration**: Review your MCP server configuration
- **Monitoring**: Monitor server logs for unusual activity
- **Network**: Run the server in a secure network environment

### For Developers

- **Input validation**: Always validate and sanitize user inputs
- **Error handling**: Implement robust error handling
- **Secure logging**: Do not log sensitive information
- **Dependencies**: Keep dependencies updated

## Project Security Considerations

### External APIs

This project uses the following external APIs:

- **Open-Meteo Geocoding API**: `https://geocoding-api.open-meteo.com/`
- **Open-Meteo Weather API**: `https://api.open-meteo.com/`

**Potential risks**:
- Dependency on external services
- Possible exposure of location data
- API rate limits

**Mitigations**:
- The APIs used are public and do not require authentication
- No user data is stored locally
- Error handling is implemented for API failures

### Data Handled

The server handles the following types of data:

- **Location names**: Provided by the user
- **Geographic coordinates**: Obtained from the geocoding API
- **Weather data**: Obtained from the weather API

**Data policy**:
- No user data is stored
- Queried locations are not logged
- All data is processed in memory

## Secure Configuration

### Environment Variables

Currently the project does not require sensitive environment variables. If added in the future:

- Use `.env` files for local development
- Never commit `.env` files to the repository
- Use secret managers in production

### Network Permissions

The server requires:

- **Outbound access**: To query Open-Meteo APIs
- **Local port**: For MCP communication (configured in code)

## Security Updates

Security updates are published:

- As GitHub releases with security tags
- With detailed release notes
- With update instructions

## Contact

For security reports or related questions:

- **Security email**: zkjon@github
- **GitHub**: [@zkjon](https://github.com/zkjon)
- **Project**: [mcp-wheather](https://github.com/zkjon/mcp-wheather)

## Acknowledgments

We thank all security researchers who report vulnerabilities responsibly.

---

**Last updated**: January 2025
**Document version**: 1.0