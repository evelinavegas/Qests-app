import Error from '../img/error-404.svg'
import gif from '../img/giphy.gif';

function NotFound() {
    return(
        <div className="not-found-container">
            <img className='not-found-gif' src={gif} alt='Dig'/>
            <img className='not-found-404' src={Error} alt='Error'/>

        </div>  
    )
}
export default NotFound