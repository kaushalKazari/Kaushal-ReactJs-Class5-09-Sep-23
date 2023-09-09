// 1. import area

import { B } from "../index";
import { C } from "./C";




// 2. definition area
let A = (props)=>{
    console.log(props);
    return(
        <>
            <div>Name {props.name}<div> {props.surname}</div></div>
            <B/>
            <C/>
        </>
    )
}

// 3. export area
export default A;