You've already used functions in the past. One of their biggest advantages is reusability - for example, the `<cmath>` header file contains many useful functions, like `ceil`, `floor`, and `round`. Because these functions are already defined, you don't need to rewrite the code needed to do this. Instead of implementing logic to round a number, it was already defined - you won't need to do it yourself.

In this lesson, you will learn how to write your own functions. 

# What Are Functions?

Functions are just blocks of code that are predefined, and can be reused for your purposes. 

You've already used many functions in the past: 
- `ceil`
- `floor`
- `round`

There are many more functions that you will learn about and use, which will be covered in the next lesson.

## Declaring Functions

The syntax of a function looks like this:
```cpp
returnType functionName(type parameter1, type parameter2, …) {
    // code that you want 
    return value;
}
```
The code you write is really just something that takes in input, and then returns some output back to you for you to see. Functions are similar to that. 
Functions can take in (be passed) values called parameters, which it will then process and return a value. 

You'll need to specify the type of the return value, as well as the name of the function, so that it can be called later. 

Additionally, functions should be declared outside of your `main()` function. 
Functions can be called in a more simple manner, that you're probably familiar with already:

Consider our own implementation of the `round()` function:

```cpp
int round(float n)
{
    if (n > 0.0)
        return (int)(n + 0.5);
    else
        return (int)(n - 0.5);
}
```
`round()` returns the nearest integer to `n`. 
We can call `round()` like this:
```cpp
#include <iostream>
using namespace std;
int round(float n)
{
    if (n > 0.0)
        return (int)(n + 0.5);
    else
	return (int)(n - 0.5);
}
int main() {
    cout << round(5.6) << endl;
    return 0;
}

>>> 6
```

# Parameters and Arguments

When talking about functions, you will hear the words parameter and argument used almost interchangeably - but they're not the same thing. 
> Parameters are like placeholders for the values that you will pass to the function, while arguments are the values actually passed to the function
```cpp
void example(int param1, int param2) // Parameters
{
    cout << param1 + param2;
}
int main()
{
    example(5, 6); // Arguments
    return 0;
}
```

## Passing by Value

Sometimes, we when pass values to a function, nothing outside the function is changed. When a variable is passed to a function, it isn't actually getting passed - C++ makes a copy of that function and then uses that in the code. 

This is called _passing by value_.

```cpp
#include <iostream>
using namespace std;
void increment(int num)
{
    num += 10;
}
int main()
{
    int num = 10;
    increment(num);
    cout << num << endl;
    return 0;
}

>>> 10
```
When we called `increment` with `num` as an argument, a copy of `num` was passed to `increment`. Therefore, `increment` added 10 to a copy of `num`, not the variable we're using. When we print `num` after using `increment`, the value of `num` is still the same.

But what if we want the function to get the variable itself?

## Passing by Reference

Every variable stores a variable, but it also has an address. The memory address of a variable is just where it's located in the memory, so C++ can find it. We can get the address of a variable with the `&` operator in front of the variable:
```cpp
#include <iostream>
using namespace std;
int main() {
    int num = 10;
    cout << num << endl;
    cout << &num << endl;
}

>>> 10
>>> 0x7ffe6ddc381c
```
When you try to print the address of a variable on your own computer, it will be different. This is because your computer stores that variable in a different location, so `&num` isn't always the same. However, it always stores the same value, `10`. 

Instead of passing a copy of a variable to a function, you can pass its reference. This will give the function the actual variable, meaning it can be changed:

```cpp
#include <iostream>
using namespace std;
void increment (int &num)
{
    num += 10;
}

int main() {
    int num = 10;
    increment(num);
    cout << num << endl;
}

>>> 20
```

## Passing Arrays to Functions

C++ allows you to both pass arrays and return arrays through functions.
Let's discuss the first two ways to pass arrays to functions in C++:

### Passing with a Sized Array

You can also pass using a sized array with this format:
```cpp
returnType functionName(type arrayName[arraySize])
{
    // code that you want
    return value;
```
The former example can be implemented in a similar way:
```cpp
#include <iostream>
using namespace std;
void print(int arr[5])
{
    for (int i = 0; i < 5; i++)
    {
        cout << arr[i] << ' ';
    }
  cout << endl;
}

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    print(arr);
}

>>> 1 2 3 4 5
```

### Passing with an Unsized Array

You can also pass an array without defining a size, but you'll also need to specify the size the array in another parameter, like so:

```cpp
#include <iostream>
using namespace std;
void print(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << ' ';
    }
  cout << endl;
}

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    print(arr, 5);
}
```

# Function Overloading

