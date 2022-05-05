In the past, you have learned about functions and methods, as well as their uses. In this lesson, you will learn about more advanced uses of functions and how to implement them in your code. Additionally, you will learn useful functions to improve the code that you write. 

# Functions with Arbitrary Parameters

You might have noticed that certain functions, such as `print()`, can take any number of arguments, while your own functions cannot. 

This is because it uses special parameters, called `*args` and `**kwargs`. Using these keywords, we can pass variable numbers of arguments into our function. 

The `*` in `*args` specifies that the arguments will be a list:

Here's a simple example:
```python
def mult(*args):
    product = 1
    for arg in args:
        mult *= arg
    return product

print(mult(2, 4))
print(mult(1, 2, 3, 4, 5))

>>> 8
>>> 120
```

`**kwargs` instead is used to pass keyworded argument lists.  Returns a list.
```python
def func(**kwargs):
    print("kwargs: ", kwargs)

func(first='1st', second='2nd', third='3rd')

>>> kwargs:  {'first': '1st', 'second': '2nd', 'third': '3rd'}
```

> Note: the names `args` and `kwargs` are not required. The asterisks `*` and `**` tell Python to accept an arbitrary amount of arguments or arbitrary keyword arguments

This is usually used when writing [libraries](/intropy/arithmetic#modules) because we can make a general-purpose function that determines its behavior on the fly.

# Higher-Order Functions

You already know that functions can be passed arguments to change what they do. Functions can also be passed other functions as arguments. 
A function that takes another function as its argument is called a **higher-order** function. 

Higher-order functions are primarily useful when you want to reuse code. 
For example, if you had several functions to implement some tasks:
- Bake a cake
- Bake a pie
- Bake cookies

Pseudocode for these tasks might look like this:
```python
def bake_cake():
    preheat_oven()
    collect_ingredients()
    mix_batter()
    pour_into_tray()
    bake()
```
```python
def bake_pie():
    preheat_oven()
    collect_ingredients()
    make_crust()
    mix_batter()
    assemble()
    bake()
```
```python
def bake_cookies():
    preheat_oven()
    collect_ingredients()
    mix_batter()
    put_on_tray()
    bake()
```
Notice that these functions all have similar features - such as `preheat_oven()` or `collect_ingredients()`. Instead of writing code for each of these every time, we can define one `bake()` function that receives a parameter for a function - that function can be the specific steps of whatever we want to bake. For example:
```python
def make_cake():
      # Steps
def make_pie():
      # Steps
def make_cookies():
      # Steps

def bake(make_food):
    preheat_oven()
    collect_ingredients()
    make_food()
    bake()
```
This makes it so that instead of writing the same steps for different functions, we can *pass another function* to our higher-order function to make it change its task. 

But that example was abstract: we can implement another example with code!

Consider the following functions, which do similar things:

```python
def sum(nums):
    total = 0
    for num in nums:
      total += num
    return total
 ```
 
```python
def sum_squared(nums):
    total = 0
    for num in nums:
      total += num**2
    return total
 ```
 
 ```python
def sum_cubed(nums):
    total = 0
    for num in nums:
      total += num**3
    return total
 ```
 
 Instead of writing different functions for this, we can just write a higher-order function:
 ```python
def squared(num):
    return num**2
def cubed(num):
    return num**3
def sum_power(nums, power):
    total = 0
    for num in nums:
      total += power(num)
    return total
print(sum_power([1, 2, 3, 4], squared))
print(sum_power([1, 2, 3, 4], cubed))

>>> 30
>>> 100
   ```

While you can implement your own higher-order functions, there are many useful higher-order functions that you should know: 

## `map()` 

`map()` takes a function and an iterable as its parameters. Then, it applies that function to each value in the iterable.
```python
map(function, iterable)
```
For example, let's say you want to cast this list:
```python
lst = ["1", "2", "3", "4", "5"]
```

into integers. 

Your current method would be to write
```python
[int(l) for l in lst]
```
But `map()` is more efficient and easier to read:
```python
list(map(int, lst))
```

Remember that when you use `map()`, you must cast it back into another data type, since `map()` returns a map object. 

## `filter()`

Another useful function is `filter()`. Filter has the same syntax as `map()`:
```python
filter(function, iterable)
```
`filter()` inputs each value of the iterable into the function. If the function returns `True`, the value will be left in. If it returns `False`, it will be filtered out. 
For example:
```python
def vowel(c):
    letters = ['a', 'e', 'i', 'o', 'u']
    if variable in letters:
        return True
    else:
        return False
```
```python
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
print(list(filter(vowel, alphabet)))
```
Which eliminates all the values that are not vowels, since they return `False`. 

## `reduce()`

`reduce()` has the same syntax, but requires the `functools` module to be imported:
```python
import functools
functools.reduce(function, iterable)
```
The `reduce()` function also does the function on each value of the iterable, but its method is slightly different. First, `reduce` performs `function` on the first two values of the iterable. Then, with the result, it performs `function` on the result and the third value, going through each value of the iterable one at a time. 
```python
from functools import reduce 
lst = [1,2,3,4,5,6]
def fact(x,y):
 	  return x*y
print(reduce(fact,lst))
 
>>> 720
```

# Lambda Functions

Lambda functions are small and anonymous(they have no name). The syntax to define one looks like this:
```python
lambda arguments: expression
```
Lambda functions can only have one expression. A simple example of a lambda would be
```python
x = lambda a, b, c: a + b + c

print(x(1, 2, 3))

>>> 6
```
Lambdas are typically used for two purposes: passing small functions to higher-order functions, and for small use in your code. 

Consider the following example:
```python
def double(n):
    return n * 2
lst = [1, 2, 3, 4]
doubled = list(map(double, lst))
```
Which simply doubles the list. With a lambda, we can write
```python
lst = [1, 2, 3, 4]
doubled = list(map(lambda n: n * 2, lst))
```
Which accomplishes the same effect. 

# Operator Overloading

## `__str__`

Classes can have a `__str__` method, which is automatically called when the class is evaluated as a string (for example, in `print()` and when typecasted using `str()`:

```python
class Fraction:
    def __init__(self, numerator, denominator):
        # Code
    def __str__(self):
        return f"{numerator} / {denominator}"

frac = Fraction(1, 2)
print(frac)

>>> 1 / 2
```

### `__repr__`

The `__repr__` function is similar to `print()`, except it tells Python what to do when evaluating expressions inside a live console (like the "Console" tab in repl.it)

## `__call__`

Classes can also have `__call__` methods, which are automatically called when the class is called like a function:

```python
class Fraction:
    def __init__(self, numerator, denominator):
        # Code
    def __str__(self):
        return f"{numerator} / {denominator}"
    def __call__(self):
        return numerator / denominator
        
frac = Fraction(1, 2)
print(frac())

>>> 0.5
```
