# TaskForge 🚀

**TaskForge** is a robust, open-source project management and issue tracking tool designed to streamline workflows, enhance collaboration, and drive productivity. With its user-friendly interface and customizable features, TaskForge empowers teams to stay organized and achieve their project goals efficiently. 🎯

## Features 🌟

- **Task Management:** Create, assign, and track tasks with ease. ✅
- **Customizable Workflows:** Tailor workflows to fit your team's specific needs. 🔧
- **Collaboration Tools:** Share updates, comment on tasks, and collaborate seamlessly. 🤝
- **Real-Time Notifications:** Stay informed about task updates and project changes. 🔔
- **Advanced Reporting:** Generate detailed reports to track progress and performance. 📊

## Getting Started with TaskForge 🛠️

### Prerequisites 📋

- Ensure Docker is installed and running on your system. 🐳
- Make sure you have the necessary Docker images for TaskForge.

### Starting TaskForge 🚦

1. **Start Your Docker Client:**

   Ensure that Docker is running. You can start Docker using the Docker Desktop application or by running Docker in your terminal. Check if Docker is running by executing:
   ```bash
   docker info
   ```

2. **Set Execute Permissions for the Startup Script:**

   Navigate to the directory containing the `taskforge.sh` script. Make it executable by running:
   ```bash
   chmod +x taskforge.sh
   ```

3. **Start TaskForge:**

   You can start TaskForge in different ways based on your needs:

   - To start **both server and client**, run:
     ```bash
     ./taskforge.sh
     ```
   - To start **only the server**, run:
     ```bash
     ./taskforge.sh server
     ```
   - To start **only the client**, run:
     ```bash
     ./taskforge.sh client
     ```

   **Note:** ⚠️ The script will remove all Docker containers, images, volumes, and builds associated with TaskForge. Be very cautious as this may affect all Docker services and data associated with TaskForge. Ensure no other critical services are running in Docker before proceeding.

   If you want to start TaskForge without deleting any Docker containers, use:
   ```bash
   docker-compose --env-file .env.development -f docker-compose.dev.yml up --build 
   ```

### Additional Notes 📝

- **Backup Data:** Before running the cleanup script, ensure you backup any important data. 💾
- **Check Logs:** If you encounter issues, you can check Docker logs for more information:
  ```bash
  docker logs <container_name>
  ```

- **Docker Commands:** Familiarize yourself with basic Docker commands for better management:
  - List running containers: `docker ps`
  - List all containers: `docker ps -a`
  - List all images: `docker images`
  - Remove containers: `docker rm <container_id>`
  - Remove images: `docker rmi <image_id>`

## API Documentation 📄

### Postman Documentation

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

