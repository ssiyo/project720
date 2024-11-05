

# PHP Syntax

<details>

<summary>Variable Assignment</summary>

<code>VariableName = Value;</code>

<p>Assigns a value to a variable.</p>
</details>

<details>

<summary>Conditional Statement (if)</summary>

<code>if (Condition) { CodeBlock }</code>

<p>Executes code if the condition is true.</p>
</details>

<details>

<summary>Conditional Statement (if-else)</summary>

<code>if (Condition) { CodeBlock1 } else { CodeBlock2 }</code>

<p>Executes one block if true</p>
</details>

<details>

<summary>Switch Statement</summary>

<code>switch (Value) { case Value1: CodeBlock1; break; case Value2: CodeBlock2; break; default: DefaultCodeBlock; }</code>

<p>Executes code based on matching cases.</p>
</details>

<details>

<summary>Loop (foreach)</summary>

<code>foreach ($Array as $Value) { CodeBlock }</code>

<p>Iterates through an array's elements.</p>
</details>

<details>

<summary>Function Declaration</summary>

<code>function FunctionName(Parameters) { CodeBlock }</code>

<p>Defines a reusable function.</p>
</details>

<details>

<summary>Function Call</summary>

<code>FunctionName(Arguments);</code>

<p>Executes a function with given arguments.</p>
</details>

<details>

<summary>Array Declaration</summary>

<code>$ArrayName = [Value1, Value2, Value3];</code>

<p>Creates an array.</p>
</details>

<details>

<summary>Associative Array</summary>

<code>$AssocArray = ['Key1' => Value1, 'Key2' => Value2];</code>

<p>Defines an associative array.</p>
</details>

<details>

<summary>String Concatenation</summary>

<code>$String = $String1 . $String2;</code>

<p>Combines two strings.</p>
</details>

<details>

<summary>String Interpolation</summary>

<code>$String = 'Value: $Variable';</code>

<p>Embeds variable values in strings.</p>
</details>

<details>

<summary>Array Access</summary>

<code>$Value = $Array[Index];</code>

<p>Retrieves a value from an array by index.</p>
</details>

<details>

<summary>Array Key Access</summary>

<code>$Value = $AssocArray['Key'];</code>

<p>Retrieves a value from an associative array by key.</p>
</details>

<details>

<summary>Class Declaration</summary>

<code>class ClassName { Properties; Methods; }</code>

<p>Defines a class with properties and methods.</p>
</details>

<details>

<summary>Object Creation</summary>

<code>$Object = new ClassName();</code>

<p>Creates an instance of a class.</p>
</details>

<details>

<summary>Class Method Call</summary>

<code>$Object->MethodName(Arguments);</code>

<p>Executes a method of an object.</p>
</details>

<details>

<summary>Inheritance</summary>

<code>class SubClass extends ParentClass { /* Child class definition */ }</code>

<p>Creates a subclass that inherits from a parent class.</p>
</details>

<details>

<summary>Visibility (public)</summary>

<code>public $Property;</code>

<p>Declares a public class property.</p>
</details>

<details>

<summary>Visibility (private)</summary>

<code>private $Property;</code>

<p>Declares a private class property.</p>
</details>

<details>

<summary>Visibility (protected)</summary>

<code>protected $Property;</code>

<p>Declares a protected class property.</p>
</details>

<details>

<summary>Class Constructor</summary>

<code>function \_\_construct(Parameters) { /* Constructor code */ }</code>

<p>Initializes class instances.</p>
</details>

<details>

<summary>Static Members</summary>

<code>ClassName::$StaticProperty;</code>

<p>Accesses static properties and methods.</p>
</details>

<details>

<summary>Include File</summary>

<code>include 'FileName.php';</code>

<p>Includes an external PHP file.</p>
</details>

<details>

<summary>Require File</summary>

<code>require 'FileName.php';</code>

<p>Requires an external PHP file (fatal error if not found).</p>
</details>

<details>

<summary>Namespace Declaration</summary>

<code>namespace MyNamespace;</code>

<p>Defines a namespace for code organization.</p>
</details>

<details>

<summary>Use Statement</summary>

<code>use MyNamespace\ClassName;</code>

<p>Imports a class or namespace for use.</p>
</details>

<details>

<summary>Error Suppression</summary>

<code>@Function();</code>

<p>Suppresses error messages for a specific function.</p>
</details>

<details>

<summary>Type Declaration</summary>

