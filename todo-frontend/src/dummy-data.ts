let todoLists = [
  {
    "todoListId": 1,
    "todoListName": "Liste1",
    "todoListDesc": "Bare lige en tester nummer 1",
    "todoListDeleted": false,
    "todoTasks": null
  },
  {
    "todoListId": 2,
    "todoListName": "Liste2",
    "todoListDesc": "Bare lige en tester nummer 2",
    "todoListDeleted": false,
    "todoTasks": null
  },
  {
    "todoListId": 3,
    "todoListName": "Liste1",
    "todoListDesc": "Det her er liste 1",
    "todoListDeleted": false,
    "todoTasks": null
  },
  {
    "todoListId": 4,
    "todoListName": "ny",
    "todoListDesc": "ny",
    "todoListDeleted": true,
    "todoTasks": null
  },
  {
    "todoListId": 5,
    "todoListName": "Liste1",
    "todoListDesc": "Det her er liste 1",
    "todoListDeleted": false,
    "todoTasks": null
  },
  {
    "todoListId": 6,
    "todoListName": "Liste2",
    "todoListDesc": "Det her er liste 2",
    "todoListDeleted": false,
    "todoTasks": null
  },
  {
    "todoListId": 7,
    "todoListName": "Liste1",
    "todoListDesc": "Det her er liste 1",
    "todoListDeleted": false,
    "todoTasks": null
  },
  {
    "todoListId": 8,
    "todoListName": "Liste2",
    "todoListDesc": "Det her er liste 2",
    "todoListDeleted": false,
    "todoTasks": null
  },
  {
    "todoListId": 9,
    "todoListName": "Liste1",
    "todoListDesc": "Det her er liste 1",
    "todoListDeleted": false,
    "todoTasks": null
  },
  {
    "todoListId": 10,
    "todoListName": "Liste2",
    "todoListDesc": "Det her er liste 2",
    "todoListDeleted": false,
    "todoTasks": null
  },
  {
    "todoListId": 11,
    "todoListName": "Liste1",
    "todoListDesc": "Det her er liste 1",
    "todoListDeleted": false,
    "todoTasks": null
  },
  {
    "todoListId": 12,
    "todoListName": "Liste2",
    "todoListDesc": "Det her er liste 2",
    "todoListDeleted": false,
    "todoTasks": null
  },
  {
    "todoListId": 13,
    "todoListName": "Post test",
    "todoListDesc": "tester af post",
    "todoListDeleted": false,
    "todoTasks": null
  },
  {
    "todoListId": 14,
    "todoListName": "string",
    "todoListDesc": "string",
    "todoListDeleted": true,
    "todoTasks": null
  },
  {
    "todoListId": 15,
    "todoListName": "string",
    "todoListDesc": "string",
    "todoListDeleted": true,
    "todoTasks": null
  },
  {
    "todoListId": 16,
    "todoListName": "string",
    "todoListDesc": "string",
    "todoListDeleted": true,
    "todoTasks": null
  },
  {
    "todoListId": 17,
    "todoListName": "string",
    "todoListDesc": "string",
    "todoListDeleted": true,
    "todoTasks": null
  }
]

  let tasks = [
    {
      "todoTaskId": 2,
      "taskName": "Task2",
      "taskDesc": "Beskrivelse task 2",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-08T15:31:13.0359664",
      "taskCompletionTime": null,
      "todoListId": 3,
      "subTasks": null
    },
    {
      "todoTaskId": 3,
      "taskName": "Task3",
      "taskDesc": "Beskrivelse task 3",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-07T15:31:13.0359669",
      "taskCompletionTime": null,
      "todoListId": 3,
      "subTasks": null
    },
    {
      "todoTaskId": 4,
      "taskName": "Task4",
      "taskDesc": "Beskrivelse task 4",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-12T15:31:13.035968",
      "taskCompletionTime": null,
      "todoListId": 4,
      "subTasks": null
    },
    {
      "todoTaskId": 6,
      "taskName": "Task6",
      "taskDesc": "Beskrivelse task 6",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-06T15:31:13.0359693",
      "taskCompletionTime": null,
      "todoListId": 4,
      "subTasks": null
    },
    {
      "todoTaskId": 7,
      "taskName": "Task1",
      "taskDesc": "Beskrivelse task 1",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-09T15:31:35.0995192",
      "taskCompletionTime": null,
      "todoListId": 5,
      "subTasks": null
    },
    {
      "todoTaskId": 8,
      "taskName": "Task2",
      "taskDesc": "Beskrivelse task 2",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-08T15:31:35.0995254",
      "taskCompletionTime": null,
      "todoListId": 5,
      "subTasks": null
    },
    {
      "todoTaskId": 9,
      "taskName": "Task3",
      "taskDesc": "Beskrivelse task 3",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-07T15:31:35.0995257",
      "taskCompletionTime": null,
      "todoListId": 5,
      "subTasks": null
    },
    {
      "todoTaskId": 10,
      "taskName": "Task4",
      "taskDesc": "Beskrivelse task 4",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-12T15:31:35.099526",
      "taskCompletionTime": null,
      "todoListId": 6,
      "subTasks": null
    },
    {
      "todoTaskId": 11,
      "taskName": "Task5",
      "taskDesc": "Beskrivelse task 5",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-11T15:31:35.0995273",
      "taskCompletionTime": null,
      "todoListId": 6,
      "subTasks": null
    },
    {
      "todoTaskId": 12,
      "taskName": "Task6",
      "taskDesc": "Beskrivelse task 6",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-06T15:31:35.0995276",
      "taskCompletionTime": null,
      "todoListId": 6,
      "subTasks": null
    },
    {
      "todoTaskId": 13,
      "taskName": "Task1",
      "taskDesc": "Beskrivelse task 1",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-10T08:52:21.7438806",
      "taskCompletionTime": null,
      "todoListId": 7,
      "subTasks": null
    },
    {
      "todoTaskId": 14,
      "taskName": "Task2",
      "taskDesc": "Beskrivelse task 2",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-09T08:52:21.7439211",
      "taskCompletionTime": null,
      "todoListId": 7,
      "subTasks": null
    },
    {
      "todoTaskId": 15,
      "taskName": "Task3",
      "taskDesc": "Beskrivelse task 3",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-08T08:52:21.7439218",
      "taskCompletionTime": null,
      "todoListId": 7,
      "subTasks": null
    },
    {
      "todoTaskId": 16,
      "taskName": "Task4",
      "taskDesc": "Beskrivelse task 4",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-13T08:52:21.7439221",
      "taskCompletionTime": null,
      "todoListId": 8,
      "subTasks": null
    },
    {
      "todoTaskId": 17,
      "taskName": "Task5",
      "taskDesc": "Beskrivelse task 5",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-12T08:52:21.7439224",
      "taskCompletionTime": null,
      "todoListId": 8,
      "subTasks": null
    },
    {
      "todoTaskId": 18,
      "taskName": "Task6",
      "taskDesc": "Beskrivelse task 6",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-07T08:52:21.7439232",
      "taskCompletionTime": null,
      "todoListId": 8,
      "subTasks": null
    },
    {
      "todoTaskId": 19,
      "taskName": "Task1",
      "taskDesc": "Beskrivelse task 1",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-10T08:52:26.3086926",
      "taskCompletionTime": null,
      "todoListId": 9,
      "subTasks": null
    },
    {
      "todoTaskId": 20,
      "taskName": "Task2",
      "taskDesc": "Beskrivelse task 2",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-09T08:52:26.3086991",
      "taskCompletionTime": null,
      "todoListId": 9,
      "subTasks": null
    },
    {
      "todoTaskId": 21,
      "taskName": "Task3",
      "taskDesc": "Beskrivelse task 3",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-08T08:52:26.3086998",
      "taskCompletionTime": null,
      "todoListId": 9,
      "subTasks": null
    },
    {
      "todoTaskId": 22,
      "taskName": "Task4",
      "taskDesc": "Beskrivelse task 4",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-13T08:52:26.3087004",
      "taskCompletionTime": null,
      "todoListId": 10,
      "subTasks": null
    },
    {
      "todoTaskId": 23,
      "taskName": "Task5",
      "taskDesc": "Beskrivelse task 5",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-12T08:52:26.3087023",
      "taskCompletionTime": null,
      "todoListId": 10,
      "subTasks": null
    },
    {
      "todoTaskId": 24,
      "taskName": "Task6",
      "taskDesc": "Beskrivelse task 6",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-07T08:52:26.308703",
      "taskCompletionTime": null,
      "todoListId": 10,
      "subTasks": null
    },
    {
      "todoTaskId": 25,
      "taskName": "Task1",
      "taskDesc": "Beskrivelse task 1",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-10T09:45:42.4195461",
      "taskCompletionTime": null,
      "todoListId": 11,
      "subTasks": null
    },
    {
      "todoTaskId": 26,
      "taskName": "Task2",
      "taskDesc": "Beskrivelse task 2",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-09T09:45:42.4195842",
      "taskCompletionTime": null,
      "todoListId": 11,
      "subTasks": null
    },
    {
      "todoTaskId": 27,
      "taskName": "Task3",
      "taskDesc": "Beskrivelse task 3",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-08T09:45:42.4195849",
      "taskCompletionTime": null,
      "todoListId": 11,
      "subTasks": null
    },
    {
      "todoTaskId": 28,
      "taskName": "Task4",
      "taskDesc": "Beskrivelse task 4",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-13T09:45:42.4195852",
      "taskCompletionTime": null,
      "todoListId": 12,
      "subTasks": null
    },
    {
      "todoTaskId": 29,
      "taskName": "Task5",
      "taskDesc": "Beskrivelse task 5",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-12T09:45:42.4195855",
      "taskCompletionTime": null,
      "todoListId": 12,
      "subTasks": null
    },
    {
      "todoTaskId": 30,
      "taskName": "Task6",
      "taskDesc": "Beskrivelse task 6",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-07T09:45:42.4195895",
      "taskCompletionTime": null,
      "todoListId": 12,
      "subTasks": null
    },
    {
      "todoTaskId": 31,
      "taskName": "lur",
      "taskDesc": "sovetime",
      "taskComplete": true,
      "taskDeleted": true,
      "taskDeadline": "2022-09-06T08:06:15.843",
      "taskCompletionTime": "2022-09-06T08:06:15.843",
      "todoListId": 14,
      "subTasks": null
    },
    {
      "todoTaskId": 32,
      "taskName": "string",
      "taskDesc": "string",
      "taskComplete": true,
      "taskDeleted": true,
      "taskDeadline": "2022-09-06T12:28:53.885",
      "taskCompletionTime": "2022-09-06T12:28:53.885",
      "todoListId": 15,
      "subTasks": null
    },
    {
      "todoTaskId": 33,
      "taskName": "string",
      "taskDesc": "string",
      "taskComplete": true,
      "taskDeleted": true,
      "taskDeadline": "2022-09-06T12:31:08.876",
      "taskCompletionTime": "2022-09-06T12:31:08.876",
      "todoListId": 16,
      "subTasks": null
    },
    {
      "todoTaskId": 34,
      "taskName": "string",
      "taskDesc": "string",
      "taskComplete": true,
      "taskDeleted": true,
      "taskDeadline": "2022-09-06T12:31:08.876",
      "taskCompletionTime": "2022-09-06T12:31:08.876",
      "todoListId": 17,
      "subTasks": null
    }
  ]

  let subTasks = [
    {
      "subTaskId": 3,
      "subName": "SubTask3",
      "subDesc": "Beskrivelse subtask 3",
      "subComplete": false,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 2
    },
    {
      "subTaskId": 4,
      "subName": "SubTask4",
      "subDesc": "Beskrivelse subtask 4",
      "subComplete": true,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 2
    },
    {
      "subTaskId": 5,
      "subName": "SubTask1",
      "subDesc": "Beskrivelse subtask 1",
      "subComplete": false,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 7
    },
    {
      "subTaskId": 6,
      "subName": "SubTask2",
      "subDesc": "Beskrivelse subtask 2",
      "subComplete": true,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 7
    },
    {
      "subTaskId": 7,
      "subName": "SubTask3",
      "subDesc": "Beskrivelse subtask 3",
      "subComplete": false,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 8
    },
    {
      "subTaskId": 8,
      "subName": "SubTask4",
      "subDesc": "Beskrivelse subtask 4",
      "subComplete": true,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 8
    },
    {
      "subTaskId": 9,
      "subName": "SubTask1",
      "subDesc": "Beskrivelse subtask 1",
      "subComplete": false,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 13
    },
    {
      "subTaskId": 10,
      "subName": "SubTask2",
      "subDesc": "Beskrivelse subtask 2",
      "subComplete": true,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 13
    },
    {
      "subTaskId": 11,
      "subName": "SubTask3",
      "subDesc": "Beskrivelse subtask 3",
      "subComplete": false,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 14
    },
    {
      "subTaskId": 12,
      "subName": "SubTask4",
      "subDesc": "Beskrivelse subtask 4",
      "subComplete": true,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 14
    },
    {
      "subTaskId": 13,
      "subName": "SubTask1",
      "subDesc": "Beskrivelse subtask 1",
      "subComplete": false,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 19
    },
    {
      "subTaskId": 14,
      "subName": "SubTask2",
      "subDesc": "Beskrivelse subtask 2",
      "subComplete": true,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 19
    },
    {
      "subTaskId": 15,
      "subName": "SubTask3",
      "subDesc": "Beskrivelse subtask 3",
      "subComplete": false,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 20
    },
    {
      "subTaskId": 16,
      "subName": "SubTask4",
      "subDesc": "Beskrivelse subtask 4",
      "subComplete": true,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 20
    },
    {
      "subTaskId": 17,
      "subName": "SubTask1",
      "subDesc": "Beskrivelse subtask 1",
      "subComplete": false,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 25
    },
    {
      "subTaskId": 18,
      "subName": "SubTask2",
      "subDesc": "Beskrivelse subtask 2",
      "subComplete": true,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 25
    },
    {
      "subTaskId": 19,
      "subName": "SubTask3",
      "subDesc": "Beskrivelse subtask 3",
      "subComplete": false,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 26
    },
    {
      "subTaskId": 20,
      "subName": "SubTask4",
      "subDesc": "Beskrivelse subtask 4",
      "subComplete": true,
      "subDeleted": false,
      "subDeadline": null,
      "subCompletionTime": null,
      "todoTaskId": 26
    }
  ]

  export function getTodoListsDummy(){
    return todoLists;
  }

  export function getTasksDummy() {
    return tasks;
  }

  export function getSubTasksDummy() {
    return subTasks;
  }