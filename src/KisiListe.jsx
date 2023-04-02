import Kisi from "./Kisi";


function KisiListe( ozeliikler ) {


    return (
        <div className="container">
         <div className="row">
            {
               ozeliikler.kisiler.map( (kisi,index)=>{
                  return <Kisi key={index}/>
               })
            }
         </div>
        </div>
    )
}

export default KisiListe