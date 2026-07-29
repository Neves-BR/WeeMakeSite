import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const accept = req.headers['accept'] || '';

  // Markdown negotiation
  if (accept.includes('text/markdown')) {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    res.setHeader('X-Markdown-Tokens', '512');
    res.setHeader('Vary', 'Accept');
    
    res.send(`# WeeMake

**Automacao de WhatsApp com IA**, Sites Otimizados e SEO Local Google.

## Solucoes
- **Automacao de WhatsApp com IA** — Chatbots inteligentes 24/7
- **Chatbots com IA** — Atendimento humanizado automatizado
- **CRM com IA** — Gestao de relacionamento inteligente
- **Desenvolvimento de Sites** — Otimizados para SEO, AEO e GEO
- **SEO Local Google** — Especialista em posicionamento local
- **ERP Modular** — Sistema de gestao sob demanda (Em breve)

## Como Funciona
1. Diagnostico do funil de vendas
2. Configuracao da IA personalizada
3. Integracao com CRM e ferramentas
4. Testes e ajustes finos
5. Go-live e monitoramento continuo

## Contato
- **WhatsApp**: https://wa.me/5515996197477
- **Email**: contato@weemake.com.br
- **Instagram**: https://instagram.com/weemake.ai
- **Landing Page**: https://lp-ia.weemake.com.br

## Sobre
Ha 4 anos construindo solucoes de software e design. Em 2025, evoluimos para IA com automacao de WhatsApp, sites otimizados e SEO Local.

## Links Uteis
- Site: https://www.weemake.com.br
- API Catalog: https://www.weemake.com.br/.well-known/api-catalog
- Agent Skills: https://www.weemake.com.br/.well-known/agent-skills/index.json
- Auth: https://www.weemake.com.br/auth.md`);
    return;
  }

  // Para HTML e outros, serve index.html estatico
  try {
    const htmlPath = join(process.cwd(), 'index.html');
    const html = readFileSync(htmlPath, 'utf-8');
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Vary', 'Accept');
    res.send(html);
  } catch (error) {
    res.status(500).send('Error loading page');
  }
}
