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
import PlatformPlainLogo from './logos/PlatformPlainLogo';
import KingKhalidUniversityLogo from './logos/KingKhalidUniversityLogo';
import VisionLogo from './logos/VisionLogo';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
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

const FooterText = ({ children }) => (
  <p className="kkux-footer__item">{children}</p>
);

const SiteFooter = () => {
  const intl = useIntl();
  const { config } = useContext(AppContext);
  const currentYear = new Date().getFullYear();
  const isArabic = intl.locale && intl.locale.startsWith('ar');

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
    { key: 'about', label: t(messages['footer.overview.about']) },
    { key: 'contact', label: t(messages['footer.overview.contact']) },
    { key: 'help', label: t(messages['footer.overview.help']) },
    { key: 'terms', label: t(messages['footer.overview.terms']) },
  ];

  const legalLinks = [
    { key: 'terms', label: t(messages['footer.legal.terms']) },
    { key: 'privacy', label: t(messages['footer.legal.privacy']) },
    { key: 'sitemap', label: t(messages['footer.legal.sitemap']) },
  ];

  const relatedLinks = [
    { key: 'vision', label: t(messages['footer.related.vision']) },
    { key: 'kku', label: t(messages['footer.related.kku']) },
    { key: 'ncel', label: t(messages['footer.related.ncel']) },
  ];

  return (
    <footer className="kkux-footer" role="contentinfo" aria-label={t(messages['footer.ariaLabel'])}>
      {/* ---- main columns ---- */}
      <div className="kkux-footer__top">
        <div className="kkux-footer__grid">
          <FooterColumn heading={t(messages['footer.overview.heading'])}>
            {overviewLinks.map((item) => (
              <FooterText key={item.key}>{item.label}</FooterText>
            ))}
          </FooterColumn>

          <FooterColumn heading={t(messages['footer.support.heading'])}>
            <FooterText>{t(messages['footer.support.faq'])}</FooterText>
            <FooterText>{t(messages['footer.support.complaint'])}</FooterText>
            <div className="kkux-footer__spaced-sm">
              <FooterText>
                <span>{t(messages['footer.support.directLabel'])}</span>
                <bdi className="kkux-footer__pe-sm">{t(messages['footer.support.phone'])}</bdi>
              </FooterText>
              <p className="kkux-footer__hours">
                {t(messages['footer.support.hours'])}
              </p>
            </div>
            <FooterText>
              <span>{t(messages['footer.support.whatsappLabel'])}</span>
              <bdi className="kkux-footer__pe-sm">{t(messages['footer.support.whatsappPhone'])}</bdi>
            </FooterText>
          </FooterColumn>

          <FooterColumn heading={t(messages['footer.related.heading'])}>
            {relatedLinks.map((item) => (
              <FooterText key={item.key}>{item.label}</FooterText>
            ))}
          </FooterColumn>

          <FooterColumn heading={t(messages['footer.follow.heading'])}>
            <ul className="kkux-footer__social-list">
              {socialLinks.map(({ key, Logo, labelKey }) => (
                <li key={key}>
                  <a
                    href="#"
                    className="kkux-footer__social-icon"
                    aria-label={t(messages[labelKey])}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(key); }}
                  >
                    <Logo className="kkux-footer__social-svg" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${t(messages['footer.support.email'])}`}
              className="kkux-footer__email"
            >
              <bdi>{t(messages['footer.support.email'])}</bdi>
            </a>
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
                  <span className="kkux-footer__legal-label">{item.label}</span>
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
              <PlatformPlainLogo className="kkux-footer__logo--platform" />
            </li>
            <li className="kkux-footer__logo-item">
              <KingKhalidUniversityLogo className="kkux-footer__logo--kku" />
            </li>
            <li className="kkux-footer__logo-item">
              <VisionLogo className="kkux-footer__logo--vision" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
export { EVENT_NAMES };
