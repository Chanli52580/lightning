from django.contrib.admin import ModelAdmin as DjangoModelAdmin
from django.utils import six

# 属性的常量声明

# 根据哪个字段进行筛选登录的用户，因为一个模型可能有多个字段指向用户模型
BSM_AUTH_FILTER_FIELD = 'user_field'

# 是否允许根据当前登录用户进行筛选
BSM_FILTER_BY_LOGIN_USER = 'filter_by_login_user'

# 声明父亲字段, 只用来针对树形结构做声明，只能配置单一的字段
BSM_PARENT_FIELD = 'parent_field'

BSM_DISPLAY = 'display'

BSM_INLINE_ACTIONS = 'inline_actions'

# 批量操作
BSM_BATCH_ACTION = 'action'

BSM_MODAL_FROM = 'modal_form'

BSM_MODAL_CONFIG = 'modal_config'

# 表单的过滤
BSM_FILTER = 'filter'

# 表单
BSM_FORM_FIELDS = 'form_fields'

# 表单分组的风格
BSM_GROUP_STYLE = 'group_style'

# 列表的风格
BSM_LIST_STYLE = 'list_style'

# 合法的前端管理端的设置
VALID_MANAGE_ATTRS = [
    BSM_AUTH_FILTER_FIELD,
    # BSM_FILTER_BY_LOGIN_USER,
    BSM_PARENT_FIELD,
    BSM_DISPLAY,
    BSM_INLINE_ACTIONS,
    BSM_BATCH_ACTION,
    BSM_MODAL_FROM,
    BSM_MODAL_CONFIG,
    BSM_FILTER,
    BSM_FORM_FIELDS,
    BSM_GROUP_STYLE,
    BSM_LIST_STYLE,
]

# 属性和默认值映射
ATTRS_DICT = {
    BSM_AUTH_FILTER_FIELD: None,
    BSM_FILTER_BY_LOGIN_USER: True,
    BSM_PARENT_FIELD: None,
}


class BSMAdmin:
    """通用套件全局定义管理配置的基类

    用户可以继承此类，然后重新定义配置，然后服务端导出配置，
    前端可以根据配置动态的构造管理后台界面
    """
    pass


for key, value in ATTRS_DICT.items():
    setattr(BSMAdmin, key, value)


class BSMAdminModule:
    """管理项目的 admin 的所有的 BSM 类"""

    modules = {}


def register(admin_class):
    _meta = admin_class.Meta.model._meta
    key = f'{_meta.app_label}__{_meta.model_name}'
    if key not in BSMAdminModule.modules:
        BSMAdminModule.modules[key] = admin_class
    return admin_class