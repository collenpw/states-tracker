# Generated by Django 3.2.5 on 2021-07-30 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('states', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='state',
            name='name',
            field=models.CharField(max_length=20),
        ),
    ]
