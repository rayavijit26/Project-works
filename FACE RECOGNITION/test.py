from sklearn.neighbors import KNeighborsClassifier
import cv2
import pickle
import numpy as np
import os
import csv
import time
from datetime import datetime
from win32com.client import Dispatch

def speak(str1):
    speak = Dispatch(("SAPI.SpVoice"))
    speak.Speak(str1)

# Initialize webcam
video = cv2.VideoCapture(0)
facedetect = cv2.CascadeClassifier('data/haarcascade_frontalface_default.xml')

# Load training data
with open('data/names.pkl', 'rb') as w:
    LABELS = pickle.load(w)
with open('data/faces_data.pkl', 'rb') as f:
    FACES = pickle.load(f)

print('Shape of Faces matrix --> ', FACES.shape)  # (num_samples, 1050)

# Train KNN model
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(FACES, LABELS)

# Load background image
imgBackground = cv2.imread("background2.png")

# Define CSV column names
COL_NAMES = ['NAME', 'TIME']

while True:
    ret, frame = video.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = facedetect.detectMultiScale(gray, 1.3, 5)

    for (x, y, w, h) in faces:
        crop_img = frame[y:y+h, x:x+w]  # Crop detected face
        gray_crop = cv2.cvtColor(crop_img, cv2.COLOR_BGR2GRAY)  # Convert to grayscale

        # Resize to match training data dimensions (35x30 = 1050 features)
        resized_img = cv2.resize(gray_crop, (35, 30)).flatten().reshape(1, -1)

        # Predict the person's name
        output = knn.predict(resized_img)

        # Record timestamp
        ts = time.time()
        date = datetime.fromtimestamp(ts).strftime("%d-%m-%Y")
        timestamp = datetime.fromtimestamp(ts).strftime("%H:%M:%S")
        exist = os.path.isfile("Attendance/Attendance_" + date + ".csv")

        # Draw bounding box and name on frame
        cv2.rectangle(frame, (x, y), (x+w, y+h), (50, 50, 255), 2)
        cv2.rectangle(frame, (x, y-40), (x+w, y), (50, 50, 255), -1)
        cv2.putText(frame, str(output[0]), (x, y-15), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 255, 255), 1)

        # Prepare attendance data
        attendance = [str(output[0]), str(timestamp)]

    # Display the frame on background
    imgBackground[162:162 + 480, 55:55 + 640] = frame
    cv2.imshow("Frame", imgBackground)

    # Check for keyboard input
    k = cv2.waitKey(1)

    if k == ord('o'):  # Save attendance when 'o' is pressed
        speak("Attendance Taken..")
        time.sleep(1)

        if exist:
            with open("Attendance/Attendance_" + date + ".csv", "a") as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow(attendance)
        else:
            with open("Attendance/Attendance_" + date + ".csv", "a") as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow(COL_NAMES)
                writer.writerow(attendance)

    if k == ord('q'):  # Quit program when 'q' is pressed
        break

# Release resources
video.release()
cv2.destroyAllWindows()
