class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    //To implement hash table, use an array
    //In order to look up values by key, need a way to convert keys into valid array indicies and its call a hash function
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0 ; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key,value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
          this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
      }

    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]){
            var result = this.keyMap[index].find(pair => pair[0] === key);
            return result[1];
        }
        return undefined;
    }

    //get all the keys and values
    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
              if(!keysArr.includes(this.keyMap[i][j][0])){
                keysArr.push(this.keyMap[i][j][0])
              }
            }
          }
        }
        return keysArr;
    }

    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
              if(!valuesArr.includes(this.keyMap[i][j][1])){
                valuesArr.push(this.keyMap[i][j][1])
              }
            }
          }
        }
        return valuesArr;
    }
}

var hashTable = new HashTable();
hashTable.set("white", "#fff");
hashTable.set("black", "#000");
hashTable.set("gray", "#ccc");
hashTable.set("red", "#fff");
// console.log(hashTable.get("red"));
console.log(hashTable.keys());
console.log(hashTable.values());
