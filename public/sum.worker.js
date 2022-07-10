onmessage = function (event) {
    const t0 = performance.now();
    const sum = (num) => {
        let sum = 0;
        for(let i = 0;i < num;i++) {
            sum += i
        }
        return sum
    };
    const result = sum(event.data.data);
    console.log('--event data-- -> ', event.data, result);
    const t1 = performance.now();
    const timeTaken = (t1-t0)/1000;
    postMessage("worker received data " + event.data.data + ' and the result obtained is '+ result+ ' and the time taken is '+timeTaken+' seconds');
};
