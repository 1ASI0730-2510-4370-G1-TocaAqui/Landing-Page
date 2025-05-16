const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-plans': 'Plans',
        'nav-contact': 'Contact Us',
        'btn-get-started': 'Get Started',
        
        // Header
        'header-title': 'Where Musicians and Stages Meet',
        'header-description-1': 'Are you part of a band that wants to play live? Do you have a bar or cultural space and are looking for talent?',
        'header-description-2': 'At TocaAquí we connect artists with venues in a safe, organized and uncomplicated way.',
        'header-join': 'Join today and be part of the largest music community! Over 1000 artists and venues already trust us.',
        'btn-artist': "I'm an Artist",
        'btn-venue': "I'm a Venue",
        
        // About
        'about-title': 'About Us',
        'about-p1': 'TocaAquí is a platform that connects emerging musicians with bars, clubs and event promoters. We facilitate direct booking, venue management and promotion of musical events in one place.',
        'about-p2': 'Our platform allows venues to publish available dates and receive band applications according to style, location and affinity. Musicians can schedule performances, sign digital contracts and receive secure payments.',
        'about-p3': 'We automate key processes such as technical validation, shared scheduling, digital ticket generation and post-event evaluation, creating a seamless and secure experience for artists and organizers.',
        
        // Team
        'team-title': 'Our Development Team',
        'team-role': 'Developer',
        
        // Features
        'features-title': 'Key tools to play live without complications',
        'feature-1-title': 'Free Dates Calendar',
        'feature-1-desc': 'Venues post available dates and bands apply based on affinity, location and musical style.',
        'feature-2-title': 'Digital Contracts & Secure Payments',
        'feature-2-desc': 'Instant contract signing and escrow payments for added security.',
        'feature-3-title': 'Logistics Manager',
        'feature-3-desc': 'Upload your technical rider, schedule soundchecks and coordinate everything with the venue from the same platform.',
        
        // Plans
        'plans-title': 'Select your ideal plan',
        'btn-venues': 'For Venues',
        'btn-artists': 'For Artists',
        'plans-venues-title': 'Venue Plans',

        // Contact Form
        'contact-title': 'Contact us',
        'contact-email': 'Email',
        'contact-phone': 'Telephone Number',
        'contact-message': 'Message',
        'contact-subject': 'Subject',
        'contact-submit': 'Send'
    },
    es: {
        // Navegación
        'nav-home': 'Inicio',
        'nav-about': 'Nosotros',
        'nav-plans': 'Planes',
        'nav-contact': 'Contacto',
        'btn-get-started': 'Comenzar',
        
        // Encabezado
        'header-title': 'Donde Músicos y Escenarios se Encuentran',
        'header-description-1': '¿Eres parte de una banda que quiere tocar en vivo? ¿Tienes un bar o espacio cultural y buscas talento?',
        'header-description-2': 'En TocaAquí conectamos artistas con espacios de manera segura, organizada y sin complicaciones.',
        'header-join': '¡Únete hoy y sé parte de la comunidad musical más grande! Más de 1000 artistas y espacios ya confían en nosotros.',
        'btn-artist': 'Soy Artista',
        'btn-venue': 'Soy Espacio',
        
        // Sobre Nosotros
        'about-title': 'Sobre Nosotros',
        'about-p1': 'TocaAquí es una plataforma que conecta músicos emergentes con bares, clubes y promotores de eventos. Facilitamos la reserva directa, gestión de espacios y promoción de eventos musicales en un solo lugar.',
        'about-p2': 'Nuestra plataforma permite a los espacios publicar fechas disponibles y recibir solicitudes de bandas según estilo, ubicación y afinidad. Los músicos pueden programar actuaciones, firmar contratos digitales y recibir pagos seguros.',
        'about-p3': 'Automatizamos procesos clave como validación técnica, programación compartida, generación de tickets digitales y evaluación post-evento, creando una experiencia fluida y segura para artistas y organizadores.',
        
        // Equipo
        'team-title': 'Nuestro Equipo de Desarrollo',
        'team-role': 'Desarrollador',
        
        // Características
        'features-title': 'Herramientas clave para tocar en vivo sin complicaciones',
        'feature-1-title': 'Calendario de Fechas Libres',
        'feature-1-desc': 'Los espacios publican fechas disponibles y las bandas aplican según afinidad, ubicación y estilo musical.',
        'feature-2-title': 'Contratos Digitales y Pagos Seguros',
        'feature-2-desc': 'Firma instantánea de contratos y pagos en custodia para mayor seguridad.',
        'feature-3-title': 'Gestor de Logística',
        'feature-3-desc': 'Sube tu rider técnico, programa soundchecks y coordina todo con el espacio desde la misma plataforma.',
        
        // Planes
        'plans-title': 'Selecciona tu plan ideal',
        'btn-venues': 'Para Espacios',
        'btn-artists': 'Para Artistas',
        'plans-venues-title': 'Planes para Espacios',

        // Formulario de Contacto
        'contact-title': 'Contáctanos',
        'contact-email': 'Correo electrónico',
        'contact-phone': 'Número de teléfono',
        'contact-message': 'Mensaje',
        'contact-subject': 'Asunto',
        'contact-submit': 'Enviar'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    
    document.documentElement.lang = lang;
    
    // Actualizar todos los elementos con atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    
    // Actualizar el texto del botón
    const langButton = document.querySelector('.language');
    langButton.textContent = currentLang.toUpperCase();
}

// Inicializar el idioma cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
}); 