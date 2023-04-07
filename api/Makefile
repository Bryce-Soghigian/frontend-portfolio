ACR=whimiscalgoose2.azurecr.io
build:
	docker build -t $(ACR)/web-api:latest .


push:
	docker push $(ACR)/web-api:latest

run:
	docker run -p 8000:8000 blog-api

up:
	docker-compose up -d

makemigrate:
	docker-compose run --rm web python manage.py makemigrations

migrate:
	docker-compose run --rm web python manage.py migrate

super-user:
	docker-compose run --rm web python manage.py createsuperuser
