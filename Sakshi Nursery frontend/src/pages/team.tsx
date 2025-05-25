import React from 'react';

const Team = () => {
  return (
    <div className="container px-4 py-16 mx-auto">
      {/* Nursery Info Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-center">About Our Nursery</h2>
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="w-full md:w-1/2">
            <img
              src="https://th.bing.com/th/id/OIP.lgAmVqjEvZnhoR3ehnWPRAHaFX?w=274&h=198&c=7&r=0&o=5&dpr=1.7&pid=1.7" // Replace with your nursery image
              alt="Nursery Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h3 className="mb-4 text-xl font-semibold">Our Story</h3>
            <p className="text-gray-600">
              Welcome to Sakshi Hi-Tech Nursery! Our nursery is dedicated to providing high-quality plants to our
              customers. We specialize in a wide range of plants, from ornamental to fruit-bearing species. With state-of-the-art
              greenhouses, expert care, and a passion for greenery, we ensure the best quality plants for every customer.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Team Member 1 */}
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg" // Replace with team member image
              alt="Team Member"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Nursery Manager</p>
            <p className="mt-4 text-gray-600">
              John has been leading the team with his expertise in horticulture for over 10 years. He oversees nursery operations
              and ensures the plants' well-being.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg" // Replace with team member image
              alt="Team Member"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Customer Relations</p>
            <p className="mt-4 text-gray-600">
              Jane handles customer inquiries and ensures customer satisfaction. She works tirelessly to address any issues and
              build long-term relationships with our clients.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg" // Replace with team member image
              alt="Team Member"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Emily Davis</h3>
            <p className="text-gray-600">Logistics & Delivery</p>
            <p className="mt-4 text-gray-600">
              Emily manages the logistics for deliveries and ensures that our plants reach our customers in perfect condition.
              She oversees the packing, shipping, and tracking process.
            </p>
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Our Machinery</h2>
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h3 className="mb-4 text-xl font-semibold">State-of-the-Art Equipment</h3>
            <p className="text-gray-600">
              Our nursery is equipped with cutting-edge machinery to ensure the highest quality plants. We use automated
              watering systems, climate-controlled greenhouses, and specialized machinery for planting and harvesting.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://www.shuliy.com/wp-content/uploads/2021/04/tray-seedling-machine.jpg?v=1620785424" // Replace with machinery image
              alt="Machinery"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Delivery to Different States */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Delivering Nationwide</h2>
        <div className="text-center">
          <p className="mb-6 text-lg text-gray-600">
            We deliver our plants across different states in India. Our logistics team ensures that your plants are delivered
            safely and timely.
          </p>
          <div className="flex justify-center space-x-4">
            <img
              src="https://www.bing.com/th/id/OGC.0f2ce03e939bae5fda45d325ab4e4ee3?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fSe5oFsFpfOgAAAAC%2fhindistan-india.gif&ehk=vofbeli6H%2fRB1x6fXF4APfo8S%2bSkAkZDt%2bl1ifgd5kw%3d"
              alt="India Flag"
              className="w-20 h-12 rounded-lg"
            />
            <img
              src="https://th.bing.com/th/id/OIP.I7osu4Cx-ErF1m3A5cL9GwHaFj?w=223&h=184&c=7&r=0&o=5&dpr=1.7&pid=1.7" // Replace with delivery image
              alt="Delivery"
              className="w-64 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
