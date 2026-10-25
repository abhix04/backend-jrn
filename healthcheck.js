const os = require('os');

function checkHealth(){
    const uptime = os.uptime();
    const freeMem = (os.freemem()/(1024*1024)).toFixed(2);
    const totalMem = (os.totalmem()/(1024*1024)).toFixed(2);

    return{
        status:'STATUS_HEALTHY_🚀',
        timestamp: new Date().toISOString(),
        uptimeSeconds: uptime,
        memory: `${freeMem}MB free / ${totalMem} MB total`
    };
}

console.log(JSON.stringify(checkHealth(), null, 2));