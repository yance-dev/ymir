import { calDuration, format } from '@/utils/date'
import { getVersionLabel } from './common'
import { getLocale } from 'umi'

export enum states {
  READY = 0,
  VALID = 1,
  INVALID = 2,
}

export function transferModelGroup(data: YModels.BackendData) {
  const group: YModels.ModelGroup = {
    id: data.id,
    name: data.name,
    projectId: data.project_id,
    createTime: format(data.create_datetime),
  }
  return group
}

export function transferModel(data: YModels.BackendData): YModels.Model {
  const durationLabel = calDuration(data.related_task.duration, getLocale())
  return {
    id: data.id,
    name: data.group_name,
    groupId: data.model_group_id,
    projectId: data.project_id,
    hash: data.hash,
    version: data.version_num || 0,
    versionName: getVersionLabel(data.version_num),
    state: data.result_state,
    keywords: data?.keywords || [],
    map: data.map || 0,
    url: data.url || '',
    createTime: format(data.create_datetime),
    updateTime: format(data.update_datetime),
    taskId: data.related_task.id,
    progress: data.related_task.percent || 0,
    taskType: data.related_task.type,
    taskState: data.related_task.state,
    taskName: data.related_task.name,
    duration: data.related_task.duration,
    durationLabel: calDuration(data.related_task.duration, getLocale()),
    task: { ...data.related_task, durationLabel },
    hidden: !data.is_visible,
    stages: (data.related_stages || []).map(transferStage) || [],
    recommendStage: data.recommended_stage || 0,
    description: data.description || '',
  }
}

/**
 * is valid model
 * @param {YModels.Model} model
 * @returns {Boolean}
 */
export function validModel(model: YModels.Model): Boolean {
  return model.state === states.VALID
}

/**
 * is invalid model
 * @param {YModels.Model} model
 * @returns {Boolean}
 */
export function invalidModel(model: YModels.Model): Boolean {
  return model.state === states.INVALID
}

/**
 * is running model
 * @param {YModels.Model} model
 * @returns {Boolean}
 */
export function runningModel(model: YModels.Model): Boolean {
  return model.state === states.READY
}

export function getModelName(data: YModels.BackendData) {
  return `${data.model?.group_name} ${getVersionLabel(data.model?.version_num)}`
}

/**
 * transfer backend data into stage object
 * @param {YModels.BackendData} data
 * @returns {YModels.Stage}
 */
export function transferStage(data: YModels.BackendData): YModels.Stage {
  return {
    id: data.id,
    name: data.name,
    map: data.map,
    modelId: data.model?.id,
    modelName: getModelName(data),
    metrics: transferMetrics(data.metrics),
  }
}

function transferMetrics(metrics: YModels.BackendData = {}) {
  return {
    ar: metrics.ar,
    fn: metrics.fn,
    fp: metrics.fp,
    tp: metrics.tp,
  }
}

/**
 * get recommend stage from model
 * @param {YModels.Model} model
 * @returns {YModels.Stage|undefined}
 */
export function getRecommendStage(model: YModels.Model): YModels.Stage | undefined {
  return getStage(model, model.recommendStage)
}

/**
 * @description get Model stage
 * @export
 * @param {YModels.Model} model
 * @param {number} stageId
 * @return {YModels.Stage | undefined}
 */
export function getStage(model: YModels.Model, stageId: number): YModels.Stage | undefined {
  return model.stages?.find((stage) => stage.id === stageId)
}
