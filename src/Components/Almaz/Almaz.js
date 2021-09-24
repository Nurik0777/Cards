import cls from  './Almaz.module.css'



const Almaz12 = () =>{
    return(
        <>
            {
                        Cardlist.map(item=>(
                            <div className={cls.card_main}>
                                <div className={cls.card}>
                                    <div className={cls.card_ricture}>
                                        <img src={item.url} />
                                    </div>
                                    <div className={cls.card_header}>
                                        <h5>{item.title}</h5>
                                    </div>

                                    <div className={cls.card_footer}>
                                        <h5>Age: {item.age} ,</h5>
                                        <h5>Height: {item.height} ,</h5>
                                        <h5>Hobby: {item.hobby} ,</h5>
                                        <h5>Color: {item.color}</h5>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

        </>
    )
}

export default Almaz12;