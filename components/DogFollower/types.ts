export type AnimationState = 'walking' | 'sitting' | 'barking';
export type Direction = 'left' | 'right';

export interface Position {
  x: number;
  y: number;
}

export interface AnimationConfig {
  row: number;
  frames: number;
  duration: number;
  loop?: boolean;
  loopCount?: number;
}

export interface SpriteConfig {
  frameWidth: number;
  frameHeight: number;
  renderedWidth: number;
  renderedHeight: number;
  gutter: number;
  spriteSheet: string;
  animations: Record<AnimationState, AnimationConfig>;
  walkSpeed: number;
  cursorOffset: Position;
  idleThreshold: number;
  maxSpeedMultiplier: number;
  maxBoostClicks: number;
  boostDecayInterval: number;
  idleDeadZone: number;
}

export interface DogState {
  animation: AnimationState;
  direction: Direction;
  position: Position;
  targetPosition: Position;
  isIdle: boolean;
  isVisible: boolean;
}
