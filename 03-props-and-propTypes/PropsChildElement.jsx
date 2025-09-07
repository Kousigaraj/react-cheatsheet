import PropTypes from "prop-types";

const ArraySample = (props) => {
    // Array destructuring
    const {items} = props;
  return (
    <div>
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

ArraySample.propTypes = {
  items: PropTypes.array,
}

const ChildComponent = (props) => {
  return (
    <div>{props.children}</div>
  )
}

ChildComponent.propTypes = {
    children: PropTypes.array,
}


const PropsChildElement = () => {
    const items = [
        {id: 1, name: "Item 1"},
        {id: 2, name: "Item 2"},
        {id: 3, name: "Item 3"},
    ];
  return (
    <div>
        <ChildComponent>
            <p>line 1</p>
            <p>line 2</p>
        </ChildComponent>
        <ArraySample items={items}/>
    </div>
  )
}

export default PropsChildElement