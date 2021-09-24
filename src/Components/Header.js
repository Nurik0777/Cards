import './Header.css'



const Header = () =>{
    return(
        <>
            <div className='header_main'>
                <div className='header'>
                <div className='logo'>
                    <img src='http://www.president.kg/static/user/ima/logo.png' />
                </div>
                <ul className='header_child'>
                    <li><a>Home</a></li>
                    <li><a>Contacts</a></li>
                    <li><a>Address</a></li>
                    <li><a>About users</a></li>
                </ul>
                </div>
            </div>

        </>
    )
}

export default Header;