<code>function FunctionName(Parameter: Type)</code>

<p>Specifies parameter types in function declarations.</p>
</details>

<details>

<summary>Array Push</summary>

<code>Array.push(Value);</code>

<p>Adds a value to the end of an array.</p>
</details>

<details>

<summary>Array Pop</summary>

<code>Array.pop();</code>

<p>Removes and returns the last element of an array.</p>
</details>

<details>

<summary>Array Shift</summary>

<code>Array.shift();</code>

<p>Removes and returns the first element of an array.</p>
</details>

<details>

<summary>Array Unshift</summary>

<code>Array.unshift(Value);</code>

<p>Adds a value to the beginning of an array.</p>
</details>

<details>

<summary>Array Merge</summary>

<code>Array.merge(Array2);</code>

<p>Merges two arrays into one.</p>
</details>

<details>

<summary>Array Slice</summary>

<code>Array.slice(Start, Length);</code>

<p>Extracts a portion of an array.</p>
</details>

<details>

<summary>Array Search</summary>

<code>Array.search(Value);</code>

<p>Searches for a value in an array and returns its key.</p>
</details>

<details>

<summary>Array Sort (Ascending)</summary>

<code>Array.sort();</code>

<p>Sorts an array in ascending order.</p>
</details>

<details>

<summary>Array Sort (Descending)</summary>

<code>Array.sortDesc();</code>

<p>Sorts an array in descending order.</p>
</details>

<details>

<summary>String Length</summary>

<code>String.length();</code>

<p>Returns the length of a string.</p>
</details>

<details>

<summary>String Substring</summary>

<code>String.substring(Start, Length);</code>

<p>Extracts a portion of a string.</p>
</details>

<details>

<summary>String Replace</summary>

<code>String.replace(Find, Replace);</code>

<p>Replaces occurrences of a substring in a string.</p>
</details>

<details>

<summary>String Split</summary>

<code>String.split(Delimiter);</code>

<p>Splits a string into an array based on a delimiter.</p>
</details>

<details>

<summary>String Join</summary>

<code>Array.join(Delimiter);</code>

<p>Joins array elements into a string with a delimiter.</p>
</details>

<details>

<summary>Error Handling (try-catch)</summary>

<code>try { CodeBlock } catch (Exception $e) { ExceptionHandlingCode; }</code>

<p>Catches and handles exceptions.</p>
</details>

<details>

<summary>File Open</summary>

<code>$File.open(FilePath, Mode);</code>

<p>Opens a file for reading or writing.</p>
</details>

<details>

<summary>File Read</summary>

<code>$File.read(Length);</code>

<p>Reads data from an open file.</p>
</details>

<details>

<summary>File Write</summary>

<code>$File.write(Data);</code>

<p>Writes data to an open file.</p>
</details>

<details>

<summary>File Close</summary>

<code>$File.close();</code>

<p>Closes an open file.</p>
</details>

<details>

<summary>File Delete</summary>

<code>unlink(FilePath);</code>

<p>Deletes a file.</p>
</details>

<details>

<summary>Directory Create</summary>

<code>mkdir(DirectoryPath);</code>

<p>Creates a new directory.</p>
</details>

<details>

<summary>Directory List</summary>

<code>Directory.list();</code>

<p>Lists files in a directory.</p>
</details>

<details>

<summary>Include Once</summary>

<code>include_once 'FileName.php';</code>

<p>Includes a file only once.</p>
</details>

<details>

<summary>Require Once</summary>

<code>require_once 'FileName.php';</code>

<p>Requires a file only once.</p>
</details>

<details>

<summary>Comments (Single-line)</summary>

<code>// This is a single-line comment</code>

<p>Adds comments for code documentation.</p>
</details>

<details>

<summary>Comments (Multi-line)</summary>

<code>/* This is a multi-line comment */</code>

<p>Adds multi-line comments.</p>
</details>

<details>

<summary>Ternary Operator</summary>

<code>$Variable = (Condition) ? Value1 : Value2;</code>

<p>Assigns a value based on a condition.</p>
</details>

<details>

<summary>Null Coalescing Operator</summary>

<code>$Variable = $Value ?? DefaultValue;</code>

<p>Assigns a default value if a variable is null.</p>
</details>

<details>

<summary>Type Casting (Explicit)</summary>

<code>$Variable = (Type) $Value;</code>

<p>Converts a value to a specific data type explicitly.</p>
</details>

