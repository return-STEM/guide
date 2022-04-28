In this lesson, you will learn about data structures, which are just ways of organizing data. You've already learned a couple of them, like lists. Now you will learn about other data structures: sets, tuples, and dictionaries. You will also learn about linked lists, a powerful non-contiguous data structure. These will help you improve the algorithms you write and help you model other types of data. 

Python has four fundemental data types:
1. List
2. Set
3. Tuple
4. Dictionary

You have already learned what lists are - now, you'll learn 3 similar data types, starting with sets. 

# Sets

Sets, like lists, are collections of objects. Unlike lists, they are *unordered*. You cannot access the elements of a set with the index operator because of this. Sets are useful for storing collections of data that do not need to be ordered, and should not have duplicates. 

This is because sets do not allow duplicates (no two items in a set will be the same). Our programs become more efficient by using sets, since they have less to check over. 

You can define a set like this:

```python
my_set = {1, 2, 3, 4, 5}
```

Instead of square brackets, we use curly braces `{}`. Additionally, you can cast lists into sets using the `set()` function:

```python
my_set = set([1, 2, 3, 4, 5])
```

In the [previous lesson](algorithmic-thinking.md), we went over an algorithm to find the duplicate elements in a list. Now, this program becomes more simple:

```python
def find_duplicates(vals):
  seen = set()
  duplicates = []
  for val in vals:
    if val in seen:
      duplicates.append(val)
    else:
      seen.add(val)
```

In this method, we take advantage of the fact that sets cannot have duplicate values. 

Additionally, you will find these two methods useful:

- `add()` adds a value to the set
- `clear()` clears the set
- `discard()` deletes a value from the set
- `len()` returns the length of the set

`set`s are also faster than lists for the `in` operation. If we only want to check **if** a certain value is in the set, that can be done in **constant time** O(1). If we used a list, this operation would be done in **linear time** O(n). 

```python
my_set = {"a", "b", "c", "d", "e", "f", "g"}
my_list = ["a", "b", "c", "d", "e", "f", "g"]
value = "f"

# Constant time O(1)
if value in my_set:
  print("found")
else:
  print("not found")

# Linear time O(n)
if value in my_list:
  print("found")
else:
  print("not found")
```

This can make a large difference if we need to check a value against a very large collection of values:

```python
common_words = {
  "the",
  # 5000 most common words in the dictionary
  # ...
}

word = input("Enter a word: ")
# Constant time (even though we have 5000 values!)
if word in common-words:
  print("This word is very common!")
else:
  print("You used an uncommon word!")
```

# Dictionaries

Dictionaries store values as `key`:`value` pairs. Unlike lists, which store values with a number representing its location, dictionaries use keys to represent each value. Additionally, dictionaries are ordered (in Python 3.6 and below, dictionaries are unordered) and do not allow duplicate values. 

You can define a dictionary like this:

```python
my_dict = {
  key1: val1
  key2: val2
  key3: val3
  etc. 
  }
```

This makes data organization much more intuitive than those with lists or other data types. We can organize a dictionary using keys that match their values. For example, instead of storing the capitals of countries using a list like this,

```python
capitals = ['Beijing', 'Washington DC', 'Paris']
```

We can write it as a dictionary:

```python
capitals = {
  'China': 'Beijing',
  'United States': 'Washington DC', 
  'France': 'Paris'
  }
```

Remember that you can keep each key:value pair on the same line, but by separating them it greatly increases the readability. 

Additionally, you can access each value of a dictionary using its key:

```python
capitals = {
  'China': 'Beijing',
  'United States': 'Washington DC', 
  'France': 'Paris'
  }

print(capitals['China'])

>>> Beijing
```

Here are some useful methods: 

- `.key()` returns a tuple of all keys in the dictionary
- `.values()` returns a tuple of all values in the dictionary
- `.items()` returns a tuple of key-value pairs, each paired inside a separate tuple inside the tuple.
- `.get()` returns the value of the specified key
- `.update()` is like the append of dictionaries. Takes a key:value parameter

# Tuples

Unlike the previous data types, tuples are unchangeable. Additionally, they are ordered, and **do** allow duplicate values. 
Tuples are written with round brackets:

```python
fruits = ("apple", "banana", "orange")
```

Tuples are mainly used because they are they are immutable and we can guarantee that the data will never change. Additionally, when you return multiple values in a function, like this:

