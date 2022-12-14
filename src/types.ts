export interface AirTheme {
  background?: string
}

export type Patch<T> = Partial<{ [P in keyof T]: Patch<T[P]> }>

export type AIRDockPosition = 'bottom' | 'left' | 'right' | 'top'

export type ShapeStyles = {
  color: ColorStyle
  dash: DashStyle
  size: SizeStyle
  isFilled?: boolean
  textAlign?: AlignStyle
  font?: FontStyle
}

//the app store
export interface AIRSnapshot {
  settings: {
    isDarkMode: boolean
    keepStyleMenuOpen: boolean
    dockPosition: AIRDockPosition
  }
  appState: {
    currentStyle: ShapeStyles
    activeTool: AirToolType
  }
}

export type Theme = 'dark' | 'light'

/**  shape style           */
export enum ShapeType {
  Draw = 'draw',
}

export enum ColorStyle {
  White = 'white',
  LightGray = 'lightGray',
  Gray = 'gray',
  Black = 'black',
  Green = 'green',
  Cyan = 'cyan',
  Blue = 'blue',
  Indigo = 'indigo',
  Violet = 'violet',
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
}

export enum DashStyle {
  Draw = 'draw',
  Solid = 'solid',
  Dashed = 'dashed',
  Dotted = 'dotted',
}

export enum SizeStyle {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum AlignStyle {
  Start = 'start',
  Middle = 'middle',
  End = 'end',
  Justify = 'justify',
}

export enum FontStyle {
  Script = 'script',
  Sans = 'sans',
  Serif = 'serif',
  Mono = 'mono',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Command<T extends { [key: string]: any }> {
  id?: string
  before: Patch<T>
  after: Patch<T>
}

export type AirdrawCommand = Command<AIRSnapshot>

export type AirToolType = 'select' | ShapeType.Draw

// renderer
export interface AirShape {
  id: string
}

//input
export interface PointerInfo<T extends string = string> {
  target: T
  pointerId: number
}
