function search() {
   let townList = document.querySelectorAll('#towns li');
   let searchText = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let count = 0;

   Array.from(townList).forEach(town => {
      if (town.innerHTML.includes(searchText)) {
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline"
         count++;
      }
   });
   result.innerHTML = `${count} matches found`;
}
