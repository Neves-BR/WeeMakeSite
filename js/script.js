/**
 * WEE MAKE - Scripts do Site
 * Animações, interatividade, otimizações e sistema de idiomas (i18n)
 */

(function() {
    'use strict';

    // ============================================
    // UTILIDADES
    // ============================================
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);
    const debounce = (fn, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    };

    // ============================================
    // SISTEMA DE INTERNACIONALIZAÇÃO (i18n)
    // ============================================
    const i18n = {
        currentLang: 'pt-BR',
        
        translations: {
            'pt-BR': {
                // Navegação
                'nav.home': 'Início',
                'nav.solutions': 'Soluções',
                'nav.howItWorks': 'Como Funciona',
                'nav.about': 'Sobre',
                'nav.faq': 'FAQ',
                'nav.contact': 'Contato',
                'nav.whatsapp': 'Falar no WhatsApp',
                
                // Hero
                'hero.badge': 'Tecnologia que escala negócios',
                'hero.title1': 'Automação de ',
                'hero.titleHighlight': 'WhatsApp com IA',
                'hero.title2': ', Sites Otimizados e SEO Local Google',
                'hero.description': 'Impulsione suas vendas com automações inteligentes de IA, desenvolva sites otimizados para SEO, AEO e GEO, e conquiste o topo do Google com nossa especialidade em SEO Local para empresas.',
                'hero.ctaPrimary': 'Conheça as Automações',
                'hero.ctaSecondary': 'Ver Soluções',
                'hero.stat1': 'Anos de experiência',
                'hero.stat2': 'Atendimento com IA',
                'hero.stat3': 'Personalizável',
                'hero.scroll': 'Role para explorar',
                
                // Soluções
                'solutions.tag': 'Nossas Soluções',
                'solutions.title1': 'Tecnologia sob medida para ',
                'solutions.titleHighlight': 'escalar seu negócio',
                'solutions.subtitle': 'Quatro vertentes de soluções que se complementam para transformar sua operação e presença digital',
                
                'solutions.card1.badge': 'Mais Popular',
                'solutions.card1.title': 'Inteligência e Automação',
                'solutions.card1.description': 'Revolucione seu atendimento e conversão com tecnologia de ponta. Nossas automações completas de WhatsApp com IA operam 24/7, qualificando leads, respondendo dúvidas e conduzindo vendas de forma humanizada.',
                'solutions.card1.feature1': 'Chatbots avançados com IA generativa',
                'solutions.card1.feature2': 'Gestão de CRM integrada',
                'solutions.card1.feature3': 'Estruturação de funis de vendas',
                'solutions.card1.feature4': 'Gerenciamento automatizado de redes sociais',
                'solutions.card1.cta': 'Saber mais sobre Automações',
                
                'solutions.card2.badge': 'Em Breve',
                'solutions.card2.title': 'Sistemas de Gestão (ERP)',
                'solutions.card2.description': 'Controle total da sua operação em uma única plataforma. Nossos ERPs modulares se adaptam a diversos nichos de mercado, garantindo que você pague apenas pelas ferramentas que sua empresa realmente precisa.',
                'solutions.card2.feature1': 'Módulos sob demanda',
                'solutions.card2.feature2': 'Adaptável ao seu nicho',
                'solutions.card2.feature3': 'Dashboards em tempo real',
                'solutions.card2.feature4': 'Integração com automações de IA',
                'solutions.card2.cta': 'Em breve',
                
                'solutions.card3.badge': 'Novo',
                'solutions.card3.title': 'Desenvolvimento de Sites',
                'solutions.card3.description': 'Criamos sites de alta performance otimizados para as três camadas da busca moderna: SEO tradicional, AEO para respostas diretas e assistentes de voz, e GEO para IA generativa como ChatGPT e Gemini.',
                'solutions.card3.feature1': 'SEO técnico e estratégico avançado',
                'solutions.card3.feature2': 'AEO — otimização para respostas diretas',
                'solutions.card3.feature3': 'GEO — otimização para IA generativa',
                'solutions.card3.feature4': 'Performance, acessibilidade e Core Web Vitals',
                'solutions.card3.cta': 'Solicitar orçamento para Sites',
                
                'solutions.card4.badge': 'Especialista Google',
                'solutions.card4.title': 'SEO Local para Empresas',
                'solutions.card4.description': 'Seja encontrado por quem está perto e pronto para comprar. Como especialistas Google em SEO Local, posicionamos sua empresa no Google Business Profile, Google Maps e busca local, gerando mais ligações, visitas e vendas.',
                'solutions.card4.feature1': 'Otimização completa do Google Business Profile',
                'solutions.card4.feature2': 'Estratégia de citações locais e NAP consistente',
                'solutions.card4.feature3': 'Gestão de avaliações e reputação local',
                'solutions.card4.feature4': 'Relatórios mensais de ranking e conversões',
                'solutions.card4.cta': 'Quero aparecer no Google',
                
                // Como Funciona
                'howItWorks.tag': 'Processo',
                'howItWorks.title1': 'Como a ',
                'howItWorks.title2': ' transforma seu atendimento',
                'howItWorks.subtitle': 'De diagnóstico a operação em 5 passos simples',
                'howItWorks.step1.title': 'Diagnóstico do Funil',
                'howItWorks.step1.description': 'Analisamos seu processo de vendas atual, identificando gargalos e oportunidades de automação no atendimento via WhatsApp.',
                'howItWorks.step2.title': 'IA Personalizada',
                'howItWorks.step2.description': 'Treinamos a inteligência artificial com o tom de voz da sua marca, produtos, serviços e respostas frequentes dos clientes.',
                'howItWorks.step3.title': 'Integração Completa',
                'howItWorks.step3.description': 'Conectamos o chatbot ao seu CRM, calendário, sistema de pagamentos e outras ferramentas essenciais do seu negócio.',
                'howItWorks.step4.title': 'Testes e Ajustes',
                'howItWorks.step4.description': 'Realizamos testes extensivos para garantir que a IA responda de forma natural e eficiente, ajustando conforme necessário.',
                'howItWorks.step5.title': 'Go-live e Monitoramento',
                'howItWorks.step5.description': 'A automação entra no ar e monitoramos o desempenho, fazendo melhorias contínuas com base nos dados reais.',
                
                // Sobre
                'about.tag': 'Sobre Nós',
                'about.title1': 'De software e design à ',
                'about.titleHighlight': 'Inteligência Artificial',
                'about.paragraph1': 'Nossa história começou há <strong>4 anos</strong>, construindo soluções através de softwares e design gráfico. Ao longo dessa jornada, percebemos que pequenos e médios negócios precisavam de algo além: <strong>escalar o atendimento sem perder a proximidade com o cliente</strong>.',
                'about.paragraph2': 'Por isso, em <strong>2025</strong>, evoluímos. Trouxemos a Inteligência Artificial para o nosso DNA, especializando-nos em <strong>automações de WhatsApp humanizadas</strong>, <strong>sites otimizados para SEO, AEO e GEO</strong>, e <strong>SEO Local no Google</strong>.',
                'about.paragraph3': 'Hoje, transformamos a rotina da sua empresa com tecnologia sob medida e eficiência real. Cada solução é pensada para gerar resultados mensuráveis desde o primeiro dia.',
                'about.cta': 'Descubra nossas Automações',
                'about.card1.title': 'Software Sob Medida',
                'about.card1.description': 'Desenvolvemos soluções personalizadas que se adaptam perfeitamente aos processos do seu negócio.',
                'about.card2.title': 'Segurança e Confiabilidade',
                'about.card2.description': 'Infraestrutura robusta com criptografia de ponta a ponta e conformidade com LGPD.',
                'about.card3.title': 'Resultados Imediatos',
                'about.card3.description': 'Implementação ágil com métricas claras de ROI desde o primeiro mês de operação.',
                
                // FAQ
                'faq.tag': 'Dúvidas Frequentes',
                'faq.title1': 'Perguntas que recebemos com ',
                'faq.titleHighlight': 'frequência',
                'faq.subtitle': 'Tudo o que você precisa saber sobre nossas soluções',
                'faq.q1.question': 'O que é automação de WhatsApp com IA?',
                'faq.q1.answer': 'Automação de WhatsApp com IA é uma tecnologia que utiliza inteligência artificial para responder mensagens automaticamente, qualificar leads, agendar reuniões e conduzir conversas de vendas no WhatsApp de forma humanizada, 24 horas por dia, 7 dias por semana. A IA aprende com o tempo, melhorando suas respostas com base nas interações reais.',
                'faq.q2.question': 'O que é SEO, AEO e GEO e por que meu site precisa disso?',
                'faq.q2.answer': '<strong>SEO (Search Engine Optimization)</strong> otimiza seu site para aparecer nas buscas orgânicas do Google. <strong>AEO (Answer Engine Optimization)</strong> posiciona seu conteúdo para respostas diretas e assistentes de voz como Alexa e Google Assistente. <strong>GEO (Generative Engine Optimization)</strong> otimiza seu site para ser citado por IA generativa como ChatGPT, Gemini e Claude. Juntos, garantem visibilidade máxima em todos os canais de busca modernos — não apenas no Google, mas também nas IAs que as pessoas usam cada vez mais.',
                'faq.q3.question': 'O que é SEO Local e como ele ajuda minha empresa?',
                'faq.q3.answer': '<strong>SEO Local</strong> é a otimização da presença da sua empresa nas buscas geolocalizadas do Google — Google Maps, Google Business Profile e resultados de "perto de mim". Como <strong>especialistas Google em SEO Local</strong>, otimizamos seu perfil, gerenciamos avaliações, criamos citações locais consistentes e implementamos schema markup local. O resultado: mais ligações, mais visitas à loja e mais vendas de clientes que estão a poucos quilômetros de você e prontos para comprar.',
                'faq.q4.question': 'Quanto custa implementar um chatbot de IA no WhatsApp?',
                'faq.q4.answer': 'O investimento varia conforme o volume de atendimento e as funcionalidades necessárias. A WeeMake oferece planos flexíveis adaptados ao tamanho do seu negócio. Entre em contato pelo WhatsApp <a href="https://wa.me/5515996197477">(15) 99619-7477</a> para um orçamento personalizado sem compromisso.',
                'faq.q5.question': 'Como funciona o ERP modular da WeeMake?',
                'faq.q5.answer': 'Nossos ERPs modulares permitem que você escolha apenas os módulos que sua empresa precisa — como vendas, estoque, financeiro, RH e analytics — pagando apenas pelo que utiliza. Cada módulo se integra perfeitamente aos outros, criando um ecossistema de gestão completo e escalável.',
                'faq.q6.question': 'A automação de WhatsApp funciona para qualquer tipo de negócio?',
                'faq.q6.answer': 'Sim! Nossas soluções de automação de WhatsApp com IA são adaptáveis a diversos nichos: e-commerce, clínicas, imobiliárias, academias, consultórios, restaurantes, escolas e muito mais. A IA é treinada especificamente para o contexto do seu negócio, garantindo respostas relevantes e personalizadas.',
                'faq.q7.question': 'Quanto tempo leva para implementar a automação?',
                'faq.q7.answer': 'A implementação inicial pode ser feita em poucos dias. O tempo exato depende da complexidade do funil de vendas e das integrações necessárias. Após a configuração, a IA começa a operar imediatamente e vai aprimorando suas respostas com o tempo através de machine learning.',
                'faq.q8.question': 'Preciso ter conhecimento técnico para usar?',
                'faq.q8.answer': 'Não! Nossas soluções são projetadas para serem intuitivas. Oferecemos treinamento completo e suporte contínuo. A interface é amigável e nossa equipe cuida de toda a parte técnica, desde a configuração inicial até as atualizações e manutenção.',
                
                // CTA
                'cta.title1': 'Pronto para ',
                'cta.titleHighlight': 'escalar',
                'cta.title2': ' seu negócio?',
                'cta.description': 'Transforme seu atendimento, conquiste o Google e veja resultados reais em poucos dias. Nossa equipe está pronta para entender suas necessidades e propor a melhor solução.',
                'cta.button1': 'Falar no WhatsApp',
                'cta.button2': 'Conhecer Automações',
                
                // Contato
                'contact.tag': 'Contato',
                'contact.title1': 'Vamos ',
                'contact.titleHighlight': 'conversar',
                'contact.subtitle': 'Escolha o canal que preferir e fale com a gente',
                'contact.whatsapp.title': 'WhatsApp',
                'contact.whatsapp.description': 'Tem dúvidas ou quer um orçamento? Fale diretamente com a nossa equipe de forma rápida e prática.',
                'contact.whatsapp.action': 'Chamar agora',
                'contact.instagram.title': 'Instagram',
                'contact.instagram.description': 'Acompanhe nossos bastidores, dicas de tecnologia e novidades sobre IA para negócios.',
                'contact.instagram.action': 'Seguir no Instagram',
                'contact.email.title': 'Email',
                'contact.email.description': 'Prefere email? Envie sua mensagem e responderemos em até 24 horas úteis.',
                'contact.email.action': 'Enviar email',
                
                // Footer
                'footer.tagline1': 'Tecnologia que escala negócios.',
                'footer.tagline2': 'Automação de WhatsApp com IA, sites otimizados para SEO/AEO/GEO e SEO Local Google para empresas que querem crescer.',
                'footer.nav.title': 'Navegação',
                'footer.nav.home': 'Início',
                'footer.nav.solutions': 'Soluções',
                'footer.nav.howItWorks': 'Como Funciona',
                'footer.nav.about': 'Sobre',
                'footer.nav.faq': 'FAQ',
                'footer.nav.contact': 'Contato',
                'footer.services.title': 'Serviços',
                'footer.services.service1': 'Automação WhatsApp',
                'footer.services.service2': 'Chatbots com IA',
                'footer.services.service3': 'CRM Inteligente',
                'footer.services.service4': 'Sites Otimizados (SEO/AEO/GEO)',
                'footer.services.service5': 'Especialista Google SEO Local',
                'footer.services.service6': 'ERP Modular (Em breve)',
                'footer.contact.title': 'Contato',
                'footer.contact.whatsapp': 'WhatsApp: (15) 99619-7477',
                'footer.contact.email': 'contato@weemake.com.br',
                'footer.contact.instagram': '@weemake.ai',
                'footer.copyright': '©2026 WeeMake. Todos os direitos reservados.',
                'footer.slogan': 'Tecnologia de ponta para empresas que querem mais.',
                'footer.developed': 'Desenvolvido por WeeMake.',
                'footer.brazil': 'Uma empresa brasileira'
            },
            
            'en': {
                // Navigation
                'nav.home': 'Home',
                'nav.solutions': 'Solutions',
                'nav.howItWorks': 'How It Works',
                'nav.about': 'About',
                'nav.faq': 'FAQ',
                'nav.contact': 'Contact',
                'nav.whatsapp': 'Chat on WhatsApp',
                
                // Hero
                'hero.badge': 'Technology that scales businesses',
                'hero.title1': 'WhatsApp Automation with ',
                'hero.titleHighlight': 'AI',
                'hero.title2': ', Optimized Websites & Google Local SEO',
                'hero.description': 'Boost your sales with intelligent AI automations, develop websites optimized for SEO, AEO, and GEO, and conquer the top of Google with our expertise in Local SEO for businesses.',
                'hero.ctaPrimary': 'Discover Automations',
                'hero.ctaSecondary': 'View Solutions',
                'hero.stat1': 'Years of experience',
                'hero.stat2': 'AI-powered support',
                'hero.stat3': 'Customizable',
                'hero.scroll': 'Scroll to explore',
                
                // Solutions
                'solutions.tag': 'Our Solutions',
                'solutions.title1': 'Tailored technology to ',
                'solutions.titleHighlight': 'scale your business',
                'solutions.subtitle': 'Four complementary solution lines to transform your operations and digital presence',
                
                'solutions.card1.badge': 'Most Popular',
                'solutions.card1.title': 'Intelligence & Automation',
                'solutions.card1.description': 'Revolutionize your customer service and conversion with cutting-edge technology. Our complete WhatsApp AI automations operate 24/7, qualifying leads, answering questions, and driving sales in a humanized way.',
                'solutions.card1.feature1': 'Advanced chatbots with generative AI',
                'solutions.card1.feature2': 'Integrated CRM management',
                'solutions.card1.feature3': 'Sales funnel structuring',
                'solutions.card1.feature4': 'Automated social media management',
                'solutions.card1.cta': 'Learn more about Automations',
                
                'solutions.card2.badge': 'Coming Soon',
                'solutions.card2.title': 'Management Systems (ERP)',
                'solutions.card2.description': 'Total control of your operation on a single platform. Our modular ERPs adapt to various market niches, ensuring you only pay for the tools your company really needs.',
                'solutions.card2.feature1': 'On-demand modules',
                'solutions.card2.feature2': 'Adaptable to your niche',
                'solutions.card2.feature3': 'Real-time dashboards',
                'solutions.card2.feature4': 'Integration with AI automations',
                'solutions.card2.cta': 'Coming soon',
                
                'solutions.card3.badge': 'New',
                'solutions.card3.title': 'Website Development',
                'solutions.card3.description': 'We create high-performance websites optimized for the three layers of modern search: traditional SEO, AEO for direct answers and voice assistants, and GEO for generative AI like ChatGPT and Gemini.',
                'solutions.card3.feature1': 'Advanced technical & strategic SEO',
                'solutions.card3.feature2': 'AEO — optimization for direct answers',
                'solutions.card3.feature3': 'GEO — optimization for generative AI',
                'solutions.card3.feature4': 'Performance, accessibility & Core Web Vitals',
                'solutions.card3.cta': 'Request a quote for Websites',
                
                'solutions.card4.badge': 'Google Specialist',
                'solutions.card4.title': 'Local SEO for Businesses',
                'solutions.card4.description': 'Get found by those nearby and ready to buy. As Google Local SEO specialists, we position your business on Google Business Profile, Google Maps, and local search, generating more calls, visits, and sales.',
                'solutions.card4.feature1': 'Complete Google Business Profile optimization',
                'solutions.card4.feature2': 'Local citations strategy & consistent NAP',
                'solutions.card4.feature3': 'Review & local reputation management',
                'solutions.card4.feature4': 'Monthly ranking & conversion reports',
                'solutions.card4.cta': 'I want to appear on Google',
                
                // How It Works
                'howItWorks.tag': 'Process',
                'howItWorks.title1': 'How ',
                'howItWorks.title2': ' transforms your customer service',
                'howItWorks.subtitle': 'From diagnosis to operation in 5 simple steps',
                'howItWorks.step1.title': 'Funnel Diagnosis',
                'howItWorks.step1.description': 'We analyze your current sales process, identifying bottlenecks and automation opportunities in WhatsApp customer service.',
                'howItWorks.step2.title': 'Custom AI',
                'howItWorks.step2.description': 'We train the artificial intelligence with your brand voice, products, services, and frequent customer responses.',
                'howItWorks.step3.title': 'Complete Integration',
                'howItWorks.step3.description': 'We connect the chatbot to your CRM, calendar, payment system, and other essential business tools.',
                'howItWorks.step4.title': 'Testing & Fine-tuning',
                'howItWorks.step4.description': 'We conduct extensive testing to ensure the AI responds naturally and efficiently, adjusting as needed.',
                'howItWorks.step5.title': 'Go-live & Monitoring',
                'howItWorks.step5.description': 'The automation goes live and we monitor performance, making continuous improvements based on real conversation data.',
                
                // About
                'about.tag': 'About Us',
                'about.title1': 'From software and design to ',
                'about.titleHighlight': 'Artificial Intelligence',
                'about.paragraph1': 'Our story began <strong>4 years ago</strong>, building solutions through software and graphic design. Along this journey, we realized that small and medium businesses needed something more: <strong>scaling customer service without losing proximity to the client</strong>.',
                'about.paragraph2': 'That is why, in <strong>2025</strong>, we evolved. We brought Artificial Intelligence into our DNA, specializing in <strong>humanized WhatsApp automations</strong>, <strong>websites optimized for SEO, AEO, and GEO</strong>, and <strong>Local SEO on Google</strong>.',
                'about.paragraph3': 'Today, we transform your company routine with tailor-made technology and real efficiency. Every solution is designed to generate measurable results from day one.',
                'about.cta': 'Discover our Automations',
                'about.card1.title': 'Tailor-made Software',
                'about.card1.description': 'We develop customized solutions that perfectly adapt to your business processes.',
                'about.card2.title': 'Security & Reliability',
                'about.card2.description': 'Robust infrastructure with end-to-end encryption and LGPD compliance.',
                'about.card3.title': 'Immediate Results',
                'about.card3.description': 'Agile implementation with clear ROI metrics from the first month of operation.',
                
                // FAQ
                'faq.tag': 'Frequently Asked Questions',
                'faq.title1': 'Questions we get asked ',
                'faq.titleHighlight': 'frequently',
                'faq.subtitle': 'Everything you need to know about our solutions',
                'faq.q1.question': 'What is WhatsApp automation with AI?',
                'faq.q1.answer': 'WhatsApp automation with AI is a technology that uses artificial intelligence to automatically respond to messages, qualify leads, schedule meetings, and conduct sales conversations on WhatsApp in a humanized way, 24 hours a day, 7 days a week. The AI learns over time, improving its responses based on real interactions.',
                'faq.q2.question': 'What is SEO, AEO, and GEO, and why does my website need them?',
                'faq.q2.answer': '<strong>SEO (Search Engine Optimization)</strong> optimizes your website to appear in Google organic searches. <strong>AEO (Answer Engine Optimization)</strong> positions your content for direct answers and voice assistants like Alexa and Google Assistant. <strong>GEO (Generative Engine Optimization)</strong> optimizes your website to be cited by generative AI like ChatGPT, Gemini, and Claude. Together, they ensure maximum visibility across all modern search channels — not just Google, but also the AIs people use more and more.',
                'faq.q3.question': 'What is Local SEO and how does it help my business?',
                'faq.q3.answer': '<strong>Local SEO</strong> is the optimization of your business presence in Google geolocated searches — Google Maps, Google Business Profile, and "near me" results. As <strong>Google Local SEO specialists</strong>, we optimize your profile, manage reviews, create consistent local citations, and implement local schema markup. The result: more calls, more store visits, and more sales from customers just a few kilometers away and ready to buy.',
                'faq.q4.question': 'How much does it cost to implement an AI chatbot on WhatsApp?',
                'faq.q4.answer': 'The investment varies according to the volume of customer service and the features needed. WeeMake offers flexible plans adapted to the size of your business. Contact us on WhatsApp <a href="https://wa.me/5515996197477">(15) 99619-7477</a> for a personalized quote with no commitment.',
                'faq.q5.question': 'How does the WeeMake modular ERP work?',
                'faq.q5.answer': 'Our modular ERPs allow you to choose only the modules your company needs — such as sales, inventory, finance, HR, and analytics — paying only for what you use. Each module integrates perfectly with the others, creating a complete and scalable management ecosystem.',
                'faq.q6.question': 'Does WhatsApp automation work for any type of business?',
                'faq.q6.answer': 'Yes! Our WhatsApp AI automation solutions are adaptable to various niches: e-commerce, clinics, real estate, gyms, offices, restaurants, schools, and much more. The AI is specifically trained for your business context, ensuring relevant and personalized responses.',
                'faq.q7.question': 'How long does it take to implement the automation?',
                'faq.q7.answer': 'The initial implementation can be done in a few days. The exact time depends on the complexity of the sales funnel and the necessary integrations. After configuration, the AI starts operating immediately and improves its responses over time through machine learning.',
                'faq.q8.question': 'Do I need technical knowledge to use it?',
                'faq.q8.answer': 'No! Our solutions are designed to be intuitive. We offer complete training and ongoing support. The interface is user-friendly and our team handles all the technical aspects, from initial setup to updates and maintenance.',
                
                // CTA
                'cta.title1': 'Ready to ',
                'cta.titleHighlight': 'scale',
                'cta.title2': ' your business?',
                'cta.description': 'Transform your customer service, conquer Google, and see real results in just a few days. Our team is ready to understand your needs and propose the best solution.',
                'cta.button1': 'Chat on WhatsApp',
                'cta.button2': 'Discover Automations',
                
                // Contact
                'contact.tag': 'Contact',
                'contact.title1': 'Let\'s ',
                'contact.titleHighlight': 'talk',
                'contact.subtitle': 'Choose your preferred channel and get in touch',
                'contact.whatsapp.title': 'WhatsApp',
                'contact.whatsapp.description': 'Have questions or want a quote? Talk directly to our team quickly and easily.',
                'contact.whatsapp.action': 'Chat now',
                'contact.instagram.title': 'Instagram',
                'contact.instagram.description': 'Follow our behind-the-scenes, technology tips, and AI news for business.',
                'contact.instagram.action': 'Follow on Instagram',
                'contact.email.title': 'Email',
                'contact.email.description': 'Prefer email? Send your message and we will respond within 24 business hours.',
                'contact.email.action': 'Send email',
                
                // Footer
                'footer.tagline1': 'Technology that scales businesses.',
                'footer.tagline2': 'WhatsApp automation with AI, websites optimized for SEO/AEO/GEO, and Google Local SEO for companies that want to grow.',
                'footer.nav.title': 'Navigation',
                'footer.nav.home': 'Home',
                'footer.nav.solutions': 'Solutions',
                'footer.nav.howItWorks': 'How It Works',
                'footer.nav.about': 'About',
                'footer.nav.faq': 'FAQ',
                'footer.nav.contact': 'Contact',
                'footer.services.title': 'Services',
                'footer.services.service1': 'WhatsApp Automation',
                'footer.services.service2': 'AI Chatbots',
                'footer.services.service3': 'Smart CRM',
                'footer.services.service4': 'Optimized Websites (SEO/AEO/GEO)',
                'footer.services.service5': 'Google Local SEO Specialist',
                'footer.services.service6': 'Modular ERP (Coming soon)',
                'footer.contact.title': 'Contact',
                'footer.contact.whatsapp': 'WhatsApp: (15) 99619-7477',
                'footer.contact.email': 'contato@weemake.com.br',
                'footer.contact.instagram': '@weemake.ai',
                'footer.copyright': '©2026 WeeMake. All rights reserved.',
                'footer.slogan': 'Cutting-edge technology for companies that want more.',
                'footer.developed': 'Developed by WeeMake.',
                'footer.brazil': 'A Brazilian company'
            },
        },
        
        init() {
            // Detectar idioma salvo ou do navegador
            const savedLang = localStorage.getItem('weemake-lang');
            const browserLang = navigator.language || navigator.userLanguage;
            
            if (savedLang && this.translations[savedLang]) {
                this.currentLang = savedLang;
            } else if (browserLang.startsWith('en')) {
                this.currentLang = 'en';
            } else if (browserLang.startsWith('es')) {
                this.currentLang = 'es';
            } else {
                this.currentLang = 'pt-BR';
            }
            
            this.applyLanguage();
            this.initLanguageSwitcher();
        },
        
        t(key) {
            const translations = this.translations[this.currentLang];
            return translations && translations[key] ? translations[key] : key;
        },
        
        applyLanguage() {
            // Atualizar atributo lang do HTML
            document.documentElement.lang = this.currentLang;
            
            // Atualizar todos os elementos com data-i18n
            $$('[data-i18n]').forEach(el => {
                const key = el.dataset.i18n;
                const translation = this.t(key);
                
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else if (el.hasAttribute('title')) {
                    el.title = translation;
                } else {
                    // Preservar elementos filhos (como links dentro de parágrafos)
                    if (el.querySelector('a, strong, em, span')) {
                        // Para elementos com HTML interno, usar innerHTML se a tradução contiver tags
                        if (translation.includes('<')) {
                            el.innerHTML = translation;
                        } else {
                            // Substituir apenas os nós de texto, preservando elementos
                            const textNodes = [];
                            const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
                            let node;
                            while (node = walker.nextNode()) {
                                if (node.textContent.trim()) {
                                    textNodes.push(node);
                                }
                            }
                            if (textNodes.length === 1) {
                                textNodes[0].textContent = translation;
                            } else {
                                el.textContent = translation;
                            }
                        }
                    } else {
                        el.textContent = translation;
                    }
                }
            });
            
            // Atualizar botões ativos do seletor de idioma
            $$('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
            });
            
            // Atualizar meta tags
            this.updateMetaTags();
            
            // Salvar preferência
            localStorage.setItem('weemake-lang', this.currentLang);
        },
        
        updateMetaTags() {
            const metaDescriptions = {
                'pt-BR': 'WeeMake: automatize seu WhatsApp com IA, desenvolva sites otimizados para SEO, AEO e GEO, e conquiste o topo do Google com SEO Local. Especialistas em tecnologia que escala negócios.',
                'en': 'WeeMake: automate your WhatsApp with AI, develop websites optimized for SEO, AEO, and GEO, and conquer the top of Google with Local SEO. Technology experts that scale businesses.',
                'es': 'WeeMake: automatice su WhatsApp con IA, desarrolle sitios optimizados para SEO, AEO y GEO, y conquiste la cima de Google con SEO Local. Especialistas en tecnología que escala negocios.'
            };
            
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.content = metaDescriptions[this.currentLang] || metaDescriptions['pt-BR'];
            }
        },
        
        setLanguage(lang) {
            if (this.translations[lang]) {
                this.currentLang = lang;
                this.applyLanguage();
            }
        },
        
        initLanguageSwitcher() {
            $$('.lang-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const lang = btn.dataset.lang;
                    this.setLanguage(lang);
                });
            });
        }
    };

    // ============================================
    // DETECTAR PREFERÊNCIA DE MOVIMENTO REDUZIDO
    // ============================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ============================================
    // MENU MOBILE (HAMBURGER)
    // ============================================
    function initMobileMenu() {
        const hamburger = $('.hamburger');
        const navLinks = $('.nav-links');
        
        if (!hamburger || !navLinks) return;

        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Fechar menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    // ============================================
    // SCROLL SUAVE PARA LINKS INTERNOS
    // ============================================
    function initSmoothScroll() {
        $$('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = $(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const headerHeight = $('.header')?.offsetHeight || 72;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: prefersReducedMotion ? 'auto' : 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    function initHeaderScroll() {
        const header = $('.header');
        if (!header) return;

        let lastScroll = 0;
        
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        };

        window.addEventListener('scroll', debounce(handleScroll, 10), { passive: true });
    }

    // ============================================
    // PROGRESS BAR DE SCROLL
    // ============================================
    function initScrollProgress() {
        const progressBar = $('.scroll-progress');
        if (!progressBar) return;

        const updateProgress = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = progress + '%';
        };

        window.addEventListener('scroll', debounce(updateProgress, 10), { passive: true });
    }

    // ============================================
    // ANIMAÇÕES DE ENTRADA (SCROLL REVEAL)
    // ============================================
    function initScrollReveal() {
        if (prefersReducedMotion) {
            $$('[data-animate]').forEach(el => el.classList.add('animate-in'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        $$('[data-animate]').forEach(el => observer.observe(el));
    }

    // ============================================
    // CONTADOR ANIMADO (HERO STATS)
    // ============================================
    function initCounterAnimation() {
        if (prefersReducedMotion) return;

        const counters = $$('[data-count]');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count);
                    const duration = 2000;
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        // Easing ease-out
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(easeOut * target);
                        
                        el.textContent = current;
                        
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            el.textContent = target;
                        }
                    };

                    requestAnimationFrame(animate);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    // ============================================
    // NAVEGAÇÃO ATIVA (HIGHLIGHT DO MENU)
    // ============================================
    function initActiveNav() {
        const sections = $$('section[id]');
        const navLinks = $$('.nav-link');
        
        if (!sections.length || !navLinks.length) return;

        const headerHeight = $('.header')?.offsetHeight || 72;

        const updateActiveNav = () => {
            const scrollPos = window.pageYOffset + headerHeight + 100;

            sections.forEach(section => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                const id = section.getAttribute('id');

                if (scrollPos >= top && scrollPos < bottom) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', debounce(updateActiveNav, 50), { passive: true });
    }

    // ============================================
    // PARTÍCULAS DE FUNDO (CANVAS)
    // ============================================
    function initParticles() {
        if (prefersReducedMotion) return;

        const canvas = $('#particle-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        let isVisible = true;

        // Detectar visibilidade da página
        document.addEventListener('visibilitychange', () => {
            isVisible = !document.hidden;
            if (isVisible && !animationId) {
                animate();
            }
        });

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = Math.random() > 0.5 ? '59, 130, 246' : '6, 182, 212';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.fill();
            }
        }

        function init() {
            resize();
            const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function drawConnections() {
            const maxDistance = 120;
            const maxConnections = 3;

            for (let i = 0; i < particles.length; i++) {
                let connections = 0;
                for (let j = i + 1; j < particles.length; j++) {
                    if (connections >= maxConnections) break;

                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                        connections++;
                    }
                }
            }
        }

        function animate() {
            if (!isVisible) {
                animationId = null;
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            drawConnections();
            animationId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', debounce(() => {
            resize();
            init();
        }, 200));

        init();
        animate();
    }

    // ============================================
    // FAQ ACCORDION (ANIMAÇÃO SUAVE)
    // ============================================
    function initFAQ() {
        const faqItems = $$('.faq-item');
        
        faqItems.forEach(item => {
            const summary = item.querySelector('summary');
            
            summary.addEventListener('click', (e) => {
                // Fechar outros items
                faqItems.forEach(other => {
                    if (other !== item && other.open) {
                        other.open = false;
                    }
                });
            });
        });
    }

    // ============================================
    // PARALLAX SUAVE NA HERO IMAGE
    // ============================================
    function initParallax() {
        if (prefersReducedMotion) return;

        const heroImage = $('.hero-image-wrapper');
        if (!heroImage) return;

        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.05;
            heroImage.style.transform = `translateY(${rate}px)`;
        };

        window.addEventListener('scroll', debounce(handleScroll, 16), { passive: true });
    }

    // ============================================
    // BOTÃO WHATSAPP FLOAT - ENTRADA ANIMADA
    // ============================================
    function initWhatsAppFloat() {
        const float = $('.whatsapp-float');
        if (!float) return;

        // Delay na entrada
        setTimeout(() => {
            float.style.opacity = '1';
            float.style.transform = 'scale(1)';
        }, 2000);

        float.style.opacity = '0';
        float.style.transform = 'scale(0.8)';
        float.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }

    // ============================================
    // LAZY LOADING PARA IMAGENS
    // ============================================
    function initLazyLoading() {
        const images = $$('img[loading="lazy"]');
        
        if ('loading' in HTMLImageElement.prototype) {
            // Navegador suporta lazy loading nativo
            return;
        }

        // Fallback para navegadores antigos
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.removeAttribute('loading');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // PREVENIR FLASH DE CONTEÚDO NÃO ESTILIZADO
    // ============================================
    function initFOUCPrevention() {
        document.documentElement.style.visibility = 'visible';
    }

    // ============================================
    // ANALYTICS (Vercel Analytics fallback)
    // ============================================
    function initAnalytics() {
        // Tracking de cliques em CTAs importantes
        const trackElements = $$('[data-track]');
        trackElements.forEach(el => {
            el.addEventListener('click', () => {
                const eventName = el.dataset.track;
                if (window.gtag) {
                    gtag('event', 'click', {
                        event_category: 'cta',
                        event_label: eventName
                    });
                }
            });
        });
    }

    // ============================================
    // INICIALIZAÇÃO
    // ============================================
    function init() {
        initFOUCPrevention();
        i18n.init(); // Inicializar sistema de idiomas
        initMobileMenu();
        initSmoothScroll();
        initHeaderScroll();
        initScrollProgress();
        initScrollReveal();
        initCounterAnimation();
        initActiveNav();
        initParticles();
        initFAQ();
        initParallax();
        initWhatsAppFloat();
        initLazyLoading();
        initAnalytics();
    }

    // Iniciar quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
