class A{
    name
    display(){
        console.log(this.name);
    }
}

let obj=new A()
console.log(obj)
obj.class='B.tech'
console.log(obj)
obj.display();