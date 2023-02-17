export function decodedResistorValue(inputs:string[]) {
    const colors = [
    {color:'black',code:0},
    {color:'brown',code:1},
    {color:'red',code:2},
    {color:'orange',code:3},
    {color:'yellow',code:4},
    {color:'green',code:5},
    {color:'blue',code:6},
    {color:'violet',code:7},
    {color:'grey',code:8},
    {color:'white',code:9},

  ]

let f = null;

colors.forEach((c)=> (c.color === inputs[0])?f=c.code:null)

let s = null;

colors.forEach((c)=> (c.color === inputs[1])?s=c.code:null)

let l = null;

colors.forEach((c)=> (c.color === inputs[2])?l=c.code:null)

let result = f+''+s;

if(s === 0){
  result = String(f)
}
  
l = Number(l);

const unit = (l>=2)?' kiloohms':' ohms';
const value = (l>=2)?(result.length+l)-3:(result.length+l);

const last = result.padEnd(value,'0')

return last+unit
}
