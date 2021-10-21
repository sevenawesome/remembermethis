class TaskLog{

    constructor(id,task,startDate,pauseDate,stopDate,totalRunTimes,state){
        this.id = id;
        this.task = task;
        this.startDate = startDate;
        this.pauseDate = pauseDate;
        this.stopDate = stopDate;
        this.totalRunTimes = totalRunTimes;
        this.state = state;
    }
}

export default TaskLog;