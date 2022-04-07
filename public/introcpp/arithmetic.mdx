---
slides: "https://docs.google.com/presentation/d/18tJP-a-T0aGo5GgV9SkOTif_YMraTAVB2UMgCUEICc8"
handout: "https://docs.google.com/document/d/1VZTrFJe_k7Inn1Sh844azjMc-RKHgUEvLSM_8GgBuhU"
---

# Why do we need them?

Arithmetic is a fancy way of saying “math”. We use arithmetic every day!

Calculating the total amount needed to pay at a restaurant, the amount of tax or tip on an item, figuring out distance from two places - these are just some of the ways in which we use math daily.

Students of various ages use math daily – it’s a part of their curriculum. Such math may be easy to do without the help of a program. However, at times it can get repetitive. The math might just take a really long time to do by hand.

For example, imagine that you are organizing a wedding and eventually decide that four hundred guests will attend. You need to find the total cost of the food and drinks, among others, for **four hundred people**. A small error in one place could ruin the entire calculation. Not only that, it would take a long time. Now obviously, you might say, why don't you use a calculator? 

The benefit of programming is that you can code it so that you don't even have to type all the numbers in for yourself. If the people RSVPing to a wedding did it online, you could load the data into your program and let your program do all the calculations.

Nearly every program you write will involve these operators in some way shape or form. C++ even has a few operators that you might not use in regular math, but will come in handy when programming. 

# The Binary Number System

Computers don't store information the same way that humans do. Humans have a number system that has 10 different values, and then repeats for the next digit. Digits are weighted in powers of 10. So if we had the number 1250, we think of it has `0 * 10^0 + 5 * 10^1 + 2 * 10^2 + 1 * 10^3`. The different values or that a number system can have tells us its `base`. Humans use a `base` 10 number system.

Computers use a `base` 2 number system called `binary`. There are only two possible values in binary, `0` and `1 `, on and off. If we consider the binary number 1001, we would write an expression out like what we did with 1250 before, only instead of powers of 10, we use powers of 2. So 1001 is equal to `1 * 2^0 + 0 * 2^1 + 0 * 2^2 + 1 * 2^3` so this binary number is equal to 9. 

We need to understand the basic premise of binary as it helps us understand exactly what C++ does with arithmetic operations, especially when it comes to different types. It also helps us understand the limitations of arithmetic with C++. All information stored in the computer takes a bit of space. It takes a bit of `memory`. The smallest division of `memory` is the `bit` which is a single binary digit. We will most commonly think of memory in terms of `bytes` which are 8 `bits`. 

When you think about how much memory your computer has, you might find for example that your computer has 8 GB of RAM. 8 GB stands for 8 gigabytes of RAM. This is approximately `8 * 10^9` bytes of ram. We say approximately because we have to remember that everything in the computer is in base 2. If we wanted to know the exact number of bytes of RAM 8 GB is, we can use the following conversion information: 

| Name | Value in previous | Value in bytes|
| --- | --- | --- |
| Byte | 8 Bits | 1 Byte |
| MegaByte | 2^10 Bytes |  1024 (2^10) Bytes |
| GigaByte | 2^10 MegaBytes | 1048576 (2^20) Bytes |
| TeraByte | 2^10 GigaBytes | 1073741824 (2^30) Bytes |

So 8 GB would be 8388608 Bytes. That's a lot! By comparison, an integer in C++ takes up only 4 bytes. This type of information is useful because it helps us understand how much information different variables can hold. We can calculate that the maximum value an integer can hold is `2147483647` and the minimum value is `-2147483647`. Since there are 4 bytes of data, we know there are 32 bits in an int. We can't just say that the maximum number we could store is `2^32`. This is because there is 1 bit that stores whether the number is negative or positive. But we still can't do `2^31` because that number gives us the different possibilities of numbers that we could hold. Since we must also hold zero as a possibility, to get the maximum value we could hold, we would have to do `2^31 - 1`. 

