import { defineMessages } from '@edx/frontend-platform/i18n';

// Messages defined with English as defaultMessage (Open edX convention).
// Arabic translations are provided in the 'ar' object below and selected
// at runtime based on the current locale.
const messages = defineMessages({
  'footer.overview.heading': {
    id: 'footer.overview.heading',
    defaultMessage: 'Overview',
    description: 'Heading for the overview column in the KKUx footer.',
  },
  'footer.overview.about': {
    id: 'footer.overview.about',
    defaultMessage: 'About KKUx',
    description: 'Link to the about page.',
  },
  'footer.overview.contact': {
    id: 'footer.overview.contact',
    defaultMessage: 'Contact us',
    description: 'Link to the contact page.',
  },
  'footer.overview.help': {
    id: 'footer.overview.help',
    defaultMessage: 'Help center',
    description: 'Link to the help center.',
  },
  'footer.overview.terms': {
    id: 'footer.overview.terms',
    defaultMessage: 'Terms & Conditions',
    description: 'Link to the terms and conditions page.',
  },
  'footer.support.heading': {
    id: 'footer.support.heading',
    defaultMessage: 'Support & help',
    description: 'Support column heading.',
  },
  'footer.support.faq': {
    id: 'footer.support.faq',
    defaultMessage: 'FAQ',
    description: 'Link to the FAQ page.',
  },
  'footer.support.complaint': {
    id: 'footer.support.complaint',
    defaultMessage: 'Submit a complaint',
    description: 'Link to submit a complaint.',
  },
  'footer.support.directLabel': {
    id: 'footer.support.directLabel',
    defaultMessage: 'Direct line',
    description: 'Label for the direct phone line.',
  },
  'footer.support.phone': {
    id: 'footer.support.phone',
    defaultMessage: '+966172417518',
    description: 'The support phone number.',
  },
  'footer.support.hours': {
    id: 'footer.support.hours',
    defaultMessage: 'Saturday \u2013 8 AM to 3 PM',
    description: 'Operating hours for support.',
  },
  'footer.support.whatsappLabel': {
    id: 'footer.support.whatsappLabel',
    defaultMessage: 'WhatsApp',
    description: 'Label for the WhatsApp contact.',
  },
  'footer.support.whatsappPhone': {
    id: 'footer.support.whatsappPhone',
    defaultMessage: '+966172417518',
    description: 'The WhatsApp phone number.',
  },
  'footer.support.email': {
    id: 'footer.support.email',
    defaultMessage: 'kkux@kku.edu.sa',
    description: 'The support email address.',
  },
  'footer.related.heading': {
    id: 'footer.related.heading',
    defaultMessage: 'Related links',
    description: 'Related links heading.',
  },
  'footer.related.vision': {
    id: 'footer.related.vision',
    defaultMessage: 'Saudi Vision 2030',
    description: 'Saudi Vision 2030 link.',
  },
  'footer.related.kku': {
    id: 'footer.related.kku',
    defaultMessage: 'King Khalid University',
    description: 'King Khalid University link.',
  },
  'footer.related.ncel': {
    id: 'footer.related.ncel',
    defaultMessage: 'National Center for E-Learning',
    description: 'National Center for E-Learning link.',
  },
  'footer.follow.heading': {
    id: 'footer.follow.heading',
    defaultMessage: 'Follow us',
    description: 'Follow us heading.',
  },
  'footer.social.x.label': {
    id: 'footer.social.x.label',
    defaultMessage: 'X',
    description: 'X social icon aria-label.',
  },
  'footer.social.facebook.label': {
    id: 'footer.social.facebook.label',
    defaultMessage: 'Facebook',
    description: 'Facebook social icon aria-label.',
  },
  'footer.social.linkedin.label': {
    id: 'footer.social.linkedin.label',
    defaultMessage: 'LinkedIn',
    description: 'LinkedIn social icon aria-label.',
  },
  'footer.social.instagram.label': {
    id: 'footer.social.instagram.label',
    defaultMessage: 'Instagram',
    description: 'Instagram social icon aria-label.',
  },
  'footer.legal.terms': {
    id: 'footer.legal.terms',
    defaultMessage: 'Terms & Conditions',
    description: 'Terms link in bottom bar.',
  },
  'footer.legal.privacy': {
    id: 'footer.legal.privacy',
    defaultMessage: 'Privacy Policy',
    description: 'Privacy policy link in bottom bar.',
  },
  'footer.legal.sitemap': {
    id: 'footer.legal.sitemap',
    defaultMessage: 'Site map',
    description: 'Sitemap link.',
  },
  'footer.copyright': {
    id: 'footer.copyright',
    defaultMessage: 'All rights reserved to King Khalid University \u00a9 {year}',
    description: 'Copyright text.',
  },
  'footer.logos.ariaLabel': {
    id: 'footer.logos.ariaLabel',
    defaultMessage: 'Partner logos',
    description: 'Partner logos aria-label.',
  },
  'footer.ariaLabel': {
    id: 'footer.ariaLabel',
    defaultMessage: 'Page Footer',
    description: 'Footer component aria-label.',
  },
});

