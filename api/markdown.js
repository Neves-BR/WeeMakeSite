export default function handler(req, res) {
  const accept = req.headers['accept'] || '';
  
  if (!accept.includes('text/markdown')) {
    return res.status(404).end();
  }
  
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.setHeader('X-Markdown-Tokens', '512');
  res.setHeader('Vary', 'Accept');
  
  res.send(`# WeeMake

**Automacao de WhatsApp com IA**, Sites Otimizados e SEO Local Google.

## Solucoes
- Automacao de WhatsApp com IA
- Chatbots Inteligentes
- CRM com IA
- Desenvolvimento de Sites Otimizados (SEO/AEO/GEO)
- SEO Local Google
- ERP Modular (Em breve)

## Contato
- WhatsApp: https://wa.me/5515996197477
- Email: contato@weemake.com.br
- Instagram: https://instagram.com/weemake.ai

## Links Uteis
- Site: https://www.weemake.com.br
- Automações: https://lp-ia.weemake.com.br`);
}
