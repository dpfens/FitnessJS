# FitnessJS

**FitnessJS** is a library of exercise physiology and healthcare equations for transforming basic health data. FitnessJS compiles bodybuilding competition formulas, aerobic performance models, and body composition equations so developers don't have to track them down themselves.

Written in TypeScript and published with full type definitions, ESM, CommonJS, and UMD builds.

## Resources
- [Website](https://dpfens.github.io/FitnessJS)
- [Home](https://github.com/dpfens/FitnessJS/wiki)
- [Enums](https://github.com/dpfens/FitnessJS/wiki/Enums)
- [Balance](https://github.com/dpfens/FitnessJS/wiki/Balance)
- [Cardio](https://github.com/dpfens/FitnessJS/wiki/Cardio)
- [Composition](https://github.com/dpfens/FitnessJS/wiki/Composition)
- [Convert](https://github.com/dpfens/FitnessJS/wiki/Convert)
- [METs](https://github.com/dpfens/FitnessJS/wiki/Mets)
- [Model](https://github.com/dpfens/FitnessJS/wiki/Model)
- [Sport](https://github.com/dpfens/FitnessJS/wiki/Sport)
- [Strength](https://github.com/dpfens/FitnessJS/wiki/Strength)
- [Test Protocols](https://github.com/dpfens/FitnessJS/wiki/Test_Protocols)

## Installing

> **Note:** FitnessJS is not published to the npm registry, unpkg, or jsDelivr. Until then, install it directly from GitHub as shown below.

### npm (from GitHub)

```bash
npm install git+https://github.com/dpfens/fitnessjs.git#v3.0.0
```

npm will clone the tag and run the package's `prepare` script automatically, which builds `dist/esm`, `dist/cjs`, `dist/types`, and `dist/bundle` for you so no manual build step is needed. Swap `#v3.0.0` for another tag, branch, or commit as needed.

Once installed, it's used exactly like a registry package and supports both module systems out of the box:

```typescript
// ESM
import { ... } from 'fitnessjs';

// CommonJS
const { ... } = require('fitnessjs');
```

TypeScript type definitions will be included (no `@types` package needed). Each domain of the library will also be importable individually, keeping your bundle limited to only what you use:

```typescript
import { ... } from 'fitnessjs/anthropometry';
import { ... } from 'fitnessjs/cardiovascular';
import { ... } from 'fitnessjs/composition';
import { ... } from 'fitnessjs/conversion';
import { ... } from 'fitnessjs/models';
import { ... } from 'fitnessjs/sport';
import { ... } from 'fitnessjs/strength';
import { ... } from 'fitnessjs/utilities';
```

### Script tag (direct download)

For direct browser use without a bundler or package manager, download the built bundle from the [latest GitHub Release](https://github.com/dpfens/FitnessJS/releases/latest) and include it in your markup. The UMD build exposes a global `Fit` namespace:

```html
<script src="fitness.umd.min.js"></script>
<script>
  // Available as the global `Fit`
  Fit.someFunction();
</script>
```

Or the unminified version, useful for debugging:

```html
<script src="fitness.umd.js"></script>
```

### From source (manual build)

If you'd rather clone and build the repo yourself instead of installing via npm:

```bash
git clone https://github.com/dpfens/FitnessJS.git
cd FitnessJS
npm install
npm run build
```

This produces the same `dist/esm`, `dist/cjs`, `dist/types`, and `dist/bundle` output described above, which you can import directly, e.g. `import { ... } from './dist/esm/index.js'`.

## Usage

A few quick examples to give you a taste of what's available. See the [wiki](https://github.com/dpfens/FitnessJS/wiki) for the full API.

### Anthropometry
Estimate body landmarks from height

```typescript
import { Segment } from 'fitnessjs/anthropometry';

const segment = new Segment(180); // body height in cm

segment.height_shoulders(); // height of the shoulders off the ground
segment.shoulder_width();   // shoulder width
segment.hand_length();      // wrist-to-fingertip length
```

### Cardiovascular
Max heart rate & training zones

```typescript
import { cardiac } from 'fitnessjs/cardiovascular';

const astrand = new cardiac.Astrand();
const maxHR = astrand.predict(34); // estimated max HR for a 34-year-old

const targetHR = cardiac.karvonen(0.7, 60, maxHR); // 70% intensity, resting HR of 60
```

### Models
Predict race performance

```typescript
import { aerobic } from 'fitnessjs/models';

// 10K (10,000m) finished in 40 minutes (2400s)
const riegel = new aerobic.Riegel(10000, 2400, aerobic.Riegel.RUNNINGMEN);

const halfMarathonTime = riegel.time(21097.5); // estimated half-marathon time, in seconds
```

### Strength
Estimate 1RM & compare lifts across body weights

```typescript
import { Gender } from 'fitnessjs';
import { estimate1RM, Compare } from 'fitnessjs/strength';

// Estimate a 1-rep max from a set of 8 reps at 100kg
const oneRM = estimate1RM('Brzycki', Gender.Male, 28, 8, 100);

// Compare the lift across body weights using the Wilks coefficient
const athlete = new Compare(Gender.Male, 83); // 83kg lifter
const wilksScore = athlete.wilks(oneRM);
```

## Support
Please raise potential bugs on [Github](https://github.com/dpfens/FitnessJS/issues).