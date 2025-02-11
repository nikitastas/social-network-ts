import { SubmitHandler, useForm } from 'react-hook-form'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import s from './AddMessageForm.module.css'

type AddMessageFormProps = {
  sendMessage: (newMessageBody: string) => void
}

type Inputs = {
  newMessage: string
}

export const AddMessageForm = ({ sendMessage }: AddMessageFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { newMessage: '' } })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendMessage(data.newMessage)
    reset()
  }
  return (
    <Grid container justifyContent={'left'}>
      <Grid item justifyContent={'left'}>
        <FormControl>
          <FormLabel>
            <p>Enter your message</p>
          </FormLabel>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <TextField
                label="Your message"
                margin="normal"
                {...register('newMessage', {
                  required: 'Message is required',
                  minLength: {
                    value: 2,
                    message: 'Message must be at least 2 characters long',
                  },
                })}
              />
              {errors.newMessage && <span className={s.errorMessage}>{errors.newMessage.message}</span>}
              <Button type={'submit'} variant={'contained'} color={'primary'}>
                Send
              </Button>
            </FormGroup>
          </form>
        </FormControl>
      </Grid>
    </Grid>
  )
}
