# API Endpoints

+-----------------------+--------------------------------------------------------+
| Route                 | Description                                            |
+-----------------------+--------------------------------------------------------+
| POST /api/tasks       | Create a new task                                      |
|                       | Request Body: {                                        |
|                       |   "title": "Task title",                               |
|                       |   "description": "Task description",                   |
|                       |   "status": "pending",                                 |
|                       |   "due_date": "2025-04-30T12:00:00"                    |
|                       | }                                                      |
|                       | Response: {                                            |
|                       |   "id": "task_id",                                     |
|                       |   "title": "Task title",                               |
|                       |   "description": "Task description",                   |
|                       |   "status": "pending",                                 |
|                       |   "due_date": "2025-04-30T12:00:00"                    |
|                       | }                                                      |
+-----------------------+--------------------------------------------------------+
| GET /api/tasks        | Get all tasks                                          |
|                       | Response: [{                                           |
|                       |   "id": "task_id",                                     |
|                       |   "title": "Task title",                               |
|                       |   "description": "Task description",                   |
|                       |   "status": "pending",                                 |
|                       |   "due_date": "2025-04-30T12:00:00"                    |
|                       | }, ...]                                                |
+-----------------------+--------------------------------------------------------+
| GET /api/tasks/:id    | Get a task by its ID                                   |
|                       | Response: {                                            |
|                       |   "id": "task_id",                                     |
|                       |   "title": "Task title",                               |
|                       |   "description": "Task description",                   |
|                       |   "status": "pending",                                 |
|                       |   "due_date": "2025-04-30T12:00:00"                    |
|                       | }                                                      |
+-----------------------+--------------------------------------------------------+
| PUT /api/tasks/:id/status | Update the status of a task                         |
|                         | Request Body: {                                       |
|                         |   "status": "in-progress"                             |
|                         | }                                                     |
|                         | Response: {                                           |
|                         |   "id": "task_id",                                    |
|                         |   "title": "Task title",                              |
|                         |   "description": "Task description",                  |
|                         |   "status": "in-progress",                            |
|                         |   "due_date": "2025-04-30T12:00:00"                   |
|                         | }                                                     |
+-----------------------+--------------------------------------------------------+
| DELETE /api/tasks/:id  | Delete a task by its ID                                |
|                        | Response: {                                            |
|                        |   "message": "Task deleted"                            |
|                        | }                                                      |
+-----------------------+--------------------------------------------------------+
