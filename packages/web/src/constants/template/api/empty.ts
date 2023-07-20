import { COMMON_HEAD } from './common';
import { Template } from '@/store/template/interface';

export default function genEmptyApiTemplate() {
  return new Template({
    content: `${COMMON_HEAD}
  const apiList = params.apiList;、
  const tpl1 =
  \`生成模板例子，这里获取请求API集合，根据这些API，可以生成想要的任何模板代码
  {{if apiList.length > 0}}
  请求API：{{each apiList}}
     {{$value.summary}}
        url：{{$value.path}}
        method：{{$value.method}}{{/each}}
  {{/if}}
  \`;
  // 当一个模板定义好之后，使用 artTemplate.render 方法进行生成，并添加到result返回数组中
  // 当然可以生成多个模板，每次生成好之后，添加到result数组中即可
  result.push(artTemplate.render(tpl1, { apiList, config }));

  // 返回生成好的模板
  return result;
}
`,
  });
}
