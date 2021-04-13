function scoreToHTML(inputArr) {
    inputArr = JSON.parse(inputArr);
 
    let result = "<table>\n";
 
    result += "  <tr><th>name</th><th>score</th></tr>\n";
 
    for (let line of inputArr) {
        result += `  <tr><td>${escapeHTML(line.name)}</td><td>${+line.score}</td></tr>\n`;
    }
    result += "</table>";
    console.log(result);
 
    function escapeHTML(str) {
        "use strict";
        str = str.replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        return str;
    }
}
scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');