class Node{
    constructor(value){
        this.value = value;
        this.next = null; 
        this.privious = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
// push 
    /* 
        - creat a funciton that accepts a value;
        - create a new node with the given value
        - if the head is empty set the head  and tail to be the new node
        -  else set the next propery of tail to be the new node
           set the previous propery of the newNode to be the tail
           set the tail to be the new node
           set the next propery of the newNode to be null
        - incerement the 
        - return the double linked list


    */

    push(value){
        var newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.privious = this.tail;
            this.tail = newNode;  
            newNode.next = null;

        }
        this.length++;
        return this;
    }

    // pop
    /* 
        - if the head is empty return null
        - else set tail to be the node befor tail
          set the next node from the tail to be null
        - return the removed node
        - decrement length
    */

    pop(){
        if(!this.head) return null
        var removed = this.tail;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = this.tail.privious;
            this.tail.next = null;
        }
            removed.previous = null;
            this.length-- 
            return removed;
        
    }

    // shift
    /* 
        - if head is emepyt return null
        - else create a new variable and set its value to be the head
        - if the length is 1 set the head and tail to be null
        - set the head to be the next node from the head
        - set the prvious node from the current head to be null
        - set the next property of the new cariable to be null
        - decrement the length
        - return the old head
    */
    shift(){
    if(!this.head) return null
    var removed = this.head;
    if(this.length===1){
        this.head = null;
        this.tail = null;
    }
    else{
        this.head = this.head.next;
        this.head.previous = null;
    }
        removed.previous = null;
        this.length-- 
        return removed;
    
    }

    // unshift
    /* 
       -  create a function that accepts a value
       -  create a new node with the given value
       - if the head is null set the head and tail to be the new node
       -  set prvious propery of head to be the new node
       - set the next property of the new node to be the head
       - set the head to be the new node
       - increment the length
       - retun the object;
    */

   unshift(value){
    var newNode = new Node(value);
    if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
    }
    else{
        newNode.next = this.head;
        this.head.privious = newNode;
        this.head=newNode ;
        newNode.previous = null; 

    }
    this.length++;
    return this;
 }
    // get
    /* 
        - accept the index of the node
        - if the index is less than zero or greater than length property return undefined
        else
       - if positon is less than length/2 
        *loop through the list startin from the head towards the middle
        * return the node when reached the index
       - if positon is greater than length/2 
        * loop through the list starting form the tail towards the middle
        * return the node if your reach the index
       
    */

    get(index){
        if(index<0 || index>=this.length) return null;
        var currentNode
        if(index<this.length/2){
             currentNode = this.head;
            var counter = 0
            while(counter !== index){
                currentNode = currentNode.next;
                counter++;
            }
        }else{
            currentNode = this.tail
            var counter = this.length-1
            while(counter !== index){
                currentNode = currentNode.privious;
                counter--;
            }
        }
        return currentNode;
    }

    // set 
    /* 
       - create a function that accepts the index and the value of the node
       - if index is greater  length property or is less than zero return null
       - else use get function to get the node
       - set the new value
       - return the object
    */

    set(index, value){
        if(index<0 || index>=this.length) return null;
        else{
            var node = this.get(index);
            node.value = value;
        }
        return this;
    }
// insert 
/* 
    -Accept the value and the index of the node to be inserted
    - create a newNode with the given value
    - pass the index to get method and if 
    - if the return form get is valid node 
        * save the next proprty of the returned node on a variable
        * set the next property of the returned node to be the new node
        * * set the privious of the new nodde to be the returned value
        * 

*/
insert(index , value){
    var newNode = new Node(value);
    if (index ===0) {
        this.unshift(value);
        return true;
    }
    if (index ===this.length) {
        this.push(value);
        return true
    }
    else {var nodeFound = this.get(index-1)
        if(nodeFound){
            var temp = nodeFound.next;
           nodeFound.next = newNode;
            newNode.next = temp;
           temp.privious = newNode;
            newNode.privious = nodeFound
            this.length++;
            return true;

        }}
        return false


   }

       
    // remove 
    /* 
        - if the index is zero, pass the index to shift
        - if the index is equal to the length-1 property, pass the index to pop 
        - else pass the index-1 to get and if get returns a valid node
                * update the next proprty of the returned node
                * update the previous property of the node after the removed node
                * set the next and privious property of removedNode to null
                * decremnt length
                * return the removed node

    
    */

    remove(index){
        if(index<0 || index>=this.length) return null;
        else if(index===0) this.shift();
        else if(index===this.length-1) this.pop();
        else{
            var node = this.get(index-1);
            var removedNode = node.next;
            var afterRemovedNode = removedNode.next;
            node.next = afterRemovedNode;
            afterRemovedNode.privious = node;
            removerNode.next = null;
            removedNode.privious = null;
        }
    }

}

var dl = new DoubleLinkedList();
dl.push('Dawit')
dl.push('Ayele')
dl.push('Girma')
dl.push('WoldeGebreal')
dl.push('chala')

/* 

insertion  O(1)
deletion   O(1)
searching  O(n) => technically it is O(n/2)
access     O(n) 

*/