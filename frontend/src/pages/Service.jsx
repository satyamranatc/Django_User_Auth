import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function Service() {
  let [BookData,setBookData] = useState({});

  useEffect(()=>{

    async function getBooks()
    {

      let user = JSON.parse(localStorage.getItem("user"));

      let response = await axios.get("http://localhost:8000/api/book/list",{
        headers:{
          "Authorization": `Bearer ${user.access}`
        }
      });
      if(response.status == 401)
      {
        let refresh = await axios.post("http://localhost:8000/api/user/refresh",{
          refresh: user.refresh
        });
        
        localStorage.setItem("user", JSON.stringify(refresh.data.user));

        response = await axios.get("http://localhost:8000/api/book/list",{
          headers:{
            "Authorization": `Bearer ${refresh.data.user.access}`
          }
        });
        if (response.status == 401)
        {
          localStorage.removeItem("user");
          window.location.href = "/auth";
        }
      }
      console.log(response.data);
      setBookData(response.data);
    }

    getBooks();
  },[])



  return (
    <div>

      <center>
        {
          BookData.message?.map((book)=>{
            return (
              <div className='m-5' >
                <h1 className='text-4xl' >{book.name}</h1>
                <h1 className='text-2xl' >{book.author}</h1>
                </div>
            )
          })
        }
      </center>

    </div>
  )
}