Sometimes, you'll define functions with similar purposes, but have slight differences based on the type of data passed to it. 
Consider two functions that add different types of numbers:
```cpp
#include <iostream>
using namespace std;
int addInt(int x, int y)
{
    return x + y;
}
int addDouble(double x, double y)
{
    return x + y;
}
int main() {
    int x = 5;
    int y = 4;
    double w = 2.5;
    double z = 3.4;
    cout << addInt(x, y) << endl;
    cout << addDouble(w, z) << endl;
}
```
Instead of implementing separate functions for each of the functions, we can just write one function with the same name, but different parameters. C++ will choose to use the version of function that matches the one with the correct parameters:

```cpp
#include <iostream>
using namespace std;
int add(int x, int y)
{
    return x + y;
}
int add(double x, double y)
{
    return x + y;
}
int main() {
    int x = 5;
    int y = 4;
    double w = 2.5;
    double z = 3.4;
    cout << add(x, y) << endl;
    cout << add(w, z) << endl;
}
```
Or, for example, you could implement a `print` function for different types, like integers and arrays, by defining the same `print` function with the same name, but different parameters. 

```cpp
#include <iostream>
using namespace std;
void print(string s)
{
    cout << s << endl;
}
void print(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << ' ';
    }
  cout << endl;
}
int main() {
    string str = "Hello World!"; 
    int nums[5] = {1, 2, 3, 4, 5};
    print(str);
    print(nums, 5);
}

>>> Hello World!
>>> 1 2 3 4 5
```
C++ knows to use the second version of `print` because we gave it two parameters, one for an array and one integer. Meanwhile, it also knows to use the first `print` because it received a `string`. 

# Prototypes and Default Arguments

## Function Prototypes

You can write a function signature before actually defining the function, to tell the compiler (as well as anybody reading the code) the return type of the function, and its parameters. 

The function can then be defined later in the code. Notice that without prototypes, defining a function after it is called causes an error, like this:

```cpp
#include <iostream>
using namespace std;

int main() {
    int nums[5] = {1, 2, 3, 4, 5};
    print(nums, 5);
}
void print(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << ' ';
    }
  cout << endl;
}

>>> main.cpp:6:5: error: use of undeclared identifier 'print'
```
However, you can define a function prototype at the top:
```cpp
#include <iostream>
using namespace std;

void print(int arr[], int size); // Function Prototype

int main() {
    int nums[5] = {1, 2, 3, 4, 5};
    print(nums, 5);
    return 0;
}
void print(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << ' ';
    }
  cout << endl;
}
```

For somebody reading a program with many functions, it is useful to know all the functions inside the code before, and then to know the `main` function, rather than looking through every function definition before seeing what the program actually does.

## Default Arguments

You can specify default arguments, which are used when the value is unspecified when the function is called. Consider our previous print function, with an extra addition:
```cpp
#include <iostream>
using namespace std;

void print(int arr[], int size, string delimiter)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << delimiter;
    }
  cout << endl;
}

int main() {
    int nums[5] = {1, 2, 3, 4, 5};
    print(nums, 5, ", ");
    return 0;
}

>>> 1, 2, 3, 4, 5
```
We can now specify what is used in between the values of the array when it is printed. However, we can make this parameter optional if you just want to use spaces:
```cpp
#include <iostream>
using namespace std;

void print(int arr[], int size, string delimiter=" ")
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << delimiter;
    }
  cout << endl;
}

int main() {
    int nums[5] = {1, 2, 3, 4, 5};
    print(nums, 5);
    return 0;
}

>>> 1 2 3 4 5
```
A parameter can be given a default value by including it in its definition, as shown above. When it's not included, it goes to its default value. However, the default value an still be changed. 

# Recursive Functions

Recursive functions are functions that call themselves. When a recursive function runs, it will run until it reaches a "base case" or halting condition in which its job is fulfilled. Base cases are definite and do not call other functions. 
If any halting condition is not defined, the function will run itself in an infinite loop. 
You can think of a recursive function like a chain of dominoes: 
- As each domino falls, it triggers the next one to fall
- The last domino that falls acts as our "base case", because there is no more dominos for it to push down 
- Every a domino falls in our recursive function, our value is updated

You might have heard of a _fibonacci sequence_ before. The fibonacci sequence starts with 0 and 1. Each next term is made up of the sum of the previous two:
The first couple terms of this sequence look like this:
```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
```
We can implement this with recursion, by making the function call the values of previous fibonacci numbers, since the nth fibonacci number is equal to the (n-1)th number and the (n-2)th number.

```cpp
int fib(int n) 
{
    if (n == 1 || n == 2) 
	return 1;
    else 
	return fib(n-1) + fib(n-2); 
} 
```
