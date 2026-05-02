import cv2
import numpy as np
import os

# Create a sample image
img = np.zeros((100, 100, 3), dtype=np.uint8)
img[25:75, 25:75] = [255, 255, 255]

# Save the image
cv2.imwrite('test_image.png', img)

# Load the image
loaded_img = cv2.imread('test_image.png')

if loaded_img is not None:
    print("Image loaded successfully.")
    # Show the image (this won't work in a headless environment, but let's see if it fails)
    try:
        cv2.imshow('Test Image', loaded_img)
        cv2.waitKey(1000)
        cv2.destroyAllWindows()
        print("cv2.imshow worked.")
    except Exception as e:
        print(f"cv2.imshow failed: {e}")
else:
    print("Failed to load image.")

# Clean up
if os.path.exists('test_image.png'):
    os.remove('test_image.png')
