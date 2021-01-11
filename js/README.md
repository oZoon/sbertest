# Check skill level by project TODO based on ReactJS

## Dependencies

* node.js
* webpack
* react
* redux

## Installation

```
git clone https://github.com/oZoon/sber-js.git
cd sbertest
cd js
npm i
```

## Scripts
```
npm run devserv (development)
npm run prd (production)
```

---

## ChangeLog

### version 1.0.1

> works:
- new todo
- delete todo
- collapse/expand todo
- detail todo
- edit todo name
- edit task name
- delete task
- check/uncheck task
- new task

Each item can be configured to confirm / direct action, the settings are in ./src/js/lib/constants.js

SETTINGS_NEW_TODO_CONFIRM = true;
SETTINGS_EDIT_TODO_CONFIRM = true;
SETTINGS_DELETE_TODO_CONFIRM = true;
SETTINGS_TASK_DELETE_CONFIRM = true;
SETTINGS_TASK_EDIT_CONFIRM = true;
SETTINGS_TASK_CHECK_CONFIRM = true;
SETTINGS_NEW_TASK_CONFIRM = true;

By default all items require confirm action, see above (all constants are true: bool)
---

Production version is ready to use, open 'build' folder and run index.html
