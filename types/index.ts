// Export all types from a central location
export * from "./product";
export * from "./payment";
export * from "./order";
export * from "./wallet";
export * from "./user";

// Re-export commonly used types for convenience
export type {
  Product,
  CartItem,
  ProductCategory,
  ProductReview,
} from "./product";

export type {
  PaymentMethod,
  PaymentStatus,
  CryptoCurrency,
  BillingInfo,
  ShippingInfo,
  CryptoPayment,
  CardPayment,
  Payment,
  PaymentMethodInfo,
} from "./payment";

export type {
  OrderStatus,
  ShippingMethod,
  ShippingStatus,
  ShippingDetails,
  OrderItem,
  Order,
  OrderSummary,
  OrderFilters,
} from "./order";

export type {
  WalletProvider,
  ChainId,
  WalletConnection,
  WalletState,
  WalletTransaction,
  NetworkInfo,
  SupportedChain,
  WalletConnectOptions,
} from "./wallet";

export type {
  UserRole,
  AccountStatus,
  User,
  UserPreferences,
  UserProfile,
  GuestUser,
  UserAccountSettings,
} from "./user";
