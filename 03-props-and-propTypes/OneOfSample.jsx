import PropTypes from "prop-types";

const OneOfSample = (props) => {
    const {colour} = props;
  return (
    <div style={{backgroundColor: colour}}>{colour}</div>
  )
}

OneOfSample.propTypes = {
    colour: PropTypes.oneOf(["red", "green", "blue"]).isRequired,
}

export default OneOfSample

