export type Section = {
  id: number;
  label: string;
  content: string;
  link: string;
  image: string;
  buttonLabel: string;
  buttonLink?: string;
};

export const astroIntro: Section[] = [
  {
    id: 1,
    label: 'Chiron Report',
    content: `Chiron reveals the place where your deepest wounds and your greatest healing potential meet. It’s a sacred doorway into your most authentic healing and wisdom.

It marks the tender vulnerabilities you carry — the parts that feel unfixable or hidden.
Yet within these very wounds lies your unique medicine, your capacity to guide and uplift others through your lived experience.

Chiron highlights the alchemy of transforming pain into your most authentic medicine.

Price: $33
`,

    link: '',
    image: '/images/Chiron.png',
    buttonLabel: 'Book a report',
  },
   {
    id: 2,
    label: `The Nodes of Fate`,
    content: `Get a clear view of your soul's growth trajectory. 

    The South Node holdes the patterns and strengths you've already mastered. What feels familiar and safe, but can get you stuck in a loop. 

    The North Node calls your forward into new territory. It invites to growth, evolution and embodiment of the qualities you came here to explore. 

    Together, they illuminate the journey from your roots to your becoming. 
    
    Price: $33`,

    link: '',
    image: '/images/lunarnodes.png',
    buttonLabel: 'Book a report',
  },
   {
    id: 3,
    label: `Soul Architechture`,
    content: ``,

    link: '',
    image: '/images/lunarnodes.png',
    buttonLabel: 'Book a report',
  }
];