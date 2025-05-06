
const ConditionalRedering = () => {
    const isLoggedIn = true;
    const greetings = isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>;
  return (
    <div>
        {greetings}
    </div>
  )
}

export default ConditionalRedering