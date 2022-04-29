export default class DataManager {
  static myInstance = null;
  userId = "";

  users = [
    {
      id: "superman",
      name: "Clark Joseph Kent",
      username: "superman",
      password: "sup123",
      image: require("../assets/superman.jpg"),
    },
    {
      id: "wonderwoman",
      name: "Diana Prince",
      username: "wonderwoman",
      password: "won123",
      image: require("../assets/wonderwoman.jpg"),
    },
  ];

  memories = [
    {
      userId: "superman",
      memoryId: 1,
      title: "21st Birthday",
      date: "Tue Apr 19 2022",
      subtitle: "I had lots of fun on my Birthday!",
      image: require("../assets/cake.jpg"),
      category: "Me",
    },
    {
      userId: "superman",
      memoryId: 2,
      title: "Haircut",
      date: "Tue Apr 19 2022",
      subtitle: "Best haircut in a while",
      image: require("../assets/haircut.jpg"),
      category: "Friends",
    },
    {
      userId: "superman",
      memoryId: 3,
      title: "Eating out",
      date: "Tue Apr 19 2022",
      subtitle: "Food was amazing",
      image: require("../assets/food.jpg"),
      category: "Friends",
    },
    {
      userId: "wonderwoman",
      memoryId: 4,
      title: "Night out",
      date: "Tue Apr 19 2022",
      subtitle: "Went out to party",
      image: require("../assets/party.jpg"),
      category: "Friends",
    },
    {
      userId: "wonderwoman",
      memoryId: 5,
      title: "Home",
      date: "Tue Apr 19 2022",
      subtitle: "Doing math homework",
      image: require("../assets/homework.jpg"),
      category: "School",
    },
  ];
  

  categories = [
    {
      id: 1,
      title: "Me",
      subtitle: "My memories",
      iconName: "mother-heart",
    },
    {
      id: 2,
      title: "Family",
      subtitle: "Memories with family",
      iconName: "human-female-boy",
    },
    {
      id: 3,
      title: "Friends",
      subtitle: "Memories with friends",
      iconName: "account-group",
    },
    {
      id: 4,
      title: "School",
      subtitle: "Memories at school",
      iconName: "school",
    },
    {
      id: 5,
      title: "Sport",
      subtitle: "Memories of sports",
      iconName: "baseball-bat",
    },
    {
      id: 6,
      title: "Work",
      subtitle: "Memories at Work",
      iconName: "briefcase",
    },
    {
      id: 7,
      title: "All",
      subtitle: "All memories",
      iconName: "apps",
    },
  ];

  static getInstance() {
    if (DataManager.myInstance == null) {
      DataManager.myInstance = new DataManager();
    }
    return this.myInstance;
  }

  static removeInstance() {
    DataManager.myInstance = null;
  }

  getUserId() {
    return this.userId;
  }

  setUserId(userId) {
    this.userId = userId;
  }

  getMemories(userId, category) {
    if (category === "All") {
      return this.memories.filter((memory) => memory.userId === userId);
    } else {
      return this.memories.filter(
        (memory) => memory.userId === userId && memory.category === category
      );
    }
  }

  getMemoryNum(userId) {
    return this.memories.filter((memory) => memory.userId === userId).length;
  }

  getFreeMemoryId(userId) {
    let newMemories = this.memories.filter(
      (memory) => memory.userId === userId
    );
    newMemories.sort((a, b) => (a.id > b.id ? 1 : -1));
    return newMemories[0].memoryId + 1;
  }

  addMemory(memory) {
    this.memories.push(memory);
  }

  getCategories() {
    return this.categories;
  }

  getCategory(name) {
    return this.categories.filter((item) => item.title === name);
  }

  getUsers() {
    return this.users;
  }

  userExist(userId) {
    let users = this.users.filter((user) => user.id === userId);
    if (users.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  addUser(user) {
    this.users.push(user);
  }
}
