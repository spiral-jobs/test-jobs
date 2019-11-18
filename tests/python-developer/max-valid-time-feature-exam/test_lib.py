#!/usr/bin/env python

import unittest

from lib import max_valid_time

class TestFourDigit(unittest.TestCase):
    def test_1832(self):
        self.assertEqual("23:18", max_valid_time(1, 8, 3, 2))

    def test_1945(self):
        self.assertEqual("19:54", max_valid_time(1, 9, 4, 5))

    def test_9945(self):
        self.assertEqual("NOT POSSIBLE", max_valid_time(9, 9, 4, 5))

    def test_6985(self):
        self.assertEqual("NOT POSSIBLE", max_valid_time(6, 9, 8, 5))

    def test_0940(self):
        self.assertEqual("09:40", max_valid_time(0, 9, 4, 0))

    def test_0909(self):
        self.assertEqual("09:09", max_valid_time(0, 9, 9, 0))

if __name__ == '__main__':
    unittest.main()