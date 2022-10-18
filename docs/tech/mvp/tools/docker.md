# Docker

Docker is an open platform for developing, shipping, and running applications in isolated environments called *containers*.

It is useful for creating standalone and cross-platform applications which can also be easily integrated into your infrastructure. The isolation of containers happens on OS level, similarly but not identically to virtualization. Docker allows you to run many containers simultaneously on a given host, as well as create internal networks for containers to communicate or share disk space with the host.

## ➕ Benefits

* Runs on cloud and physical/virtual hardware
* Supported by most cloud/infrastructure providers
* Lightweight (no RAM preallocation)
* Configuration in a single Dockerfile
* Easy separation of application into modules (e.g. in microservice architecture)
* Possibility to create complex multi-container systems

## ➖ When not to use

* Not good for applications with rich GUI
* Difficult to manage large amount of containers
* No data backup/recovery options
* Not recommended for simple desktop applications

## 💡 Resources

- [Documentation](https://docs.docker.com/)
- [Docker 101](https://www.docker.com/101-tutorial/)
- [Tutorial](https://docker-curriculum.com/)
