import { SpriteConfig } from './types';

export const SPRITE_CONFIG: SpriteConfig = {
  // Width of a single frame in the sprite sheet (px)
  frameWidth: 128,
  // Height of a single frame in the sprite sheet (px)
  frameHeight: 128,
  // Space between frames in the sprite sheet (px)
  gutter: 5,
  // Display width of the dog on screen (px)
  renderedWidth: 64,
  // Display height of the dog on screen (px)
  renderedHeight: 64,
  // Path to the sprite sheet image
  spriteSheet: '/sprites/mello.webp',
  // Animation definitions: row = sprite sheet row, frames = frame count,
  // duration = seconds per cycle, loop = infinite, loopCount = finite repeats
  animations: {
    walking: { row: 0, frames: 5, duration: 0.5, loop: true },
    sitting: { row: 1, frames: 6, duration: 2, loop: false },
    barking: { row: 2, frames: 6, duration: 2, loopCount: 3 },
  },
  // Base movement speed in px per frame
  walkSpeed: 0.8,
  // Offset from cursor to dog position (centers dog relative to cursor)
  cursorOffset: { x: -12, y: 32 },
  // ms of no mouse movement before dog enters idle state
  idleThreshold: 500,
  // Max speed = walkSpeed * maxSpeedMultiplier at full boost
  maxSpeedMultiplier: 5,
  // Max number of clicks that stack for speed boost
  maxBoostClicks: 10,
  // ms between each boost level decay (-1 per interval)
  boostDecayInterval: 300,
  // px distance cursor must move from dog before it starts chasing (when idle)
  idleDeadZone: 50,
};

export const IDLE_ANIMATIONS: ('sitting' | 'barking')[] = ['sitting', 'barking'];
