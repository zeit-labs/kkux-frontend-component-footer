import React, { useContext } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';

import messages, { arMessages } from './Footer.messages';
import XLogo from './logos/XLogo';
import FacebookLogo from './logos/FacebookLogo';
import InstagramLogo from './logos/InstagramLogo';
import LinkedInLogo from './logos/LinkedInLogo';
import KingKhalidUniversityLogo from './logos/KingKhalidUniversityLogo';
import VisionLogo from './logos/VisionLogo';
import KKUxLogo from './logos/KKUxLogo';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
  'KKUX_FOOTER_LINKS',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

const socialLinks = [
  { key: 'x', Logo: XLogo, labelKey: 'footer.social.x.label' },
  { key: 'facebook', Logo: FacebookLogo, labelKey: 'footer.social.facebook.label' },
  { key: 'linkedin', Logo: LinkedInLogo, labelKey: 'footer.social.linkedin.label' },
  { key: 'instagram', Logo: InstagramLogo, labelKey: 'footer.social.instagram.label' },
];

const FooterColumn = ({ heading, children }) => (
  <div className="kkux-footer__col">
    <h3 className="kkux-footer__col-heading">{heading}</h3>
    <div className="kkux-footer__col-body">{children}</div>
  </div>
);

const FooterLink = ({ href, children }) => (
  <a href={href} className="kkux-footer__item kkux-footer__link">{children}</a>
);

const FooterText = ({ children }) => (
  <p className="kkux-footer__item">{children}</p>
);

