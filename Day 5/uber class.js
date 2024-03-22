class uberPrice{
    constructor(x,y){
        this.price=12;
        this.km=x;
        this.peak=y;

    }
calculate(){
    if(this.peak=='no'){
        return this.price*this.km;
    }else {
        return this.price*this.km*1.5;
    }
}

}
let Price1=new uberPrice(5,'no');
let price2=new uberPrice(5,'yes');
console.log('Uber Price for '+Price1.km+'  is '+Price1.calculate() );
console.log('Uber Price for '+price2.km+'  is '+price2.calculate() );