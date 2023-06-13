import axios from 'axios';
import decryptAES from "@site/src/components/Menu/decryptService";

const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const decryptedMessage = "Hello, World!";
  const encryptedMessage = "ijvoNwcvAlRoazApsnfFjQ==";
  const encryptedFormId = "uSeR01NmOSzYzCkGLOaOQw==";
  const formData = new FormData(event.currentTarget);

  const customData = {
    name: formData.get('name'),
    password: formData.get('password'),
    message: formData.get('message'),
    choice: formData.get('choice'),
  };
  console.log(customData);

  if (customData.choice) {
    if (decryptAES(encryptedMessage, customData.password) === decryptedMessage) {
      const orderData = {
        choice: formData.get('choice'),
        name: formData.get('name'),
        message: formData.get('message')
      }
      try {
        const url = 'https://formspree.io/df' + decryptAES(encryptedFormId, customData.password);
        const response = await axios.post(url, orderData);

        // Handle the response as needed
        if (response.status === 200) {
          console.log('Form submitted successfully');
          alert('Order submitted successfully ❤️');
        } else {
          alert('Order submission failed, sorry you have to order in whatsapp');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        alert('Order submission failed, sorry you have to order in whatsapp');
      }
    } else {
      alert("password not correct");
    }
  } else {
    alert("Please select a menu");
  }

};

export default handleFormSubmit;
