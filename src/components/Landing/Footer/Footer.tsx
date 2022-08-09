import React from "react";

import "./Footer.css";

export default function Footer() {
  const footerNavServicesData = [
    {
      label: "Software Development Outsourcing",
      url: "software-development-outsourcing/",
    },
    {
      label: "Full Cycle Product Development",
      url: "full-cycle-product-development/",
    },
    {
      label: "Code audit & UX audit",
      url: "code-audit/",
    },
    {
      label: "Product Prototyping",
      url: "full-cycle-product-development/prototyping/",
    },
    {
      label: "MVP Development services",
      url: "mvp-development/",
    },
    {
      label: "Product-Market Fit",
      url: "product-market-fit-expanding-demand/",
    },
    {
      label: "Product Scaling",
      url: "scaling-your-product-thriving-in-the-market/",
    },
    {
      label: "Product Design and Development",
      url: "product-design-and-development/",
    },
    {
      label: "Development Teams",
      url: "development-teams/",
    },
    {
      label: "Machine Learning Services",
      url: "machine-learning/",
    },
    {
      label: "Digital Transformation",
      url: "digital-transformation/",
    },
  ];
  const footerNavServicesItems = footerNavServicesData.map(
    (footerNavServicesItem) => (
      <a
        href={"https://www.boldare.com/services/" + footerNavServicesItem.url}
        className={"footer-landing__bottom-link"}
        key={footerNavServicesItem.label}
      >
        {footerNavServicesItem.label}
      </a>
    )
  );

  const footerNavData = [
    {
      label: "About us",
      url: "https://www.boldare.com/about/",
    },
    {
      label: "Resources",
      url: "https://www.boldare.com/resources/",
    },
    {
      label: "New Normal",
      url: "https://www.boldare.com/new-normal/",
    },
    {
      label: "Contact",
      url: "https://www.boldare.com/contact/",
    },
    {
      label: "Career",
      url: "https://www.boldare.com/career/",
    },
    {
      label: "Blog",
      url: "https://www.boldare.com/blog/",
    },
    {
      label: "Boldare Boards",
      url: "https://boards.boldare.com/",
    },
    {
      label: "Privacy Policy",
      url: "https://www.boldare.com/privacy-policy/",
    },
    {
      label: "Newsroom",
      url: "https://www.boldare.com/newsroom/",
    },
  ];

  const footerNavItems = footerNavData.map((footerNavItem) => (
    <a
      href={footerNavItem.url}
      className={"footer-landing__bottom-title footer-landing__bottom-link"}
      key={footerNavItem.label}
    >
      {footerNavItem.label}
    </a>
  ));

  const footerPlacesData = [
    {
      titleCity: "Hamburg",
      street: "Große Bleichen 1-3",
      cityAndCode: "20354 Hamburg",
      country: "Germany",
    },
    {
      titleCity: "Amsterdam",
      street: "Vijzelstraat 68-78",
      cityAndCode: "1017 HL Amsterdam",
      country: "The Netherlands",
    },
    {
      titleCity: "Gliwice",
      street: "Królowej Bony 13",
      cityAndCode: "44-100 Gliwice",
      country: "Poland",
    },
    {
      titleCity: "Wroclaw",
      street: "Wyspa Słodowa 7",
      cityAndCode: "50-266 Wroclaw",
      country: "Poland",
    },
    {
      titleCity: "Warsaw",
      street: " Krucza 50",
      cityAndCode: "00-025 Warsaw",
      country: "Poland",
    },
    {
      titleCity: "Cracow",
      street: "Kurniki 9",
      cityAndCode: "31-156 Cracow",
      country: "Poland",
    },
  ];

  const footerPlaces = footerPlacesData.map((footerPlacesDataItem) => (
    <div
      className={"footer-landing__bottom-info-places-item"}
      key={footerPlacesDataItem.titleCity}
    >
      <div className={"footer-landing__bottom-info-places-item-title"}>
        {footerPlacesDataItem.titleCity}
      </div>
      <div>{footerPlacesDataItem.street}</div>
      <div>{footerPlacesDataItem.cityAndCode}</div>
      <div>{footerPlacesDataItem.country}</div>
    </div>
  ));

  return (
    <section className={"footer-landing"}>
      <div className={"footer-landing__top"}>
        <div
          className={"footer-landing__top-quarter footer-landing__top-career"}
        >
          <img src={"img//career.webp"} alt={"Boldare Career"} />
          <div className={"footer-landing__top-content"}>
            <h3 className={"footer-landing__top-heading"}>Join our Team</h3>
            <a
              href={"https://www.boldare.com/career"}
              className={"footer-landing__top-link"}
            >
              <button className={"footer-landing__button"}>
                Career &#8594;
              </button>
            </a>
          </div>
        </div>
        <div
          className={"footer-landing__top-quarter footer-landing__top-contact"}
        >
          <img src={"img/contact.webp"} alt={"Boldare Contact"} />
          <div className={"footer-landing__top-content"}>
            <h3 className={"footer-landing__top-heading"}>Get in touch</h3>
            <div className={"footer-landing__top-details"}>
              <a
                href={"https://www.boldare.com/contact"}
                className={"footer-landing__top-link"}
              >
                <button className={"footer-landing__button"}>
                  Contact us &#8594;
                </button>
              </a>
              <div className={"footer-landing__top-data"}>
                <a
                  href={"tel:+13156360092"}
                  className={"footer-landing__top-data--phone"}
                >
                  <img
                    src={"img/usa-flag.svg"}
                    alt={"USA Flag"}
                    className={"mini-flag"}
                  />
                  <span id={"footer-phone-usa"}>+1 315 636 0092</span>
                </a>
                <a
                  href={"tel:+494042309797"}
                  className={"footer-landing__top-data--phone"}
                >
                  <img
                    src={"img/german-flag.svg"}
                    alt={"German Flag"}
                    className={"mini-flag"}
                  />
                  <span id={"contact-footer-german"}>+49 40 423 09797</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={"footer-landing__top-quarter footer-landing__top-bldr"}>
          <div className={"footer-landing__top-content"}>
            <a
              href={"https://www.boldare.com"}
              className={"footer-landing__top-logo"}
            >
              <img
                src={"img/logo-dark.svg"}
                className={"footer-landing__top-bldr"}
                alt={"Digital product design company Boldare"}
              />
            </a>
            <p className={"footer-landing__top-contact"}>
              The digital product design &amp; development company
            </p>
          </div>
        </div>
        <div
          className={
            "footer-landing__top-quarter footer-landing__top-newsletter"
          }
        >
          <img src={"img/contact.webp"} alt={"Boldare Newsletter"} />
          <div className={"footer-landing__top-content"}>
            <a
              href={"https://www.boldare.com/newsletter/"}
              className={"footer-landing__top-newsletter-subscribe"}
            >
              Subscribe to our newsletter &#8594;
            </a>
            <div className={"footer-landing__top-sm"}>
              <a
                href={"https://www.facebook.com/boldarecom/"}
                rel={"nofollow noreferrer"}
                target="_blank"
              >
                <div className={"footer-landing__top-icon-svg-wrapper"}>
                  <img src={"img/facebook.svg"} alt={"Facebook letter"} />
                </div>
              </a>
              <a
                href={"https://www.linkedin.com/company/boldarecom/"}
                rel={"nofollow noreferrer"}
                target="_blank"
              >
                <div className={"footer-landing__top-icon-svg-wrapper"}>
                  <img src={"img/linkedin.svg"} alt={"Linkedin letter"} />
                </div>
              </a>
              <a
                href={"https://www.instagram.com/boldarecom"}
                rel={"nofollow noreferrer"}
                target="_blank"
              >
                <div className={"footer-landing__top-icon-svg-wrapper"}>
                  <img src={"img/instagram.svg"} alt={"Instagram"} />
                </div>
              </a>
              <a
                href={"https://twitter.com/boldarecom"}
                rel={"nofollow noreferrer"}
                target="_blank"
              >
                <div className={"footer-landing__top-icon-svg-wrapper"}>
                  <img src={"img/twitter.svg"} alt={"Twitter"} />
                </div>
              </a>
              <a
                href={"https://www.behance.net/boldarecom"}
                rel={"nofollow noreferrer"}
                target="_blank"
              >
                <div className={"footer-landing__top-icon-svg-wrapper"}>
                  <img src={"img/behance.svg"} alt={"Behance"} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={"footer-landing__bottom"}>
        <div className={"footer-landing__bottom-links"}>
          <nav
            className={"footer-landing__bottom-menu"}
            aria-label={"main navigation"}
          >
            <div className={"footer-landing__bottom-menu-column"}>
              <a
                href={"https://www.boldare.com/services/"}
                className={
                  "footer-landing__bottom-title footer-landing__bottom-link"
                }
              >
                Services
              </a>
              {footerNavServicesItems}
            </div>
            <div className={"footer-landing__bottom-menu-column"}>
              {footerNavItems}
            </div>
          </nav>
          <div className={"footer-landing__bottom-info"}>
            <div className={"footer-landing__bottom-info-places"}>
              {footerPlaces}
            </div>
            <div className={"footer-landing__bottom-info-badges"}>
              <a
                href={"https://www.awwwards.com/boldare"}
                rel={"nofollow noreferrer"}
                target="_blank"
              >
                <img
                  src={"img/awwwards-badge-12_2x.png"}
                  className={"footer-landing__logo"}
                  alt={"Awwwards Badge"}
                />
              </a>
              <a
                href={
                  "https://www.boldare.com/blog/we-won-german-design-awards-2021/"
                }
                rel={"nofollow noreferrer"}
                target="_blank"
              >
                <img
                  src={"img/german-design-award_2x.png"}
                  className={"footer-landing__logo"}
                  alt={"German Design Awards Badge"}
                />
              </a>
              <a
                href={"https://clutch.co/profile/boldare"}
                rel={"nofollow noreferrer"}
                target="_blank"
              >
                <img
                  src={"img/Clutch_Badge.png"}
                  className={"footer-landing__logo"}
                  alt={"Clutch Badge"}
                />
              </a>
              <a
                href={"https://www.goodfirms.co/company/boldare"}
                rel={"nofollow noreferrer"}
                target="_blank"
              >
                <img
                  src={"img/Goodfirms_Badge.png"}
                  className={"footer-landing__logo"}
                  alt={"GoodFirms Badge"}
                />
              </a>
            </div>
          </div>
        </div>
        <p className={"footer-landing__bottom-copyrights"}>
          &#169; {new Date().getFullYear()} Boldare. All rights reserved.
        </p>
      </div>
    </section>
  );
}
