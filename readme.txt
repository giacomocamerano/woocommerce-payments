=== WooCommerce Payments ===
Contributors: woocommerce, automattic
Tags: woocommerce, payment, payment request, credit card, automattic
Requires at least: 5.6
Tested up to: 5.8.1
Requires PHP: 7.0
Stable tag: 3.3.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Securely accept credit and debit cards on your site. Manage transactions without leaving your WordPress dashboard. Only with WooCommerce Payments.

== Description ==

**Payments made simple, with no monthly fees – designed exclusively for WooCommerce stores.**

Securely accept major credit and debit cards, and allow customers to pay you directly without leaving your WooCommerce store. View and manage transactions from one convenient place – your WordPress dashboard.

See payments, track cash flow into your bank account, manage refunds, and stay on top of disputes without the hassle of having to log into a separate payment processor.

**Manage transactions from the comfort of your store**

Features previously only available on your payment provider’s website are now part of your store’s **integrated payments dashboard**. This enables you to:

- View the details of [payments, refunds, and other transactions](https://woocommerce.com/document/payments/#section-4).
- View and respond to [disputes and chargebacks](https://woocommerce.com/document/payments/disputes/).
- [Track deposits](https://woocommerce.com/document/payments/#section-5) into your bank account or debit card.

**Pay as you go**

WooCommerce Payments is **free to install**, with **no setup fees or monthly fees**. Pay-as-you-go fees start at 2.9% + $0.30 per transaction for U.S.-issued cards. [Read more about transaction fees](https://woocommerce.com/document/payments/faq/fees/).

**Supported by the WooCommerce team**

Our global support team is available to answer questions you may have about WooCommerce Payments installation, setup, or use. For assistance, [open a ticket on WooCommerce.com](https://woocommerce.com/my-account/create-a-ticket/?select=5278104).

== Getting Started ==

= Requirements =

* WordPress 5.6 or newer.
* WooCommerce 5.5 or newer.
* PHP version 7.0 or newer. PHP 7.2 or newer is recommended.

= Try it now =

To try WooCommerce Payments on your store, simply [install it](https://wordpress.org/plugins/woocommerce-payments/#installation) and follow the prompts.

WooCommerce Payments has experimental support for the Checkout block from [WooCommerce Blocks](https://wordpress.org/plugins/woo-gutenberg-products-block/). Please check the [FAQ section](#faq) for more information.

== Installation ==

Install and activate the WooCommerce and WooCommerce Payments plugins, if you haven't already done so, then go to "Payments" in the WordPress admin menu and follow the instructions there.

== Frequently Asked Questions ==

= What countries and currencies are supported? =

If you are an individual or business based in [one of these countries](https://woocommerce.com/document/payments/countries/#section-1), you can sign-up with WooCommerce Payments. After completing sign up, you can accept payments from customers anywhere in the world.

We are actively planning to expand into additional countries based on your interest. Let us know where you would like to [see WooCommerce Payments launch next](https://woocommerce.com/payments/#request-invite).

= Why is a WordPress.com account and connection required? =

WooCommerce Payments uses the WordPress.com connection to authenticate each request, connecting your store with our payments partner.

= How do I set up a store for a client? =

If you are setting up a store that will process real payments, have the site owner complete the WooCommerce Payments setup. This ensures that the correct business details are set on the account during [onboarding](https://woocommerce.com/document/payments/#section-3).

After the store setup has been completed, you can use [Test Mode](https://woocommerce.com/document/payments/testing/) to simulate payments, refunds, and disputes.

If you are setting up WooCommerce Payments on a development or test site that will **never need to process real payments**, try [Dev Mode](https://woocommerce.com/document/payments/testing/dev-mode/#section-1).

= How is WooCommerce Payments related to Stripe? =

WooCommerce Payments is proudly powered by [Stripe](https://stripe.com/). When you sign up for WooCommerce Payments, your personal and business information is verified with Stripe and stored in an account connected to the WooCommerce Payments service. This account is then used in the background for managing your business account information and activity via WooCommerce Payments. [Learn more](https://woocommerce.com/document/payments/powered-by-stripe/).

= Are there Terms of Service and data usage policies? =

You can read our Terms of Service [here](https://en.wordpress.com/tos).

= How does the Checkout block work? =

You need the [WooCommerce Blocks](https://wordpress.org/plugins/woo-gutenberg-products-block/) plugin to be installed and active to use the Checkout block. Once you add the block to a page, WooCommerce Payments will automatically appear as an option.

Please note that our support for the checkout block is still experimental and the following features of the gateway will probably not work:

* Using saved cards and saving cards.
* Integration with WooCommerce Subscriptions.

== Screenshots ==

1. View Transactions
2. View Transaction Details
3. Track Deposits
4. Manage Disputes

== Changelog ==

= 3.4.0 - 2021-xx-xx =
* Add - Allow UI customizations on checkout payment fields.
* Update - Display hardware costs for the period in the transaction list with link to the details page
* Fix - Incorrect customer links on Transactions page.
* Fix - Incorrect prices in Payment Request Button for certain currencies.

= 3.3.0 - 2021-11-18 =
* Add - Add Idempotency Key to POST headers.
* Add - Add dispute order notes to Edit Order page.
* Fix - Show a specific message instead of a generic one in the checkout block when non-UPE payment processing fails.
* Update - Avoid having invalid intervals (greater than 1 year) in subscription products.
* Update - The subscription fee label in the transaction timeline.
* Update - Show red setup badge after 3 days instead of 7
* Add - Add compatibility between Multi-Currency and WooCommerce Bookings.
* Add - Add compatibility between Multi-Currency and WooCommerce Pre-Orders.
* Fix - Do not show default currency selector on Account Details page when only one currency is available.
* Add - Add filters to disable or filter Multi-Currency sql query clauses for analytics.
* Fix - Display risk for payment methods without risk assessment
* Fix - Use configured domain instead of current domain for Apple Pay verification.
* Fix - Fatal error when deactivating the WooCommerce plugin when WCPay Subscriptions is enabled.
* Fix - Error where url parameters would get cleared on order-pay page if currency switcher block used.
* Fix - Currency format on order-pay page if currency was changed via switcher.
* Fix - Do not create WooCommerce Payments Subscriptions when using payment methods other than WooCommerce Payments.
* Fix - Show proper payment gateway title on checkout load before updated by JavaScript.
* Fix - Prevent a race condition leading to duplicate order paid statuses transitions.
* Fix - 'payment_intent not found' errors when attempting to process the first invoice for a subscription.
* Fix - UPE element not remounting on checkout update
* Fix - Validate subscription product create and update args before submitting them to server.
* Fix - Improve error messages when the minimum order amount has not been reached and allow fields to be displayed with less than the minimum amount.
* Fix - Add consistent margins to the recurring taxes totals row on the Checkout and Cart block for subscription line items.
* Fix - Fatal error due on subscription orders with no created date in order row template.
* Fix - Fatal error on the customer payment page for subscription renewal orders with deleted products.
* Fix - Misleading subscription order note on payment method change.
* Fix - Incorrect error message when card ZIP validation fails.
* Add - `Requires PHP` and `Requires at least` to the main plugin file.

= 3.2.3 - 2021-11-01 =
* Fix - Card fields on checkout not shown when the 'Enable payments via saved cards' setting is disabled.

= 3.2.2 - 2021-10-29 =
* Fix - Multisite compatibility - don't load subscriptions-core if already loaded by another multisite plugin.
* Fix - Errors when attempting to get the WooCommerce Subscriptions Core version during PayPal requests.

= 3.2.1 - 2021-10-28 =
* Fix - PHP 7.2 compatibility - remove trailing commas from function args in subscriptions-core.

= 3.2.0 - 2021-10-28 =
* Add - Add subscriptions functionality via Stripe Billing and WC Subscriptions core.
* Fix - Prevent currency switcher to show when enabled currencies list is empty.
* Fix - Show currency switcher notice until customer explicitly dismisses it.
* Update - Fee breakdown when there's only a base fee
* Fix - Inconsistent shipping options in Payment Request popup.
* Fix - Border style not being applied properly on Multi-Currency block widget.
* Fix - Applied sentence case on all strings
* Fix - Missing customer information after guest checkout via Checkout Block
* Fix - Multi-Currency settings rounding option and preview.
* Fix - Payment failure on checkout block with UPE when phone number field is hidden
* Update - Adds a scheduled action which makes updating the account cache more efficient
* Add - Add compatibility between Multi-Currency and WooCommerce UPS shipping extension.
* Add - Early access: allow your store to collect payments with SEPA Direct Debit. Enable the feature in settings!
* Add - Add compatibility between Multi-Currency and WooCommerce FedEx shipping extension.
* Fix - Fix decimal error with shipping calculations with Multi-Currency.
* Add - Add support for float type values for quantity.
* Fix - Allow payment_intent_succeeded webhook to handle orders without intent_id attached.
* Add - Add compatibility between Multi-Currency and WooCommerce Product Add Ons version 4.3.0 and higher.
* Add - Enable Bancontact UPE method.
* Add - Enable P24 UPE method.
* Add - Enable iDeal UPE method.
* Add - Payment method activation requirements modal and API integration.
* Add - Add state handling for UPE methods for better merchant notification on what methods are able to be used.
* Fix - Order currency incorrect if new user/customer created during checkout.
* Fix - Validation now works when adding a new payment method, or paying for an order.

= 3.1.0 - 2021-10-06 =
* Fix - Issue affecting analytics for Multi-Currency orders made with a zero-decimal to non-zero decimal conversion.
* Add - Customer Multi-Currency onboarding flow.
* Add - Checkbox toggle for disabling customer Multi-Currency feature in Advanced Settings.
* Add - Update layout of the Multi-Currency settings screen.
* Fix - Fixed missing file error for removed CSS file.
* Add - Currency deletion confirmation modal for currencies that are bound to an UPE method.
* Fix - Currency switcher does not affect order confirmation screen prices.
* Fix - Error when attempting to change the payment method for a subscription with UPE enabled.
* Add - Multi-Currency track currency added.
* Fix - Fill missing order_intent_info even if an exception occurs.
* Fix - Authorize and capture payments later with new credit cards.
* Add - Gutenberg Block Widget for Multi-Currency.
* Update - WCPay logo.
* Fix - Translations in transaction/deposit exports
* Fix - Update shipping cost in payment sheet when changing payment method.
* Fix - Transaction search with translated terms.
* Update - Replace REST endpoint for onboarding initialization.
* Fix - UPE missing international card fees.
* Update - Bump minimum supported version of WooCommerce from 5.4 to 5.5.
* Update - Bump minimum required version of WooCommerce from 4.0 to 4.4.
* Fix - Add credit card on My Account using other payment gateways does not show "Your card number is incomplete" error.
* Update - Continue loading WCPay if the account is connected.
* Add - Message to suggest using the previous version of WooCommerce Payments for old Woo core versions.
* Fix - Appearance of upload file buttons inside challenge dispute page.
* Fix - Enable logging for UPE checkout errors.
* Update - Composer package `automattic/jetpack-connection` from v1.20.0 to v1.30.5.

= 3.0.0 - 2021-09-16 =
* Add - Download deposits report in CSV.
* Fix - Use store currency on analytics leaderboard when Multi-Currency is enabled.
* Add - Add API to expose Multi-Currency widget to theme/plugin developers for easy integration.
* Fix - Enabled currencies modal UI.
* Fix - User order currency format on admin refund button.
* Fix - Clear the list of selected currencies after closing the modal for adding currencies.
* Fix - Fix subscription change payment method errors after entering a payment method that fails.
* Fix - Prevent duplicate account onboarding requests.
* Fix - Filter out merchant-facing payment errors from customer error notices.

= 2.9.1 - 2021-09-07 =
* Fix - Error while checking out with UPE when fields are hidden.
* Fix - Unable to onboard when in treatment mode.

= 2.9.0 - 2021-08-25 =
* Add - Split discount line in timeline into variable fee and fixed fee.
* Add - Order status validation for payments/orders/{order_id}/create_customer API.
* Add - Add country code parameter to ExPlat API requests.
* Add - Add a new hook to get a list of enabled payment request methods.
* Fix - Align table items according to design correctly.
* Fix - Fatal error if wcpay_multi_currency_enabled_currencies is a string.
* Fix - Show the estimated deposit date in the transactions CSV export rather than the deposit ID.
* Fix - Keep track of customer id in non logged in users.
* Update - Bump minimum supported version of WooCommerce from 5.3 to 5.4.

= 2.8.4 - 2021-08-17 =
* Fix - Fix database connection error on account cache clear.
* Fix - Fix fatal error logged when updating analytics data when account is not connected to Stripe.
* Fix - Multi-Currency Compatibility fatal error with Subscriptions when account is not connected to Stripe.

= 2.8.3 - 2021-08-10 =
* Fix - Fix for payment request buttons when the new payment methods gateway is enabled.

= 2.8.2 - 2021-08-05 =
* Fix - If account is disconnected or not set up do not display onboarding task and UPE inbox note.
* Fix - Fix for the site acting as disconnected after the account cache expires.
* Fix - Fix for failed Giropay and Sofort transactions causing an error.

= 2.8.1 - 2021-08-04 =
* Fix - Enable Multi-Currency only if there is a linked WooCommerce Payments account.

= 2.8.0 - 2021-08-04 =
* Add - Allow merchants to add additional currencies to their store, allowing a store’s customers to shop and browse in the currency of their choice.
* Add - *Early access*: allow your store to collect payments with Giropay and Sofort. Enable the feature in settings!
* Add - Use date picker for applicable dispute evidence fields.
* Fix - Avoid crash when seeing the details of an empty deposit.
* Fix - Disabled Payment Request Buttons when order has to be split into multiple packages because Payment Requests do not support that use case.
* Fix - Fee discounts should use the discount currency rather than the base fee currency.
* Fix - Do not redirect to the onboarding page when account retrieval fails.
* Add - Allow the customer to perform SCA authentication on Subscription renewals.
* Update - Actualized supported countries list for onboarding.
* Add - Dispute Status Chip into the header of the Dispute Details page.
* Fix - Use a singular label in the summary of Transactions and Deposits lists.
* Add - Disable payment gateway when not in test mode and not using https or ssl checkout enforcement.
* Fix - Improved errors handling during onboarding and page overview.
* Update - Remove Account in the old Settings page.
* Update - Bump minimum supported version of WooCommerce from 5.2 to 5.3.
* Update - Bump minimum supported version of WordPress from 5.5 to 5.6.
* Fix - Stop refund process when using an invalid amount
* Fix - Improve sanitization of ExPlat cookie.
* Add - Show fee breakdown in transaction details timeline.
* Add - REST endpoint to get customer id from an order.
* Fix - Explat not caching when no variation is returned.

= 2.7.1 - 2021-07-26 =
* Fix - Ensure test mode setting value is correctly saved.
* Fix - Onboarding redirection occasionally not finalizing account connection.

= 2.7.0 - 2021-07-14 =
* Add - Add a link to the snackbar notice that appears after submitting or saving evidence for a dispute challenge.
* Add - Support saving new cards and paying with previously saved cards in the WooCommerce Checkout Block.
* Fix - WooCommerce Payments admin pages redirect to the onboarding page when the WooCommerce Payments account is disconnected.
* Fix - Do not overwrite admin pages when account is disconnected.
* Update - Set a description when creating payment intents.
* Add - Add dispute resolution task.

= 2.6.1 - 2021-07-01 =
* Fix - Updates the notes query filters to prevent breaking the WooCommerce > Home inbox.

= 2.6.0 - 2021-06-23 =
* Add - Notify the admin if WordPress.com user connection is broken.
* Add - Experimental PHP client for Explat.
* Add - WooCommerce Payment inbox notifications to the overview screen.
* Fix - Fix fatal error if store currency is changed after enabled (multi) currencies set.
* Fix - Use of deprecated call-style to registerPaymentMethods. WooCommerce Payments now requires WooCommerce Blocks of at least version 3.9.0.
* Fix - Deposit date on Transactions list page.
* Fix - Rounding error when displaying fee percentages on the Overview and Transactions pages.
* Add - Error message when total size of dispute evidence files uploaded goes over limit.
* Update - Pass currency to wc_price when adding intent notes to orders.
* Update - Instant deposit inbox note wording.
* Fix - Deposit overview details for non instant ones.
* Add - Introduce new settings layout
* Update - Removed "Branded" and "Custom label" options on Payment request buttons to align with design guidelines.
* Update - Converted payment request button size value to distinct options to align with design guidelines.
* Tweak - Run post-upgrade actions during any request instead of only on wp-admin requests.
* Update - Payment request button should guide users to login when necessary.
* Add - When setting WooCommerce Payments up, inform if merchant business country is not supported.
* Update - Bump minimum supported version of WooCommerce from 4.8 to 5.2.
* Add - Introduce advance filters on deposits page.
* Update: Prefill OAuth flow with WC store country

= 2.5.0 - 2021-06-02 =
* Fix - Fix hover dialog for close button on modals, unify styling and layout of modal buttons.
* Update - Use Site Language when rendering Stripe elements.
* Update - Use blog ID for authenticating most of the requests.
* Fix: Misaligned columns on Deposits page.
* Add - Tracking for returning from OAuth connection.
* Fix - Transactions and deposits counts on the table summary are rendered as "undefined".
* Update - Deposit overview details.
* Add - Redirect to WooCommerce home page after successful WooCommerce Payments KYC (Know Your Customer).
* Fix - Added CSV column heading for transaction id column.
* Update - Bump minimum supported version of WordPress from 5.4 to 5.5.
* Update - Bump minimum supported version of WooCommerce from 4.5 to 4.8.
* Add - Deposit overviews have been added to the overview page.
* Update - Account overview page is now GA and default page for woocommerce payments.
* Update - Base fee and account status has been moved to overview page from WCPay settings.
* Fix - Express payment method being displayed on blocks checkout when Payment Request is not supported.
* Fix - Subscription sign-up fees not included in total for Payment Request Button.

= 2.4.0 - 2021-05-12 =
* Update - Improve the Connect Account page.
* Update - Base UI components and their styling.
* Fix - Deposits overview details not displayed.
* Fix - WooCommerce Payments disappeared from WooCommerce Settings if WooCommerce Subscriptions is activated.
* Add - REST endpoint to capture payments by order ID.
* Add - Explat package for A/B tests.
* Add - Payment request button support for checkout and cart blocks.
* Update - Bump minimum supported WooCommerce version from 4.0 to 4.5.
* Update - Implement expirement on Connect Page.
* Fix - Columns are misaligned on Payments->Transactions/Disputes page.
* Fix - Risk level is displayed as a "Numeric" value in transactions CSV.

= 2.3.3 - 2021-05-06 =
* Update - Additional logic and styling for instant deposits.

= 2.3.2 - 2021-04-27 =
* Fix - Error when purchasing free trial subscriptions.

= 2.3.1 - 2021-04-26 =
* Fix - Various account connection cache tweaks
* Update - Use option instead of transient for caching account data
* Fix - Error when using SCA / 3DS credit card in checkout block.

= 2.3.0 - 2021-04-21 =
* Add - Introduced deposit currency filter for transactions overview page.
* Add - Download transactions report in CSV.
* Update - Tweak the connection detection logic.
* Add - Notification badge next to payments menu.
* Fix - Fixed broken search on transactions list page.
* Add - More helpful message on checkout errors.
* Update - Change the default track `recordEvent` to use @woocommerce/tracks.
* Add - WPCOM connection status event prop to 'wcpay_connect_account_clicked' track.
* Add - Allow users to clear the account cache.
* Update - Bump minimum supported version of WordPress from 5.3 to 5.4.
* Add - Add a new admin note to collect qualitative feedback.
* Add - Introduced deposit currency filter for deposits overview page.
* Update - Make Payment Request Button available for all merchants.
* Add - Configurable Payment Request Button locations.
* Add - Addition of the Instant Deposits feature to allow qualified merchants to manually trigger payouts.

= 2.2.0 - 2021-03-31 =
* Fix - Paying with a saved card for a subscription with a free trial will now correctly save the chosen payment method to the order for future renewals.
* Add - Payment Request Button support for US merchants (Apple Pay, Google Pay, Microsoft Pay, and the browser standard Payment Request API).
* Update - Not passing level3 data for non-US merchants.
* Add - REST endpoint for fetching account data.
* Add - Deposits list pagination and sorting.
* Fix - Deposit overview now displays placeholder information instead of continuing to load when an error happens.

= 2.1.1 - 2021-03-23 =
* Fix - Fatal error when a subscription is processed with action scheduler hook.

= 2.1.0 - 2021-03-16 =
* Update - Show last 4 digit credit card number in order note when payment method is updated on failed renewal subscription order.
* Update - Define constant for the group to be used for scheduled actions.
* Update - Enable multiple customer currencies support in live mode.
* Add - Rate limit failed account connection checks.
* Add - Support displaying non-USD base fees on settings page.

= 2.0.0 - 2021-02-22 =
* Update - Render customer details in transactions list as text instead of link if order missing.
* Update - Render transaction summary on details page for Multi-Currency transactions.
* Update - Improvements to fraud prevention.
* Fix - Added better notices for end users if there are connection errors when making payments.
* Fix - If account is set to manual payouts display 'Temporarily suspended' under Payments > Settings.
* Add - Add file dropzones to dispute evidence upload fields
* Add - Currency conversion indicator to Transactions list.
* Add - Transaction timeline details for Multi-Currency transactions.
* Update - Link order note with transaction details page.
* Fix - Updating payment method using saved payment for WC Subscriptions orders.

= 1.9.2 - 2021-02-05 =
* Fix - Checkout and cart blocks aren't usable in editor when WooCommerce Payments is enabled.
* Fix - Missing global config error in Checkout block integration, and incompatibility with latest block API.

= 1.9.1 - 2021-02-03 =
* Fix - Incompatibility with WC Subscriptions.
* Fix - Missing order causing broken transactions list.

= 1.9.0 - 2021-02-02 =
* Add - Improved fraud prevention.
* Add - New setting to manage whether to enable saving cards during checkout. (Defaults to being enabled).
* Fix - Fixed issue where an empty alert would appear when trying to refund an authorization charge.
* Update - Link customer name on transaction detail page to filtered transaction list page.
* Update - Test mode notice width is now consistent across all pages.
* Fix - Fix error which could occur when a 100% off coupon was applied during checkout.
* Add - New notification to urge setting SSL for checkout pages if store doesn't use HTTPS
* Fix - Fixed connection timeout configuration.
* Fix - Specify error code when refund fails in admin to prevent blank alert.
* Fix - Add fees as line items sent to Stripe to prevent Level 3 errors.
* Fix - Currency format in non-USD order note when capturing, refunding, and processing subscription renewal.
* Update - Link customer name from transaction list page to WooCommerce's Customers page filtered by the customer's name.
* Fix - Use proper currency information when rendering deposits overview and details.

= 1.8.0 - 2020-12-16 =
* Add - Include information about failing payment into order notes.
* Fix - Fix crash when a user has 10 or more saved credit cards.
* Fix - Fix crash if there's a problem connecting to the server.
* Fix - Store Stripe customer for test and live mode.
* Fix - Display Payments menu in the sidebar if there's a problem connecting to the server.
* Add - Display fee structure in transaction timelines.
* Add - Use site username for recording ToS acceptance.
* Update - Display transaction tables with full width.
* Add - Action hooks before and after webhook delivery.

= 1.7.1 - 2020-12-03 =
* Fix - Pass ISO strings instead of Moment objects to dateI18n.

= 1.7.0 - 2020-11-17 =
* Fix - Fix ordering of payment detail timeline events.
* Fix - Payment form hides when saved card is selected.
* Fix - Render dispute evidence file upload errors.
* Fix - Increase timeout for calls to the API server.
* Fix - Correctly display the fee and net amounts for a charge with an inquiry.
* Fix - Catch unhandled exceptions when cancelling a payment authorization.
* Add - Security.md with security and vulnerability reporting guidelines.
* Add - Introduced "Set up refund policy" notification in WooCommerce inbox.
* Fix - Fix error when retrying to save a card in the Add Payment Method screen after failing SCA authentication.
* Add - Allow signing up for a subscription with free trial with a credit card that requires SCA authentication.
* Add - Remote note service.
* Add - Show details about the current fees in the Settings screen.

= 1.6.0 - 2020-10-15 =
* Fix - Trimming the whitespace when updating the bank statement descriptor.
* Add - Initial support for the checkout block.
* Add - Support wp_get_environment_type() and enable dev-mode when environment is 'development' or 'staging'.
* Update - Introduced payments-specific exceptions instead of generic one.
* Update - Transaction timeline: enabled timestamps rendering for all entries.

= 1.5.0 - 2020-09-24 =
* Fix - Save payment method checkbox for Subscriptions customer-initiated payment method updates.
* Fix - Support checkout on Internet Explorer 11.
* Fix - Webhook processing with no Jetpack plugin installed.
* Fix - Do not block the checkout card field from loading when customer meta is invalid or related to an old account.
* Fix - Saving account statement descriptor with an ampersand character.
* Fix - Do not attempt to render the payment timeline if the intention ID is missing.
* Add - Display payment method details on account subscriptions pages.
* Add - Redact sensitive data before logging.
* Add - Support for WooCommerce Subscriptions admin-initiated payment method changes.
* Add - Link to Subscription admin pages from Transactions views.
* Add - Support for Subscriptions in transaction search.

= 1.4.1 - 2020-09-07 =
* Fix - Only redirect to the onboarding screen if the plugin has been individually activated using the plugins page.

= 1.4.0 - 2020-09-02 =
* Add - Initial support for WooCommerce Subscriptions: Signing up for subscriptions, scheduled payments, and customer-initiated payment method changes.
* Add - Added a link to transaction details from order screens.
* Add - Allow merchant to edit statement descriptor.
* Fix - Do not redirect to the onboarding page after completing the WC4.5-beta wizard.
* Fix - Save order metadata before the payment is completed to avoid missing payments.
* Update - Bumped the minimum Jetpack requirement to version 8.2.

= 1.3.0 - 2020-08-17 =
* Add - Support for saved cards.
* Add - Search bar for transactions.
* Fix - Redirect to WC core onboarding instead of WC Payments onboarding when appropriate.
* Fix - Creating an account during checkout with 3DS cards.
* Fix - Missing payment statuses for certain disputes.
* Fix - Missing translators comments.

= 1.2.0 - 2020-07-20 =
* Add - 3DS support when using the pay for order page
* Add - Display confirmation dialog when enabling manual captures
* Add - Update the order when an authorised payment has expired
* Add - Timeline view in transactions detail, requires WooCommerce 4.4
* Add - Tracking for basic user action events
* Fix - Admin UI styling tweaks

= 1.1.0 - 2020-06-16 =
* Add - Allow WooCommerce Payments set up without Jetpack plugin
* Fix - Orders missing after payment processing error
* Fix - Clearing pagination when selecting transactions advanced filters
* Fix - After onboarding, redirect to the WCPay task of the task list, instead of to the task list

= 1.0.1 - 2020-06-01 =
* Add - Support 3D Secure verification
* Add - Transaction date and type filters to transactions list
* Update - Redirect to the "Connect" page on plugin activation or when trying to navigate to the settings screen
* Fix - Add deposit delay notice to deposit schedule
* Fix - Avoid localizing deposit date or displaying time-of-day precision
* Fix - Display dispute currency code in dispute info

= 1.0.0 - 2020-05-19 =
* Add - Level 3 data to payment requests
* Update - Expose public method for checking connection status
* Fix - Pending requirements state for improved messaging
* Fix - Dispute details typo
* Remove - Unused POST /charges endpoint
* Remove - "Beta" messaging

= 0.9.2 - 2020-05-14 =
* Add - Customer ID to payment intent
* Update - Register and enqueue js.stripe.com on WCPay admin pages
* Update - Override needs_setup to redirect from Payments settings
* Update - Copy and image on Connect Account screen
* Add - Add deposits overview component
* Add - URL to pass for prefilling OAuth form
* Add - Test card details in Checkout
* Add - Task list redirect upon return from OAuth flow
* Add - Handling for failed refund and other webhooks
* Add - Transaction list sorting
* Update - Disable gateway when payments are disabled on the account
* Update - Make table rows clickable
* Add - Prompt before navigating away from unsaved dispute evidence changes
* Update - Labels to sentence case
* Update - Automated testing
* Add - Metadata when creating payment intent
* Update - PHP versions supported

= 0.9.1 - 2020-04-09 =
* Fix - Add logging for OAuth initialization failures

= 0.9.0 - 2020-04-08 =
* Release for Public Beta

= 0.8.2 - 2020-03-10 =
* Add - Dispute file evidence upload support
* Add - Basic support for Pay for Order
* Fix - Styling improvements in wp-admin
* Fix - Undefined variable PHP notice in cancel_authorization
* Fix - Remove unused variable in authentication
* Fix - Improve Jetpack connection checking

= 0.8.1 - 2020-02-25 =
* Update link to test card documentation

= 0.8.0 - 2020-02-24 =
* First beta release

= 0.7.0 - 2020-02-05 =
* Alpha release
