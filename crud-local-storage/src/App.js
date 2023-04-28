import { useEffect, useState } from 'react';


import Transaction from './Transactions';
import Search from './Search';
import Add from './Add';

function FormTextExample() {
  
 


  const[inputVal,setInputVal]=useState('');
  const[newCars,setNewCars]=useState([]);
 
    useEffect(() => {

      const getTasks = JSON.parse(localStorage.getItem("userdata"));
        if (getTasks == null) {
            setNewCars([])
        } else {
       
            setNewCars(getTasks);
           
        }
    }, [])
const onChange=(e)=>{
  setInputVal(e.target.value)
}

const displaySearchItems = newCars.filter((transaction) =>

    transaction.name.toLowerCase().includes(inputVal.toLowerCase())
 || transaction.address.toLowerCase().includes(inputVal.toLowerCase())
 || transaction.city.toLowerCase().includes(inputVal.toLowerCase())

  )
  const handleAddCar = (car) => {

   

// save to localStorage
localStorage.setItem('userdata', JSON.stringify([...newCars, car]));
setNewCars([...newCars, car]);


  }

  return (
    <>
  
      <Search searchVal={inputVal}  onChange={onChange}/>
      <Add onAddCar={handleAddCar}/>
<Transaction items={displaySearchItems}/>
    </>
  );
}

export default FormTextExample;