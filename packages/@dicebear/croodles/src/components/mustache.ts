import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const mustache: ComponentGroup = {
  'variant04': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M65.257 21.112c-5.862-2.294-20.321-2.7-28.273 2.805-7.952 5.505-10.098 7.068-5.834 7.741 7.629 2.356 28.58-.745 31.639-2.58 3.058-1.835 3.825-5.35 3.315-7.262"/>
    <path d="M85.423 20.058c-12.049-4.366-17.03-.961-18.596 2.599-.686 1.558-1.233 4.824 1.255 5.825 3.012 1.213 22.862 1.297 32.062-1.62 2.58-2.132-3.433-2.714-14.721-6.804Z"/>
  </g>
`,
  'variant03': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M61.062 24.899C46.35 27.001 15.03 32.955 3 36.448M126.818 22.425c-14.713 2.102-46.493.893-58.511 1.649"/>
    <path d="M60.3 25.264C45.585 27.366 22.36 36.946 8.826 38.45M123.452 26.203c-14.712 2.101-40.518-1.58-53.84-1.58M61.062 24.208C46.35 26.31 15.767 29.89 3.507 31.74M127.985 17c-14.713 2.102-47.486 4.399-59.747 6.25"/>
  </g>
`,
  'variant02': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32 22.97c5.981 4.56 20.77 10.944 32.073 0M68.734 22.075c3.024 3.769 17.294 9.03 29.911-1.075"/>
  </g>
`,
  'variant01': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M63.256 24.108c-4.676-1.67-22.543 3.005-27.887 1.503-5.343-1.503-8.685-4.843-6.681-7.348 2.004-2.505 2.507-1.002 3.341 0 .668.802 1.532 1.518 2.877 1.238 2.038-.425 3.369-1.739 2.3-3.743-1.336-2.504-10.854-2.504-11.689 0-.835 2.505-1.837 10.688 7.347 12.691 9.184 2.004 29.056-3.673 30.392-2.838 1.336.834 13.54 2.14 22.892 1.64 9.351-.501 19.021-7.15 16.516-11.493-2.505-4.341-13.943-2.851-11.772-.347.757.607 2.601 1.527 3.919.348 1.646-1.475 4.482 1.225 0 5.331-3.294 3.018-24.042 6.035-29.53 3.018" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
`,
}
