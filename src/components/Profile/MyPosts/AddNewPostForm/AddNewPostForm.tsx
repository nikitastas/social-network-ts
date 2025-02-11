import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import s from './AddNewPostForm.module.css'
import Button from '@mui/material/Button'

type Inputs = {
  newPost: string
}

type AddNewPostFormProps = {
  onAddPost: (newPostText: string) => void
}

export const AddNewPostForm = ({ onAddPost }: AddNewPostFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { newPost: '' } })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onAddPost(data.newPost)
    reset()
  }
  return (
    <Grid container justifyContent={'left'}>
      <Grid item justifyContent={'left'}>
        <FormControl>
          {/*<FormLabel>
            <p>Enter your message</p>
          </FormLabel>*/}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <TextField
                label="Your post"
                margin="normal"
                {...register('newPost', {
                  required: 'Post is required',
                  minLength: {
                    value: 2,
                    message: 'Post must be at least 2 characters long',
                  },
                })}
              />
              {errors.newPost && <span className={s.errorMessage}>{errors.newPost.message}</span>}
              <Button type={'submit'} variant={'contained'} color={'primary'}>
                Add post
              </Button>
            </FormGroup>
          </form>
        </FormControl>
      </Grid>
    </Grid>
  )
}
