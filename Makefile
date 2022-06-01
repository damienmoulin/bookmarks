.SILENT:

COMPOSE_FILE = ./docker-compose.yml
URL_DEV = http://localhost:3001

install:
	docker-compose -f $(COMPOSE_FILE) build
	docker-compose -f $(COMPOSE_FILE) up -d
	printf "${COLOR_INFO}App : ${URL_DEV}  \n"


start:
	docker-compose -f $(COMPOSE_FILE) up -d
	printf "${COLOR_INFO}App : ${URL_DEV}  \n"

stop:
	docker-compose -f $(COMPOSE_FILE) down
