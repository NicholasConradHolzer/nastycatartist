import React from "react";


export default function instagram(){
    
    const insta = '<div>Test <b>TESTER!!</b></div>';

    return(
        <div 
        dangerouslySetInnerHTML={{__html: insta}}
        />
    );
}