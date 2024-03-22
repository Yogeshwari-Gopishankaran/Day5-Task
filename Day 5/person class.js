class Person{
    constructor(name,age,number,mail,date,gender,location){
        this.name=name;
        this.age=age;
        this.phoneNo=number;
        this.mailId=mail;
        this.birthDate=date;
        this.gender=gender;
        this.location=location;
    }
    personDetails(){
        console.log(`Name:${this.name}`);
        console.log(`Age:${this.age}`);
        console.log(`PhoneNumber:${this.phoneNo}`);
        console.log(`MailId:${this.mailId}`);
        console.log(`DOB:${this.birthDate}`);
        console.log(`Gender:${this.gender}`);
        console.log(`Location:${this.location}`);
    }
}
let person1=new Person('yogeshari',24,7305440095,'yoga@gmail.com',10/9/2000,'female','chennai');
let person2=new Person('max',27,7303228865,'max@gmail.com',17/8/1997,'male','chennai');
console.log("person-1 Details\n");
person1.personDetails();
console.log("\n person-2 Details\n");
person2.personDetails();