// data/i18n/en.ts
import { Dictionary } from './types';

export const dictionary: Dictionary = {
  // ALL PAGES SECTIONS (SEO & SECTION DICT)
  home: {
    // SEO METADATA
    meta: {
      title: 'Welcome to Resonant Weaver',
      description:
        'A practice of weaving and mapping energy, shaping resonance, and weaving soul work into clear and beautiful form.',
      keywords: [
        'Resonant Weaver',
        'Energy Mapping',
        'Resonance Mirror',
        'House Readings',
        'Somatic Practices',
        'Astrology',
        'Subtle Energy',
        'Alignment',
        'Sovereign Growth',
        'Harmony',
      ],
      ogTitle:
        'Resonant Weaver — Clarity, resonance, and grounded expression',
      ogDescription:
        'Experiences that bring energy, body, and message into harmony.',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Resonant Weaver — Resonance Mirrors, somatics & harmonics woven with care',
      description:
        'Clarity in vision. Warmth in presence. Momentum in creation.',
      images: [
        {
          url: '/images/hero/resonant-weaver-hero.png',
          alt: 'Resonant Weaver — toroidal field and woven light motif',
          width: 1200,
          height: 630,
        },
      ],
    },
    // SECTIONS
    aboveTheFold: {
      title: 'Resonant Weaver',
      subtitle: 'Resonance Mirrors • Somatic practice • Star-informed design',
      ctaLabel: 'Explore Offerings',
      comedySign: {
        title: '',
        subtitle: '',
      },
    },
    upcomingShows: {
      title: '',
      ctaLabel: '',
    },
  },

  about: {
    meta: {
      title:
        'About | Resonant Weaver — a Frequency Anchor',
      description:
        'A weaving of subtle architecture, embodied practice, and design that holds both beauty and truth.',
      keywords: [
        'About Resonant Weaver',
        'Energy Mapping',
        'Embodiment',
        'Somatics',
        'Subtle Energy',
        'Resonance Mirrors',
        'Energetic Intuitive',
        'Mediumship',
        'Healing',
      ],
      ogTitle:
        'About | Resonant Weaver — Depth with clarity',
      ogDescription:
        'Clear process, steady care, and work that feels alive.',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'About | Resonant Weaver — Work that resonates',
      description:
        'An approach rooted in presence, guided by structure, and carried by care.',
      images:
        '/images/hero/resonant-weaver-hero.png',
    },
    aboutAboveFold: {
      aboutTitle: 'About',
      textArray: [
        {
          id: 1,
          text:
            'Resonant Weaver is a practice where maps of energy, somatic rhythm, and design come together. Each project is an invitation to clarify the signal, anchor it in the body, and express it in form.',
          alt: '',
          captions: '',
        },
        {
          id: 2,
          text:
            'It is work shaped by clarity, carried with warmth, moved by decisive creation, and grounded in lasting structure.',
        },
      ],
    },
  },

   gallery: {
    meta: {
      title:
        'Portfolio | Resonant Weaver — Selected works',
      description:
        'A glimpse of projects where energy, embodiment, and design are woven together into clear experiences.',
      keywords: [
        'Resonant Weaver portfolio',
        'Energy Maps',
        'Somatic Toolkit',
        'Astrology Reports',
        'Web Animation',
        'Design Examples',
      ],
      ogTitle:
        'Portfolio | Resonant Weaver — Work in form',
      ogDescription:
        'Snapshots of maps, practices, and designs created with resonance.',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Portfolio | Resonant Weaver — Selected works',
      description:
        'From subtle maps to crafted interfaces — a few glimpses of the weave.',
      images:
        '/images/hero/resonant-weaver-hero.png',
    },
    galleryAboveFold: {
      sectionTitle: 'Portfolio',
      prevLabel: 'Previous slide',
      nextLabel: 'Next slide',
      thumbPrefix: 'Go to slide',
      gallery: [
        { id: 1, caption: 'Energy Map — Soul Field', alt: 'Energy map sample' },
        { id: 2, caption: 'HD Somatics Baseline', alt: 'Somatic practice cards' },
        { id: 3, caption: 'Astrology: Chiron Report', alt: 'Chiron insights layout' },
        { id: 4, caption: 'Web + Animation', alt: 'Animated hero interface' },
        { id: 5, caption: 'Scalar-inspired Visuals', alt: 'Toroidal/field visual' },
      ],
    },
  },

  shows: {
    meta: {
      title:
        'Offerings | Resonant Weaver — Aligning energy, body & message',
      description:
        'Resonance mirrors, subtle energy mapping, somatic practices, star-led insights that translate resonance into form.',
      keywords: [
        'Resonant Weaver offerings',
        'Resonance Mirror',
        'Somatic Practices',
        'Astrology Readings',
        'Subtle Energy Education',
        'House Readings',
        'Oracle cards',
        'Tarot',
      ],
      ogTitle:
        'Offerings | Resonant Weaver — Read • Realign • Express',
      ogDescription:
        'From deep reads to tangible expansions, each step holds resonance.',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Offerings | Resonant Weaver — Read • Realign • Express',
      description:
        'Resonance Mirrors, somatic practices, star-informed guidance, and steady support.',
      images:
        '/images/hero/resonant-weaver-hero.png',
    },
    showsAboveFold: {
      sectionTitle: 'Offerings',
    },
  },

  contact: {
    meta: {
      title:
        'Contact | Resonant Weaver — Begin the weave',
      description:
        'Ready to explore your harmonic frequency or have an inquiry? Send a note and we’ll move forward with calm clarity.',
      keywords: [
        'Contact Resonant Weaver',
        '',
        '',
        '',
        '',
      ],
      ogTitle:
        'Contact | Resonant Weaver — Begin the weave',
      ogDescription:
        'Share your aim. The next step will be clear, steady, and grounded.',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Contact | Resonant Weaver — Begin the weave',
      description:
        'A short message is enough. The path will unfold from there.',
      images:
        '/images/hero/resonant-weaver-hero.png',
    },
    contentAboveFold: {
      form: {
        title: 'Contact',
        fields: {
          name: 'Name',
          email: 'Email',
          phone: 'Phone Number',
          topic: 'Topic',
          dropdown: {
            placeholder: '— select one —',
            option1: 'Resonance Mirror (Read • Realign • Reclaim)',
            option2: 'HD-Aligned Somatics',
            option3: 'Astrology (Nodes / Chiron / Stars)',
            option4: 'Harmonic Sweep',
            option5: '',
            option6: '',
            variableOption: 'Other',
          },
          videoPrompt: '',
          message: 'What would you like to create or explore?',
        },
        button: 'Send Message',
        statusMessage: {
          success: 'Thank you! I’ll be in touch.',
          error: 'Something went wrong. Please try again.',
        },
        errors: {
          name: 'Please enter your name.',
          email: 'Please enter a valid email address.',
          topic: 'Please select a topic.',
          message: 'Please provide a short description.',
        },
      },
    },
  },

  // ALL COMPONENTS SECTION
  navigation: {
    logoAlt: 'Resonant Weaver Logo',
    links: {
      home: {
        label: 'HOME',
        ariaLabel: 'Go to homepage',
        href: '#hero',
      },
      shows: {
        label: 'OFFERINGS',
        ariaLabel: 'View offerings',
        href: '#offerings',
      },
      about: {
        label: 'ABOUT',
        ariaLabel: 'Learn more',
        href: '/about',
      },
      gallery: {
        label: 'BLOG',
        ariaLabel: 'View portfolio',
        href: '/writings',
      },
      contact: {
        label: 'CONTACT',
        ariaLabel: 'Get in touch',
        href: '/contact',
      },
    },
    socialMedia: [
      { platform: '', label: '', ariaLabel: '', href: '', altText: '' },
    ],
    langToggle: {
      toggleLabel: 'Language Toggle',
      enAlt: 'English',
      noAlt: 'Norwegian',
    },
  },

  footer: {
    newsletter: {
      title: 'Join the Resonance Letter',
      formAriaLabelledBy: 'newsletter-header',
      subscribe: 'Subscribe',
    },
    input: {
      name: 'newsletterEmail',
      ariaLabel: 'Email address',
      placeholder: 'Enter your email',
    },
    statusMessage: {
      success: 'Thanks for subscribing!',
      error: 'Oops! Try again.',
      duplicate: 'You’re already on the list!',
    },
    linksColumn: {
      title: 'Quick Links',
      links: {
        shows: {
          label: 'OFFERINGS',
          ariaLabel: 'View offerings',
          href: '/services',
        },
        about: {
          label: 'ABOUT',
          ariaLabel: 'Learn more',
          href: '/about',
        },
        gallery: {
          label: 'PORTFOLIO',
          ariaLabel: 'View portfolio',
          href: '/portfolio',
        },
        contact: {
          label: 'CONTACT',
          ariaLabel: 'Get in contact',
          href: '/contact',
        },
      },
    },
    contactColumn: {
      title: 'Work With Me',
      buttonTitle: 'Contact',
      buttonAriaLabel: 'Go to contact page',
    },
    socialMedia: [
      { platform: '', label: '', ariaLabel: '', href: '', altText: '' },
    ],
    trademark: {
      title: '© 2025 Resonant Weaver. All rights reserved',
    },
    advert: {
      message: 'Crafted by Resonant Weaver',
    },
  },
};
