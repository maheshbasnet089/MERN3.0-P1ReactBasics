import { useEffect, useState } from "react"


function LearningUseEffect(){
    // --- first type --- 
    // useEffect(()=>{
    //     console.log("haha ma yeta xu hai useEffect mah")
    //     // data fetch logic 
    // },[])
    const [count,setCount] = useState(1)
    const [like,setLike] = useState(1)
    const [latitude,setLatitude] = useState(23123)
    const [longitude,setLongitude] = useState(12312)
    const increaseCount = ()=>{
        setCount(count + 1)
    }
    const decreaseCount = ()=>{
        setCount(count-1)
    }
    const likeBadau = ()=>{
        setLike(like +1)
    }
    // useEffect(()=>{
    //     console.log('count and like updated')
    // },[count,like])
    // useEffect(()=>{
    //     // login, jati ahile like state ma value xa tyo backend ma pathaedine code 
    //     console.log("like sent to server")
    // },[like])
    useEffect(()=>{
        console.log("ma tw sadae execute huedinxu la !")
        setLatitude(latitude+0.1)
    })
    return (
        <>
            <h1>{count}</h1>
           <button onClick={increaseCount}>+</button>
           <button onClick={decreaseCount}>-</button>
            <h2>Like : {like}</h2>
            <button onClick={likeBadau}>Like me</button>
        </>
    )
}


export default LearningUseEffect