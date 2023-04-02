import { useEffect, useState } from "react";

function App() {
  console.log("aaa")
  const [sayac, sayacGuncelle] = useState(0)
  const [ad, adGuncelle] = useState("Ad tanımsız")

  useEffect(()=>{
    document.title = sayac;
    console.log("aaaaa")
  
  }, [sayac])
 
  function adFonskiyonu() {
    let zaman = new Date().getSeconds()
    adGuncelle("Ahmet Yılmaz: " + zaman )
  }


  return (
    <>
      <p>{sayac}</p>
      <button onClick={ ()=>{  sayacGuncelle( oncekiDeger=>oncekiDeger+1)  } }>Arttır</button>
      <p>Ad: {ad}</p>
      <button onClick={adFonskiyonu}>Ad Güncelle</button>
    </>
  );
}

export default App;
