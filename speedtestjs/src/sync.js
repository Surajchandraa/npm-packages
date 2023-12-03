function syncperformance(callback, label = "Performance") {
    console.time(label);
    const result = callback();
    console.timeEnd(label);
    return result;
}

function syncmultitime(callback, times = 1, label = "Performance") {
    console.log(`Measuring ${label} ${times} times:`);
    let totalTime = 0;

    for (let i = 0; i < times; i++) {
        console.time(label);
        callback();
        console.timeEnd(label);
    }
}

function avgsyncperformance(callback, times = 1, label = "Performance") {
    const executionTimes = [];

    
    for (let i = 0; i < times; i++) {
        console.time(label); 
        try {
            const startTime = process.hrtime(); 
            callback(); 
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

module.exports={syncmultitime,syncperformance,avgsyncperformance}