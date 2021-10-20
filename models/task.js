class Task{
    constructor(id,name,actions,modality,createdDate,eliminatedDate,weekDays,interval,measure,isRunning,isPause,state){
        this.id = id;
        this.name = name;
        this.actions = actions;
        this.modality = modality;
        this.createdDate = createdDate;
        this.disabledDate = disabledDate;
        this.eliminatedDate = eliminatedDate;
        this.weekDays = weekDays;
        this.interval = interval;
        this.measure = measure;
        this.isRunning = isRunning;
        this.isPause = isPause;
        this.state = state;
    }
}

export default Task;