function cars(input){
    let carFactoryBuilder = () => {
        let cars = {};

        return {
            create: (name, inherit, parent) => cars[name] = inherit ? Object.create(cars[parent]) : {},
            set: (name, key, value) => cars[name][key] = value,
            print: (name) => {
                let result = [];

                for(let key in cars[name]){
                    result.push(`${key}:${cars[name][key]}`)
                }
                console.log(result.join(', '));
            },
        };
    };

    let carFactory = carFactoryBuilder();

    input.map(x => x.split(' '))
         .forEach(([command, ...args]) => carFactory[command](...args));
}
cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)