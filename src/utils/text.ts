/**
 * Pure text processing, currency formatting, and agency workflow helpers.
 */

export interface OrderDetails {
  name: string;
  phone?: string;
  email?: string;
  service: string;
  price?: number | string;
  brief?: string;
  footageLink?: string;
}

/**
 * Splits a text string into words, removing empty string artifacts.
 */
export function splitWords(text: string): string[] {
  if (!text) return [];
  return text.trim().split(/\s+/);
}

/**
 * Calculates animation delay for staggered word reveals.
 */
export function getWordDelay(wordIndex: number, baseDelay: number = 0, step: number = 0.08): number {
  return Number((baseDelay + Math.max(0, wordIndex) * step).toFixed(3));
}

/**
 * Calculates the scroll progress range [start, end] for character opacity reveal.
 */
export function calculateCharScrollRange(
  index: number,
  totalChars: number
): [number, number] {
  if (totalChars <= 0) return [0, 1];
  const charProgress = index / totalChars;
  const start = Math.max(0, Math.min(1, Number((charProgress - 0.1).toFixed(3))));
  const end = Math.max(0, Math.min(1, Number((charProgress + 0.05).toFixed(3))));
  return [start, end];
}

/**
 * Formats price in Indian Rupees with comma separators.
 */
export function formatINR(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

/**
 * Generates an encoded WhatsApp chat URL with structured order details.
 */
export function generateWhatsAppUrl(phone: string, order: OrderDetails): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const targetPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

  const lines = [
    `*Trend Line Media — New Project Order & Enquiry*`,
    `--------------------------------------`,
    order.service ? `*Service:* ${order.service}` : null,
    order.price ? `*Price:* ${typeof order.price === 'number' ? formatINR(order.price) : order.price}` : null,
    order.name ? `*Client Name:* ${order.name}` : null,
    order.phone ? `*Phone Number:* ${order.phone}` : null,
    order.email ? `*Email:* ${order.email}` : null,
    order.footageLink ? `*Footage / Asset Link:* ${order.footageLink}` : null,
    order.brief ? `*Project Brief / Notes:*\n${order.brief}` : null,
    `--------------------------------------`,
    `Sent via Trend Line Media Official Website`,
  ].filter(Boolean);

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(lines.join('\n'))}`;
}
