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
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  //static method:
  static pickSubstituteTeacher(substituteTeachers){
    //generate random whole number btwn 0 and 1 less than the length of the array (zero-index)
    let subIndex = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[subIndex];
  }
}
class Primary extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}
class Middle extends School{
  constructor(name, numberOfStudents){
    super(name, 'middle', numberOfStudents);
  }
}
class High extends School{
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    return this._sportsTeams;
    console.log(this._sportsTeams);
  }
}
//testing:
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J.R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball','Basketball','Volleyball','Track and Field']);
console.log(alSmith.sportsTeams)
