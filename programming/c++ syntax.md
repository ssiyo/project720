

# C++ Syntax

<details>

<summary>Class Definition</summary>

<code>class MyClass { /* members and functions */ };</code>

- Defines a user-defined class with data members and member functions.

</details>

<details>

<summary>Constructor</summary>

<code>MyClass() { /* constructor code */ }</code>

- Special member function called when an object is created.

</details>

<details>

<summary>Destructor</summary>

<code>~MyClass() { /* destructor code */ }</code>

- Special member function called when an object is destroyed.

</details>

<details>

<summary>Member Access Specifiers</summary>

<code>public, private, protected</code>

- Specifies the visibility of class members.

</details>

<details>

<summary>Inheritance</summary>

<code>class Derived : public Base { /* derived class definition */ }</code>

- Creates a new class based on an existing class.

</details>

<details>

<summary>Polymorphism</summary>

<code>virtual void function() { /* function code */ }</code>

- Enables a single interface for objects of different classes.

</details>

<details>

<summary>Function Overloading</summary>

<code>void foo(int x) { /* code */ } void foo(float y) { /* code */ }</code>

- Defining multiple functions with the same name but different parameters.

</details>

<details>

<summary>Operator Overloading</summary>

<code>MyClass operator+(const MyClass& other) { /* code */ }</code>

- Defining custom behavior for operators.

</details>

<details>

<summary>Template Classes</summary>

<code>template \<typename T> class MyClass { /* template class definition */ }</code>

- Creates generic classes that work with various data types.

</details>

<details>

<summary>STL Containers</summary>

<code>vector, list, map</code>

- Standard Template Library (STL) containers for data storage.

</details>

<details>

<summary>STL Algorithms</summary>

<code>sort, find, transform</code>

- STL algorithms for common operations on containers.

</details>

<details>

<summary>Namespace</summary>

<code>namespace MyNamespace { /* code */ }</code>

- Defines a named scope to avoid naming conflicts.

</details>

<details>

<summary>Standard Library</summary>

<code>#include \<iostream></code>

- Includes standard library headers for input and output operations.

</details>

<details>

<summary>Friend Function</summary>

<code>friend void myFriend(MyClass obj);</code>

- Declares a non-member function as a friend of a class.

</details>

<details>

<summary>Static Member</summary>

<code>static int count;</code>

- Declares a member that belongs to the class, not to instances.

</details>

<details>

<summary>Const Member Function</summary>

<code>void foo() const { /* code */ }</code>

- Declares a member function that doesn't modify the object's state.

</details>

<details>

<summary>Constructor Initialization List</summary>

<code>MyClass(int x) : value(x) { /* constructor code */ }</code>

- Initialize class members directly in the constructor.

</details>

<details>

<summary>References</summary>

<code>int& ref = x;</code>

- Creates an alias to an existing variable.

</details>

<details>

<summary>Function Default Arguments</summary>

<code>void foo(int x, int y = 10) { /* code */ }</code>

- Provides default values for function parameters.

</details>

<details>

<summary>Standard Input/Output Streams</summary>

<code>cin, cout</code>

- Standard input and output streams for console I/O.

</details>

<details>

<summary>Lambda Expressions</summary>

<code>auto lambda = [](int x) { /* code */ };</code>

- Defines anonymous functions for short-term use.

</details>

<details>

<summary>Smart Pointers</summary>

<code>std::shared_ptr\<T>, std::unique_ptr\<T></code>

- Smart pointers that manage dynamic memory.

</details>

<details>

<summary>RAII (Resource Acquisition Is Initialization)</summary>

<code>class FileHandler { /* code */ };</code>

- Resource management through constructors and destructors.

</details>

<details>

<summary>Exception Handling</summary>

<code>try { /* code */ } catch (ExceptionType& e) { /* exception handling */ }</code>

- Handles runtime errors and exceptions.

</details>

<details>

<summary>Typeid Operator</summary>

<code>typeid(obj).name()</code>

- Returns the type information of an object.

</details>

<details>

<summary>Standard Template Library (STL) Iterators</summary>

<code>vector\<int>::iterator it = myVector.begin();</code>

- Iterators for navigating through STL containers.

</details>

<details>

<summary>Function Pointers as Arguments</summary>

<code>void process(int (*func)(int)) { /* code */ }</code>

- Passes functions as arguments to other functions.

</details>

<details>

<summary>Custom Operator</summary>

<code>MyClass operator\<<(std::ostream& os, const MyClass& obj) { /* code */ }</code>

- Defines a custom operator for a user-defined class.

</details>

<details>

<summary>Function Templates</summary>

<code>template \<typename T> void myFunction(T param) { /* code */ }</code>

