const MvvText = (props)=>{    
    const data = props    
       
    return (
    <div className={style.cardMvv}>           
        <div> 
            <img className={style.MvvIcon} src={props.cardImage} alt={props.name} />
            <h2  className={style.MvvTitle}>{props.name}</h2>            
            <div id='mvvText'>    
                {textData.map(textomvv =>{
                    return             
                    <p className={style.Mvvp}>{textomvv}
                    </p>
                })}            
            </div>
        </div>        
    </div>)
}

export default MvvText   