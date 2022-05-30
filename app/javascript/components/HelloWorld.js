import React from "react"
import PropTypes from "prop-types"
import { useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { fetchGreetingsFromApi } from "../redux/greetings/greetingReducer"


const HelloWorld =() => {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchGreetingsFromApi());
  }, [dispatch]);

  return (
      <div className="greeting-wrapper">
        {/* <h1>Rails-React exercise</h1> */}
        <h2 className="text">{ greeting }</h2>
        <button onClick={() => dispatch(fetchGreetingsFromApi())} className="button1">Next message</button>
        {/* <Link to='/' className="button2">Home</Link> */}
      </div>
  );
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld

