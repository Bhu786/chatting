import { useState } from "react"
import axios from 'axios'
import Visual from "../visual"

import './index.css'

const Sorting = () =>{
    const [sorting,sorted] = useState([])
    const [resArr,resultant] = useState([])

    const changing = (e)=>{
        const ret = e.target.value
        const ret1 = ret.split(',')
        const g = []
        for (let i=0; i<ret1.length;i++){
            g.push(Number(ret1[i]))
        }
        sorted(g)

    }

    const submitted = async(e) =>{
        e.preventDefault()
        //console.log(sorting)
   
        const entered = {
            Iarray:sorting
        }
        try{
            const resp = await axios.post('insert/insertion',entered)
            //console.log(resp.data)
            resultant(resp.data)
        }catch(err){
            console.log(err)
        }
        
        

    }
    
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand ti" href="#/"><b>Insertion Sort</b></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            </div>
        </div>
    </nav>

    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="p-4">
                    <h1 className="head ">Insertion Sort</h1>
                    <br/>
                    <div className="col-lg-12 d-flex flex-row">
                        <form className="col-lg-9" accept-charset="utf-8" onSubmit={submitted}>
                            <input className="form-control col-lg-12" type="text" name="" id="" value={sorting} onChange={changing} placeholder="Array" />
                        </form>

            
                    </div>
                    <br/>
                    <h4>Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time by comparisons. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages </h4>
                    <br/>

<h5>* Iterate from arr[1] to arr[N] over the array.</h5> 
<h5>* Compare the current element (key) to its predecessor.</h5>
<h5>* If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.</h5>
<h5>* Time-Complexity: O(N^2)</h5>
                    
                    <br />
                    
                </div>
            </div>
            <div className="col-lg-6">
                <img height='500px' src="https://www.swtestacademy.com/wp-content/uploads/2021/11/algorithms-3.png" />

            </div>

            <Visual arr1={resArr} />

        </div>

    </div>










       
           
             
             


           
            
        
            
        </>
    )
}

export default Sorting