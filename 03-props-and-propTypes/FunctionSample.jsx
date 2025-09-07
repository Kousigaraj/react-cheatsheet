import PropTypes from "prop-types";

const FunctionSample = (props) => {
    const { handleClick } = props;
  return (
    <button onClick={handleClick}>Click me!</button>
  )
}

FunctionSample.propTypes = {
    handleClick: PropTypes.func.isRequired,
}

export default FunctionSample