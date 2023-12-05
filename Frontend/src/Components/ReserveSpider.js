import { useState } from "react"

const ReserveSpider = () => {
    
    const [reservation, setReservation]=useState({})

        const [name, setname]=useState("")
        const [email, setemail]=useState("")
        const [contact, setcontact]=useState("")
        const [people, setpeople]=useState("")
        const [seat, setseat]=useState("")
        const [payment, setpayment]=useState("")

        const [options, setOptions]=useState(false);
        const [editmodespider, seteditmodespider]=useState(false)
        const [cancelReserveMsg, setCancelReserveMsg]= useState(false);
        const [editsuccessful, setEdituccessul]= useState(false)
        const [ok, setOk]= useState(false);
        
        const handleSubmit=async(e)=>{
                e.preventDefault();
                const reserveInfo={name, email, contact, people, seat, payment}

                const response = await fetch('https://the-big-screen-backend.vercel.app/BigScreen/addRes', {
                        method:'POST',
                        body: JSON.stringify(reserveInfo),
                        headers: {
                                'Content-type':'application/json'
                        }
                })

                const json=await response.json();
                setReservation(json)

                if(response.ok){
                        setname("")
                        setemail("")
                        setcontact("")
                        setpeople("")
                        setseat("")
                        setpayment("")
                        setOptions(!options);
                        
                }
        }

        const handleCancelBtn=async()=>{

                const response=await fetch('https://the-big-screen-backend.vercel.app/BigScreen/reserve/'+reservation._id, {
                        method:'DELETE'
                })

                const json=await response.json();

                if (response.ok) setCancelReserveMsg(!cancelReserveMsg);
                
        }
        
        

        const handleeditbuttonspider=()=>{
            seteditmodespider(!editmodespider)
        }


        const handleeditsubmit=async(e)=>{
                e.preventDefault()
                const temp= {
                        name, email, contact, people, seat, payment
                }

                const response=await fetch("https://the-big-screen-backend.vercel.app/BigScreen/reserve/"+reservation._id, {
                        method:"PATCH",
                        body:JSON.stringify(temp),
                        headers: {
                                'Content-type':'application/json'
                        }
                })

                const json=await response.json()

        

                if(response.ok) setEdituccessul(!editsuccessful)
        

        }

        const handleOkBtn=()=>{
            setOk(!ok);
        }


    return ( <div className="reserveSpider">
         <form onSubmit={handleSubmit}>
                        <label>Fullname:</label>        
                        <input type="text" onChange={(e)=> setname(e.target.value)} value={name}></input>

                        <p><label>Email:</label>
                        <input type="text" onChange={(e)=> setemail(e.target.value)} value={email}></input></p>

                        <label>Contact:</label>
                        <input type="text" onChange={(e)=> setcontact(e.target.value)} value={contact}></input>

                        <p><label>Number of people:</label>
                        <input type="text" onChange={(e)=> setpeople(e.target.value)} value={people}></input></p>

                        <p><label>Seat Number:</label>
                        <input type="text" onChange={(e)=> setseat(e.target.value)} value={seat}></input></p>

                        <label>Payment Method:</label>
                        <input type="text" onChange={(e)=> setpayment(e.target.value)} value={payment}></input>

                        <button>Submit</button>

                        
                </form>

                {options  && 
                        <div className="optionsSpider">
                                <h3>Want to change?</h3>
                                <button onClick={handleeditbuttonspider}>Edit</button>
                                <button onClick={handleCancelBtn}>Cancel</button>
                                <button onClick={handleOkBtn}>OK</button>
                        </div>
                }

                {cancelReserveMsg && <h2>Your reservation is canceled</h2>}

                
                {editmodespider && 
                <div>
                    <form onSubmit={handleeditsubmit}>
                                <label>Fullname:</label>        
                                <input type="text" onChange={(e)=> setname(e.target.value)} value={name}></input>

                                <p><label>Email:</label>
                                <input type="text" onChange={(e)=> setemail(e.target.value)} value={email}></input></p>

                                <label>Contact:</label>
                                <input type="text" onChange={(e)=> setcontact(e.target.value)} value={contact}></input>

                                <p><label>Number of people:</label>
                                <input type="text" onChange={(e)=> setpeople(e.target.value)} value={people}></input></p>

                                <p><label>Seat Number:</label>
                                <input type="text" onChange={(e)=> setseat(e.target.value)} value={seat}></input></p>

                                <label>Payment Method:</label>
                                <input type="text" onChange={(e)=> setpayment(e.target.value)} value={payment}></input>

                                <button>Submit</button>
                        
                                
                        </form>    
                </div>
                }

                {editsuccessful && <h2>Edit Successful!</h2>}
                
                {ok && <h2>Thank you!</h2>}

    </div> );
}
 
export default ReserveSpider;