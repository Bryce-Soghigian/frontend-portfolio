# Generated by Django 3.2.9 on 2021-11-25 22:38

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Entry',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('category', models.TextField()),
                ('entry_content', models.TextField()),
                ('entry_title', models.TextField()),
                ('entry_description', models.TextField(blank=True)),
                ('date_created', models.DateField(default=datetime.date)),
            ],
        ),
    ]
