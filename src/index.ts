import { setFailed, setOutput } from '@actions/core'
import { getOptions } from './options'

async function run() {
  const { string, pattern } = getOptions()
  const regex = new RegExp(pattern, 'g')
  const matches = regex.exec(string)

  if (matches === null) {
    return setFailed(`No matches found when using regex: "${pattern}"`)
  }

  for (const [key, value] of Object.entries(matches.groups ?? {})) {
    setOutput(key, value)
  }
}

try {
  void run()
} catch (error) {
  if (error instanceof Error) setFailed(error)
  else setFailed('Unknown error')
}
