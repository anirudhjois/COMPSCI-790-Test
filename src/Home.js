import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mario');

    const handleClick = (e) => {
        console.log('Hello NetRoomers', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
      }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
            </div>

    );
}
 
export default Home;