class chain{
    constructor(bodyA,bodyB,ptx){
var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    length:150,
    stiffness:.6
    
}
this.chai=Matter.Constraint.create(options)
this.ptx=ptx
World.add(world,this.chai)
    }
    display(){
        strokeWeight(7)
        push()
        stroke(random(0,255),random(0,255),random(0,255))
        line(this.chai.bodyA.position.x,this.chai.bodyA.position.y,this.chai.bodyB.position.x+this.ptx,this.chai.bodyB.position.y)      
        pop()
    }
}

