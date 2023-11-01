import './button.css';

const Button =({label,onClick})=>{
    return(
        <button className='btn' onClick={onClick} >
            {
                label ?? 'click me!'
            }
        </button>
    )
    
}

export default Button