const SiteFooter = () => {
  const intl = useIntl();
  const { config } = useContext(AppContext);
  const footerLinks = config.KKUX_FOOTER_LINKS || {};
  const currentYear = new Date().getFullYear();
  const isArabic = intl.locale && intl.locale.startsWith('ar')
    || (typeof document !== 'undefined' && document.documentElement.dir === 'rtl');

  // Locale-aware translation: uses Arabic override if locale is 'ar-*', else English default.
  const t = (msg, values) => {
    if (isArabic && arMessages[msg.id]) {
      let text = arMessages[msg.id];
      if (values) {
        Object.keys(values).forEach((key) => { text = text.replace(`{${key}}`, values[key]); });
      }
      return text;
    }
    return intl.formatMessage(msg, values);
  };

  const handleLinkClick = (href) => {
    sendTrackEvent(EVENT_NAMES.FOOTER_LINK, {
      category: 'outbound_link',
      label: href,
    });
  };

  const overviewLinks = [
    { key: 'about', label: t(messages['footer.overview.about']), href: footerLinks.overview_about },
    { key: 'contact', label: t(messages['footer.overview.contact']), href: footerLinks.overview_contact },
    { key: 'help', label: t(messages['footer.overview.help']), href: footerLinks.overview_help },
    { key: 'terms', label: t(messages['footer.overview.terms']), href: footerLinks.overview_terms },
  ].filter((item) => item.href);

  const legalLinks = [
    { key: 'terms', label: t(messages['footer.legal.terms']), href: footerLinks.legal_terms },
    { key: 'privacy', label: t(messages['footer.legal.privacy']), href: footerLinks.legal_privacy },
    { key: 'sitemap', label: t(messages['footer.legal.sitemap']), href: footerLinks.legal_sitemap },
  ].filter((item) => item.href);

  const relatedLinks = [
    { key: 'vision', label: t(messages['footer.related.vision']), href: footerLinks.related_vision },
    { key: 'kku', label: t(messages['footer.related.kku']), href: footerLinks.related_kku },
    { key: 'ncel', label: t(messages['footer.related.ncel']), href: footerLinks.related_ncel },
  ].filter((item) => item.href);

  const socialUrls = {
    x: footerLinks.social_x,
    facebook: footerLinks.social_facebook,
    linkedin: footerLinks.social_linkedin,
    instagram: footerLinks.social_instagram,
  };

  return (
    <footer className="kkux-footer" role="contentinfo" aria-label={t(messages['footer.ariaLabel'])}>
      {/* ---- main columns ---- */}
      <div className="kkux-footer__top">
        <div className="kkux-footer__grid">
          <FooterColumn heading={t(messages['footer.overview.heading'])}>
            {overviewLinks.map((item) => (
              <FooterLink key={item.key} href={item.href}>{item.label}</FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn heading={t(messages['footer.support.heading'])}>
            {footerLinks.support_faq && (
              <FooterLink href={footerLinks.support_faq}>{t(messages['footer.support.faq'])}</FooterLink>
            )}
            {footerLinks.support_complaint && (
              <FooterLink href={footerLinks.support_complaint}>{t(messages['footer.support.complaint'])}</FooterLink>
            )}
            {(footerLinks.support_phone || footerLinks.support_hours) && (
              <div className="kkux-footer__spaced-sm">
                {footerLinks.support_phone && (
                  <FooterText>
                    <span>{t(messages['footer.support.directLabel'])}</span>
                    <bdi className="kkux-footer__pe-sm">{footerLinks.support_phone}</bdi>
                  </FooterText>
                )}
                {footerLinks.support_hours && (
                  <p className="kkux-footer__hours">
                    {footerLinks.support_hours}
                  </p>
                )}
              </div>
            )}
            {footerLinks.support_whatsapp && (
              <FooterText>
                <span>{t(messages['footer.support.whatsappLabel'])}</span>
                <bdi className="kkux-footer__pe-sm">{footerLinks.support_whatsapp}</bdi>
              </FooterText>
            )}
          </FooterColumn>

          <FooterColumn heading={t(messages['footer.related.heading'])}>
            {relatedLinks.map((item) => (
              <FooterLink key={item.key} href={item.href}>{item.label}</FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn heading={t(messages['footer.follow.heading'])}>
            <ul className="kkux-footer__social-list">
              {socialLinks.filter(({ key }) => socialUrls[key]).map(({ key, Logo, labelKey }) => (
                <li key={key}>
                  <a
                    href={socialUrls[key]}
                    className="kkux-footer__social-icon"
                    aria-label={t(messages[labelKey])}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(key); }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Logo className="kkux-footer__social-svg" />
                  </a>
                </li>
              ))}
            </ul>
            {footerLinks.support_email && (
              <a
                href={`mailto:${footerLinks.support_email}`}
                className="kkux-footer__email"
              >
                <bdi>{footerLinks.support_email}</bdi>
              </a>
            )}
          </FooterColumn>
        </div>
      </div>

      {/* ---- bottom bar ---- */}
      <div className="kkux-footer__bottom">
        <div className="kkux-footer__bottom-inner">
          <div className="kkux-footer__legal-group">
            <ul className="kkux-footer__legal-list">
              {legalLinks.map((item, i) => (
                <li key={item.key} className="kkux-footer__legal-item">
                  <a href={item.href} className="kkux-footer__legal-label">{item.label}</a>
                  {i < legalLinks.length - 1 && (
                    <span aria-hidden="true" className="kkux-footer__legal-sep">|</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="kkux-footer__copyright">
              {t(messages['footer.copyright'], { year: currentYear })}
            </p>
          </div>

          <ul className="kkux-footer__logos" aria-label={t(messages['footer.logos.ariaLabel'])}>
            <li className="kkux-footer__logo-item">
              <KKUxLogo className="kkux-footer__logo--platform" />
            </li>
            <li className="kkux-footer__logo-item">
              <a
                href="https://www.kku.edu.sa/ar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(messages['footer.related.kku'])}
                onClick={() => handleLinkClick('https://www.kku.edu.sa/ar')}
              >
                <KingKhalidUniversityLogo className="kkux-footer__logo--kku" />
              </a>
            </li>
            <li className="kkux-footer__logo-item">
              <a
                href="https://www.vision2030.gov.sa/ar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(messages['footer.related.vision'])}
                onClick={() => handleLinkClick('https://www.vision2030.gov.sa/ar')}
              >
                <VisionLogo className="kkux-footer__logo--vision" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
export { EVENT_NAMES };
