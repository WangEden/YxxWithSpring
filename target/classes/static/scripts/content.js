// addContent(introduce_boxs, introduce_box_content);
//  introduce_describe content
const introduce_describe_text = "本公司提出一种多功能集成化工巡检六足机器人，能够实现低矮区域、沿管道、爬梯巡检，巡检数据实时上传。无需人员进行手工遥控，实施监测无人机状况。"
const introduce_describe_text2 =  "化工行业在国民经济中占有重要地位，而为了保障化工产出高质量、化工厂安全性，化工巡检工作显得格外重要。中国是全球最大的化工产品生产基地，化工行业产值占世界总量的40%以上，国内规模以上的化工企业数量约2.25万家，但智能巡检机器人在化工巡检领域的渗透率仍较低，整个市场处于萌芽阶段。"
let introduce_describe = document.querySelectorAll('.introduce-describe');
introduce_describe[0].innerText = introduce_describe_text;
introduce_describe[1].innerText = introduce_describe_text2;

let introduce_boxs = document.querySelectorAll('.introduce-box .content');
introduce_boxs[0].querySelector('h2').innerText = "全地形移动"
introduce_boxs[1].querySelector('h2').innerText = "多手段检测"
introduce_boxs[2].querySelector('h2').innerText = "临时抢修"
introduce_boxs[3].querySelector('h2').innerText = "远程控制"

