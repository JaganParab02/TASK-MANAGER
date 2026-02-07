from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = []
task_id = 1


# Add new task
@app.route("/tasks", methods=["POST"])
def add_task():
    global task_id
    data = request.json

    new_task = {
        "id": task_id,
        "title": data["title"],
        "description": data["description"],
        "completed": False
    }

    tasks.append(new_task)
    task_id += 1

    return jsonify(new_task)


# Get all tasks
@app.route("/tasks", methods=["GET"])
def get_tasks():
    status = request.args.get("status")

    if status == "completed":
        return jsonify([t for t in tasks if t["completed"]])
    elif status == "pending":
        return jsonify([t for t in tasks if not t["completed"]])

    return jsonify(tasks)


# Mark as completed
@app.route("/tasks/<int:id>/complete", methods=["PUT"])
def complete_task(id):
    for task in tasks:
        if task["id"] == id:
            task["completed"] = True
            return jsonify(task)

    return jsonify({"error": "Task not found"}), 404


if __name__ == "__main__":
    app.run(debug=True)
