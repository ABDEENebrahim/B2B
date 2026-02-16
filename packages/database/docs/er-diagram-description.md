# ER Diagram Description

## Core identity domain

- `User` is the principal identity and authentication root.
- `User` has many `UserSession`, `RefreshToken`, `EmailVerification`, `PasswordReset`, and `AuditLog` records.

## Company domain

- `Company` belongs to one owner `User`.
- `Company` has many `CompanyAddress`, `CompanyCertification`, and `VerificationDocument` records.

## Catalog domain

- `Category` is self-referencing for hierarchy (`parent` -> `children`).
- `Category` has many `CategoryAttribute` definitions.
- `Product` belongs to one `Category`, one supplier `User`, and one `Company`.
- `Product` has many `ProductImage`, `ProductVideo`, `ProductSpecification`, `ProductVariant`, and `TierPrice` records.

## RFQ and quoting domain

- `RFQ` belongs to buyer `User`, one `Category`, optionally one `Company`.
- `RFQ` has many `RFQSpecification`, `RFQAttachment`, and `Quote` records.
- `Quote` belongs to one `RFQ` and one supplier `User`.
- `Quote` has many `QuoteSpecification`, `QuoteAttachment`, and `QuoteMessage` records.

## Order and payment domain

- `Order` is created from exactly one accepted `Quote`.
- `Order` belongs to buyer `User` and supplier `User`.
- `Order` has many `OrderItem`, `OrderTimeline`, `OrderDocument`, `PaymentMilestone`, and `PaymentTransaction` records.
- `PaymentTransaction` optionally links to one `PaymentMilestone` for milestone-based escrow release.

## Messaging domain

- `Conversation` has many `ConversationParticipant` and `Message` records.
- `MessageRead` tracks read receipts per (`message`, `user`) pair.

## Notification and settings domain

- `Notification` belongs to one `User`.
- `NotificationPreference` belongs to one `User` and is unique per (`type`, `channel`).
- `SystemSetting` stores key/value system configuration.
