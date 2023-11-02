import { useState } from 'react';
import './App.css';
import FetchButton from './components/FetchButton';

function App() {
  const [listItems , setListItems] = useState([]);

  const fetchEndPoint = async(url) =>{
    try{
      const response = await fetch(url);
      const responseJson = await response.json();
      return responseJson;
    }
    catch(err){
      console.log(err.stack);
    }
  };

  const handleFetchUsers = ()=>{

    const fetchUsers = async ()=>{
      return await fetchEndPoint('https://jsonplaceholder.typicode.com/users');
    };

    fetchUsers().then( result => setListItems(result));
  }


  const handleFetchPosts = ()=>{
    const fetchPosts = async ()=>{
      return await fetchEndPoint('https://jsonplaceholder.typicode.com/posts');
    };

    fetchPosts().then(result => setListItems(result));

  }
  const handleFetchComments = ()=>{
    const fetchComments = async ()=>{
      return await fetchEndPoint('https://jsonplaceholder.typicode.com/comments');
    };
    fetchComments().then(result => setListItems(result));
  }

  return (
    <div >
      <div className='appDiv'>
      <FetchButton onClickFunction={handleFetchUsers} buttonText={"users"}/>
      <FetchButton onClickFunction={handleFetchPosts} buttonText={"posts"}/>
      <FetchButton onClickFunction={handleFetchComments} buttonText={"comments"}/>
      </div>
      <div className='listItems'>
        <ul>
          {listItems.map((item) =>
            <li key={item.id}>{JSON.stringify(item)}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
