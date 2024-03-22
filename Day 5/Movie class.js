
class Movie{
    constructor(name,studio,rate){
        this.title=name;
        this.studio=studio;
        if(rate==undefined){
            this.rating='PG';
        }else{
            this.rating=rate;
        } 
    }
    display(){
        console.log('Title:',this.title);
        console.log('Studio:',this.studio);
        console.log('Rate:',this.rating);
    }
}
let movie1=new Movie('Toy Story','abc','R');
let movie2=new Movie('shark','abc');
let movie3=new Movie('Casino Royele','Econ Productions','PG13');
 movie1.display();
 movie2.display();
 movie3.display();



