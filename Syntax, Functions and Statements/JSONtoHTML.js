function JSONtoHTML(input){
    input = JSON.parse(input);

    let result = "<table>\n";

 
    result += `  <tr>${Object.keys(input[0]).map(x => `<th>${x}</th>`).join("")}</tr>\n`;
    
    for (let line of input) {
        result += `  <tr>${Object.values(line).map(x => `<td>${escapeHTML(x.toString())}</td>`).join("")}</tr>\n`;
    }
    result += "</table>";

    return result
 
    function escapeHTML(str) {
        let escaped = str.replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        return escaped;
    }
}

console.log(JSONtoHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')); 
/*<table>
   <tr><th>Name</th><th>Price</th></tr>
   <tr><td>Tomatoes &amp; Chips</td><td>2.35</td></tr>
   <tr><td>J&amp;B Chocolate</td><td>0.96</td></tr>
</table>*/
console.log(JSONtoHTML('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'));