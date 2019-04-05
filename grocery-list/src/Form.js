import React, { useRef } from 'react';

const Form = ({ onSubmit }) => {

  const itemRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Handled Submit`);
    const newItem = itemRef.current.value;
    if (newItem !== '') {
      onSubmit(newItem);
    }
    itemRef.current.value = '';
  }

  return (
   <form id="newItem" className="newitem" auto-complete="off" onSubmit={handleSubmit}>
     <label htmlFor="itemName" className="line-label">New Item</label>
     <div className="addnew">
       <input type="text" ref={itemRef} name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" />
       <input type="submit" value="Add" className="form-component btn" />
     </div>
   </form>
  );
};

export default Form;
