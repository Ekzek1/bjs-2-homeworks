class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;  
    }

    addClock(id, time, callback){
        if(!(id)){
            throw new Error('error text')
        }
        if(this.alarmCollection.some(item => item.id === id)){
            console.error('error')
            return
        }
        return this.alarmCollection.push({id: id,time: time,callback:callback})
    }
}

const t = new AlarmClock;
console.log(t.addClock(1,12,13));
console.log(t)
//console.log(t.addClock())