
import BarChart from "../graph"
const Visual = (props) =>{
    let c = 0

    
    const {arr1} = props
    //console.log(arr1)

    const spliting = arr1.map((item) =>{
        let j = []
        
        let rut = item.split(',')
       

        for (let i1=0; i1<rut.length;i1++){
            j.push(Number(rut[i1]))
            
            
        }
        c=c+1
        
        //console.log(j)

        return(
            <>
                <BarChart arr1={j} b={ c }  />
            </>
        )
       
    })
    
    


    return(
        <>
        
            
            
            {spliting}
            
            
       
        
        
      

        </>
    )
}

export default Visual