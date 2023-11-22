# Generated by Django 4.2.7 on 2023-11-22 02:23

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("reservation", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="flights",
            name="id",
        ),
        migrations.RemoveField(
            model_name="users",
            name="id",
        ),
        migrations.AlterField(
            model_name="flights",
            name="flight_ID",
            field=models.AutoField(
                db_column="Flight_ID", primary_key=True, serialize=False
            ),
        ),
        migrations.AlterField(
            model_name="users",
            name="user_ID",
            field=models.AutoField(
                db_column="User_ID", primary_key=True, serialize=False
            ),
        ),
    ]