- Defines generic functions that work with different data types.

</details>

<details>

<summary>Class Templates</summary>

<code>template \<typename T> class MyTemplate { /* code */ };</code>

- Creates generic classes that work with various data types.

</details>

<details>

<summary>Multiple Inheritance</summary>

<code>class Derived : public Base1, public Base2 { /* class definition */ }</code>

- Derives a class from multiple base classes.

</details>

<details>

<summary>Virtual Base Classes</summary>

<code>class Derived : virtual public Base1, virtual public Base2 { /* class definition */ }</code>

- Prevents ambiguity when inheriting from multiple base classes.

</details>

<details>

<summary>Abstract Classes</summary>

<code>class AbstractClass { virtual void pureVirtualFunction() = 0; };</code>

- Defines classes with pure virtual functions.

</details>

<details>

<summary>Interface Classes</summary>

<code>class Interface { virtual void method() = 0; };</code>

- Declares interfaces using pure virtual functions.

</details>

<details>

<summary>Operator Overloading (Member Functions)</summary>

<code>MyClass operator+(const MyClass& other) { /* code */ }</code>

- Overloads operators as member functions of a class.

</details>

<details>

<summary>Operator Overloading (Global Functions)</summary>

<code>MyClass operator+(const MyClass& obj1, const MyClass& obj2) { /* code */ }</code>

- Overloads operators as global functions.

</details>

<details>

<summary>Copy Constructor</summary>

<code>MyClass(const MyClass& other) { /* constructor code */ }</code>

- Constructs an object by copying another object of the same class.

</details>

<details>

<summary>Move Constructor</summary>

<code>MyClass(MyClass&& other) noexcept { /* constructor code */ }</code>

- Constructs an object by transferring resources from another object.

</details>

<details>

<summary>Copy Assignment Operator</summary>

<code>MyClass& operator=(const MyClass& other) { /* code */ }</code>

- Defines how to copy one object to another of the same class.

</details>

<details>

<summary>Move Assignment Operator</summary>

<code>MyClass& operator=(MyClass&& other) noexcept { /* code */ }</code>

- Defines how to move one object to another efficiently.

</details>

<details>

<summary>Initializer Lists</summary>

<code>MyClass::MyClass(int x, int y) : member1(x), member2(y) { /* code */ }</code>

- Sets member variables during object initialization.

</details>

<details>

<summary>Range-Based For Loop</summary>

<code>for (int value : myVector) { /* code */ }</code>

- Simplifies iteration over elements of containers.

</details>

<details>

<summary>nullptr Keyword</summary>

<code>int* ptr = nullptr;</code>

- Represents a null pointer.

</details>

<details>

<summary>Scoped Enumerations</summary>

<code>enum class Color { Red, Green, Blue };</code>

- Defines enums within a specific scope.

</details>

<details>

<summary>Lambda Capture Clauses</summary>

<code>\[x, &y](int z) { /* code */ }</code>

- Captures variables in lambda expressions.

</details>

<details>

<summary>Standard Library Algorithms (C++11)</summary>

<code>std::sort, std::find_if, std::transform</code>

- Additional algorithms introduced in C++11.

</details>

<details>

<summary>Range-Based For Loop (C++11)</summary>

<code>for (auto& element : myContainer) { /* code */ }</code>

- Enhanced version of the range-based for loop introduced in C++11.

</details>

<details>

<summary>User-Defined Literals (UDL)</summary>

<code>3.14_km, 100_ms</code>

- Allows custom literal suffixes for user-defined types.

</details>

<details>

<summary>Type Inference (auto)</summary>

<code>auto var = someFunction();</code>

- Infers the data type of a variable automatically.

</details>

<details>

<summary>Lambda Function (C++11)</summary>

<code>auto lambda = [](int x) { /* code */ };</code>

- Introduces lambda functions in C++11.

</details>

<details>

<summary>std::thread (C++11)</summary>

<code>std::thread myThread(functionName, args...);</code>

- Multithreading support introduced in C++11.

</details>

<details>

<summary>Initializer Lists (C++11)</summary>

<code>std::initializer_list\<int> myList = {1, 2, 3};</code>

- Standard library support for initializer lists.

</details>

<details>

<summary>constexpr (C++11)</summary>

<code>constexpr int value = computeValue();</code>

- Indicates that a function or variable can be evaluated at compile time.

</details>

<details>

<summary>std::mutex (C++11)</summary>

<code>std::mutex myMutex;</code>

- Mutex for managing critical sections in multithreaded code.

</details>

<details>

<summary>Variadic Templates (C++11)</summary>

<code>template <typename... Args> void myFunction(Args... args) { /* code */ }</code>

- Supports functions and classes with a variable number of template arguments.

</details>

