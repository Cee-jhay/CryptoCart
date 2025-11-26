import { CartItem, Product } from "./product";
import { Payment, PaymentStatus } from "./payment";
import { ShippingInfo } from "./payment";

export type OrderStatus = 
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export type ShippingMethod = 
  | "standard"
  | "express"
  | "overnight"
  | "digital"; // For digital products

export type ShippingStatus = 
  | "pending"
  | "preparing"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "failed";

export interface ShippingDetails {
  method: ShippingMethod;
  status: ShippingStatus;
  trackingNumber?: string;
  carrier?: string; // e.g., "UPS", "FedEx", "DHL"
  estimatedDelivery?: Date;
  actualDelivery?: Date;
  cost: number;
  address: ShippingInfo;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number; // Price at time of purchase
  quantity: number;
  image?: string;
  sku?: string;
  // Snapshot of product details at purchase time
  productSnapshot?: Partial<Product>;
}

export interface Order {
  id: string;
  orderNumber: string; // Human-readable order number
  userId?: string; // Optional, for guest checkout
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  discount?: number;
  total: number;
  currency: string; // Default "USD"
  
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  
  shipping?: ShippingDetails;
  payment?: Payment;
  
  billingInfo?: ShippingInfo;
  shippingInfo?: ShippingInfo;
  
  notes?: string; // Customer notes
  internalNotes?: string; // Internal admin notes
  
  createdAt: Date;
  updatedAt: Date;
  confirmedAt?: Date;
  shippedAt?: Date;
  deliveredAt?: Date;
  cancelledAt?: Date;
}

export interface OrderSummary {
  orderId: string;
  orderNumber: string;
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  itemCount: number;
  createdAt: Date;
}

export interface OrderFilters {
  status?: OrderStatus[];
  paymentStatus?: PaymentStatus[];
  dateFrom?: Date;
  dateTo?: Date;
  minTotal?: number;
  maxTotal?: number;
  userId?: string;
}
