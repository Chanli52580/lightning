"""
BSM体系的配置，都可以存储至数据库，包括：
1. 菜单
2. 管理后台的配置
3. 客户端接口的开放
4. 甚至数据模型的结构等。
"""

from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType


# 自定义菜单
class Menu(models.Model):
    """存储管理后台左侧导航菜单栏的结构
    """
    name = models.CharField('名称', max_length=30)
    icon = models.CharField('图标名', max_length=100, null=True, blank=True,
        help_text='请使用AntDesign的图标名')
    parent = models.ForeignKey('self', models.SET_NULL, null=True, blank=True, verbose_name='上级菜单')
    path = models.CharField('路径', max_length=200, help_text='前端功能页面的路径')
    permission = models.CharField('关联权限', max_length=200, help_text='格式有<app_label>.<codename>')
    content_type = models.ForeignKey(ContentType, models.SET_NULL, null=True, blank=True,
        verbose_name='关联模型')

    class Meta:
        verbose_name = '导航菜单'
        verbose_name_plural = '导航菜单'

    class GMeta:
        title_field = 'name'
        parent_field = 'parent'

# 菜单的查询场景：1. 根据当前登录的用户得到它的权限和组权限。2. Filter菜单Permission in 用户的权限集或空。
