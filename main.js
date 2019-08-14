class School{
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  //setter method that confirms first confirms input to be a number:
  set numberOfStudents(newNumber){
    if(typeof newNumber === 'number'){
      this._numberOfStudents = newNumber;
    }else{
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  quickFacts(){
    console.log(`${name} educates ${numberOfStudents} students at the ${level} school level.`);
  }
}
class Primary extends School{
  constructor(pickupPolicy){
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}
