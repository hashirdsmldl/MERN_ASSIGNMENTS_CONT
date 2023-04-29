import { useEffect, useState } from 'react';
import Transaction from './Transactions';
import Search from './Search';
import Add from './Add';
import { v4 as uuidv4 } from 'uuid';
import Edit from './Edit';

function FormTextExample() {
  const [inputVal, setInputVal] = useState('');
  const [personsInfo, setPersonsInfo] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editPerson, setEditPerson] = useState(null);
  useEffect(() => {

 
    const getTasks = JSON.parse(localStorage.getItem("userdata"));
    if (getTasks == null) {
      setPersonsInfo([]);
    } else {
      setPersonsInfo(getTasks);
    }
  }, []);

  const onChange = (e) => {
    setInputVal(e.target.value);
  }

  const displaySearchItems = personsInfo.filter((person) =>
    person.name.toLowerCase().includes(inputVal.toLowerCase())
    || person.address.toLowerCase().includes(inputVal.toLowerCase())
    || person.city.toLowerCase().includes(inputVal.toLowerCase())
  )

  const handleAddPersonInfo = (person) => {
    const id = uuidv4(); 
    const newPerson = { ...person, id }; 

    // save to localStorage
    localStorage.setItem('userdata', JSON.stringify([...personsInfo, newPerson]));
    setPersonsInfo([...personsInfo, newPerson]);
  }

  const handleDelete = (id) => {
    let items = JSON.parse(localStorage.getItem("userdata"));
    items = items.filter((item) => item.id !== id);
    localStorage.setItem("userdata", JSON.stringify(items));
    setPersonsInfo(items);
  }

  const handleEdit = (person) => {
   
    setEditPerson(person);
    setEditing(true);
  }
 

  return (
    <>
      <Search searchVal={inputVal} onChange={onChange} />
      {editing ? (
        <Edit  person={editPerson} info={personsInfo} setEditing={setEditing} updateInfo={setPersonsInfo} />
      ) : (
        <Add onAddPersonInfo={handleAddPersonInfo} />
      )}
      <Transaction onEdit={handleEdit} onDelete={handleDelete} items={displaySearchItems} />
    </>
  );
}

export default FormTextExample;
