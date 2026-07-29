# Link Response Headers for Agent Discovery

## Skill Name
link-headers

## Type
discovery

## Description
Add Link response headers to your homepage that point agents to useful resources. This enables automated discovery of APIs, documentation, and agent-specific endpoints.

## Implementation

### HTTP Link Header Format (RFC 8288)
Add the following headers to responses from your homepage (`/`):

```http
Link: </.well-known/api-catalog>; rel="api-catalog"
Link: </docs/api>; rel="service-doc"
Link: </.well-known/agent-skills/index.json>; rel="agent-skills"
Link: </auth.md>; rel="agent-auth"
