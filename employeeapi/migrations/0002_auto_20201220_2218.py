# Generated by Django 3.1.4 on 2020-12-20 20:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('employeeapi', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Employee',
            new_name='employeeapi_employee',
        ),
    ]