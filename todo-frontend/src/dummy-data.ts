let todoLists = [
    {
      "todoListId": 1,
      "todoListName": "Liste1",
      "todoListDesc": "Bare lige en tester nummer 1",
      "todoListDeleted": false
    },
    {
      "todoListId": 2,
      "todoListName": "Liste2",
      "todoListDesc": "Bare lige en tester nummer 2",
      "todoListDeleted": false
    },
    {
      "todoListId": 3,
      "todoListName": "Liste1",
      "todoListDesc": "Det her er liste 1",
      "todoListDeleted": false
    },
    {
      "todoListId": 4,
      "todoListName": "ny",
      "todoListDesc": "ny",
      "todoListDeleted": true
    },
    {
      "todoListId": 5,
      "todoListName": "Liste1",
      "todoListDesc": "Det her er liste 1",
      "todoListDeleted": false
    },
    {
      "todoListId": 6,
      "todoListName": "Liste2",
      "todoListDesc": "Det her er liste 2",
      "todoListDeleted": false
    },
    {
      "todoListId": 7,
      "todoListName": "Liste1",
      "todoListDesc": "Det her er liste 1",
      "todoListDeleted": false
    },
    {
      "todoListId": 8,
      "todoListName": "Liste2",
      "todoListDesc": "Det her er liste 2",
      "todoListDeleted": false
    },
    {
      "todoListId": 9,
      "todoListName": "Liste1",
      "todoListDesc": "Det her er liste 1",
      "todoListDeleted": false
    },
    {
      "todoListId": 10,
      "todoListName": "Liste2",
      "todoListDesc": "Det her er liste 2",
      "todoListDeleted": false
    },
    {
      "todoListId": 11,
      "todoListName": "Liste1",
      "todoListDesc": "Det her er liste 1",
      "todoListDeleted": false
    },
    {
      "todoListId": 12,
      "todoListName": "Liste2",
      "todoListDesc": "Det her er liste 2",
      "todoListDeleted": false
    },
    {
      "todoListId": 13,
      "todoListName": "Post test",
      "todoListDesc": "tester af post",
      "todoListDeleted": false
    },
    {
      "todoListId": 14,
      "todoListName": "string",
      "todoListDesc": "string",
      "todoListDeleted": true
    },
    {
      "todoListId": 15,
      "todoListName": "string",
      "todoListDesc": "string",
      "todoListDeleted": true
    },
    {
      "todoListId": 16,
      "todoListName": "string",
      "todoListDesc": "string",
      "todoListDeleted": true
    },
    {
      "todoListId": 17,
      "todoListName": "string",
      "todoListDesc": "string",
      "todoListDeleted": true
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
      "todoListId": 3
    },
    {
      "todoTaskId": 3,
      "taskName": "Task3",
      "taskDesc": "Beskrivelse task 3",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-07T15:31:13.0359669",
      "taskCompletionTime": null,
      "todoListId": 3
    },
    {
      "todoTaskId": 4,
      "taskName": "Task4",
      "taskDesc": "Beskrivelse task 4",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-12T15:31:13.035968",
      "taskCompletionTime": null,
      "todoListId": 4
    },
    {
      "todoTaskId": 6,
      "taskName": "Task6",
      "taskDesc": "Beskrivelse task 6",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-06T15:31:13.0359693",
      "taskCompletionTime": null,
      "todoListId": 4
    },
    {
      "todoTaskId": 7,
      "taskName": "Task1",
      "taskDesc": "Beskrivelse task 1",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-09T15:31:35.0995192",
      "taskCompletionTime": null,
      "todoListId": 5
    },
    {
      "todoTaskId": 8,
      "taskName": "Task2",
      "taskDesc": "Beskrivelse task 2",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-08T15:31:35.0995254",
      "taskCompletionTime": null,
      "todoListId": 5
    },
    {
      "todoTaskId": 9,
      "taskName": "Task3",
      "taskDesc": "Beskrivelse task 3",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-07T15:31:35.0995257",
      "taskCompletionTime": null,
      "todoListId": 5
    },
    {
      "todoTaskId": 10,
      "taskName": "Task4",
      "taskDesc": "Beskrivelse task 4",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-12T15:31:35.099526",
      "taskCompletionTime": null,
      "todoListId": 6
    },
    {
      "todoTaskId": 11,
      "taskName": "Task5",
      "taskDesc": "Beskrivelse task 5",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-11T15:31:35.0995273",
      "taskCompletionTime": null,
      "todoListId": 6
    },
    {
      "todoTaskId": 12,
      "taskName": "Task6",
      "taskDesc": "Beskrivelse task 6",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-06T15:31:35.0995276",
      "taskCompletionTime": null,
      "todoListId": 6
    },
    {
      "todoTaskId": 13,
      "taskName": "Task1",
      "taskDesc": "Beskrivelse task 1",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-10T08:52:21.7438806",
      "taskCompletionTime": null,
      "todoListId": 7
    },
    {
      "todoTaskId": 14,
      "taskName": "Task2",
      "taskDesc": "Beskrivelse task 2",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-09T08:52:21.7439211",
      "taskCompletionTime": null,
      "todoListId": 7
    },
    {
      "todoTaskId": 15,
      "taskName": "Task3",
      "taskDesc": "Beskrivelse task 3",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-08T08:52:21.7439218",
      "taskCompletionTime": null,
      "todoListId": 7
    },
    {
      "todoTaskId": 16,
      "taskName": "Task4",
      "taskDesc": "Beskrivelse task 4",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-13T08:52:21.7439221",
      "taskCompletionTime": null,
      "todoListId": 8
    },
    {
      "todoTaskId": 17,
      "taskName": "Task5",
      "taskDesc": "Beskrivelse task 5",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-12T08:52:21.7439224",
      "taskCompletionTime": null,
      "todoListId": 8
    },
    {
      "todoTaskId": 18,
      "taskName": "Task6",
      "taskDesc": "Beskrivelse task 6",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-07T08:52:21.7439232",
      "taskCompletionTime": null,
      "todoListId": 8
    },
    {
      "todoTaskId": 19,
      "taskName": "Task1",
      "taskDesc": "Beskrivelse task 1",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-10T08:52:26.3086926",
      "taskCompletionTime": null,
      "todoListId": 9
    },
    {
      "todoTaskId": 20,
      "taskName": "Task2",
      "taskDesc": "Beskrivelse task 2",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-09T08:52:26.3086991",
      "taskCompletionTime": null,
      "todoListId": 9
    },
    {
      "todoTaskId": 21,
      "taskName": "Task3",
      "taskDesc": "Beskrivelse task 3",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-08T08:52:26.3086998",
      "taskCompletionTime": null,
      "todoListId": 9
    },
    {
      "todoTaskId": 22,
      "taskName": "Task4",
      "taskDesc": "Beskrivelse task 4",
      "taskComplete": false,
      "taskDeleted": false,
      "taskDeadline": "2022-09-13T08:52:26.3087004",
      "taskCompletionTime": null,
      "todoListId": 10
    }
  ]

  export function getTodoListsDummy(){
    return todoLists;
  }

  export function getTasksDummy() {
    return tasks;
  }