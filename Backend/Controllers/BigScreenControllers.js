
const reservation = require('../Models/reservation');
const Reservation = require('../Models/reservation');


const showReservation=async(req, res)=>{

    try{

        const reserve= await Reservation.find({});

        if(!reserve) return res.json({message: "Error Can't get"})
        if(!reserve[0]) return res.json({message: "No Reservation Yet"})

        return res.json(reserve);

    }
    catch(e){
        console.log(e.message);
    }
}
const addReservation= async(req, res)=>{
    try{

        
        const reserve= await Reservation.create({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            people: req.body.people,
            seat: req.body.seat,
            payment: req.body.payment

        });
        if(!reserve) return res.json({message: "No"})
        return res.json(reserve);
    }
   catch(e){
    console.log(e.message);
}
}

const updateReservation=async(req, res)=>{
    try{
        const {id}=req.params;

        const reserve = await Reservation.findOneAndUpdate({_id:id}, {...req.body});

        if(!reserve) return res.json({message: "Sorry, cant proceed"});

        return res.json(reserve);
    }catch(e){
        console.log(e.message);
    }
}

const deleteReservation=async(req, res)=>{
    try{
        const {id}=req.params;

        const delres=await Reservation.findOneAndDelete({_id:id});

        if(!delres) return res.json({message:"Cant delete a reservation"});

        return res.json(delres);
    }catch(e){
        console.log(e.message);
    }
}



module.exports={showReservation, addReservation, updateReservation, deleteReservation};