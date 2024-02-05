import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "@alfalab/core-components-button";

export default function NavBarItem({ title, link, icon }) {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <Link to={link} style={{ width: "100%", textDecoration: "none" }}>
      <Button
        leftAddons={icon}
        view={isActive ? "secondary" : "link"}
        block={true}
        nowrap={true}
        breakpoint={500}
        size="xs"
        style={{
          justifyContent: "flex-start",
          fontWeight: "400",
        }}
      >
        {title}
      </Button>
    </Link>
  );
}

NavBarItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.element.isRequired,
};