```python
def foo():
  return a, b
```
The tuple `(a, b)` is returned as a value, automatically turned into one. 

# Linked Lists
Linked lists are collections of **nodes** that are chained together by **links**. Each node stores some data and a *next*. You can visualize a node like this:

![Node](data-structures/node.png)  

*next* points at the next node in the linked list. 

That's where the name comes from - each node is "linked" to the next, except for the last one (which is linked to `null`, or `None` in Python). 

Additionally, we call the first node the *head*. 

This is a linked list with 4 nodes:
![Linked List 1](data-structures/linked-list1.png)

## Implementation

Now that we've visualized what a linked list looks like, let's try implementing that in code. First, we'll define a class for `Node`. 

Node will have two variables, one that stores its value, and another that points towards the next node:

```python
#Declaration of a node
class Node:

  def __init__(self, val, next = None):
    # Value of the linked list
    self.val = val
    # Points to the next node
    self.next= next
```

Now let's link them together using a class called `LinkedList`:

```python
class LinkedList:

  def __init__(self):
    self.head = None
```

With these two classes, let's try to implement the first linked list shown as an example, first by defining the nodes with our `Node` class:

```python
e1 = Node('a')
e2 = Node('b')
e3 = Node('c')
e4 = Node('d')
```

But these nodes aren't really linked yet - let's link them together, starting with the head:

```python
linked_list = LinkedList()
linked_list.head = e1
e1.next = e2
e2.next = e3
e3.next = e4
e4.next = None
```

