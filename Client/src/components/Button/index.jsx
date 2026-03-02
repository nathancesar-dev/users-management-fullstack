import { Button } from "./styles.js";
import PropTypes from "prop-types";

function DefaultButton({ children, theme, ...props }) {
  return (
    <Button theme={theme} {...props}>{children}</Button>
  );
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

export default DefaultButton;