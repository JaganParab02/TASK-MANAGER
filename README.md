# Task Manager Application
A simple full-stack Task Manager application built using:

- Backend: Python (Flask)
- Frontend: React + Vite
- Database: In-memory storage (no real database)

Features
```markdown
- Add a new task (title + description)
- View all tasks
- Separate pending and completed tasks
- Mark a task as completed
- Confirmation dialog before completing a task
- Clean and modern UI using normal CSS

```
## Project Structure

```
task-manager/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│
└── frontend/
├── src/
├── package.json

```
How to Run the Project

Run Backend (Flask)

Go to backend folder

To Install Dependencies and run the backend
```
cd backend
pip install -r requirements.txt
python app.py

Backend will run on: [http://127.0.0.1:5000](http://127.0.0.1:5000)

### Run Frontend (React + Vite)
```
Go to frontend folder:
```
cd frontend

```
Install dependencies:
```
npm install
```
Start development server:

```
npm run dev
```
Frontend will run on: 

```
[http://localhost:5173](http://localhost:5173)
```
 
## API Endpoints
```
| Method | Endpoint | Description |
|--------|----------|------------|
| POST   | /tasks | Add a new task |
| GET    | /tasks | Get all tasks |
| PUT    | /tasks/:id/complete | Mark task as completed |

```
## Approach
```
- Used Flask for simple and beginner-friendly REST API development.
- Stored tasks in memory using a list.
- Used React `useState` and `useEffect` for state management.
- Used Fetch API to connect frontend with backend.
