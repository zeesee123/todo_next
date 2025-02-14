// import Image from "next/image";
"use client"

import {useState,useEffect} from "react";
import Link from 'next/link';

export default function Home() {

  // localStorage.setItem('ch','era');

  const[item,setitem]=useState("");
  const[list,setlist]=useState(()=>JSON.parse(localStorage.getItem('list'))||[]);

  
  useEffect(()=>{

    const fek=async()=>{

      console.log(process.env.NEXT_PUBLIC_API_URL);
      let fe=await fetch(`/api/sample`);
      let re=await fe.json();

      console.log(re);
    }
    
    fek();

  } ,[]);
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list));
  },[list]);

  // function setstorage(){

  //   localStorage.setItem('list',JSON.stringify(list));
  // }


  function Clicker(e,id){

    console.log('this is the event',e);
    console.log('this is the id',id);
    console.log(e.target.checked);
    console.log(e.check);

    setlist((prev)=>{return prev.map((p)=>{if(p.id==id){return {...p,completed:e.target.checked};}else{return p}})});

    // list.forEach((li)=>{
    //   if(li.id==id){
    //     li.completed=e.target.checked;
    //   }
    // });

    // setlist(list);

    // setlist((prev)=>{let newlist=prev.map((li)=>{

    //   if(li.id==id){
    //     li.completed=e.target.checked;
    //   }
    // }); return newlist;});

    // setstorage();

    
  }

  function deletestuff(id){

    // list.filter((li)=>{
    //   return li.id!=id;
    // });

    setlist((prev)=>{let newlist=prev.filter((li)=>{return li.id!=id});return newlist;});

    // setstorage();
    // console.log(e);
  }

  function additem(e){

    e.preventDefault();

    let data=new FormData(e.target);

    let obj={};

    data.forEach((el,i)=>{

      obj[i]=el;

       
    });

    console.log('this is the value of obj after submission',obj);

    if(item!=""){

      setlist((prev)=>[...prev,{id:crypto.randomUUID(),item:item,completed:false}]);
    setitem("");
    }else{

      alert('item cannot be empty');
    }
    

    
    console.log('this is the list',list);
    // console.log('you just submitted the form');

    // setstorage();



  }



  return (
    <>

<nav>
  <div className="flex p-2">
    <div className="mx-1"><Link href="/about">About Page</Link></div>
  </div>
</nav>


    <h1 className="italic text-4xl text-center my-5">Todo test</h1>

    <div
      className="container mx-auto space-x-4"
    >

      <form onSubmit={additem}>
            
            <div className="flex mx-3 justify-center">
              <input placeholder="enter an item" name="item" className="w-1/2 p-2" value={item} onChange={(e)=>setitem(e.target.value)}/>
            </div>
            
            <div className="flex mx-6 p-2  justify-center">
            <button className="bg-yellow-300 p-2 px-3 rounded-md">add item</button>
            </div>
            

          </form>

          {/* list of items  */}

    <div className="mx-10">

          <div className="flex flex-wrap justify-center">
                  
            <ul className="list-disc mx-10 w-full">

              {list.map((el,i)=>{return (<li key={i} className="my-3">
                <div className="flex">
                  <div className="mx-2">{el.item.charAt(0).toUpperCase()+el.item.slice(1)}</div>
                  <div className="mx-2"><input type="checkbox" name="check" onChange={(e)=>Clicker(e,el.id)} checked={el.completed}/></div>
                  <div><button className="bg-red-600 rounded-md p-2 text-white" onClick={()=>deletestuff(el.id)}>DELETE</button></div>
                  </div>
                  </li>)})}
          
            </ul>
            
          </div>
    </div>
        
          
      
    </div>
    
    
    </>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
