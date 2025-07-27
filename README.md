# Face Recognition and Smart Attendance System

A Python-based face recognition system that automates attendance recording using real-time face detection and recognition.

## 📌 Features

- Real-time face detection using Haar Cascade Classifier
- Face recognition and matching using OpenCV
- Attendance logging with date and time
- Face data serialization with Pickle
- Easy-to-use terminal interface

## 🛠 Tech Stack

- **Language**: Python
- **Libraries**:
  - OpenCV
  - Pickle
  - NumPy (for array handling)
  - Datetime (for timestamping attendance)

## 🎯 How It Works

1. **Data Collection**: Captures facial images of users via webcam and stores them with user ID.
2. **Training**: Processes and serializes facial data using Pickle for future recognition.
3. **Recognition**: Uses Haar Cascade to detect faces and matches them against stored data.
4. **Attendance**: Automatically marks attendance in a CSV file with timestamp when a face is recognized.


## 🚀 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/FaceRecognitionAttendance.git
   cd FaceRecognitionAttendance
pip install opencv-python 
python train_model.py
python recognize_faces.py


#OUTPUT


