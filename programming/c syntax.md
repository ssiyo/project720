

# C Syntax

<details>

<summary>Variable Declaration</summary>

<code>int age;</code>

- Declares a variable 'age' of type integer.

- Variables store data in C programs.

</details>
<details>

<summary>Printf Function</summary>

<code>printf("Hello, World!");</code>

- Prints the text 'Hello, World!' to the console.

- Used for displaying output.

</details>
<details>

<summary>Data Types</summary>

<code>int, float, char</code>

- Defines the type of data that variables can hold.

- Includes integers, floating-point numbers, and characters.

</details>
<details>

<summary>For Loop</summary>

<code>for (int i = 0; i < 10; i++) { /* code */ }</code>

- A loop that repeats code a specific number of times.

- Commonly used for iterating through arrays.

</details>
<details>

<summary>If Statement</summary>

<code>if (condition) { /* code */ }</code>

- Performs conditional execution of code.

- Executes code if the condition is true.

</details>
<details>

<summary>Switch Statement</summary>

<code>switch (variable) { case 1: /* code */ break; default: /* code */ }</code>

- Used for multi-branch decision-making.

- Executes code based on the value of a variable.

</details>
<details>

<summary>Array</summary>

<code>int numbers[5];</code>

- A data structure that stores multiple values of the same type.

- Indexed by position, starting from 0.

</details>
<details>

<summary>Function Declaration</summary>

<code>int add(int a, int b);</code>

- Declares a function 'add' that takes two integers as arguments.

- Functions encapsulate reusable code.

</details>
<details>

<summary>Pointer</summary>

<code>int *ptr;</code>

- Declares a pointer variable 'ptr' to an integer.

- Used for direct memory access and manipulation.

</details>
<details>

<summary>Struct</summary>

<code>struct Person { char name[20]; int age; };</code>

- Defines a custom composite data type 'Person'.

- Combines variables of different data types into one structure.

</details>
<details>

<summary>Header Files</summary>

<code>#include <stdio.h></code>

- Includes external code files in a C program.

- Provides function prototypes and predefined functions.

</details>
<details>

<summary>Memory Allocation</summary>

<code>malloc(10 * sizeof(int));</code>

- Allocates memory dynamically during program execution.

- Used for creating data structures like arrays.

</details>
<details>

<summary>Function Definition</summary>

<code>int add(int a, int b) { return a + b; }</code>

- Defines the behavior of a function 'add'.

- Contains the implementation of the function.

</details>
<details>

<summary>Pointers and Arrays</summary>

<code>int arr[5]; int *ptr = arr;</code>

- Arrays and pointers are closely related.

- Pointers can be used to manipulate arrays.

</details>
<details>

<summary>File Handling</summary>

<code>"FILE *file = fopen(""example.txt"", ""r"");"</code>

- Used for reading and writing files.

- Involves functions like 'fopen' and 'fwrite'.

</details>
<details>

<summary>Recursion</summary>

<code>int factorial(int n) { if (n == 0) return 1; else return n * factorial(n-1); }</code>

- A function calling itself to solve problems.

- Requires a base case to prevent infinite recursion.

</details>
<details>

<summary>Dynamic Memory</summary>

<code>int *arr = (int *)malloc(5 * sizeof(int));</code>

- Allocating and deallocating memory at runtime.

- Commonly used for data structures.

</details>
<details>

<summary>Constants</summary>

<code>const int MAX_VALUE = 100;</code>

- Defines unchangeable values.

- Improves code readability and maintainability.

</details>
<details>

<summary>Preprocessor Directives</summary>

<code>#define PI 3.14159265359</code>

- Directives that modify the source code before compilation.

- Used for defining macros and constants.

</details>
<details>

<summary>Header Guards</summary>

<code>#ifndef HEADER_H \#define HEADER_H</code>

- Prevents multiple inclusions of header files.

- Ensures header files are included only once.

</details>
<details>

<summary>Bitwise Operators</summary>

<code>a & b, a | b, a ^ b</code>

- Operators that perform bit-level operations on integers.

- Used for low-level data manipulation.

</details>
<details>

<summary>Null Pointer</summary>

<code>int *ptr = NULL;</code>

- A pointer that does not point to any memory location.

- Used to indicate the absence of a valid value.

</details>
<details>

<summary>Enum</summary>

<code>enum Days { MON, TUE, WED, THU, FRI, SAT, SUN };</code>

- Defines a user-defined enumeration type.

- Assigns symbolic names to integer values.

</details>
<details>

<summary>Union</summary>

<code>union Data { int i; float f; };</code>

- A composite data type that can hold one of its member's values at a time.

- Saves memory by sharing memory space.

</details>
<details>

<summary>Function Pointers</summary>

<code>int (*operation)(int, int);</code>

- Pointers that point to functions.

- Used for dynamic function invocation.

</details>
<details>

<summary>Command-Line Arguments</summary>

<code>int main(int argc, char *argv[]) { /* code */ }</code>

- Arguments passed to a program from the command line.

- Accessible in the 'main' function.

</details>
<details>

<summary>Inline Functions</summary>

<code>inline int square(int x) { return x * x; }</code>

- Functions that are expanded in place during compilation.

- Optimizes code execution.

</details>
<details>

<summary>Typedef</summary>

<code>typedef int Length;</code>

