import { Cardlist } from "../Utils/Cardlist";
import './Card.css'



const Card = () =>{
    return(
        <>
            <div className='row'>
                    {
                        Cardlist.map(item=>(
                            <div className='card_main'>
                                <div className='card'>
                                    <div className='card_ricture'>
                                        <img src={item.url} />
                                    </div>
                                    <div className='card_header'>
                                        <h5>{item.title}</h5>
                                    </div>

                                    <div className='card_footer'>
                                        <h5>Age: {item.age} ,</h5>
                                        <h5>Height: {item.height} ,</h5>
                                        <h5>Hobby: {item.hobby} ,</h5>
                                        <h5>Color: {item.color}</h5>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>  
        </>
    )   
}









export default Card;