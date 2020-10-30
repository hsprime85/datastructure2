var object1 = { value : 10 };
var object2 = object1;
var object3 = { value: 10 };

const object4 = {
    a: function() {
        console.log(this);
    }
}

class Player{
    constructor(name, type){
        console.log('player', this)
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`hi I am ${this.name}, I am a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type)
        console.log('wizard', this)
    }
    play(){
        console.log(`weeeee I am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'healer');
const wizard1 = new Wizard('Shawn', 'dark magic');


class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    get(index) {
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    deleteAtIndex(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      console.log(this.data[this.length - 1]);
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  
  const myArray = new MyArray();
  myArray.push('hi');
  myArray.push('you');
  myArray.push('!');
  myArray.pop();
  myArray.deleteAtIndex(0);
  myArray.push('are');
  myArray.push('nice');
  myArray.shiftItems(0);
  console.log(myArray);
  
  
  function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
    return backwards.join('');
  }
  
  function reverse2(str){
    //check for valid input
    return str.split('').reverse().join('');
  }
  
  const reverse3 = str => [...str].reverse().join('');
  
  reverse('Timbits Hi')
  reverse('Timbits Hi')
  reverse3('Timbits Hi')



  function reverse(str){
    const newStr = [];
    for(let i = str.length-1; i >=0; i--){
      newStr.push(str[i]);
    } 
    return newStr.join('');
   }
   
   console.log(reverse('Hi my name is Hanson'));



   function mergeSortedArrays(arr1, arr2){
       return arr1.concat(arr2)
   }
   mergeSortedArrays([0,3,4,31],[4,6,30]);


   function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }
  
  mergeSortedArrays([0,3,4,31], [3,4,6,30]);