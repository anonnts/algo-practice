import {BinarySearch} from './tree'


const bns = new BinarySearch()
bns.insert(42); 
bns.insert(5); 
bns.insert(3); 
bns.insert(4); 
bns.insert(42); 
bns.insert(6); 
bns.insert(23); 
bns.insert(8); 
bns.insert(12); 
bns.insert(10);

console.log(bns.getRoot())