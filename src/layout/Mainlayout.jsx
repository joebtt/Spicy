import { Outlet } from 'react-router';
import Header from '../components/Header';

function Mainlayout(){
  
  return (

    <div>
      <Outlet />
      
    </div>

  );

}

export default Mainlayout;
