async function asyncperformance(callback, label = "Performance") {
    console.time(label);
    const result = await callback();
    console.timeEnd(label);
    return result;
}

async function avgasyncperformance(callback,times=1,label="Performace"){
    const executionTimes = [];

    
    for (let i = 0; i < times; i++) {
        console.time(label); 
        try {
            const startTime = process.hrtime(); 
            let result=await callback(); 
            const endTime = process.hrtime(startTime); 
            const executionTime = (endTime[0] * 1e9 + endTime[1]) / 1e6; 
            console.timeEnd(label); 
            executionTimes.push(executionTime); 
        } catch (error) {
            console.timeEnd(label); 
            console.error('Error occurred during measurement:', error);
            throw error;
        }
    }

   
    const totalExecutionTime = executionTimes.reduce((total, time) => total + time, 0);
    const averageExecutionTime = totalExecutionTime / times;

   
    console.log(`Average time taken (${times} measurements): ${averageExecutionTime.toFixed(2)}ms`);

    return averageExecutionTime; 

}

async function asyncmultitime(callback,time=1,lebel=Performance){
    console.log(`Measuring ${lebel} ${time} times:`);
    for(let i=0;i<time;i++){
        console.time(lebel);
        let result = await callback();
        console.timeEnd(lebel)
    }
}

module.exports={asyncmultitime,asyncperformance,avgasyncperformance}