Here is a chart that tells us the maximum/minimum value that can be stored in different integer types. Keep in mind that the aforementioned calculation will not be true for all the types because they have different ways to store them in memory. 

> With no type, long/short implies int when used alone. 

| Data Type | Bytes | Minimum | Maximum |
| --- | --- | --- | --- |
| bool | 1 | 0 | 1 | 
| char | 1 | -128 | 127 |
| unsigned char | 1 | 0 | 255 |
| short | 2 | -32768 | 32767 |
| unsigned short | 2 | 0 | 65535 | 
| int | 4 | -2147483648 | 2147483647 |
| unsigned int | 4 | 0 | 4294967295 |
| long / long long | 8 | -9223372036854775808 | 9223372036854775807 | 
| unsigned long / long long | 8 | 0 | 18446744073709551615 |

Here is the chart for floating point values. Floating point values are stored in a completely different way than integers. They are stored in a format similar to scientific notation, but with `2^x` power instead of `10^x`, x being some power (can be negative or positive). Floating point values can also store certain special values like `inf` for infinity and `nan` for things that are not real numbers like zero divided by zero. 

> Ranges on floating point values are not necessarily the range that floating point values can be *accurately* represented. See precision for that. Also note that floating point numbers have different min/max depending on whether storing a very small or large number.

| Data Type | Bytes | Range < 1 | Range > 1 | Precision |
| --- | --- | --- | --- | --- |
| float | 4 | ±3.40282 * 10^-38 | ±1.1754 * 10^38 | 7 |
| double | 8 | ±2.22507 * 10^-38 | ±1.79769 * 10^38 | 16 |
| long double | 16 | ±3.3621 * 10^4932 | ±1.18973 * 10^4932 | 34 | 

You can actually use a C++ program to determine the min/max numbers as specified above as well as the size in bytes of a type. 

> `typedef` allows you to specify a short form way to write a certain type. In this program, change the value preceding `ex` to whatever type you want to get the information from. `sizeof` tells you the number of bytes of a type.

```cpp
#include <iostream>
#include <limits>

using namespace std;
typedef int ex;

int main()
{
  cout << "# of bytes = " << sizeof(ex) << endl;
  cout << "min value = " << numeric_limits<ex>::min() << endl;
  cout << "max value = " << numeric_limits<ex>::max() << endl;
}
```

# Basic Operations and Expressions

There are four basic operations in C++, and they are the same ones that we learned in school. These operations are addition, subtraction, multiplication, and division. In C++, we form `expressions` as a combination of `literals`, `operators`, and `variables`. Now, you might be thinking that the only one of these things that you know of so far are `variables`. However,  we've already used `literals` before. When you set a variable, like `int myVar = 5;` , you just used a `literal`. `5` is an example of a `literal` in the prior statement. `Literals` are the values that we write that have an unchanging value directly written in our code. 

Operators are symbols that are used to denote a particular operation. We have: 

| Operation | Symbol |
| --- | --- |
| Addition | + |
| Subtraction | - |
| Multiplication | * |
| Division | / | 

Let's use these operators in a program. 

```cpp
#include <iostream>

using namespace std;
int main() 
{
	cout << 1 + 4 << endl;
	cout << 1 - 4 << endl;
	cout << 1 * 4 << endl;
	cout << 1 / 4 << endl;
}

>>> 5
>>> -3
>>> 4
>>> 0
```

You just wrote four expressions with literals and an operator. All of this looks good, except the last one. We wrote `1 / 4`, but got an output of 0. How can this be? If I enter it in a calculator, I get `0.25`. What we need to understand is C++ operators handle things differently when you use different `types`.  Previously, we dealt with variables having types. However, we set them equal to literals. These literals thus have a type. In the example above, all of the literals have a type of `int` . An expression containing only integers will result in an answer that is an integer. 

