class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    area(){
        console.log('Dien tich cua '+ this.width +' and '+ this.height +" is "+ this.width* this.height);
    }
    perimeter(){
        console.log('Chu vi hnh chu nhat '+this.width+" and "+this.height+' is '+(this.width+this.height)/2);
    }
}

variable1 = new Rectangle(20,10);
variable1.area()
variable1.perimeter()