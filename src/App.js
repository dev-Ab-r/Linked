import React,{useEffect} from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import {useSelector,useDispatch} from 'react-redux';
import {selectUser} from './features/userSlice';
import Login from './components/user/Login';
import {auth} from './components/user/firebase';
import {login,logout} from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  console.log(user)
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser)
      if(authUser){
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName

        }));
      }else{
        dispatch(logout());
      }

    })
  },[])
  return (
    <div className="app">
      {user?(
      <>
      <Sidebar/>
      <Chat/>
      </>):(<Login/>)
      }
    </div>
  );
}

export default App;
