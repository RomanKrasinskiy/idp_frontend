import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoutes = (props) => {
  return props.loggedIn ? <Outlet /> : <Navigate to="/idps" />;
};

// Проверяем, что в loggedIn попадает именно boolean значение
ProtectedRoutes.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default ProtectedRoutes;
