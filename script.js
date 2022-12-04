// Create an input field
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter your message here';

// Create a div element to display the response
const responseDiv = document.createElement('div');
responseDiv.classList.add('response');
responseDiv.style.fontSize = '30px';


// Create an input button to submit input
const submit = document.createElement('button');
submit.type = 'submit';
submit.value = 'Submit';
submit.textContent = 'send';



document.body.appendChild(input);
document.body.appendChild(submit);

document.body.appendChild(responseDiv);



// Add an event listener to the input field
submit.addEventListener('click', (event) => {
  event.preventDefault();

  // Get the user's input
  const userInput = input.value;

  // reset the input field

    input.value = '';

  // write user input to responseDiv and move to new line

    responseDiv.innerHTML += `<p>You: <span>${userInput}</span></p>`;





  // Use the OpenAI API to send the input and get the response

  // wrap in setTimeout to slow down requests
    setTimeout(() => {
        fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer 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',
            },
            body: JSON.stringify({
              prompt: userInput,
              model: 'text-davinci-002',
            }),
          })
          .then((response) => response.json())
          .then((data) => {
            // Display the response in the div element
            responseDiv.innerHTML += `<p>Gvozden: <span>${data.choices[0].text}</span></p>`;
            // 

          });
        });
        }, 10000);



