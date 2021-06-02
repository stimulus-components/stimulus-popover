import path from 'path'

export default ({ mode }) => {
  if (mode === 'netlify') {
    return {
      build: {
        rollupOptions: {
          input: {
            index: path.resolve(__dirname, 'index.html'),
            card: path.resolve(__dirname, 'card.html')
          }
        }
      }
    }
  }

  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'stimulus-popover'
      },
      rollupOptions: {
        external: ['stimulus'],
        output: {
          globals: {
            stimulus: 'Stimulus'
          }
        }
      }
    }
  }
}
