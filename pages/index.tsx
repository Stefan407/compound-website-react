import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import ImageListItem from "@mui/material/ImageListItem";

const Home: NextPage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [tenderActiveTab, setTenderActiveTab] = useState("institutions");

  const linksMenu = [
    {
      label: "Markets",
      href: "",
    },
    {
      label: "Governance",
      href: "",
    },
    {
      label: "Prices",
      href: "",
    },
    {
      label: "Docs",
      href: "",
    },
  ];

  const tenderTabs = [
    {
      label: "Institutions",
      id: "institutions",
    },
    {
      label: "Earn",
      id: "earn",
    },
    {
      label: "Manage",
      id: "manage",
    },
    {
      label: "Report",
      id: "report",
    },
  ];

  const tenderItems = [
    {
      title: "Lorem Ipsum",
      text: "Projects are well designed using Figma. You will get the design file.",
      imgSrc: "/img/icon/try-1.png",
      tabs: ["institutions", "earn"],
    },
    {
      title: "Lorem Ipsum",
      text: "Projects are well designed using Figma. You will get the design file.",
      imgSrc: "/img/icon/try-2.png",
      tabs: ["earn", "manage"],
    },
    {
      title: "Lorem Ipsum",
      text: "Projects are well designed using Figma. You will get the design file.",
      imgSrc: "/img/icon/try-3.png",
      tabs: ["institutions", "report"],
    },
    {
      title: "Lorem Ipsum",
      text: "Projects are well designed using Figma. You will get the design file.",
      imgSrc: "/img/icon/try-2.png",
      tabs: ["manage", "earn"],
    },
    {
      title: "Lorem Ipsum",
      text: "Projects are well designed using Figma. You will get the design file.",
      imgSrc: "/img/icon/try-1.png",
      tabs: ["institutions", "report"],
    },
    {
      title: "Lorem Ipsum",
      text: "Projects are well designed using Figma. You will get the design file.",
      imgSrc: "/img/icon/try-3.png",
      tabs: ["manage", "report"],
    },
    {
      title: "Lorem Ipsum",
      text: "Projects are well designed using Figma. You will get the design file.",
      imgSrc: "/img/icon/try-3.png",
      tabs: ["manage", "earn"],
    },
    {
      title: "Lorem Ipsum",
      text: "Projects are well designed using Figma. You will get the design file.",
      imgSrc: "/img/icon/try-2.png",
      tabs: ["report", "manage"],
    },
    {
      title: "Lorem Ipsum",
      text: "Projects are well designed using Figma. You will get the design file.",
      imgSrc: "/img/icon/try-1.png",
      tabs: ["institutions", "manage"],
    },
    {
      title: "Lorem Ipsum",
      text: "Projects are well designed using Figma. You will get the design file.",
      imgSrc: "/img/icon/try-3.png",
      tabs: ["institutions", "earn"],
    },
    {
      title: "Lorem Ipsum",
      text: "Projects are well designed using Figma. You will get the design file.",
      imgSrc: "/img/icon/try-2.png",
      tabs: ["institutions", "report"],
    },
  ];

  return (
    <div className={`wrapp ${openMenu ? "hide" : ""}`}>
      <main>
        <div className="wrapper">
          <header
            className="header"
            id="main-section"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="header__logo">
              <img src="/img/logo.svg" alt="" />
            </div>
            <nav className="header__nav">
              <ul className="header__nav__menu">
                {linksMenu.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="btn header__btn">
              <button>Contact</button>
            </div>
            {!openMenu ? (
              <MenuOutlined
                onClick={() => setOpenMenu(true)}
                className="container-burger"
                style={{ fontSize: 26 }}
              />
            ) : (
              <CloseOutlined
                style={{ fontSize: 26 }}
                className="closebtn"
                onClick={() => setOpenMenu(false)}
              />
            )}
          </header>
        </div>
        <div id="mySidenav" className={`sidenav ${openMenu ? "active" : ""}`}>
          {linksMenu.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.label}
            </Link>
          ))}
          <div className="btn header__btn">
            <button>Contact</button>
          </div>
        </div>

        <section className="hero__section">
          <span className="hero__sub-header">Welcome to</span>
          <div className="hero__img">
            <img src="/img/hero-logo.png" alt="" />
          </div>
          <p className="hero__text" data-aos="fade-up" data-aos-delay="300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the
          </p>
        </section>
        <div className="contract__block">
          <p className="contract__sub-header">
            The Tender protocol currently has
          </p>
          <span className="contract__sum" data-aos="fade-up">
            $32 102 106 543 210,34
          </span>
          <p className="contract__sub-header">
            earning <span>0.09%</span> interest
          </p>
        </div>
      </main>
      <section className="protocol__section">
        <div className="wrapper">
          <div className="protocol__container">
            <div className="protocol__img" data-aos="fade-right">
              <img src="/img/protocol-img.png" alt="" />
            </div>
            <div className="protocol__text" data-aos="fade-left">
              <div className="section__header">Protocol</div>
              <div className="section__header-text">
                Compound is an algorithmic, autonomous interest rate protocol
                built for developers, to unlock a universe of open financial
                applications.
              </div>
              <div className="btn btn_protocol">
                <Link href="#">Protocol docs </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="protocol__bg">
          <img src="/img/background/protocol.png" alt="" />
        </div>
      </section>
      <section className="try__section">
        <div className="wrapper">
          <div className="try__text">
            <div className="section__header">Try tender</div>
            <div className="section__header-text">
              Community-built interfaces <br /> integrating the protocol
            </div>
          </div>
          <nav className="try__btn-container">
            {tenderTabs.map((tab, index) => (
              <span
                onClick={() => setTenderActiveTab(tab.id)}
                key={index}
                className={`try__btn ${tenderActiveTab === tab.id && "active"}`}
              >
                {tab.label}
              </span>
            ))}
          </nav>
          <div className="try__container tab-content_show fade" id="content-1">
            {tenderItems.map(
              (item, index) =>
                item.tabs.includes(tenderActiveTab) && (
                  <div key={index} className="try__item">
                    <img src={item.imgSrc} alt="" className="try__img-item" />
                    <div className="try__item-header">{item.title}</div>
                    <p className="try__item-text">{item.text}</p>
                  </div>
                )
            )}
          </div>
          <div className="try__container fade" id="content-2">
            <div className="try__item">
              <img src="/img/icon/try-1.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum22</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>
            <div className="try__item">
              <img src="/img/icon/try-2.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.{" "}
              </p>
            </div>
            <div className="try__item">
              <img src="/img/icon/try-3.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>

            <div className="try__item">
              <img src="/img/icon/try-2.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>
            <div className="try__item">
              <img src="/img/icon/try-1.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>
            <div className="try__item">
              <img src="/img/icon/try-3.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>
          </div>
          <div className="try__container fade" id="content-3">
            <div className="try__item">
              <img src="/img/icon/try-1.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>
            <div className="try__item">
              <img src="/img/icon/try-2.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum44</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.{" "}
              </p>
            </div>
            <div className="try__item">
              <img src="/img/icon/try-3.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>

            <div className="try__item">
              <img src="/img/icon/try-2.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>
            <div className="try__item">
              <img src="/img/icon/try-1.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>
            <div className="try__item">
              <img src="/img/icon/try-3.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>
          </div>
          <div className="try__container fade" id="content-4">
            <div className="try__item">
              <img src="/img/icon/try-3.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>
            <div className="try__item">
              <img src="/img/icon/try-1.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum44</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.{" "}
              </p>
            </div>
            <div className="try__item">
              <img src="/img/icon/try-3.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>

            <div className="try__item">
              <img src="/img/icon/try-2.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>
            <div className="try__item">
              <img src="/img/icon/try-1.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>
            <div className="try__item">
              <img src="/img/icon/try-3.png" alt="" className="try__img-item" />
              <div className="try__item-header">Lorem Ipsum</div>
              <p className="try__item-text">
                Projects are well designed using Figma. You will get the design
                file.
              </p>
            </div>
          </div>
        </div>
        <div className="try__bg">
          <img src="/img/background/try-1.png" alt="" />
        </div>
        <div className="try__bg2">
          <img src="/img/background/try-2.png" alt="" />
        </div>
      </section>
      <section className="audit__section">
        <div className="wrapper">
          <div className="audit__container">
            <div className="audit__text" data-aos="fade-right">
              <div className="section__header">Audited and Verified</div>
              <div className="section__header-text">
                The most secure <br /> protocol for money
              </div>
              <div className="btn btn_protocol">
                <Link href="#">Protocol security</Link>
              </div>
            </div>
            <div className="audit__item-block" data-aos="fade-left">
              <div className="audit__item">
                <div className="audit__img">
                  <img src="/img/audit-2.png" alt="" />
                </div>
                <div className="audit__text">
                  <span>Securtiy Audit</span>
                </div>
              </div>
              <div className="audit__item">
                <div className="audit__img">
                  <img src="/img/audit-1.png" alt="" />
                </div>
                <div className="audit__text">
                  <span>Securtiy Audit</span>
                </div>
              </div>
              <div className="audit__item">
                <div className="audit__img">
                  <img src="/img/audit-3.png" alt="" />
                </div>
                <div className="audit__text">
                  <span>Securtiy Audit</span>
                </div>
              </div>

              <div className="audit__item">
                <div className="audit__img">
                  <img src="/img/audit-4.png" alt="" />
                </div>
                <div className="audit__text">
                  <span>Securtiy Audit</span>
                </div>
              </div>
              <div className="audit__item">
                <div className="audit__img">
                  <img src="/img/audit-2.png" alt="" />
                </div>
                <div className="audit__text">
                  <span>Securtiy Audit</span>
                </div>
              </div>
              <div className="audit__item">
                <div className="audit__img">
                  <img src="/img/audit-1.png" alt="" />
                </div>
                <div className="audit__text">
                  <span>Securtiy Audit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg__audit">
          <img src="/img/background/audit.png" alt="" />
        </div>
      </section>
      <section className="sub__section">
        <div className="wrapper">
          <div className="sub__content">
            <div className="sub__text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="sub__btn">
              <div className="btn sub__btn1">
                <Link href="#">Go to app</Link>
              </div>
              <div className="btn sub__btn2">
                <Link href="#">Documents</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="wrapper">
          <div className="footer__container">
            <div className="footer__logo">
              <img src="/img/logo.png" alt="" />
              <p className="footer__logo__cr">Copyright © 2021</p>
            </div>
            <div className="footer__column">
              <div className="footer__menu-column">
                <ul>
                  <li className="footer__main-li">PROTOCOL</li>
                  <li>
                    <Link href="##">Markets</Link>
                  </li>
                  <li>
                    <Link href="##">Prices</Link>
                  </li>
                  <li>
                    <Link href="##">Developers</Link>
                  </li>
                  <li>
                    <Link href="##">Docs</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__menu-column">
                <ul>
                  <li className="footer__main-li">GOVERNANCE</li>
                  <li>
                    <Link href="##">Overview</Link>
                  </li>
                  <li>
                    <Link href="##">COMP</Link>
                  </li>
                  <li>
                    <Link href="##">Leaderboard</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__menu-column">
                <ul>
                  <li className="footer__main-li">COMMUNITY</li>
                  <li>
                    <Link href="##">Discord</Link>
                  </li>
                  <li>
                    <Link href="##">Forums</Link>
                  </li>
                  <li>
                    <Link href="##">Grants</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
