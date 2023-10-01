import hacklogo from "../assets/hacklogo.png"
function Home(){
           return (
               <div className="home">
                   <img className="hack-home-logo" src={hacklogo} alt="hack-logo"/>
                   <div className="home-quote">BUILDING THE FUTURE BIT BY BIT</div>
               </div>
           )
}

export default Home;