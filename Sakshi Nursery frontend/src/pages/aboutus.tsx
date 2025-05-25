import React from 'react';

export default function AboutUsPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center">About Us</h1>

        <p className="text-lg">
          Welcome to Sakshi Hi Tech Nursery, your one-stop destination for high-quality plants, flowers, and gardening supplies. 
          We are passionate about providing the best plant varieties for your home and garden, and we strive to make every customer's experience exceptional.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Our Mission</h2>
        <p className="text-lg">
          Our mission is to bring nature closer to you by offering a diverse range of plants and gardening solutions that are tailored to your needs. 
          We aim to make plant care easier and more enjoyable for everyone, whether you are a seasoned gardener or a beginner.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Why Choose Us?</h2>
        <ul className="pl-6 list-disc">
          <li>Wide variety of healthy and high-quality plants.</li>
          <li>Expert advice on plant care and gardening solutions.</li>
          <li>Reliable delivery services to ensure timely plant arrival.</li>
          <li>Excellent customer support for all your inquiries.</li>
        </ul>

        <h2 className="mt-6 text-2xl font-semibold">Our History</h2>
        <p className="text-lg">
          Founded in [Year], [Your Nursery Name] has been dedicated to growing and selling plants that enrich homes, offices, and gardens. 
          Over the years, we have built a reputation for quality, customer service, and our commitment to sustainability. We continue to grow and expand our plant offerings to meet the ever-changing needs of our customers.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Contact Us</h2>
        <p className="text-lg">
          Feel free to reach out to us with any questions or concerns. Our team is always here to assist you in your plant journey.
        </p>
      </div>
    </div>
  );
}
