import { enqueueSnackbar } from 'notistack'

const notify = ({ type, message = 'success', component, persist }) => {
  if (!message || typeof message !== 'string') {
    return
  }

  enqueueSnackbar({
    variant: type,
    message,
    autoHideDuration: 5000,
    action: component,
    persist,
  })
}

export default notify
