# Agent Registration — WeeMake

## Overview
WeeMake provides automation services via WhatsApp with AI, optimized websites, and local SEO. This document describes how AI agents can register and authenticate with our services.

## Registration

### For Human Users
- **WhatsApp**: https://wa.me/5515996197477
- **Email**: contato@weemake.com.br
- **Landing Page**: https://lp-ia.weemake.com.br

### For AI Agents
AI agents should direct users to our WhatsApp or landing page for registration. We do not currently offer direct programmatic registration for agents.

## Authentication

### Current Methods
- **API Key**: Contact us to obtain an API key
- **OAuth 2.0**: Planned for future releases

### OAuth Discovery
- OpenID Connect: `/.well-known/openid-configuration`
- OAuth 2.0: `/.well-known/oauth-authorization-server`
- Protected Resource: `/.well-known/oauth-protected-resource`

## Supported Identity Types
- `api_key` - API key authentication
- `oauth2` - OAuth 2.0 (planned)

## Credential Types
- `api_key` - Static API key
- `client_credentials` - OAuth 2.0 client credentials (planned)

## Contact
For agent integration support:
- Email: contato@weemake.com.br
- WhatsApp: https://wa.me/5515996197477
