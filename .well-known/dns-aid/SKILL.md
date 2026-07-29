# DNS for AI Discovery (DNS-AID)

## Skill Name
dns-aid

## Type
discovery

## Description
Publish DNS for AI Discovery (DNS-AID) records under your domain so AI agents can discover your services via DNS. This provides a DNS-based discovery mechanism that works independently of HTTP and can be secured with DNSSEC.

## Implementation

### DNS Records

Add the following SVCB/HTTPS records to your DNS zone:

```dns
; Primary agent discovery endpoint
_index._agents.weemake.com.br.  300  IN  HTTPS  1  .  alpn=h2,h3  endpoint="https://www.weemake.com.br"

; A2A (Agent-to-Agent) discovery
_a2a._agents.weemake.com.br.    300  IN  HTTPS  1  .  alpn=h2,h3  endpoint="https://www.weemake.com.br/.well-known/agent-skills/index.json"

; API catalog discovery
_api._agents.weemake.com.br.    300  IN  HTTPS  1  .  alpn=h2,h3  endpoint="https://www.weemake.com.br/.well-known/api-catalog"
