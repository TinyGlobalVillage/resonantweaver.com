export type Section = {
  id: number;
  label: string;
  content: string;
  link: string;
  image: string;
  buttonLabel: string;
  buttonLink?: string;
};

export const HDSIntro: Section[] = [
  {
    id: 1,
    label: 'Personalised somatic routine',
    content: `Reconnect with your natural energy and experience a new level of alignment in your body and mind.
This personalized routine is designed to help you sense, balance, and embody your unique energy blueprint. 
By using AI assistance, each routine is carefully assembled to match your Human Design profile, making this offering accessible while still deeply supportive.
Through targeted movements, mindful practices, and body awareness techniques, you can return to your true baseline and feel more grounded, centered, and alive.

Your routine is crafted using your Human Design type, open centers, channels, and variables. It guides you step by step to understand and inhabit your authentic energy, so you can move through life with greater ease and confidence.

What you receive: 
A step-by-step PDF guide to support your daily practice and help you integrate these shifts into your life.

Price: $44
`,
    link: '/Book',
    image: '/images/bodyglyph.png',
    buttonLabel: 'Get your routine',
  },

    {
    id: 1,
    label: 'Important Safety Information',
    content: `  
   Please consult your healthcare provider before beginning this or any new movement, breathwork, or somatic practice, especially if you have medical conditions, injuries, are pregnant, menstruating, or have recently had surgery.

If you are pregnant or menstruating, avoid forceful or rapid breathing techniques and honor your body's current needs.

Always listen to your body. If you feel pain, dizziness, or discomfort, stop immediately and rest.

This routine is not a substitute for professional medical advice, diagnosis, or treatment.
    `,
    link: '/Book',
    image: '/images/SomaticEx.jpg',
    buttonLabel: '',
  },
];