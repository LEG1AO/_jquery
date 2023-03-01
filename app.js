$(document).ready(function() {
    const $taskList = $("#task-list");
    const $numberedTaskList = $("#numbered-task-list");
    const $addTaskButton = $("#add-task");
    const $newTaskInput = $("#new-task");

    function addTask() {
        const taskName = $newTaskInput.val();
        if (taskName !== "") {
            const taskItem = $("<li>").text(taskName);
            $taskList.append(taskItem);

            const numberedTaskItem = $("<li>").text(taskName);
            $numberedTaskList.append(numberedTaskItem);

            $newTaskInput.val("");

            taskItem.click(function() {
                $(this).toggleClass("completed");
            });

            numberedTaskItem.click(function() {
                $(this).toggleClass("completed");
            });
        }
    }

    $addTaskButton.click(addTask);
});

