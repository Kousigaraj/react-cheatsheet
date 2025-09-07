import PropTypes from "prop-types";

const MultipleTypeComponent = (props) => {
  return (
    <div>{props.value}</div>
  )
}

MultipleTypeComponent.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default MultipleTypeComponent

