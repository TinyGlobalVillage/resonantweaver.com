export type ArticleSectionType = {
  id: number;
  label: string;
  content: string;
  link: string;
  image: string;
  buttonLabel: string;
  buttonLink?: string;
};

export const prismTxtImgSplit: ArticleSectionType[] = [
  {
    id: 1,
    label: 'Through the Prism: the Geometry of the Soul.',
    content: `The energetic parts of ourselves have been overlooked for a long time. 
    The aura and those talking of it have been ridiculed and dismissed. Rupert Sheldrake's work suggests the existence of the morphogenetic field. 
    Science is now starting to embrace the term 'biofield'.

    There's a Scandinavian expression - Kjært barn har mange navn. This directly translates to: A loved child has many names. 
    But there isn't an English proverb that perfectly captures this. Perhaps, call it what you will. The name doesn't matter. 
    What matters is that this energy field is part of us, and it is our birth right to learn how to understand and navigate it.
`,
    link: '',
    image: '/images/energybody.png',
    buttonLabel: '',
  },
   {
    id: 2,
    label: 'Subtle Energies',
    content: `Our energy bodies have many layers and many structures. 
    Explained through many ancient traditions, and recognized and confirmed by energy practitioners who can perceive them.
    One of the most well-known structures is the Vedic 7-chakra system. Energy centres within the body where energy collects and circulates. 
    Like small ponds or pools. They all generate a toroidal field with their central axis where energy is circulated and transported. 
    Each chakra also contain vortexes that project energy outwards.
    
    `,

    link: '',
    image: '/images/7chakra-yogi.png',
    buttonLabel: 'Energy centers',
  },
   {
    id: 3,
    label: ``,
    content: `
      Next are the meridians. These are rivers or streams of energy, feeding the pools. 
      Transporting energy around the body in an intricate network that keeps energy flowing.
    `,

    link: '',
    image: '/images/energybody.png',
    buttonLabel: 'Meridians',
  },

     {
    id: 4,
    label: ``,
    content: `
      At the core of this system is the central column - our central vertical axis, connecting the earth below and the sky above. Yin and Yang. Feminine and masculine. 
      It is the original frequency — the axis mundi. The world tree. Yggdrasil. This structure is the first to form in the embryo and often the last to remain intact before death. 
      The strength of the flow within the central vertical axis determines the size and vitality of the surrounding toroidal field. 
  
      As energy streams into the column, it is refracted by each chakra and interpreted through the lens of your beliefs, gifts, ancestral stories, intentions and experiences. 
      
      Just as a prism bends light, our energy bodies shape the flow of universal energy. Through these centers, it splits into rainbow frequencies, expressing through thought, emotion, action and presence. 

      "We see the world as it is based on how we perceive it."
      It's perhaps more accurate to say, 
      "The world is reflected back to you based on how you perceive it". 
      This shift in perspective helps us recognize that our reality is a mirror, shaped by our internal energy and beliefs.
    `,

    link: '',
    image: '/images/energybody.png',
    buttonLabel: 'Vertical Axis',
  },
     {
    id: 5,
    label: ``,
    content: `
      Our bodies are prisms, refracting light into a unique experiential expression. 
      If there’s a distortion in the prism — dirt on the lens, a crack, or a chip — our life experience, emotional responses, and worldview become skewed. 
      Potentially leading to confusion, disconnection, or imbalance.

      The life you live is the rainbow projection. "The movie" of your life is the interplay between pure universal consciousness and the unique geometry that is your energetic structure. 

      Healing is not about seeking the light outside of us, but about clearing the distortions within our own prism.
      Alignment occurs when we allow the full spectrum of our true self to shine without obstruction.
      To awaken is to realize that you are not separate from the light; you are the prism through which it shines.
    `,

    link: '',
    image: '/images/energybody.png',
    buttonLabel: '',
  },
  
];

export default prismTxtImgSplit;