- Creates custom type aliases.

- Improves code readability and portability.

</details>
<details>

<summary>Bit Fields</summary>

<code>struct Flags { unsigned int flag1 : 1; unsigned int flag2 : 2; };</code>

- Packing multiple boolean values in a single integer.

- Conserves memory.

</details>
<details>

<summary>Function Prototypes</summary>

<code>Specifies the function's signature before its actual definition.</code>

- Ensures the compiler knows about the function.

- Enables the use of functions before their definitions.

</details>
<details>

<summary>Assignment Operator</summary>

<code>Assigns a value to a variable using '='.</code>

- Used to store values in variables.

- Performs variable assignment.

</details>
<details>

<summary>Logical Operators</summary>

<code>&&, ||, !</code>

- Used for logical operations (AND, OR, NOT).

- Evaluates and combines logical expressions.

</details>
<details>

<summary>Ternary Operator</summary>

<code>condition ? expr1 : expr2</code>

- A conditional operator that returns one of two values based on a condition.

- Provides a concise way to make conditional choices.

</details>
<details>

<summary>Increment and Decrement Operators</summary>

<code>++, --</code>

- Used to increase or decrease the value of a variable.

- Shortens the code for increasing or decreasing values.

</details>
<details>

<summary>Bitwise Shift Operators</summary>

<code><<, >></code>

- Shifts bits left or right in binary representation.

- Used for binary data manipulation.

</details>
<details>

<summary>Bitwise NOT Operator</summary>

<code>~</code>

- Inverts the bits in a binary number.

- Flips the bits from 0 to 1 and vice versa.

</details>
<details>

<summary>Relational Operators</summary>

<code>\==, !=, <, >, <=, >=</code>

- Used to compare values or expressions.

- Evaluates relationships between values.

</details>
<details>

<summary>Sizeof Operator</summary>

<code>sizeof(type)</code>

- Returns the size (in bytes) of a data type or variable.

- Used for dynamic memory allocation and array sizing.

</details>
<details>

<summary>Compound Assignment Operators</summary>

<code>+=, -=, *=, /=</code>

- Combine an operation with assignment.

- Simplify operations on variables.

</details>
<details>

<summary>Conditional Compilation</summary>

<code>#ifdef, \#ifndef, \#endif</code>

- Controls compilation based on conditions.

- Includes or excludes code during compilation.

</details>
<details>

<summary>Concatenation Operator</summary>

<code>"\"string1\" \"string2\""</code>

- Joins two string literals.

- Forms a single string from multiple parts.

</details>
<details>

<summary>Floating-Point Literals</summary>

<code>3.14, -0.5</code>

- Represents floating-point numbers.

- Used for precise decimal values.

</details>
<details>

<summary>Character Literals</summary>

<code>'A', '\\n'</code>

- Represents single characters.

- Used for single-character values.

</details>
<details>

<summary>Escape Sequences</summary>

<code>\\n, \\t, \\\\, \\'</code>

- Special character representations.

- Used to represent characters like newline and tab.

</details>
<details>

<summary>Function Parameters</summary>

<code>(int x, float y)</code>

- Variables passed to a function.

- Provide data for function computation.

</details>
<details>

<summary>Array Initialization</summary>

<code>int arr[3] = {1, 2, 3};</code>

- Assigns initial values to an array.

- Sets the initial content of an array.

</details>
<details>

<summary>Array Indexing</summary>

<code>arr[2]</code>

- Accesses a specific element in an array.

- Retrieves values stored in arrays.

</details>
<details>

<summary>Pointer Arithmetic</summary>

<code>ptr + 1, ptr - 1</code>

- Performs arithmetic operations on pointers.

- Navigates through memory locations.

</details>
<details>

<summary>Array Pointers</summary>

<code>int *arrPtr = arr;</code>

- Pointers that reference arrays.

- Provides indirect access to array elements.

</details>
<details>

<summary>String Handling Functions</summary>

<code>strlen(), strcpy(), strcat()</code>

- Functions for manipulating strings.

- Performs common string operations.

</details>
<details>

<summary>Type Casting</summary>

<code>(float)x, (int)y</code>

- Converts data from one type to another.

- Changes the data type of a variable.

</details>
<details>

<summary>Predefined Macros</summary>

<code>\_\_FILE__, \_\_LINE__, \_\_DATE__</code>

- Built-in macros with information about the code.

- Provides information about the code during compilation.

</details>
<details>

<summary>Inline Assembly</summary>

<code>\_\_asm {}</code>

- Inserts assembly code within C code.

- Allows low-level control and optimization.

</details>
<details>

<summary>Struct Initialization</summary>

<code>struct Point p = {1, 2};</code>

- Assigns initial values to struct members.

- Sets the initial state of a struct.

</details>
<details>

<summary>Function Pointers</summary>

<code>int (*funcPtr)(int, int);</code>

- Pointers that reference functions.

- Allows dynamic function selection.

</details>
<details>

<summary>Dynamic Allocation of Arrays</summary>

<code>int *dynArr = (int *)malloc(5 * sizeof(int));</code>

- Allocates arrays with a dynamic size.

- Creates resizable data structures.

</details>
<details>

<summary>Scope Resolution Operator</summary>

<code>structName::member</code>

- Accesses members of a C++ class.

- Identifies class members and namespaces.

</details>

