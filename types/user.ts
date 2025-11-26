import { BillingInfo, ShippingInfo } from "./payment";
import { OrderSummary } from "./order";

export type UserRole = "customer" | "admin" | "moderator";

export type AccountStatus = "active" | "inactive" | "suspended" | "banned";

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  role: UserRole;
  status: AccountStatus;
  
  // Wallet information (for crypto users)
  walletAddress?: string;
  connectedWallets?: string[];
  
  // Preferences
  preferences?: UserPreferences;
  
  // Addresses
  defaultBillingAddress?: BillingInfo;
  defaultShippingAddress?: ShippingInfo;
  savedAddresses?: Array<BillingInfo & { id: string; label: string; isDefault?: boolean }>;
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
  emailVerified?: boolean;
}

export interface UserPreferences {
  currency?: string; // Default "USD"
  language?: string; // Default "en"
  preferredPaymentMethod?: "crypto" | "card";
  emailNotifications?: {
    orderUpdates: boolean;
    promotions: boolean;
    newsletters: boolean;
  };
  cryptoPreferences?: {
    defaultCurrency?: "BTC" | "ETH" | "LTC" | "DOGE";
    autoConvert?: boolean;
  };
}

export interface UserProfile extends User {
  orderHistory?: OrderSummary[];
  totalOrders?: number;
  totalSpent?: number;
  loyaltyPoints?: number;
}

export interface GuestUser {
  sessionId: string;
  email?: string;
  name?: string;
  tempBillingInfo?: BillingInfo;
  tempShippingInfo?: ShippingInfo;
  createdAt: Date;
}

export interface UserAccountSettings {
  email: string;
  name: string;
  phone?: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  avatar?: File | string;
}
