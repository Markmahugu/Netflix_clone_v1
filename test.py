import math

def calculate_circumference(radius):
  """Calculates the circumference of a circle given its radius."""
  return 2 * math.pi * radius

radius = float(input("Enter the radius of the circle: "))  # Add parenthesis for input()
print("The circumference of the circle is", calculate_circumference(radius))
