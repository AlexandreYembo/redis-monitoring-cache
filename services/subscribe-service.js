const cluster = require('cluster');

//After the event uncaughtException is called, a new cluster is created and the application is restarted.
const createNewOne = () => cluster.fork();

//After the event uncaughtException is called.
const eventExit = () => cluster.on('exit', worker => createNewOne());

if (cluster.isMaster){
  createNewOne();
  eventExit();
}
else if(cluster.isWorker){
  require('../event-handler/subscriber')

  //Event when has an exception, process is finished and new one is created.
 process.on('uncaughtException', ex => process.exit(1));
}