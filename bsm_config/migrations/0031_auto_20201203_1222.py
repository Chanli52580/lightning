# Generated by Django 2.2.9 on 2020-12-03 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bsm_config', '0030_fieldadmin_fieldpermission'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menu',
            name='groups',
            field=models.ManyToManyField(blank=True, help_text='可查看此菜单的角色,不设置默认所有角色可查看此菜单', related_name='menus', to='auth.Group', verbose_name='关联角色'),
        ),
    ]
