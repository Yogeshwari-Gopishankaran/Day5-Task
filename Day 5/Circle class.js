class Circle{
    
    constructor(radius,color){
        if((radius===undefined)&&(color==undefined)){
            this.radius=1.0;
            this.color='red'
        }else if(radius===undefined){
            this.radius = 1.0;
            this.color = color; 
        }else if(color==undefined){
            this.radius = radius;
            this.color = 'red';
        }else{
            this.radius=radius;
            this.color=color;
        }
        
    }
    circle(){
        console.log('Radius: ',this.radius );
        console.log('color: ',this.color);
    }
    getradius(){
         console.log('Radius: ',this.radius );
    }
   setradius(){
        this.radius=10;
         console.log('Radius: ',this.radius );
    }
    getColor(){
         console.log('color: ',this.color );
    }
   setColor(){
        this.color='yellow';
         console.log('color: ',this.color );
    }
    
    getArea(){
        return 3.14*this.radius*this.radius;
    }
    getCircumference(){
        return 2*3.14*this.radius;
    }
    
    toString(){
        console.log("Circle[radius="+this.radius+",color="+this.color+"]")
    }
}
let circle1=new Circle();
let circle2=new Circle(2);
let circle3=new Circle(5,'Black')
circle1.circle();
circle2.circle();
circle3.circle();
circle2.getradius();
circle2.setradius();
circle2.getColor();
circle2.setColor();
console.log(circle3.getArea());
console.log(circle3.getCircumference());
circle1.toString();
