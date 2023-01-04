function onTranslateSubmit(e) {
    e.preventDefault();
  
    document.querySelector('.msg_2').textContent = '';
    document.querySelector('#translate_text').src = '';
  
    const prompt = document.querySelector('#translate_text_prompt').value;
  
    if (prompt === '') {
      alert('Please add some text');
      return;
    }
  
    textTranslateRequest(prompt);
  }


  async function textTranslateRequest(prompt) {
    try {
      showSpinner();
  
      const response = await fetch('/openai/texttranslate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt
        }),
      });
  
      if (!response.ok) {
        removeSpinner();
        throw new Error('That text could not be translate');
      }
  
      const data = await response.json();
  
      const generated_text = data.data;
  
      document.querySelector('#translate_text').textContent = generated_text;
  
      removeSpinner();
    } catch (error) {
      document.querySelector('.msg_2').textContent = error;
    }
  }
  
  function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
  }
  
  function removeSpinner() {
    document.querySelector('.spinner').classList.remove('show');
  }

  document.querySelector('#text-form').addEventListener('submit', onTranslateSubmit);