import { COMMON_HEAD } from '../common';
import { Template } from '@/store/template/interface';

export default new Template({
  label: 'Form 表单',
  value: 'class_we3f6Os29uufxfo234322',
  formatCodeExtension: '.vue',
  builtIn: true,
  content: `${COMMON_HEAD}
  const api = params.api;
  const requestDataSchemaList = params.requestDataSchemaList;
  const responseDataSchemaList = params.responseDataSchemaList;

  let tpl1, tpl2 = '';
  // 请求数据
  if (requestDataSchemaList.length > 0) {
    tpl1 = renderForm(requestDataSchemaList);
  } else {
    tpl1 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(tpl1);

  // 响应数据
  if (responseDataSchemaList.length > 0) {
    tpl2 = renderForm(responseDataSchemaList);
  } else {
    tpl2 = \`// 没有字段可以生成\n// 如果有请求数据字段，请先选择后在进行生成\`;
  }
  result.push(tpl2);

  function renderForm(schemaList = []) {
    const formItemCodeWrap = schemaList.map((item) => {
      return \`  <el-form-item label="\${item.title?item.title:item.keyName}">
    \${item.type==='array'?\`<el-select v-model="form.\${item.keyName}" placeholder="请选择">
      <el-option label="数据1" value="1"></el-option>
      <el-option label="数据1" value="2"></el-option>
    </el-select>\`:\`<el-input v-model="form.\${item.keyName}"></el-input>\`}
  </el-form-item>\`
    });
    return \`<el-form ref="form" :model="form" label-width="80px">
\${formItemCodeWrap.join('\\n')}
</el-form>
<script>
  export default {
    data() {
      return {
        form: \${apih.template.renderObject(schemaList, api, { paramType: 'request', onlyMap: true, startSpace: '        ' }).trim()},
        rules: \${['{', schemaList.filter((item) => item.rules.required).map(function(item) {
            return \`          \${item.keyName}: [
            { required: true, message: \${item.type === 'array' ? "'必选项'" : "'必填项'"}, trigger: 'change' }
          ]\`
        }).join(',\\n'), '        }'].join('\\n')}
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
\`
  }

  return result;
};`,
});
