# Generated by Django 2.2.9 on 2020-09-25 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bsm_config', '0027_auto_20200822_2031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menu',
            name='page',
            field=models.CharField(choices=[['list', '列表页'], ['detail', '详情页'], ['adminConfig', '页面配置面板'], ['auto', '自定义页面'], ['chart', '自定义图表'], ['iframe', 'Iframe页面'], ['map', '地图页面']], default='', help_text='前端功能页面的标识', max_length=200, null=True, verbose_name='页面'),
        ),
    ]