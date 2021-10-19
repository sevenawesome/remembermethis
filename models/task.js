class Task{
    constructor(id,name,actions,modality,createdDate,endDate,weekDays,interval,measure,state){
        this.id = id;
        this.name = name;
        this.actions = actions;
        this.modality = modality;
        this.createdDate = createdDate;
        this.endDate = endDate;
        this.weekDays = weekDays;
        this.interval = interval;
        this.measure = measure;
        this.state = state;
    }
}

export default Task;