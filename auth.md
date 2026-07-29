# auth.md — WeeMake Agent Registration

&gt; **Status**: Manual registration only — no programmatic agent registration available at this time.
&gt; 
&gt; WeeMake is a digital marketing agency (WhatsApp automation with AI, optimized websites, local SEO). 
&gt; We do not currently expose a public API for agent consumption.

---

## Step 1 — Discover

WeeMake does not publish OAuth Protected Resource Metadata or Authorization Server metadata 
for agent registration. This auth.md file is provided for transparency and future compatibility.

---

## Step 2 — Pick a Method

| Method | Availability | Description |
|--------|--------------|-------------|
| **Manual Contact** | ✅ Available | Human-led onboarding via WhatsApp or email |
| **identity_assertion** | ❌ Not available | ID-JAG not supported |
| **service_auth** | ❌ Not available | No verified email registration endpoint |
| **anonymous** | ❌ Not available | No anonymous registration endpoint |

**Current path**: Contact WeeMake directly for any integration needs.

---

## Step 3 — Register

WeeMake does not offer automated agent registration. 

For human users and business inquiries:

- **WhatsApp**: [+55 15 99619-7477](https://wa.me/5515996197477)
- **Email**: [contato@weemake.com.br](mailto:contato@weemake.com.br)
- **Landing Page**: [https://lp-ia.weemake.com.br](https://lp-ia.weemake.com.br)

---

## Step 4 — Claim Ceremony

Not applicable. No claim tokens or verification URIs are issued.

---

## Step 5 — Exchange & Use Credential

Not applicable. No OAuth token endpoint is available for agents.

---

## Errors

| Scenario | Response |
|----------|----------|
| Agent attempts programmatic registration | `501 Not Implemented` — manual contact required |
| Invalid or unsupported identity type | `400 unsupported_identity_type` |

---

## Revocation

Not applicable. No active agent registrations to revoke.

---

## Contact

For agent integration inquiries or to discuss future API access:

- **Email**: contato@weemake.com.br
- **WhatsApp**: https://wa.me/5515996197477

---

*This auth.md file follows the auth.md protocol (WorkOS) for discovery transparency. 
WeeMake reserves the right to enable programmatic agent registration in the future.*
