<div style="padding: 4rem 0">
<div align="center">
	<h1> React Group Provider </h1>
</div>

<p align="center" style="margin: 2rem 0 1rem">
resolve the nest issue with react provider
</p>

<div align="center">
	<img src="https://img.shields.io/badge/node-v18.16.0-green.svg?logo=node">
	<img src="https://img.shields.io/badge/npm-v9.5.1-red.svg?logo=npm">
	<img src="https://img.shields.io/badge/pnpm-v8.6.7-yellow.svg?logo=pnpm">
</div>

</div>

## Table of Contents

- Getting Started
- Document
- Example
- License

## Getting Started

First install according to the package maneger you are using 

install npm

```
npm i react-group-provider
```

install yarn
```
yarn add react-group-provider
```


install pnpm

```
pnpm add react-group-provider
```

## Outline

When providers are nested, it becomes hard to follow, so we'll address that

Normally, it would be as follows
```
const App: React.FC = () => {
  return (
    <AProvider>
      <BProvider>
        <CProvider>
          <DProvider>
            <EProvider>
              <FProvider>
                <Component />
              </FProvider>
            </EProvider>
          </DProvider>
        </CProvider>
      </BProvider>
    </AProvider>
  )
}
export default App
```

We resolve that as follows
```
const Providers = GroupProvider([StrictMode, ExampleProvider1, ExampleProvider2]);

const DemoComponents = () => {
  return (
    <Providers>
      <App />
    </Providers>
  )
}
```
or
```

const list = [ 
	StrictMode,
	ExampleProvider1,
	ExampleProvider2,
	ExampleProvider3,
	ExampleProvider4,
	ExampleProvider5,
	ExampleProvider6,
	ExampleProvider7,
	ExampleProvider8,
	ExampleProvider9
]

const Providers = GroupProvider(list);

const DemoComponents = () => {
	return (
		<Providers>
			<App />
		</Providers>
	)
}
```


## Example

code link 
./ apps / [example](URL "github link")  

```
import { StrictMode } from 'react';
import GroupProvider from 'react-group-provider';
import ExampleProvider1 from '@/components/~'
import ExampleProvider2 from '@/components/~'

const Providers = GroupProvider([StrictMode, ExampleProvider1, ExampleProvider2]);

const DemoComponents = () => {
	return (
		<Providers>
			<App />
		</Providers>
	)
}

```

## License
[MIT](URL "license link")  