// Arabic translations: same message IDs, with Arabic text.
// These override defaultMessage when the locale starts with 'ar'.
export const arMessages = {
  'footer.overview.heading': '\u0646\u0628\u0630\u0629 \u0639\u0627\u0645\u0629',
  'footer.overview.about': '\u062d\u0648\u0644 KKUx',
  'footer.overview.contact': '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627',
  'footer.overview.help': '\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629',
  'footer.overview.terms': '\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645',
  'footer.support.heading': '\u0627\u0644\u062f\u0639\u0645 \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629',
  'footer.support.faq': '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
  'footer.support.complaint': '\u062a\u0642\u062f\u064a\u0645 \u0634\u0643\u0648\u0649',
  'footer.support.directLabel': '\u062e\u0637 \u0645\u0628\u0627\u0634\u0631',
  'footer.support.hours': '\u0627\u0644\u0633\u0628\u062a \u2013 \u0645\u0646 \u0668 \u0635\u0628\u0627\u062d\u0627\u064b \u062d\u062a\u0649 \u0663 \u0645\u0633\u0627\u0621\u064b',
  'footer.support.whatsappLabel': '\u0648\u0627\u062a\u0633\u0627\u0628',
  'footer.related.heading': '\u0631\u0648\u0627\u0628\u0637 \u0630\u0627\u062a \u0635\u0644\u0629',
  'footer.related.vision': '\u0631\u0624\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 2030',
  'footer.related.kku': '\u062c\u0627\u0645\u0639\u0629 \u0627\u0644\u0645\u0644\u0643 \u062e\u0627\u0644\u062f',
  'footer.related.ncel': '\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0648\u0637\u0646\u064a \u0644\u0644\u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',
  'footer.follow.heading': '\u062a\u0627\u0628\u0639\u0646\u0627',
  'footer.social.x.label': 'X',
  'footer.social.facebook.label': '\u0641\u064a\u0633\u0628\u0648\u0643',
  'footer.social.linkedin.label': '\u0644\u064a\u0646\u0643\u062f \u0625\u0646',
  'footer.social.instagram.label': '\u0625\u0646\u0633\u062a\u062c\u0631\u0627\u0645',
  'footer.legal.terms': '\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645',
  'footer.legal.privacy': '\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629',
  'footer.legal.sitemap': '\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0645\u0648\u0642\u0639',
  'footer.copyright': '\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u062c\u0627\u0645\u0639\u0629 \u0627\u0644\u0645\u0644\u0643 \u062e\u0627\u0644\u062f \u00a9 {year}',
  'footer.logos.ariaLabel': '\u0634\u0639\u0627\u0631\u0627\u062a \u0627\u0644\u0634\u0631\u0643\u0627\u0621',
  'footer.ariaLabel': '\u062a\u0630\u064a\u064a\u0644 \u0627\u0644\u0635\u0641\u062d\u0629',
};

export default messages;
