# ip

A list of games supported by the Game Season API can be found in this directory.

## Append new Title

Follow the steps below to add a file.

### Directory

Create a game title directory in `src/ip/`.

### type.ts

Extends `CommonSeason` Type to define a new title type, Season.

Add the following type definition.

`export type SeasonData = Record<number, Season>`

Next, define the types SeasonSchema and ProgressSchema to be returned as the API response.

### data.ts

`export const data: SeasonData = {}`

Please input data for each season.

### index.ts

Create a new adapter with `newAdaptor()` and export.
