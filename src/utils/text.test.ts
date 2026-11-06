import test from 'node:test';
import assert from 'node:assert/strict';
import {
  splitWords,
  getWordDelay,
  calculateCharScrollRange,
  formatINR,
  generateWhatsAppUrl,
} from './text.ts';

test('splitWords properly tokenizes text', () => {
  assert.deepEqual(splitWords('Trend Line Media'), ['Trend', 'Line', 'Media']);
  assert.deepEqual(splitWords('   Multiple   spaces   here   '), ['Multiple', 'spaces', 'here']);
  assert.deepEqual(splitWords(''), []);
});

test('getWordDelay computes staggered delays with custom step', () => {
  assert.equal(getWordDelay(0, 0, 0.08), 0);
  assert.equal(getWordDelay(1, 0, 0.08), 0.08);
  assert.equal(getWordDelay(2, 0, 0.08), 0.16);
});

test('calculateCharScrollRange computes correct staggered scroll bounds', () => {
  const [start0, end0] = calculateCharScrollRange(0, 100);
  assert.equal(start0, 0);
  assert.equal(end0, 0.05);

  const [start50, end50] = calculateCharScrollRange(50, 100);
  assert.equal(start50, 0.4);
  assert.equal(end50, 0.55);
});

test('formatINR formats numbers with Indian Rupee symbol and commas', () => {
  assert.equal(formatINR(750), '₹750');
  assert.equal(formatINR(499), '₹499');
  assert.equal(formatINR(3999), '₹3,999');
  assert.equal(formatINR(2000), '₹2,000');
});

test('generateWhatsAppUrl builds valid wa.me URL with pre-filled message', () => {
  const url = generateWhatsAppUrl('9280079272', {
    name: 'Rahul Sharma',
    phone: '9280079272',
    service: 'Video Editing – 60 Seconds',
    price: 750,
    brief: 'Please add voiceover and captions',
  });

  assert.ok(url.startsWith('https://wa.me/919280079272?text='));
  assert.ok(decodeURIComponent(url).includes('Trend Line Media'));
  assert.ok(decodeURIComponent(url).includes('₹750'));
  assert.ok(decodeURIComponent(url).includes('Rahul Sharma'));
});
