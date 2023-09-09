// 1. import area

import { B } from "../index";
import { C } from "./C";




// 2. definition area
let A = (props)=>{
    console.log(props);
    let data1 = 'This is data1'
    return(
        <>
        <h1>{data1}</h1>
        <h1>{props.children}</h1>
            <div>Name {props.name}<div> {props.surname}</div></div>
            <B/>
            <C data3={props.children}/>
        </>
    )
}

// 3. export area
export default A;