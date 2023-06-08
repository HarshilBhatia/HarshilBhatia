import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import FeelingProud from "../../greeting/FeelingProud"

const darkTheme = {
  name: "dark",
  body: "#1D1D1D",
  text: "#FFFFFF",
  dark: "#000000",
  secondaryText: "#8D8D8D",
  accentColor: "#46B2E0",
  accentBright: "#23C4ED",
  projectCard: "#292A2D",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#292A2D",
  imageClothes: "#000000",
  avatarMisc: "#212121",
  avatarShoes: "#2B2B2B",
};
export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="parent">
          <div className="text order-2 order-lg-1 justify-content-center order-lg-1 child">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h2 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 20,
                    }}
                  />
                </h2>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/about" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      About Me
                      <div className="ring one"></div>
                      <div className="ri  ng two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                  <Link to="/projects" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      Projects
                      <div className="ring one"></div>
                      <div className="ri  ng two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>


                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}

        <div className="child">
            <FeelingProud theme={darkTheme} />
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
