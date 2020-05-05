## 内置的特殊对象内部的方法和插槽
该规范定义了几种内置的外来对象。
除了一些特定的情况外，这些对象的行为通常与普通对象相似。
下列异类对象使用普通对象内部方法，除非在下面另行明确指定：
### Bound Function Exotic Object
绑定函数是一个包装了其他函数的奇特对象。它拥有call和construct内部方法。

- [[Call]] ( thisArgument, argumentsList )
- [[Construct]] ( argumentsList, newTarget )
- BoundFunctionCreate ( targetFunction, boundThis, boundArgs )
### Array Exotic Object

- [[DefineOwnProperty]] ( P, Desc )
- ArrayCreate ( length [, proto ] )
- ArraySpeciesCreate ( originalArray, length )
- ArraySetLength ( A, Desc )
### String Exotic Object

- [[GetOwnProperty]] ( P )
- [[DefineOwnProperty]] ( P, Desc )
- [[OwnPropertyKeys]] ( )
- StringCreate ( value, prototype )
- StringGetOwnProperty ( S, P )
### Arguments Exotic Object

- [[GetOwnProperty]] ( P )
- [[DefineOwnProperty]] ( P, Desc )
- [[Get]] ( P, Receiver )
- [[Set]] ( P, V, Receiver )
- [[Delete]] ( P )
- CreateUnmappedArgumentsObject ( argumentsList )
- CreateMappedArgumentsObject ( func, formals, argumentsList, env )
- MakeArgGetter ( name, env )
- MakeArgSetter ( name, env )
### Integer-Indexed Exotic Object
### Module Namespace Exotic Object
### Immutable Prototype Exotic Object