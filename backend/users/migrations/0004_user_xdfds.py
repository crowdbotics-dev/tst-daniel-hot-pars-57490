# Generated by Django 2.2.28 on 2023-02-03 20:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20230203_0127'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='xdfds',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
