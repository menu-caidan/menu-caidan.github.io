import React, {useEffect, useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import handleFormSubmit from "@site/src/components/Menu/HandleFormSubmit";
import ButtonGroup from "@site/src/components/Menu/ButtonGroup";

function MenuText() {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    // Fetch the text file content
    fetch('/menu.txt')
      .then(response => response.text())
      .then(content => setFileContent(content));
  }, []);

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{fileContent}</pre>
    </div>
  );
}

function MenuForm() {
  const options = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
    { label: 'E', value: 'E' },
  ];

  const [selectedChoice, setSelectedChoice] = useState('');

  const onSubmit = (event) => {
    handleFormSubmit(event); // Proceed with form submission
  };

  const handleOptionChange = (selectedOption) => {
    // Handle the option change here
    setSelectedChoice(selectedOption);
  };

  return (
    <>
      <div className={"centered-div flex-column"}>
        <span>Menu</span>
        <ButtonGroup selectedChoice={selectedChoice} options={options} onChange={handleOptionChange} />
        <form className={"d-flex flex-column bd-highlight mb-3"} onSubmit={onSubmit}>

          <input style={{ display: 'none' }} type="text" id="choice" name="choice" value={selectedChoice} readOnly required/>

          <label htmlFor="password">Password</label>
          <input id="password" type="text" name="password" placeholder={"Password that is shared with you"} required/>

          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" placeholder={"Your name"} required/>

          <label htmlFor="message">Additional message</label>
          <textarea id="message" name="message" placeholder={"Putting your menu duo and select whatever the menu"}/>

          <div style={{ display:'flex', alignItems: 'center', justifyContent: 'end' }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

    </>
  );
}
function Menu(): JSX.Element {
  return (
    <>
      <MenuText/>
      <MenuForm/>
    </>
  );
}
export default Menu;