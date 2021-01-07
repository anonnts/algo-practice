class NodeInitial {
    data: any;
    left: any;
    right: any;

    constructor() {
        this.data = null;
        this.left = null;
        this.right = null;
    }

}

export default class BinarySearch {
    root: any;
    constructor(){
        this.root = null;
    }

    insert(data) {

        const node = new NodeInitial()
        
        if (!this.root) {
            this.root = data
            console.log(this.root , 'he')
        }
    }

}