function solve(area, vol, input){
    let figures = JSON.parse(input);

    let result = figures.map((x) => {
        return {
            area: Math.abs(area.call(x)),
            volume: Math.abs(vol.call(x)),
        }
    });
    return result;
}
solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)
