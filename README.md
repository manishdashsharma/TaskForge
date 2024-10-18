# TaskForge 🚀

**TaskForge** is a powerful, open-source project management and issue tracking tool designed to streamline workflows, enhance team collaboration, and drive productivity. Its user-friendly interface and customizable features empower teams to stay organized and achieve their project goals efficiently. 🎯

## Features 🌟

- **Task Management:** Effortlessly create, assign, and track tasks to keep your team on the same page. ✅
- **Customizable Workflows:** Tailor workflows to meet your team’s unique processes and needs. 🔧
- **Collaboration Tools:** Share updates, leave comments on tasks, and work together seamlessly. 🤝
- **Real-Time Notifications:** Stay in the loop with instant updates about task progress and project changes. 🔔
- **Advanced Reporting:** Generate detailed reports to monitor project progress and team performance. 📊

## Getting Started with TaskForge 🛠️

### Prerequisites 📋

Before you start, make sure you have the following:

- **Docker Installed:** TaskForge runs inside Docker containers, so ensure Docker is installed and running on your system. 🐳
  - You can check if Docker is running by using this command:
    ```bash
    docker info
    ```

- **Docker Images:** Ensure you have the required Docker images for TaskForge available.

### Starting TaskForge 🚦

You can start TaskForge interactively based on what components you need to run. Here's how:

1. **Make the Startup Script Executable:**

   First, give the `taskforge.sh` script execute permissions:

   ```bash
   chmod +x taskforge.sh
   ```

2. **Run the Interactive Menu:**

   To run TaskForge interactively, simply execute the script:

   ```bash
   ./taskforge.sh
   ```

   You'll then be prompted to choose which services to run:

   ```text
   Please select the service you want to run:
   1) All (This will remove all containers and images and start everything from scratch. NOTE: It will take time)
   2) Server (Only start the server)
   3) Client (Only start the client)
   4) Server & Client (Start both server and client)
   5) Exit
   Enter your choice [1-5]:
   ```

3. **Choose an Option:**

   - **Option 1:** Start **All** — This will clean up any existing TaskForge containers, images, and volumes, then build everything from scratch. (⚠️ This option will take time.)
   - **Option 2:** Start **only the server**.
   - **Option 3:** Start **only the client**.
   - **Option 4:** Start **both the server and client** without cleanup.
   - **Option 5:** **Exit** the script.

4. **Docker Commands:** If you want to manually start TaskForge without the script, you can run:
   ```bash
   docker-compose --env-file .env.development -f docker-compose.dev.yml up --build
   ```

### Docker Management Tips 📝

- **Backup Data:** Before running any cleanup operation, ensure you backup critical data. 💾
- **Check Logs for Errors:** If you face any issues during the setup or operation, you can check the Docker logs:
  ```bash
  docker logs <container_name>
  ```

### API Documentation 📄

To explore the TaskForge API, you can use the Postman collection provided. This will help you interact with the API endpoints seamlessly.

- **[TaskForge Postman Collection](https://documenter.getpostman.com/view/26372308/2sAXxMftGK)**

Make sure to import the collection into your Postman application to get started with testing and interacting with the TaskForge API.

## Contributing 🤗

We welcome contributions! Please fork the repository and submit a pull request for any enhancements or bug fixes.

:raised_hands: **Contributors:**
- [Ayesha Khalil](https://github.com/Ayesha-khalil-432) 💻
- [Fagbayibo](https://github.com/Fagbayibo) 🌐
- [Archit Verma](https://github.com/architverma001) 📅
- [Abhishek Kumar](https://github.com/abhishekkumar-githb) ✨
- [Naima Noor](https://github.com/Naima-Noor) 💻
