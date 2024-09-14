# TaskForge

**TaskForge** is a robust, open-source project management and issue tracking tool designed to streamline workflows, enhance collaboration, and drive productivity. With its user-friendly interface and customizable features, TaskForge empowers teams to stay organized and achieve their project goals efficiently.

## Features

- **Task Management:** Create, assign, and track tasks with ease.
- **Customizable Workflows:** Tailor workflows to fit your team's specific needs.
- **Collaboration Tools:** Share updates, comment on tasks, and collaborate seamlessly.
- **Real-Time Notifications:** Stay informed about task updates and project changes.
- **Advanced Reporting:** Generate detailed reports to track progress and performance.

## Getting Started with TaskForge

### Prerequisites

- Ensure Docker is installed and running on your system.
- Make sure you have the necessary Docker images for TaskForge.

### Starting TaskForge

1. **Start Your Docker Client:**

   Ensure that Docker is running. You can start Docker using the Docker Desktop application or by running Docker in your terminal. Check if Docker is running by executing:
   ```bash
   docker info
   ```

2. **Set Execute Permissions for the Startup Script:**

   Navigate to the directory containing the `server_start.sh` script. Make it executable by running:
   ```bash
   chmod +x server_start.sh
   ```

3. **Set Execute Permissions for the Cleanup Script:**

   Similarly, set execute permissions for the `remove.sh` script:
   ```bash
   chmod +x remove.sh
   ```

4. **Start TaskForge:**

   Execute the `server_start.sh` script to start TaskForge:
   ```bash
   ./server_start.sh
   ```

   This script will initiate the TaskForge Docker containers and services.

### Stopping and Cleaning Up TaskForge

1. **Stop TaskForge:**

   Typically, the `server_start.sh` script should handle starting and stopping of the containers. If it doesn’t provide a stop function, you may need to manually stop the containers using Docker commands:
   ```bash
   docker stop <container_name>
   ```

2. **Clean Up Docker Environment:**

   To remove TaskForge containers, images, volumes, and builds, use the `remove.sh` script:
   ```bash
   ./remove.sh
   ```

   **Note:** This script will remove all Docker containers, images, volumes, and builds associated with TaskForge. Be very cautious as this will affect all Docker services and data associated with TaskForge. Ensure no other critical services are running in Docker before proceeding.

### Additional Notes

- **Backup Data:** Before running the cleanup script, make sure to backup any important data.
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
