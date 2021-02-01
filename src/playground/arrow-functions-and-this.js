class MyTestClass {
    member = 'abc'
    arrowFunction = () => {
        console.log(this.member, '(arrow function)')
    }
    method() {
        console.log(this.member, '(method)')
    }
}

const obj = new MyTest
obj.arrowFunction()
obj.method()

const proto = { member: 'DEF' }
proto.a = o.arrowFunction
proto.b = o.method
proto.a() // abc
proto.b() // DEF