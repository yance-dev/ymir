const model = {
  "model.list.title": { en: "Model List", cn: "模型列表", },
  "model.list.actions.detail": { en: "Detail", cn: "详情", },
  "model.detail.title": { en: "Model Detail", cn: "模型详情", },
  "model.asset.title": { en: "Model Assets", cn: "数据详情", },
  "model.all": { en: "All", cn: "全部", },
  "model.type.import": { en: "Import", cn: "导入", },
  "model.type.share": { en: "Share", cn: "用户共享", },
  "model.type.train": { en: "Train Task", cn: "训练任务", },
  "model.column.name": { en: "Model Name", cn: "模型名称", },
  "model.column.source": { en: "Source", cn: "来源", },
  "model.column.target": { en: "Train Classes", cn: "训练目标", },
  "model.column.map": { en: "mAP", cn: "精度均值(mAP)", },
  "model.column.create_time": { en: "Create Time", cn: "创建时间", },
  "model.column.action": { en: "Actions", cn: "操作", },
  "model.action.del": { en: "Remove", cn: "删除", },
  "model.action.history": { en: "History", cn: "历史树", },
  "model.action.download": { en: "Download", cn: "下载", },
  "model.action.verify": { en: "Verify", cn: "验证", },
  "model.action.detail": { en: "Detail", cn: "详情", },
  "model.empty.label": { en: "Train A Model", cn: "训练出一个模型", },
  "model.empty.btn.label": { en: "Train", cn: '去训练', },
  "model.import.label": { en: "Import Model", cn: "导入模型", },
  "model.query.name": { en: "Model Name", cn: "模型名称", },
  "model.query.source": { en: "Source", cn: "数据来源", },
  "model.query.createtime": { en: "Create Time", cn: "创建时间", },
  "model.times.current": { en: "Today", cn: "当天", },
  "model.times.3day": { en: "Last 3 Days", cn: "近三天", },
  "model.times.week": { en: "Last Week", cn: "近一周", },
  "model.times.year": { en: "Last Year", cn: "近一年", },
  "model.query": { en: "Search", cn: "查询", },
  "model.reset": { en: "Reset", cn: "重置", },
  "model.action.multi.train": { en: "Train With", cn: "去训练", },
  "model.action.multi.mine": { en: "Mining With", cn: "去挖掘", },
  "model.cancel.select": { en: "Cancel Select", cn: "取消选择", },
  "model.action.del.confirm.content": { en: "Are you sure to remove this model:{name}?", cn: "确认要删除模型：{name}？", },
  "model.query.name.placeholder": { en: "Model Name", cn: "模型名称", },
  "model.selected.label": { en: "{len} models selected，total {count} assets.", cn: "已选择 {len} 项，共计图片 {count} 张，", },
  "model.pager.total.label": { en: "Total {total} items", cn: "共 {total} 项", },
  'model.detail.label.name': { en: 'Model Name', cn: '模型名称', },
  'model.detail.label.id': { en: 'Model ID', cn: '模型ID', },
  'model.detail.label.map': { en: 'mAP', cn: 'mAP值', },
  'model.detail.label.source': { en: 'Source', cn: '模型来源', },
  'model.detail.label.training_dataset': { en: 'Training Dataset', cn: '训练集', },
  'model.detail.label.verify_dataset': { en: 'Test Dataset', cn: '测试集', },
  'model.detail.label.test_dataset': { en: 'Test Dataset', cn: '测试集', },
  'model.detail.label.dataset_percent': { en: 'Train / Test', cn: '训练/测试集比例', },
  'model.detail.label.train_type': { en: 'Train Type', cn: '训练类型', },
  'model.detail.label.train_goal': { en: 'Train Classes', cn: '训练目标', },
  'model.detail.label.framework': { en: 'Network', cn: '算法框架', },
  'model.detail.label.backbone': { en: 'Backbone', cn: '骨干网络结构', },
  'model.detail.label.hyperparams': { en: 'Hyper Parameters', cn: '超参数', },
  'model.add.types.share': { en: 'Share', cn: '用户分享模型', },
  'model.add.types.local': { en: 'Local', cn: '本地导入', },
  'model.add.success': { en: 'Import model success!', cn: '导入模型成功！', },
  'model.add.form.name': { en: 'Name', cn: '名称', },
  'model.add.form.name.placeholder': { en: 'Model Name', cn: '请输入模型名称', },
  'model.add.form.type': { en: 'Import Type', cn: '导入类型', },
  'model.add.form.share.label': { en: 'Model ID', cn: '模型ID', },
  'model.add.form.share.valid.msg': { en: 'Please input user shared ID', cn: '请输入用户分享的模型ID', },
  'model.add.form.share.placeholder': { en: 'Shared ID', cn: '请输入待分享的数据集ID', },
  'model.add.form.upload.btn': { en: 'Upload', cn: '上传文件', },
  'model.add.form.upload.info': { en: `1. Only support zip file; {br} 2. Size must less than 200M.`, cn: `1. 仅支持压缩包文件上传；{br} 2. 压缩包大小限制 200MB 以内。`, },
  'model.verify.upload.info': {cn: '支持jpg, gif, png格式, 图片大小 < {size}M', en: 'Support *.jpg, *.gif, *.png, size < {size}M'},
  'model.verify.confidence': { cn: '置信度', en: 'Confidence' },
  'model.verify.upload.label': { cn: '上传图片', en: 'Upload Image' },
  'model.verify.confidence.title': { cn: '调整置信度', en: 'Confidence' },
  'model.verify.model.info.title': { cn: '模型信息', en: 'Model Info.' },
  'model.verify.reverify.label': { cn: '重新验证', en: 'Verify Again' },
  'model.verify.upload.tip': { cn: '模型验证需要较长时间，请耐心等待', en: 'Verification need more time, be patient...' },
  'model.verify.result.info': { cn: '验证结果：标注数 {count}, 置信区间{confidence}', en: 'Verification Result: annotations total: {count}, confidence between: {confidence}' },
}

export default model
