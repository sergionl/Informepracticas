# Generated by Django 4.1 on 2023-11-28 17:47

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("informeAPI", "0003_user"),
    ]

    operations = [
        migrations.DeleteModel(
            name="User",
        ),
    ]