This type of division has a special name: `integer division`. To do integer division in your head, think of what the value would actually be, and then throw out whatever is after the decimal place. In this case, you would get 0.25, and when you throw away what ever is after the decimal point, you are left with zero which is exactly what we got. 

To solve this problem and get an answer that is a decimal, one of our literals must be a floating point type. We can do this by replacing the 1 with 1.0 or 4 with 4.0 or even both.

```cpp
#include <iostream>

using namespace std;
int main()
{
	cout << 1 / 4 << endl;
	cout << 1.0 / 4 << endl;
	cout << 1 / 4.0 << endl;
	cout << 1.0 / 4.0 << endl;
}

>>> 0
>>> 0.25
>>> 0.25
>>> 0.25
```

Any literal that contains a decimal point is by default a `double`. A literal that contains an integer type value is by default an `int`. If the literal stored exceeds the bounds of double or integer, C++ will automatically use the appropriate type (ie long double/ long). Now this can introduce some unique problems. Consider the expression `2000000000 + 600000000`. Evaluating this expression would result in `-1694967296`. How in the world did we end up with a negative number? Well, if we recall before, integers have a fixed range, and the addition of these two integers would exceed the max. We get something called an `overflow error` and we essentially wrap around the limit. To solve this problem, we must specify that either one of these integers is a `long`. We can do this by adding an L at the end of the number which tells C++ that this literal should be considered as a long integer. So if we used `2000000000L + 600000000` we get the correct answer of `2600000000`. 

This begs the question of what happens when you have expressions of all different types, like a float with a long or something like that. Essentially what happens is if you have only integer types, the integer type that takes up the most space is used (long long > long > int > short) for all integer types. For only floating points in an expression, you get (long double > double > float). If you have an expression with both floating points and integers, the greatest floating point is used. To specify a long double, use something like `1.0L` and a float would be `1.0f`. 

We can use expressions with a combination of variables and literals. The same rules apply for the final type of the evaluated expression, considering the types of both the literals and variables. 

When we evaluate more complex expressions, we observe a particular order of operations. This order is almost the same as the PEMDAS you might have learned in school. Parentheses are always evaluated first. 

> You cannot use square brackets `[]` or curly braces `{}` as parentheses, only `()`.

There is no exponent operator in C++, and multiplication/division is left to right and addition/subtraction is left to right just as we do in math. Perhaps one of the most notable differences is that there is no distributive property in C++. You CANNOT do `3(4 + 5)`. You must write it as `3 * (4 + 5)`. 

# The Modulus Operator

Aside from the four operators mentioned before, C++ has one other important arithmetic operators. It's called the `modulus` operator and is represented with a `%`. This operator only works with two integer types. It finds the remainder of a division expression.

For example,

```cpp
#include <iostream>

using namespace std;
int main()
{
	cout << 5 % 3 << endl;
	cout << 6 % 2 << endl;
	cout << 9 % 15 << endl;
}

>>> 2
>>> 0
>>> 9
```

Modulus is considered on the same level of multiplication/divsion in terms of order of operations. 

Modulus might not seem that useful at first, but there are many applications of the operator. It can be quite useful.

# Type Casting

Previously we mentioned how you can specifically designate literals to have a specific type. However, what if you were dividing two integer type variables and wanted to output the answer exactly. Consider the following program:

```cpp
#include <iostream>

using namespace std;
int main()
{
	int v1, v2;
	cout << "Enter two integers: ";
	cin >> v1 >> v2;
	cout << v1 << " / " << v2 << " = " << v1 / v2 << endl;
}

>>> 4 2
>>> 4 / 2 = 2
>>> 7 4
>>> 7 / 4 = 1
```

If the two numbers divide evenly, we get what we want. However, if they don't, we still get an integer output since the expression only contains integers. There are many ways of solving this. For example, instead of storing the inputs as integers, we could store them as floats. We could even rewrite `v1 / v2 * 1.0` to get the answer as a float. 

