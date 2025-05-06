const Students = (props) => {
    return (
      <div>
          <table>
            <tbody>
              <tr>
                  <th>Name</th>
                  <td>{props.name}</td>
              </tr>
              <tr>
                  <th>Age</th>
                  <td>{props.age}</td>
              </tr>
              <tr>
                  <th>Status</th>
                  <td>{props.status ? "online" : "offline"}</td>
              </tr>
            </tbody>
          </table>
      </div>
    )
  }
  
  
  const propsExample = () => {
    return (
        <div>
            <Students name="Koushik" age={21} status={true}/>
            <Students name="Person 2" age={23} status={false}/>
        </div>
      
    )
  }
  
  export default propsExample