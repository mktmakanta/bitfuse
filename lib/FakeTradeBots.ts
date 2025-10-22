export type Trade = {
  id: number;
  side: "BUY" | "SELL";
  amount: number;
  price: number;
  time: string;
};

export function generateFakeTrade(): Trade {
  const side = Math.random() > 0.5 ? "BUY" : "SELL";
  const amount = parseFloat((Math.random() * 2).toFixed(3));
  const price = parseFloat((Math.random() * 30000 + 20000).toFixed(2));
  const time = new Date().toLocaleTimeString();
  return { id: Date.now(), side, amount, price, time };
}
