export type Section = {
  id: number;
  label: string;
  content: string;
  link: string;
  image: string;
  buttonLabel: string;
  buttonLink?: string;
};

export const textContent: Section[] = [
  {
    id: 1,
    label: 'Through the Prism',
    content: `Your body is more than cells and chemistry. It’s a living field of energy. Always pulsing, responsive, and deeply intelligent. Some call it the aura, others the biofield. Whatever the name, it’s part of you.

Within this field are energetic structures: chakras that acts like energy pools, refracting light, meridians that move energy like rivers, and a vertical column connecting Earth and Sky, to mention a few.

Universal energy flows through that central, vertical axis. As it moves through you, your beliefs, stories, and essence shape it into thought, emotion, and expression.

You are not separate from the light. You are the prism that bends it into being. And when the lens is clear, your full spectrum shines.`,
    link: 'en/writings/prism',
    image: '/images/bodyglyph.png',
    buttonLabel: 'Read More',
  },
];