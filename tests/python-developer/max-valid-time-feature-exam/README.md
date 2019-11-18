# Find Maximum Valid Time

## Problem

Given four digits find the maximum valid time that can be displayed on a digital clock(24 hours format) using those digits. If it's not possible return ```"NOT POSSIBLE```.

Provide your solution in `lib.py`:

```python
def max_valid_time(A, B, C, D):
    pass
```

### Test cases

1. ```max_valid_time(1, 9, 4, 5)``` should return ```"19:54"```.
2. ```max_valid_time(1, 8, 3, 2)``` should return ```"23:18"```.
3. ```max_valid_time(9, 9, 4, 5)``` should return ```"NOT POSSIBLE"```.
4. ```max_valid_time(6, 9, 8, 5)``` should return ```"NOT POSSIBLE"```.

### Testing

1. Install tests requirements

    ```
    $ pip install -r requirements/test.txt
    ```

2. Run test cases

    ```
    $ python -m unittest discover
    ```

3. Check test coverage

    ```
    $ py.test --cov=lib
    ```

### Notes

Please use your own solution. We'll know if you cheated.
