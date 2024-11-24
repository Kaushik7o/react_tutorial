import React,{createContext} from 'react'

const data1=createContext();
const data2=createContext();
function Usecont() {
   const name="Kaushik"
   const g="kunal"
  return (
  
    <div>
      <data1.Provider value={name}>
      <data2.Provider value={g}>
<Usecont></Usecont>
      </data2.Provider>
      </data1.Provider>
      
    </div>
  )
}

export default Usecont;
export {data1,data2};