However, C++ offers another solution which is extremely powerful. C++ allows us to cast the integer to a different type. We use one of the two syntaxes : `type(var)` or `(type)var`. So, we could rewrite v1 as `float(v1)` or `(float)v1`. We can see these both work with the following program: 

```cpp
#include <iostream>

using namespace std;
int main()
{
	int v1, v2;
	cout << "Enter two integers: ";
	cin >> v1 >> v2;
	cout << v1 << " / " << v2 << " = " << float(v1) / (float)v2 << endl;
}

>>> 4 2
>>> 4 / 2 = 2
>>> 7 4
>>> 7 / 4 = 1.75
```

A common mistake might be to write `float(v1 / v2)`. Remember that parentheses are evaluated first, so what happens is `v1 / v2` is evaluated first. So if we input 7 and 4, we would get 7 / 4 = 1, and then cast the 1 into a float. 

We can also cast the other way. We could get a float to an integer. For example, if we had 

```cpp
#include <iostream>

using namespace std;
int main()
{
	float inp;
	cout << "Enter a float: ";
	cin >> inp;
	cout << (int)inp << endl;
}

>>> 3
>>> 3
>>> 4.75
>>> 4
>>> 78.09242
>>> 78

```

This process is similar to what we said happens when we do integer division. Whatever goes after the decimal place is simply thrown away. This process is called `truncation`. 

Type casting is not defined for all types. For example, we cannot cast an integer to a string or vice versa. Instead, there are provided functions that do it for us. If we wanted to convert a string to an integer, we would have to use the function `stoi` and if we wanted to convert an integer to a string, we would have to use the function `to_string`. 

# Compound Assignment Operators

A lot of the time we might want to simply increase a variable by a certain amount. We might want to divide it by a certain amount, or even modulus it by a certain amount. We mght think to use the following syntax: 

```cpp
#include <iostream>

using namespace std;
int main()
{
	int inp;
	cout << "Enter an integer: ";
	cin >> inp;
	inp = inp + 5;
	cout << "Your number + 5 = " << inp << endl;
}
```

C++ offers a shorter way to write this. Instead of writing `inp = inp + 5`, we can simply write `inp += 5` which means we add 5 to inp and set it equal to itself. You can still use the previous syntax, but a lot of the time when writing code, this is a lot shorter to write. 

We can do the same thing with the other operators, so we have:

| Operation | Compound Assignment Operator |
| --- | --- |
| Addition | `+=` |
| Subtraction | `-=` |
| Multiplication | `*=` |
| Division | `/=` |
| Modulus | `%=` |

# Pre and Post Increment/Decrement

In programming we often like to add or subtract a value by one. C++ offers an operator for this. Two operators for these actually. If we wanted to add just one to a variable, we could do `myVar++` or `++myVar`. For subtracting just one, we could use `myVar--` or `--myVar`. However, there is a subtle difference between using the operator before or after. Using it before or after the variable has a different result. 

Consider the following program: 

```cpp
#include <iostream>

using namespace std;
int main()
{
	int pre, post;
	cout << "Enter an integer: ";
	cin >> pre;
	post = pre;
	cout << "Pre increment: " << ++pre << " " << pre << endl;
	cout << "Post increment: " << post++ << " " << post << endl;
}

>>> 5
>>> Pre increment: 6 6
>>> Post incrememnt: 5 6
```

With putting the `++` before the variable, we are using the `pre-increment` operator which increments the value by one and evalutates to that increased value. `Post-incrememnt` also increments the value by one, but evaluates to the value before adding one to it. That's why with the pre-increment, it evaluates to 6 and increases 5 by 1, but with post-incremement it evaluates to the original value, but still increments by 1. 

The same pre/post thing is applicable with `--` and the pre/post decrement operator.

# Precedence 

We learned of a couple more operators that don't exist with the math we normally do, but do in programming. Let's review the order that these happen. C++ has even more operators than the ones we learned today, and they all have a certain value of `precedence`. This number is the order in which they occur. Lower precedence means they happen first. Operators with the same precedence occur from either left to right or right to left. This is called the associativity.

