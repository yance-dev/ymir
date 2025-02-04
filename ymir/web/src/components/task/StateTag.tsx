import { Tag } from 'antd'
import t from '@/utils/t'
import { ResultStates as states, statesLabel } from '@/constants/common'
import s from './stateTag.less'
import { InprogressIcon, SuccessIcon, FailIcon, } from '@/components/common/Icons'
import React from 'react'

type Props = {
  state?: states,
  size?: 'normal' | 'large' | 'small',
  mode?: 'all' | 'icon' | 'text',
  iconStyle?: React.CSSProperties,
}

const StateTag: React.FC<Props> = ({ state = states.READY, size = 'normal', mode = 'all', iconStyle = {}, ...resProps }) => {
  const maps = {
    [states.READY]: { icon: <InprogressIcon className={s.stateIcon} style={{ ...iconStyle, color: '#3BA0FF' }} />, color: '' },
    [states.VALID]: { icon: <SuccessIcon className={s.stateIcon} style={iconStyle} />, color: 'success' },
    [states.INVALID]: { icon: <FailIcon className={s.stateIcon} style={iconStyle} />, color: 'error' },
  }
  const label = t(statesLabel(state))
  const tag = maps[state]
  return tag ? (
    <Tag
      className={`${s.state} ${s[mode]} ${s[size]}`}
      {...resProps}
      color={tag.color}
      title={label}
    >
      {tag.icon}
      {mode !== 'icon' ? label : ''}
    </Tag>
  ) : null
}

export default StateTag
