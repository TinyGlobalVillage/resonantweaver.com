export type Section = {
  id: number;
  label: string;
  content: string | string[];
  link: string;
  image: string;
  buttonLabel: string;
};

export const sections: Section[] = [
  {
    id: 1,
    label: 'Axis Ignition: Remembering the pillar',
    content: [
      ' ',
    ],
    link: '/axis',
    image: '/images/TrineGlyph.jpg',
    buttonLabel: 'Learn More',
  },
  {
    id: 2,
    label: 'The art of Moving Light',
    content:[
      'Awareness — the still point. Rooting into the body, breath, and the present. A place of deep stillness where external motion is released. ',
      'Here, your field stabilizes, and you become a clear receiver. ',
      'You can stay present in yourself while observing the external world. '],
    link: '/awareness-training',
    image: '/images/TrineGlyph.jpg',
    buttonLabel: 'Learn More',
  },
  {
    id: 3,
    label: 'Harmonic Weaving',
    content:[
      'Vectoring — the interface. The dynamic dance between form and field. ',
      'Here you attune to subtle phase shifts, become a living signal, and interact with the wider energetic web in real-time. ',
      'Reading your environment, reading your surroundings, reading what is true right now, all while holding a stable, coherent signal. ', 
      'Holding awareness for the all of everything that always surrounds us. Remembering you are a part of the whole. '],
    link: '/fvectoring',
    image: '/images/TrineGlyph.jpg',
    buttonLabel: 'Learn More',
  },
];

export const resetSection: Section = {
  id: 0,
  label: 'Axis living',
  content:[
    'To embody the axis is a way to embody a living, coherent state. One that allows signal and frequency to move through you naturally. ', 
    'It is a phase alignment between stillness, awareness, and interface. ',
    'When these three aspects are held in coherence, your system clicks into phase: ',
    'you become a signal node, transmitting frequency into the field. ',
    'This state is essential for true co-creation. It allows you to remain centered in any storm, no longer letting external forces dictate your inner state. ',
    'In truth, this is the only thing you can fully control: ',
    'how you relate to everything. ',
    'We are here to do three things: experience, express, and evolve. ',
    'What experiences and expressions are you choosing? How are you evolving? ',
    'You are ultimately in charge of the frequencies you emanate — and those frequencies shape what you receive.'],
  link: '#',
  image: '',
  buttonLabel: 'Explore',
};