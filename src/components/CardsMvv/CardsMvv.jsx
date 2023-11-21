import style from './CardsMvv.module.css'

const CardsMvv = (props)=>{    
    const data = props        
    
    return (
    <div className={style.cardMvv}>           
        <div> 
            <img className={style.MvvIcon} src={props.cardImage} alt={props.name} />
            <h2  className={style.MvvTitle}>{props.name}</h2>            
            <div id='mvvText'>                
                <p className={style.Mvvp}>{props.cardText}</p>
            </div>
        </div>        
    </div>)
}

export default CardsMvv   