import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import style from "./ScrollToTop.module.css";
import Up from "../../images/Up.svg";

const ScrollToTop = ({ threshold, showBelow }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (
      (showBelow && window.scrollY > threshold) ||
      (!showBelow && window.scrollY > threshold)
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <img
          onClick={scrollToTop}
          src={Up}
          alt="Scroll to top"
          className={`${style.scrollToTopButton} ${isVisible ? "active" : ""}`}
        />
      )}
    </>
  );
};

ScrollToTop.propTypes = {
  threshold: PropTypes.number,
  showBelow: PropTypes.bool,
};

export default ScrollToTop;
