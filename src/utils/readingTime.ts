//* utils for reading time

export function calculateReadingTime(text: string) {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
}
