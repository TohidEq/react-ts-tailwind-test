import FooterLinks from "./FooterLinks";

function Footer() {
  const footerLinks: {
    title: string;
    link: string;
  }[] = [
    {
      title: "About",
      link: "/",
    },
    {
      title: "Features",
      link: "/",
    },
    {
      title: "Pricing",
      link: "/",
    },
    {
      title: "Services",
      link: "/",
    },
    {
      title: "Careers",
      link: "/",
    },
    {
      title: "Help",
      link: "/",
    },
    {
      title: "Privacy",
      link: "/",
    },
  ];
  return (
    <div className="footer">
      <div className="title">
        <span>GC</span> PARTNERS
      </div>

      <FooterLinks links={footerLinks} />

      <div className="bottom-text">
        © 2023 GC Partners. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
