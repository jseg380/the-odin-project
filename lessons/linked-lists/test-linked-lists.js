import { LinkedList } from './linked-list.js';


const linkedList1 = new LinkedList();

console.log(linkedList1.toString());

linkedList1.append(1);
linkedList1.append(5);
linkedList1.append(9);
linkedList1.append(20);

console.log(linkedList1.toString());

linkedList1.pop();

console.log(linkedList1.toString());

linkedList1.prepend(27);

console.log(linkedList1.toString());

linkedList1.removeAt(2);

console.log(linkedList1.toString());

linkedList1.insertAt(2, -5);

console.log(linkedList1.toString());
