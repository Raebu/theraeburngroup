export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About The Raeburn Group</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="mb-4">
          Founded in 2010, The Raeburn Group has grown from a small startup incubator to a diverse holding company
          managing businesses across multiple industries. Our journey has been marked by strategic acquisitions,
          innovative launches, and a commitment to fostering entrepreneurial spirit.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          At The Raeburn Group, our mission is to empower innovative businesses, drive technological advancements, and
          create value across diverse industries. We believe in the power of entrepreneurship to solve complex problems
          and shape the future of commerce and technology.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Innovation: We embrace new ideas and technologies to stay ahead of the curve.</li>
          <li className="mb-2">Integrity: We conduct our business with the highest ethical standards.</li>
          <li className="mb-2">Collaboration: We believe in the power of teamwork and partnerships.</li>
          <li className="mb-2">Excellence: We strive for excellence in everything we do.</li>
          <li>Sustainability: We are committed to sustainable business practices and long-term value creation.</li>
        </ul>
      </section>
    </div>
  )
}

