function carFactory(descriptor){
    const engines = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500},
    ];
    const car = {
        model: descriptor.model,
        carriage: {
            type: descriptor.carriage,
            color: descriptor.color,
        }
    };
    for(let engine of engines){
        if(engine.power >= descriptor.power){
            const carEngine = Object.assign(engine);
            car.engine = carEngine;
            break;
        }
    }
    car.wheels = (new Array(4)).fill(descriptor.wheelsize % 2 ? descriptor.wheelsize : descriptor.wheelsize - 1);

    return car;
}
console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));