import { getInput } from '@actions/core'
import { z } from 'zod'

const OptionsSchema = z.object({
  string: z.string(),
  pattern: z.string().refine((value) => {
    try {
      void new RegExp(value)
      return true
    } catch {
      return false
    }
  }),
})

interface Inputs {
  string: string
  pattern: string
}

function getActionInputs(): Inputs {
  return {
    string: getInput('string'),
    pattern: getInput('pattern'),
  }
}

export function getOptions(input: Inputs = getActionInputs()) {
  return OptionsSchema.parse(input)
}
