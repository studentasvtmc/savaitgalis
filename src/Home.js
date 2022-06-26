import { useState } from "react";

const Home = () => {
   const [name, setName] = useState('Marius');
   const [age, setAge] = useState(25);

const handleClick = () => {
   setName('Liusi');
   setAge(31);
}

const kitas = () => {
      setName('Jonas');
      setAge(15);
 }




    return ( 
        <div className="home">
           <h2>Home page </h2> 
           <p>{name} yra {age} metu</p>
           <button onClick={handleClick}>Liusi</button>
           <button onClick={kitas}>Jonas</button>
          
        </div>
     );
}
 
export default Home;