export const colorCode = (given:string) => {

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
  
colors.forEach((c)=> (c.color === given)?f=c.code:null)
  
return f
}

export const COLORS = ['black',
                      'brown',
                      'red',
                      'orange',
                      'yellow',
                      'green',
                      'blue',
                      'violet',
                      'grey',
                      'white']