This list below goes over the precedence different operators we have learned. 

| Precedence | Operator | Description | Associativity |
| --- | --- | --- | --- |
| 2 | `++` <br /> `--` <br /> `()` <br /> `(type)` <br /> `function()` | post-increment <br /> post-decrememnt <br /> parentheses <br /> type cast <br /> function call | left to right |
| 3 | `++` <br /> `--` | pre-increment <br /> pre-decrement | right to left |
| 5 | `*` <br /> `/` <br /> `%` | multiplication <br /> division <br /> modulus | left to right |
| 6 | `+` <br /> `-` | addition <br /> subtraction | left to right|

You might have noticed that some levels are missing. That's okay, because we'll slowly fill this up with more operators as we learn more.

# `<cmath>` Header File

There are many useful functions that can help us with doing certain arithmetic that come in the `<cmath>` header file. You can include it the same way as other header files.

For example, we mentioned before that there is no exponent operator in C++. The `<cmath>` header file gives us a function for that. 

## `pow`, `sqrt` 

Just by looking at the name, you might have guessed that "pow" is short for "power". Power is just another way of saying exponent. This function takes two inputs, the base and the power. We call it by the function call `pow(base, exponent)`.

For example, if we used `pow(5, 3)` it would evaluate to 125. We can even find the power of decimals, like `pow(0.5, 3)` would be 0.125. 

The `sqrt` function finds the squareroot of a number. It returns the value as a floating point value, and works with floating point inputs. If you pass in a negative number as the input, it will return `nan` which means not a number since the squareroot of a negative number is imaginary.

Now if you wanted to find an nth root of a number, like the 7th root of a number, C++ doesn't offer a 7th root function. Instead, we can actually use the `pow` function. If you recall from math class, a 7th root is nothing more than the number to the power of `1/7`. So you might think that to find the 7th root of 987, we can do `pow(987, 1/7)`. No! Remember that `1/7` is integer division, so it evaluates to zero! Instead, we would have to write `pow(987, 1.0/7)` which evaluates to `2.67769` as expected.

## `ceil`, `floor`, and `round`

What if we wanted to round decimals specifically up or down, or round as we would regularly? `<cmath>` offers us functions for that too! 

For example: 

```cpp
#include <iostream>
#include <cmath>

using namespace std;
int main()
{
	double input;
	cout << "Enter a floating point input: ";
	cin >> input;
	cout << "Rounded up: " << ceil(input) << endl;
	cout << "Rounded down: " << floor(input) << endl;
	cout << "Rounded normally: " << round(input) << endl;
}


>>> 9.8763
>>> Rounded up: 10
>>> Rounded down: 9
>>> Rounded normally: 10

```

One thing to keep in mind is that these functions still return floating point values, albeit rounded. So if you wanted to round floating points and use the modulus operator, you would need to cast them to integers first. 

## `abs` and `fabs`

The absolute value of a number is its distance to zero. The absolute value of a positive number is the same as its value, and the absolute value of a negative number is just that number without the minus symbol. For example, the absolute value of 8 is still 8, but the absolute value of -3 is 3. 
If you want to find the absolute value of an integer value, you can use `abs(num)`.  If you want to find the absolute value of a floating point value, you can use `fabs(num)`. 

```cpp
#include <iostream>
#include <cmath>

using namespace std;
int main()
{
	int num1;
	float num2;
	cout << "Enter an integer: ";
	cin >> num1;
	cout << "Absolute value of the integer: " << abs(num1) << endl;
	cout << "Enter a float: ";
	cin >> num2;
	cout << "Absolute value of the float: " << fabs(num2) << endl;
}


>>> Enter an integer: -4
>>> Absolute value of the integer: 4
>>> Enter a float: -3.14
>>> Absolute value of the float: 3.14
```


