import { WalletProvider } from "./wallet";

export type PaymentMethod = "crypto" | "card" | "paypal" | "bank_transfer";

export type PaymentStatus = 
  | "pending"
  | "processing"
  | "completed"
  | "failed"
  | "cancelled"
  | "refunded"
  | "partially_refunded";

export type CryptoCurrency = "BTC" | "ETH" | "LTC" | "DOGE" | "USDT" | "USDC";

export interface BillingInfo {
  name: string;
  email: string;
  phone?: string;
  address: string;
  city: string;
  state?: string;
  zip: string;
  country: string;
}

export interface ShippingInfo extends BillingInfo {
  addressLine2?: string;
  deliveryInstructions?: string;
}

export interface CryptoPayment {
  currency: CryptoCurrency;
  amount: number; // Amount in the crypto currency
  amountUSD: number; // Equivalent amount in USD
  walletAddress: string; // Recipient wallet address
  senderAddress?: string; // Payer wallet address
  transactionHash?: string; // Blockchain transaction hash
  blockNumber?: number; // Block number where transaction was confirmed
  network?: string; // e.g., "ethereum", "bitcoin", "polygon"
  walletProvider?: WalletProvider;
  confirmations?: number; // Number of blockchain confirmations
  requiredConfirmations?: number; // Required confirmations for completion
  status: PaymentStatus;
  createdAt: Date;
  confirmedAt?: Date;
}

export interface CardPayment {
  cardNumber?: string; // Last 4 digits only for security
  cardType?: "visa" | "mastercard" | "amex" | "discover";
  expiryMonth?: number;
  expiryYear?: number;
  billingZip?: string;
  paymentIntentId?: string; // Stripe payment intent ID or similar
  chargeId?: string; // Payment processor charge ID
  status: PaymentStatus;
  createdAt: Date;
  processedAt?: Date;
}

export interface Payment {
  id: string;
  orderId: string;
  method: PaymentMethod;
  amount: number; // Total amount in USD
  currency?: string; // Default "USD"
  status: PaymentStatus;
  cryptoPayment?: CryptoPayment;
  cardPayment?: CardPayment;
  billingInfo: BillingInfo;
  createdAt: Date;
  updatedAt: Date;
  refundedAmount?: number;
  refundReason?: string;
}

export interface PaymentMethodInfo {
  type: PaymentMethod;
  label: string;
  icon?: string;
  available: boolean;
  minAmount?: number;
  maxAmount?: number;
  supportedCryptos?: CryptoCurrency[]; // For crypto payment method
}
