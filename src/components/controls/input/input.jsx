import './input.scss';

export default function Input({type = 'text', title='', styles="primary", value = '', handlerChange}){
    
    return(
        <div className="input">
            <h4 className='inputTitle'>{title}</h4>
            <input type={type} className={styles} value={value} onChange={handlerChange}/>
        </div>
    
    )
}