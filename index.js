class Observable {
    constructor() {
        this.subscribers = []
    };
    emit(msg) {
        this.subscribers.forEach(sub => sub.cb.forEach(cb$ => cb$(msg)))
    };
    add(cb$) {
        this.subscribers.push(cb$)
    };
    remove(cb$) {
        this.subscribers = subscribers.filter(cb => cb !== cb$)
    }
}

const sub1 = {cb: [], then(cb$) {this.cb.push(cb$); return this}}
const sub2 = {cb: [], then(cb$) {this.cb.push(cb$); return this}}

const obs = new Observable()

obs.add(sub1)
obs.add(sub2)

sub1.then(msg => console.log(`first then ${msg}`)).then(msg => console.log(`second then ${msg}`))
obs.emit('here is johnny')
