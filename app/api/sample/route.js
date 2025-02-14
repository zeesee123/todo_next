export async function GET(){
    
    let fe=await fetch('http://localhost:4000/json');
    let re=await fe.json();

    return new Response(JSON.stringify(re),{headers:{'Content-Type':'application/json'}});
    
}