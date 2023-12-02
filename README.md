## Navigation

- [Parsing](#parsing)
- [Using a result](#using-a-result)
- [Options](#options)
- [Outputs](#outputs)

## Parsing

```yml
steps:
  - name: Parse shit from string
    id: shit
    uses: release-kit/regex@v1
    with:
      string: 'aaa123123bbb'
      pattern: '^aaa(?<numbers>.*)bbb$'
```

## Using a result

```yml
- name: Use parsed version
  run: |
    echo "${{ steps.shit.outputs.numbers }}" # 123123
```

## Options

- `string` (required) - a string to be parsed
- `pattern` (required) - regex to parse the `string`

## Outputs

Each output key is the matched named group from your `pattern`
