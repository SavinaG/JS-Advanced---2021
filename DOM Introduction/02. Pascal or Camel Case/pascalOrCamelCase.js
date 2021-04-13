function solve() {
  let inputText = document.getElementById('text').value;
  let caseType = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let funcObj = {
    'Camel Case': camel,
    'Pascal Case': pascal,
  };

  result.innerHTML = funcObj[caseType] ? funcObj[caseType](inputText) : 'Error!';

  function camel(text){
    return text.split(' ').map((word,index) => {
      if(index == 0){
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  }

  function pascal(text) {
    return text.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  }

};