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

    removeClock(id){
        let timerId = this.alarmCollection.filter(item => item.id === id);
        timerId = this.alarmCollection.findIndex(item => item.id === id)
        if(timerId === -1){
            return false
        }else{
            this.alarmCollection.splice(timerId,1);
            return true
        }
    }

    getCurrentFormattedTime(){
       return new Date().toLocaleTimeString('ru-Ru', {
        hour: '2-digit',
        minute: '2-digit'
       })
    }

    start(){
        function checkClock  (alarm) {
            if(alarm.time === this.getCurrentFormattedTime()){
                return alarm.callback()
            }
        }
        
        let checkClockBind = checkClock.bind(this);

        if(!this.timerId){
            this.timerId = setInterval(() => {
                    this.alarmCollection.forEach(alarm => checkClockBind(alarm))
            }, 1000);
        }
    }

    stop(){
        if(!this.timerId){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(item => {
            console.log(`индефикатор ${item.id} время звонка ${item.time}`
        )})
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = []
    }
}