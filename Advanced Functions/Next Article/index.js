function solve(){
   let tbody = document.querySelector('tbody');
   let items = tbody.querySelectorAll('tr');
   tbody.addEventListener('click', parseTable);

   function parseTable(e){
      let row = e.target.parentNode;

      if(row.nodeName === 'TR'){
         if(row.style.backgroundColor !== ''){
            row.style.backgroundColor = '';
         }else {
            [...items].forEach(i => i.style.backgroundColor = '');
            row.style.backgroundColor = "#413f5e"
         }
      }

   }
}
