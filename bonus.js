function createCounter(init) {
    let current = init;
    return {
        increment() {
            return ++current;
        },
        decrement() {
            return --current;
        },
        reset() {
            current = init;
            return current;
        }
    };
}


const counter = createCounter(5) //called createCounter and set to 5
//three methods called
counter.increment(); //++current (5+1)=6
counter.reset(); // current=init(current==5)5
counter.decrement(); //--current (5-1)=4
