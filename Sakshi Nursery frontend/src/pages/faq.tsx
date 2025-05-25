import React from 'react';

export default function FAQPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center">Frequently Asked Questions</h1>

        <div className="space-y-6">
          <div className="faq-item">
            <h3 className="text-xl font-semibold">1. What types of plants do you offer?</h3>
            <p>
              We offer a wide variety of plants, including ornamental plants, flowering plants, indoor plants, vegetable plants, and more. You can browse our catalog for detailed options.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="text-xl font-semibold">2. How do I place an order?</h3>
            <p>
              Simply visit our booking page, fill out the necessary details for your plant order, and select the desired payment method. After submitting the form, we will process your order.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="text-xl font-semibold">3. What payment methods do you accept?</h3>
            <p>
              We accept a variety of payment methods, including Credit/Debit Cards, PayPal, and Cash on Delivery (COD). Choose the payment option that's most convenient for you.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="text-xl font-semibold">4. How do I know my plants will be delivered on time?</h3>
            <p>
              We strive to deliver plants as per the agreed delivery date. You will receive an email or SMS confirmation with the expected delivery time.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="text-xl font-semibold">5. What if my plant is damaged during delivery?</h3>
            <p>
              We take great care in packaging plants for delivery. In the rare event of damage, please contact our customer support team, and we will assist you with a replacement or refund.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="text-xl font-semibold">6. Do you provide plant care advice?</h3>
            <p>
              Yes! We provide care guides for all our plants. You can also reach out to us for specific queries, and we will be happy to assist you with plant care tips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
