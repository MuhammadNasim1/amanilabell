export const products = [
 {id:'noor',name:'Noor Everyday Abaya',color:'Midnight black',price:2490,position:'0%',description:'An understated, flowing silhouette for everyday dressing.'},
 {id:'sahara',name:'Sahara Essential Abaya',color:'Cocoa brown',price:2790,position:'50%',description:'A softly draped essential in a rich cocoa tone.'},
 {id:'luna',name:'Luna Occasion Abaya',color:'Champagne cream',price:3290,position:'100%',description:'Quiet elegance in a luminous champagne shade.'},
];
export const sizes=['52','54','56','58','60'];
export const money=(n:number)=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
