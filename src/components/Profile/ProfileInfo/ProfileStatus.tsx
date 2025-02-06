import React, {ChangeEvent, useState} from 'react'
import {useDispatch} from "react-redux";
import {AppThunkDispatch} from "../../../redux/redux-store";
import {updateStatus} from "../../../redux/profile-reducer";

type ProfileStatusProps = {
  status: string
}

export const ProfileStatus = ({status}: ProfileStatusProps) => {
  const dispatch = useDispatch<AppThunkDispatch>()
  const [editMode, setEditMode] = useState(false)
  const [localStatus, setLocalStatus] = useState(status)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    dispatch(updateStatus(localStatus))
  }

  const onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>{status || '----------'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input value={localStatus} onChange={onStatusChangeHandler} onBlur={deactivateEditMode} autoFocus={true}/>
        </div>
      }
    </div>
  )
}