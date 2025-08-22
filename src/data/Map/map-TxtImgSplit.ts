export type Section = {
  id: number;
  label: string;
  content: string;
  link: string;
  image: string;
  buttonLabel: string;
  buttonLink?: string;
};

export const mapTxtImgSplit: Section[] = [
  {
    id: 1,
    label: 'The Resonance Mirror',
    content: `A precision reflection of your energy field, and the map to reclaim it.

You’ve done the mindset work. The healing sessions. The meditations. You know your patterns.
And yet, something remains out of sync.
You feel the next level of yourself hovering just out of reach, but can’t quite anchor it in. Your nervous system is done with theories. It is craving real alignment. 

The Resonance Mirror exists for those moments when you’re ready to stop guessing and start moving in harmony with your true energetic architecture.
When you’re ready to learn how to heal yourself.
`,
    link: '/map',
    image: '/images/energybody.png',
    buttonLabel: 'Explore',
  },
   {
    id: 2,
    label: 'Who this is for',
    content: `You’ve done inner work, but lasting shifts remain out of reach.

    You’re sensitive to energy, and want to move beyond guesswork.

    You want an experience that touches your field, not just your mind.

    You’re ready to walk through life aligned with your actual soul architecture.
    
    If you're looking for someone to "fix" you while you stay passive, this is not your path. 
    `,

    link: '',
    image: '/images/FlowersEnergy.png',
    buttonLabel: '',
  },
   {
    id: 3,
    label: `What you'll receive`,
    content: `
    A full Resonance Mirror (PDF) of your current field
    A remote energetic rebalance and tuning
    Channeled insights and recommendations
    Grounded daily actions so you can maintain and deepen alignment
    
    A full journey: from mirror, through recalibration, into reclamation.
    `,

    link: '',
    image: '',
    buttonLabel: '',
  }
];