import { useState } from 'react';
import Link from 'next/link';
import { scaleMap } from '../../../..//styles/scaleMap/_scaleMap';
import useResponsiveResize from '../../../../hook-utils/useResponsiveResize';
import { FooterSection, FooterGrid, Column, Form, Input, Button, List, StatusMessage, SignupHeader, IconLink, Trademark } from './FooterWrapper';
import type { Dictionary } from '../../../../data/i18n/types';
// import { getSocialIcon } from '../../../../hook-utils/getSocialIcon';

interface FooterProps {
  lang: string;
  dict: Dictionary['footer'];
};

export default function Footer({ lang , dict }: FooterProps) {
  const { currentBreakpoint } = useResponsiveResize();
  const { footerHeaderFontSize, footerButtonWidth, inputWidth } = scaleMap[currentBreakpoint];

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'duplicate'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        if (res.status === 409) {
          setStatus('duplicate');
        } else {
          setStatus('error')
        }
      } else {
        setStatus('success');
        setEmail('');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <FooterSection id='footer' role='contentinfo'>
      <FooterGrid>
        {/* 1️⃣ Newsletter */}
        <Column>
          <div>
            <SignupHeader id='newsletter-header' $fontSize={footerHeaderFontSize}>
              {/* <h3>{dict.newsletter.title}</h3> */}
              <h3>Newsletter</h3>
            </SignupHeader>
            {/* <Form onSubmit={handleSubmit} aria-labelledby={dict.newsletter.formAriaLabelledBy}> */}
            <Form onSubmit={handleSubmit} aria-labelledby="newsletter-header">
              <Input
                // name={dict.input.name}
                // aria-label={dict.input.ariaLabel}
                $inputWidth={inputWidth}
                type="email"
                // placeholder={dict.input.placeholder}
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <Button type="submit" disabled={status === 'sending'} $buttonWidth={footerButtonWidth}>
                {/* {status === 'sending' ? 'Sending…' : dict.newsletter.subscribe} */}
                {status === 'sending' ? 'Sending…' : 'Subscribe'}
              </Button>
            </Form>
            {/* {status === 'success' && (<StatusMessage variant='success' aria-live='polite'>{dict.statusMessage.success}</StatusMessage>)} */}
            {status === 'success' && (<StatusMessage variant='success' aria-live='polite'>Success! 🎉</StatusMessage>)}
            {/* {status === 'error' && (<StatusMessage variant='error' aria-live='polite'>{dict.statusMessage.error}</StatusMessage>)} */}
            {status === 'error' && (<StatusMessage variant='error' aria-live='polite'>Something went wrong</StatusMessage>)}
            {/* {status === 'duplicate' && (<StatusMessage variant='error' aria-live='polite'>{dict.statusMessage.duplicate}</StatusMessage>)} */}
            {status === 'duplicate' && (<StatusMessage variant='error' aria-live='polite'>Already subscribed</StatusMessage>)}
          </div>
        </Column>

        {/* 2️⃣ Quick Links */}
        <Column>
          {/* <h3>{dict.linksColumn.title}</h3> */}
          <h3>Quick Links</h3>
          <List>
            {/* <li><Link href={`/${lang}${dict.linksColumn.links.shows.href}`}>{dict.linksColumn.links.shows.label}</Link></li>
            <li><Link href={`/${lang}${dict.linksColumn.links.about.href}`}>{dict.linksColumn.links.about.label}</Link></li>
            <li><Link href={`/${lang}${dict.linksColumn.links.gallery.href}`}>{dict.linksColumn.links.gallery.label}</Link></li>
            <li><Link href={`/${lang}${dict.linksColumn.links.contact.href}`}>{dict.linksColumn.links.contact.label}</Link></li> */}
            <li><Link href={`/${lang}/shows`}>Offerings</Link></li>
            <li><Link href={`/${lang}/about`}>Blog</Link></li>
            <li><Link href={`/${lang}/gallery`}>About</Link></li>
            <li><Link href={`/${lang}/contact`}>Contact</Link></li>
          </List>
          {/* {dict.socialMedia.map((link) => (
            <IconLink
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              {getSocialIcon(link.platform) ?? link.label}
            </IconLink>
          ))} */}
        </Column>

        {/* 3️⃣ Contact block */}
        <Column>
          {/* <h3>{dict.contactColumn.title}</h3> */}
          <h3>Contact</h3>
          {/* <Link href={`/${lang}${dict.linksColumn.links.contact.href}`} passHref> */}
          <Link href={`/${lang}/contact`} passHref>
            {/* <Button $buttonWidth={footerButtonWidth} aria-label={dict.contactColumn.buttonAriaLabel}> */}
            <Button $buttonWidth={footerButtonWidth} aria-label="Contact us">
              {/* {dict.contactColumn.buttonTitle} */}
              Get in Touch
            </Button>
          </Link>
        </Column>
      </FooterGrid>

      {/* <p>{dict.trademark.title}</p> */}
      <p>© 2025 Resonant Weaver</p>
      <Trademark>
        {/* {dict.advert.message}{' '} */}
        Brought to you by{' '}
        <a
          href="https://tinyglobalvillage.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tiny Global Village LLC™
        </a>
      </Trademark>
    </FooterSection>
  );
}