Each `next` points to the next node of the linked list, except for the last one - which points to `None` (literally nothing, since it's the end). 

But our `linked_list` class is pretty useless right now - it doesn't really do anything, except give the linked list a head. Let's implement a useful function, like one to print each value of the linked list. 

```python
class LinkedList:

  def __init__(self):
    self.head = None
    
  def print_list(self):
    print_val = self.head
    while print_val is not None:
      print(print_val.val)
      print_val = print_val.next
```

To implement our `print_list` function, first we start with initializing the value we want to print first to the head. Then, we'll use a loop that continues looping as long as the next value isn't `None` (the end of the list). With each iteration, we print out the value of the node, and then move onto the next node. 

Our final code looks like this: 

```python
class Node:

  def __init__(self, val, next = None):
    # Value of the linked list
    self.val = val
    # Points to the next node
    self.next= next

class LinkedList:

  def __init__(self):
    self.head = None
    
  def print_list(self):
    print_val = self.head
    while print_val is not None:
      print(print_val.val)
      print_val = print_val.next

linked_list = LinkedList()
e1 = Node('a')
e2 = Node('b')
e3 = Node('c')
e4 = Node('d')

linked_list.head = e1
e1.next = e2
e2.next = e3
e3.next = e4
e4.next = None
linked_list.print_list()
```

Now our linked list has some functionality. Let's explore some of the benefits of linked lists. 

# Why Linked Lists?

Linked lists act as a useful model to explain other real life structures, or even in software. Think of the browser you're using right now - you can use the back and forward buttons to navigate through the web pages that you've been through. That's implemented using a linked list - each node has a web address, and points to the one you previously entered. Or, for example, a picture viewer on your phone. 

Secondly, linked lists are more efficient in terms of memory. They are often used because they have constant time complexity of node insertion or deletion (O(1)) - which we'll look at in the next section. However, because each node must be checked every time to find one, a search algorithm would have a time complexity of O(n). 

# Extending our Linked List

## Inserting Nodes

One of the best parts of linked lists is that they are dynamic - we can add as many nodes as we want, when we want. However, 3 different functions are usually implemented for this, as there are different cases for each type of insertion. 

First, we can insert at the beginning of the linked list, moving the head value to the next node:

```python
class LinkedList:

  def __init__(self):
    self.head = None
    
  def print_list(self):
    print_val = self.head
    while print_val is not None:
      print(print_val.val)
      print_val = print_val.next
      
  def insert_beginning(self, new_data):
    new_node = Node(new_data)
    new_node.next = self.head
    self.head = new_node
```

First, we create a new node with the data given. Then, we set our new node to point towards the head of our linked list, and set our new node to the head of the linked list.

Notice that because there are only 3 instructions that are executed every time, this function has a time complexity of O(1), meaning it is constant for any input. 

But what about in the middle of the list? Our approach is slightly different:

```python
class LinkedList:

  def __init__(self):
    self.head = None
    
  def print_list(self):
    print_val = self.head
    while print_val is not None:
      print(print_val.val)
      print_val = print_val.next
      
  def insert_beginning(self, new_data):
    new_node = Node(new_data)
    new_node.next = self.head
    self.head = new_node
    
  def insert_middle(self, prev_node, new_data);
    new_node = Node(new_data)
    new_node.next = prev_node.next
    prev_node.next = new_node
 ```
 
In this method, our approach is similar, except we're using the node prior to the one we want to insert instead of `head`. First, we'll create a Node with the data given, and set it to point towards whatever the previous node was pointing to (the next node). Then, we'll make the previous node point towards the new node, so that it's in front of it. 

But our method changes a bit when we want to add a node at the *end* of the list:

```python
class LinkedList:

  def __init__(self):
    self.head = None
    
  def print_list(self):
    print_val = self.head
    while print_val is not None:
      print(print_val.val)
      print_val = print_val.next
      
  def insert_beginning(self, new_data):
    new_node = Node(new_data)
    new_node.next = self.head
    self.head = new_node
    
  def insert_middle(self, prev_node, new_data);
    new_node = Node(new_data)
    new_node.next = prev_node.next
    prev_node.next = new_node
    
  def insert_end(self, new_data):
    new_node = Node(new_data)
    last = self.head
    while last.next:
      last = last.next
    last.next = new_node
```

Like in the other methods, we'll create a new node first. Then, we need to find the end of the list, which is usually not explicitly defined like `head` is. So, we'll find it, by going through each node of the list. When `last.next` is `True`, it means that there's a node after `last`. However, if it is `False`, it means `last` is the final noe. Therefore, we will increment `last` till `last.next` is `False`, or we have found the end.

Once we've found the end, we can define the last node as our new one. 

## Deleting Nodes

Deleting nodes might not be split into multiple methods, but it *is* slightly more complex. Let's figure out what our method should do:
Let's say we have a node A with value `k` that should be deleted. 
1. Find the node with value `k`. 
2. Find the node right before `A`. 
3. Change the `next` of the node before `A` to point towards the node *after* `A`. 

This effectively removes the node from the linked list.

Let's try implementing that:


```python
class LinkedList:

  # Rest of class hidden for simplicity

  def delete(self, delete_val):
    temp = self.head # Create a temp variable to track nodes
    if temp.data == delete_val: # Check if the node is equal to the delete value
      self.head = temp.next
      temp = None
      return
    while temp is not None: # Check each node till the end of the list
      if temp.data == delete_val: # If we found it, continue to the rest of the program
        break
      prev = temp
      temp = temp.next # Increment the node
    if temp == None: # If the delete value was never found, return nothing
      return
    prev.next = temp.next  # Unlink the node
    temp = None
```

First, we'll check if the head has our value. If not, we'll go through each node, checking if it's equal to our delete value. Finally, we'll unlink the node that should be removed. 

Our final linked list class looks like this:

```python
class LinkedList:

  def __init__(self):
    self.head = None
    
  def print_list(self):
    print_val = self.head # Make the head of the list the first value to be printed

    while print_val is not None: # Loop till the linked list ends
      print(print_val.val)
      print_val = print_val.next # Increment the node
      
  def insert_beginning(self, new_data):
    new_node = Node(new_data) # Define a new node
    new_node.next = self.head # Make the new node point to head
    self.head = new_node # Replace the current head with our new node
    
  def insert_middle(self, prev_node, new_data);
    new_node = Node(new_data) # Define a new node
    new_node.next = prev_node.next # Make the new node point to the one before it
    prev_node.next = new_node # Make the previous node point towards the new one
    
  def insert_end(self, new_data):
    new_node = Node(new_data) # Define a new node
    last = self.head
    while last.next: # Search for the end
      last = last.next
    last.next = new_node # Set the end to the new node
    
    
  def delete(self, delete_val):
    temp = self.head # Create a temp variable to track nodes
    if temp.data == delete_val: # Check if the node is equal to the delete value
      self.head = temp.next
      temp = None
      return
    while temp is not None: # Check each node till the end of the list
      if temp.data == delete_val: # If we found it, continue to the rest of the program
        break
      prev = temp
      temp = temp.next # Increment the node
    if temp == None: # If the delete value was never found, return nothing
      return
    prev.next = temp.next  # Unlink the node
    temp = None
```