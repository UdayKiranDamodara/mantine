import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core'
import './App.css'

function App() {
  return (
    <div className='App'>
      <MantineProvider
        theme={{
          loader: 'bars',
          colorScheme: 'dark',
        }}
        styles={{
          Button: (theme) => ({
            root: {
              backgroundColor: theme.colors.cyan[9],
            },
          }),
        }}
      >
        <Paper>
          <Text>Hello there from Mantine</Text>
        </Paper>
        <Button>Hello world!</Button>
        <Loader />
      </MantineProvider>
    </div>
  )
}

export default App
