import { useState } from "react"
import ReserveDeadpool from "../Components/ReserveDeadpool"
import ReserveLoki from "../Components/ReserveLoki";
import ReserveSpider from "../Components/ReserveSpider";
import ReserveLogan from "../Components/ReserveLogan";
import ReserveAvengers from "../Components/ReserveAvengers";

const Movie = () => {

const [showDeadpoolForm, setShowDeadpoolForm]= useState(false);

const deadpoolReserveForm=()=>{
        setShowDeadpoolForm(!showDeadpoolForm)
}


const [showLokiForm, setShowLokiForm]= useState(false);

const lokiReserveForm=()=>{
        setShowLokiForm(!showLokiForm)
}

const [showSpiderForm, setSpiderForm]= useState(false);

const spiderReserveForm=()=>{
        setSpiderForm(!showSpiderForm)
}

const [showLoganForm, setLoganForm]= useState(false);

const loganReserveForm=()=>{
        setLoganForm(!showLoganForm)
}

const [showAvengersForm, setShowAvengersForm]= useState(false);

const avengersReserveForm=()=>{
        setShowAvengersForm(!showAvengersForm)
}
        
        


        
    return ( 
       
        <div className="movie">
           
                <div className="picture" >
                        <h3 className="movies" >Available Movies</h3>
                        <div className="movie-container">
                                <div className="movielist" id="m-1">
                                        <div className="didpol">
                                                <img src="/deadpool.png"   alt=""></img>
                                                <h3>Deadpool</h3>
                                                <div className="price">₱ 250.00</div> 
                                                <button onClick={deadpoolReserveForm}>Reserve</button>

                                                {showDeadpoolForm && <ReserveDeadpool/>}


                

                                        </div>
                                </div>

                                <div className="movielist" id="m-2">
                                        <div className="loki">
                                        <img src="/loki.jpg" alt=""></img>
                                        <h3>Loki</h3>
                                        <div className="price">₱ 200.00</div>
                                        
                                        <button onClick={lokiReserveForm}>Reserve</button>

                                        {showLokiForm && <ReserveLoki/>}
                                        
                                        </div>
                                </div>

                                <div className="movielist" id="m-3">
                                        <div className="spider">
                                        <img src="/spiderman.jpg"   alt=""></img>
                                        <h3>Sipderman</h3>
                                        <div className="price">₱ 250.00</div>
                                        <button onClick={spiderReserveForm}>Reserve</button>

                                        {showSpiderForm && <ReserveSpider/>}
                                        
                                        </div>
                                </div>

                                <div className="movielist" id="m-4">
                                        <div className="logan">
                                        <img src="/logan.jpg"   alt=""></img>
                                        <h3>Logan</h3>
                                        <div className="price">₱ 200.00</div>
                                        <button onClick={loganReserveForm}>Reserve</button>
                                        
                                        {showLoganForm && <ReserveLogan/>}
                                        
                                        </div>
                                </div>

                                <div className="movielist" id="m-5">
                                        <div className="avengers">
                                        <img src="/avengers.jpg"   alt=""></img>
                                        <h3>Avengers</h3>
                                        <div className="price">₱ 250.00</div>
                                        <button onClick={avengersReserveForm}>Reserve</button>
                                        
                                        {showAvengersForm && <ReserveAvengers/>}
                                        
                                        </div>
                                </div>
                        </div>
                </div>
                
        </div>
        
        
     );
}


 
export default Movie;