build:
	docker build -t blog-api .

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
