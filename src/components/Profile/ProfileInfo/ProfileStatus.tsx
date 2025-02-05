import React, {useState} from 'react'

type ProfileStatusProps = {
  status: string
}

export const ProfileStatus = ({status}: ProfileStatusProps) => {
  const [editMode, setEditMode] = useState(false)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>{status}</span>
        </div>
      }
      {editMode &&
        <div>
          <input value={status} onBlur={deactivateEditMode} autoFocus={true}/>
        </div>
      }
    </div>
  )
}