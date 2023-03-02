export const swagger20 = {
  swagger: '2.0',
  info: {
    description: '测试API示例项目',
    version: '0.0.1-SNAPSHOT',
    title: '接口文档',
    contact: {},
  },
  host: 'swaggerhelper.andou.live:9527',
  basePath: '/api',
  tags: [{ name: '宠物店认证模块', description: 'Tenant Controller' }],
  paths: {
    '/tenant/auth': {
      post: {
        tags: ['宠物店认证模块'],
        summary: '账户登录',
        description: '账户登录',
        operationId: 'tenantAccessTokenUsingPOST',
        consumes: ['application/json'],
        produces: ['*/*'],
        parameters: [
          {
            in: 'body',
            name: 'tokenRequestVO',
            description: 'tokenRequestVO',
            required: true,
            schema: {
              $ref: '#/definitions/TokenRequestVO',
              originalRef: 'TokenRequestVO',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/统一响应消息报文«TokenResponseVO»',
              originalRef: '统一响应消息报文«TokenResponseVO»',
            },
          },
          201: { description: 'Created' },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden' },
          404: { description: 'Not Found' },
        },
        security: [{ Authorization: ['global'] }],
        deprecated: false,
      },
      get: {
        tags: ['宠物店认证模块'],
        summary: '登录确认',
        description: '登录确认',
        operationId: 'tenantSubmitUsingPOST',
        consumes: ['application/json'],
        produces: ['*/*'],
        parameters: [
          {
            name: 'tenantId',
            in: 'query',
            description: '登录机构ID',
            required: true,
            type: 'integer',
          },
          {
            name: 'submitToken',
            in: 'query',
            description: '登录确认令牌',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/统一响应消息报文«TokenResponseVO»',
              originalRef: '统一响应消息报文«TokenResponseVO»',
            },
          },
          201: { description: 'Created' },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden' },
          404: { description: 'Not Found' },
        },
        security: [{ Authorization: ['global'] }],
        deprecated: false,
      },
    },
    '/tenant/auth/verification-code': {
      get: {
        tags: ['宠物店认证模块'],
        summary: '手机验证码获取',
        description: '手机验证码获取',
        operationId: 'smsCodeUsingGET',
        produces: ['*/*'],
        parameters: [
          {
            name: 'code',
            in: 'query',
            description: '图形验证码值',
            required: true,
            type: 'string',
          },
          {
            name: 'phone',
            in: 'query',
            description: '手机号',
            required: true,
            type: 'string',
          },
          {
            name: 'uuid',
            in: 'query',
            description: '图形验证码ID',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/统一响应消息报文«Void»',
              originalRef: '统一响应消息报文«Void»',
            },
          },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden' },
          404: { description: 'Not Found' },
        },
        security: [{ Authorization: ['global'] }],
        deprecated: false,
      },
    },
  },
  securityDefinitions: {
    Authorization: { type: 'apiKey', name: 'Authorization', in: 'header' },
    'Naiterui-Auth': { type: 'apiKey', name: 'Naiterui-Auth', in: 'header' },
  },
  definitions: {
    TenantBO: {
      type: 'object',
      properties: {
        id: { type: 'integer', format: 'int64' },
        lastLoginTime: { type: 'string', format: 'date-time' },
        tenantCode: { type: 'string' },
        tenantName: { type: 'string' },
      },
      title: 'TenantBO',
    },
    TokenRequestVO: {
      type: 'object',
      properties: {
        code: { type: 'string', description: '图形验证码结果' },
        grant_type: { type: 'string', description: '认证类型' },
        password: {
          type: 'string',
          description: '密码密文(认证类型password必传)',
        },
        phone: { type: 'string', description: '手机号' },
        scope: { type: 'string', description: '授权范围，默认填all' },
        smsCode: { type: 'string', description: '短信验证码结果' },
        tenantId: { type: 'string', description: '登录机构ID' },
        username: { type: 'string', description: '账户名' },
        uuid: { type: 'string', description: '图形验证码key' },
      },
      title: 'TokenRequestVO',
      description: '登录请求参数',
    },
    TokenResponseVO: {
      type: 'object',
      properties: {
        accessToken: { type: 'string', description: '授权令牌' },
        currentTenant: {
          type: 'integer',
          format: 'int64',
          description: '当前登录机构ID',
        },
        nickName: { type: 'string', description: '账户昵称' },
        permissions: {
          type: 'array',
          description: '权限集合,登录成功返回',
          items: { type: 'string' },
        },
        submitToken: {
          type: 'string',
          description:
            '登录确认令牌，若存在多机构不直接返回accessToken，通过SubmitToken确认登录机构',
        },
        tenants: {
          type: 'array',
          description: '账户关联机构',
          items: { $ref: '#/definitions/TenantBO', originalRef: 'TenantBO' },
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '登录类型，1：账号密码，2：短信验证码',
        },
        userId: { type: 'integer', format: 'int64', description: '账户ID' },
        userType: {
          type: 'integer',
          format: 'int32',
          description: '账户类型，0：管理用户，1：机构用户',
        },
        username: { type: 'string', description: '账户名' },
      },
      title: 'TokenResponseVO',
      description: '登录结果参数',
    },
    '统一响应消息报文«TokenResponseVO»': {
      type: 'object',
      required: ['code', 'msg', 'time'],
      properties: {
        code: { type: 'integer', format: 'int32', description: '状态码' },
        data: {
          description: '业务数据',
          $ref: '#/definitions/TokenResponseVO',
          originalRef: 'TokenResponseVO',
        },
        msg: { type: 'string', description: '消息内容' },
        success: { type: 'boolean' },
        time: { type: 'integer', format: 'int64', description: '时间戳' },
      },
      title: '统一响应消息报文«TokenResponseVO»',
    },
    '统一响应消息报文«Void»': {
      type: 'object',
      required: ['code', 'msg', 'time'],
      properties: {
        code: { type: 'integer', format: 'int32', description: '状态码' },
        msg: { type: 'string', description: '消息内容' },
        success: { type: 'boolean' },
        time: { type: 'integer', format: 'int64', description: '时间戳' },
      },
      title: '统一响应消息报文«Void»',
    },
    '统一响应消息报文«object»': {
      type: 'object',
      required: ['code', 'msg', 'time'],
      properties: {
        code: { type: 'integer', format: 'int32', description: '状态码' },
        data: { type: 'object', description: '业务数据' },
        msg: { type: 'string', description: '消息内容' },
        success: { type: 'boolean' },
        time: { type: 'integer', format: 'int64', description: '时间戳' },
      },
      title: '统一响应消息报文«object»',
    },
  },
};
