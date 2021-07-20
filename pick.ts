interface map<B> {
    [ key: string ] : B
}

function process<T, W>(param: T, obj: W) {
    const newObj = {...obj};
    let reducedValue: any = "";
    if(typeof param == 'string')
    {
        reducedValue =  param.split('.').reduce((acc: { [key: string] : any }, curr)=>{
            return acc ? acc[curr] : null;
        }, newObj)
    }
    return reducedValue;
}



function checkType<T , W extends { [key: string] : any }>(param: T , obj: W ) : object{
    let newObj : { [key: string] : any } = {};
    const initValue  = { ...obj }
    if(typeof param == 'object'){
        let key: string = Object.keys(param)[0];
        let value: string = Object.values(param)[0];
        const reducedValue: any = process(value, obj);
        if (reducedValue){
            newObj[key] = reducedValue;
        }

        return newObj;
    }else if( typeof param == 'string' ) {
        const reducedValue : any  =  process(param, obj);
        if (reducedValue) {
            newObj[param] = reducedValue;
        }
        return newObj;
    }else{
        return newObj;
    }
}




let obj: map<string | object>  = {
    "age": "20",
    "riyad": {
        "name" : "riyad"
    }
}

let arr: any[] = [ 'age' ,  { name: 'riyad.name'} , 'else' ]


arr.forEach( n =>{
    


    console.log(checkType(n, obj))
})

// console.log( checkType( arr[0] , obj )   )


// console.log( Object.values(obj)[0] )