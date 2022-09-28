   // By defualt submit  button is disabled
            document.querySelector('#submit').disabled = true;
            // When type something in input field button is enable
            document.querySelector('#task').onkeyup = () => {
                if(document.querySelector('#task').value.length > 0) {
                 document.querySelector('#submit').disabled= false;
                }else {
                     document.querySelector('#submit').disabled= true;
                }
            }
            document.querySelector('form').onsubmit = () => {
                const task = document.querySelector('#task').value;
                // console.log(task);
                const li = document.createElement('li');
                 li.innerHTML = task;
                 document.querySelector('#tasks').append(li);
                 // clear previous inputs
                 document.querySelector('#task').value = '';
                 document.querySelector('#submit').disabled = true;
                // stop form from submitting 
                return false;
            }